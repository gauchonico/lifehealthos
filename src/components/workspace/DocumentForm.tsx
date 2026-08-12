import type { CollectionConfig } from "@/lib/workspaceCollections";
import { saveDocument } from "@/app/workspace/documentActions";
import DeleteButton from "@/components/workspace/DeleteButton";
import ObjectListField from "@/components/workspace/ObjectListField";
import SubmitButton from "@/components/workspace/SubmitButton";
import { portableTextToMarkdown } from "@/lib/portableText";

type SanityDoc = Record<string, unknown>;

function fieldValue(doc: SanityDoc | undefined, name: string) {
  return doc?.[name];
}

function assetInfo(value: unknown): { url?: string; filename?: string } | null {
  if (!value || typeof value !== "object") return null;
  const asset = (value as { asset?: { url?: string; originalFilename?: string } }).asset;
  if (!asset) return null;
  return { url: asset.url, filename: asset.originalFilename };
}

export default function DocumentForm({
  collectionKey,
  collection,
  documentId,
  doc,
}: {
  collectionKey: string;
  collection: CollectionConfig;
  documentId?: string;
  doc?: SanityDoc;
}) {
  const action = saveDocument.bind(null, collectionKey, documentId ?? null);

  return (
    <form action={action} className="space-y-6">
      {collection.fields.map((field) => {
        const value = fieldValue(doc, field.name);

        if (field.type === "boolean") {
          return (
            <label key={field.name} className="flex items-center gap-2.5 text-sm font-medium text-navy-900">
              <input type="checkbox" name={field.name} defaultChecked={Boolean(value)} className="h-4 w-4 rounded border-slate-300 text-teal-600" />
              {field.label}
            </label>
          );
        }

        if (field.type === "select") {
          return (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
              <select
                name={field.name}
                required={field.required}
                defaultValue={typeof value === "string" ? value : ""}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              >
                <option value="" disabled>
                  Select…
                </option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (field.type === "text") {
          return (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
              <textarea
                name={field.name}
                rows={4}
                required={field.required}
                defaultValue={typeof value === "string" ? value : ""}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          );
        }

        if (field.type === "markdown") {
          return (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
              <textarea
                name={field.name}
                rows={16}
                required={field.required}
                defaultValue={portableTextToMarkdown(value)}
                placeholder={"## A heading\n\nA paragraph with **bold**, *italic*, `code`, and [a link](https://example.com).\n\n- A bullet\n- Another bullet"}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 font-mono text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
              <p className="mt-1 text-xs text-slate-400">
                Supports ## / ### / #### headings, &gt; blockquotes, - / 1. lists, **bold**, *italic*, `code`, and [links](url). Leave empty to keep the current body.
              </p>
            </div>
          );
        }

        if (field.type === "tags") {
          const joined = Array.isArray(value) ? value.join(", ") : "";
          return (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
              <input
                type="text"
                name={field.name}
                defaultValue={joined}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          );
        }

        if (field.type === "objectList") {
          return (
            <ObjectListField
              key={field.name}
              name={field.name}
              label={field.label}
              itemFields={field.itemFields}
              defaultValue={value}
            />
          );
        }

        if (field.type === "image" || field.type === "file") {
          const existing = assetInfo(value);
          return (
            <div key={field.name}>
              <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
              {existing?.url ? (
                <div className="mb-2 text-xs text-slate-500">
                  Current:{" "}
                  <a href={existing.url} target="_blank" rel="noreferrer" className="font-semibold text-teal-600 hover:underline">
                    {existing.filename || "view file"}
                  </a>
                </div>
              ) : null}
              <input
                type="file"
                name={field.name}
                accept={field.type === "image" ? "image/*" : undefined}
                required={field.required && !existing}
                className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-navy-900"
              />
              <p className="mt-1 text-xs text-slate-400">Leave empty to keep the current file.</p>
            </div>
          );
        }

        // string, url, date, number
        return (
          <div key={field.name}>
            <label className="mb-1 block text-sm font-medium text-slate-600">{field.label}</label>
            <input
              type={field.type === "url" ? "url" : field.type === "date" ? "date" : field.type === "number" ? "number" : "text"}
              name={field.name}
              required={field.required}
              defaultValue={typeof value === "string" || typeof value === "number" ? value : ""}
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
        );
      })}

      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
        <SubmitButton />
        {documentId ? <DeleteButton collectionKey={collectionKey} documentId={documentId} /> : null}
      </div>
    </form>
  );
}
