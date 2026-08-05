import { notFound } from "next/navigation";
import { writeClient } from "@/sanity/writeClient";
import { getCollection } from "@/lib/workspaceCollections";
import DocumentForm from "@/components/workspace/DocumentForm";

export default async function EditDocumentPage({
  params,
}: {
  params: Promise<{ collection: string; id: string }>;
}) {
  const { collection: collectionKey, id } = await params;
  const collection = getCollection(collectionKey);
  if (!collection) notFound();

  const assetFields = collection.fields
    .filter((f) => f.type === "image" || f.type === "file")
    .map((f) => `"${f.name}": ${f.name}{..., asset->{url, originalFilename}}`)
    .join(",\n");

  const query = `*[_id == $id][0]{ ...${assetFields ? `,\n${assetFields}` : ""} }`;
  const doc = await writeClient.fetch<Record<string, unknown> | null>(query, { id });
  if (!doc) notFound();

  return (
    <div>
      <h1 className="mb-8 font-heading text-2xl font-bold text-navy-900">Edit {collection.label.replace(/s$/, "")}</h1>
      <DocumentForm collectionKey={collectionKey} collection={collection} documentId={id} doc={doc} />
    </div>
  );
}
