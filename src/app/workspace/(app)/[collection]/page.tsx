import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Pencil, ExternalLink } from "lucide-react";
import { writeClient } from "@/sanity/writeClient";
import { getCollection } from "@/lib/workspaceCollections";

type ListItem = {
  _id: string;
  title: string;
  isPublished?: boolean;
  _updatedAt: string;
  groupValue?: string;
  linkUrl?: string;
};

function ItemList({ collectionKey, items }: { collectionKey: string; items: ListItem[] }) {
  return (
    <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <li key={item._id} className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`h-2 w-2 flex-none rounded-full ${item.isPublished ? "bg-teal-500" : "bg-slate-300"}`}
              title={item.isPublished ? "Published" : "Draft"}
            />
            <div className="min-w-0">
              <span className="text-sm font-medium text-navy-900">{item.title || "Untitled"}</span>
              {item.linkUrl ? (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 flex items-center gap-1 truncate text-xs text-slate-400 hover:text-teal-600"
                  title={`Open ${item.linkUrl} in a new tab`}
                >
                  <ExternalLink className="h-3 w-3 flex-none" />
                  <span className="truncate">{item.linkUrl}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Link
            href={`/workspace/${collectionKey}/${item._id}`}
            className="inline-flex flex-none items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700"
          >
            <Pencil className="h-3.5 w-3.5" /> Edit
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function CollectionListPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection: collectionKey } = await params;
  const collection = getCollection(collectionKey);
  if (!collection) notFound();

  const titleField = collection.titleField || "title";
  const groupField = collection.groupByField;
  const urlField = collection.fields.find((f) => f.type === "url")?.name;
  const items = await writeClient.fetch<ListItem[]>(
    `*[_type == $type] | order(_updatedAt desc){ _id, "title": ${titleField}, isPublished, _updatedAt${
      groupField ? `, "groupValue": ${groupField}` : ""
    }${urlField ? `, "linkUrl": ${urlField}` : ""} }`,
    { type: collection.sanityType },
  );

  const groupFieldConfig = groupField ? collection.fields.find((f) => f.name === groupField) : undefined;
  const groupOptions = groupFieldConfig && "options" in groupFieldConfig ? groupFieldConfig.options : [];
  const groups = groupField
    ? [
        ...groupOptions.map((opt) => ({
          label: opt.label,
          items: items.filter((i) => i.groupValue === opt.value),
        })),
        {
          label: "Uncategorized",
          items: items.filter((i) => !groupOptions.some((opt) => opt.value === i.groupValue)),
        },
      ].filter((g) => g.items.length > 0)
    : null;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy-900">{collection.label}</h1>
          <p className="text-sm text-slate-500">{items.length} total</p>
        </div>
        <Link
          href={`/workspace/${collectionKey}/new`}
          className="inline-flex items-center gap-1.5 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-600"
        >
          <Plus className="h-4 w-4" /> New
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-sm text-slate-400">Nothing here yet.</p>
      ) : groups ? (
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.label}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                {group.label} <span className="text-slate-300">({group.items.length})</span>
              </h2>
              <ItemList collectionKey={collectionKey} items={group.items} />
            </div>
          ))}
        </div>
      ) : (
        <ItemList collectionKey={collectionKey} items={items} />
      )}
    </div>
  );
}
