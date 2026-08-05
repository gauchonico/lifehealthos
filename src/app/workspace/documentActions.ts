"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeClient } from "@/sanity/writeClient";
import { getCollection } from "@/lib/workspaceCollections";
import { slugify } from "@/lib/slugify";
import { markdownToPortableText } from "@/lib/portableText";

async function uploadFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return writeClient.assets.upload(file.type.startsWith("image/") ? "image" : "file", buffer, {
    filename: file.name,
    contentType: file.type,
  });
}

export async function saveDocument(collectionKey: string, documentId: string | null, formData: FormData) {
  const collection = getCollection(collectionKey);
  if (!collection) throw new Error("Unknown collection");

  const doc: Record<string, unknown> = { _type: collection.sanityType };

  for (const field of collection.fields) {
    if (field.type === "boolean") {
      doc[field.name] = formData.get(field.name) === "on";
      continue;
    }
    if (field.type === "tags") {
      const raw = String(formData.get(field.name) || "");
      doc[field.name] = raw.split(",").map((t) => t.trim()).filter(Boolean);
      continue;
    }
    if (field.type === "markdown") {
      const raw = String(formData.get(field.name) || "").trim();
      // Blank means "leave the existing body alone", same convention as
      // every other field here — there's no separate way to explicitly
      // clear it from this form.
      if (raw) doc[field.name] = markdownToPortableText(raw);
      continue;
    }
    if (field.type === "image" || field.type === "file") {
      const file = formData.get(field.name) as File | null;
      // Only upload + set if a new file was actually chosen — on edit,
      // leaving this input empty must keep the existing asset untouched.
      if (file && file.size > 0) {
        const asset = await uploadFile(file);
        doc[field.name] = { _type: field.type, asset: { _type: "reference", _ref: asset._id } };
      }
      continue;
    }
    if (field.type === "number") {
      const raw = String(formData.get(field.name) || "").trim();
      if (raw !== "" && !Number.isNaN(Number(raw))) doc[field.name] = Number(raw);
      continue;
    }
    if (field.type === "objectList") {
      const raw = String(formData.get(field.name) || "[]");
      let parsed: Record<string, string>[] = [];
      try {
        parsed = JSON.parse(raw);
      } catch {
        parsed = [];
      }
      doc[field.name] = parsed
        .filter((item) => Object.values(item).some((v) => String(v || "").trim()))
        .map((item) => ({ ...item, _type: field.itemType, _key: crypto.randomUUID().replace(/-/g, "").slice(0, 12) }));
      continue;
    }
    const value = String(formData.get(field.name) || "").trim();
    if (value) doc[field.name] = value;
  }

  let id = documentId;
  if (id) {
    await writeClient.patch(id).set(doc).commit();
  } else {
    const createDoc: { _type: string } & Record<string, unknown> = { ...doc, _type: collection.sanityType };
    if (collection.hasSlug !== false) {
      const titleField = collection.titleField || "title";
      const title = String(formData.get(titleField) || "");
      createDoc.slug = { _type: "slug", current: slugify(title) };
    }
    const created = await writeClient.create(createDoc);
    id = created._id;
  }

  revalidatePath("/", "layout");
  redirect(`/workspace/${collectionKey}`);
}

export async function deleteDocument(collectionKey: string, documentId: string) {
  await writeClient.delete(documentId);
  revalidatePath("/", "layout");
  redirect(`/workspace/${collectionKey}`);
}
