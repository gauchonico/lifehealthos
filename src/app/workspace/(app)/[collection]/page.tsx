import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus, Pencil } from "lucide-react";
import { writeClient } from "@/sanity/writeClient";
import { getCollection } from "@/lib/workspaceCollections";

type ListItem = { _id: string; title: string; isPublished?: boolean; _updatedAt: string };

export default async function CollectionListPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection: collectionKey } = await params;
  const collection = getCollection(collectionKey);
  if (!collection) notFound();

  const titleField = collection.titleField || "title";
  const items = await writeClient.fetch<ListItem[]>(
    `*[_type == $type] | order(_updatedAt desc){ _id, "title": ${titleField}, isPublished, _updatedAt }`,
    { type: collection.sanityType },
  );

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
      ) : (
        <ul className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {items.map((item) => (
            <li key={item._id} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 flex-none rounded-full ${item.isPublished ? "bg-teal-500" : "bg-slate-300"}`}
                  title={item.isPublished ? "Published" : "Draft"}
                />
                <span className="text-sm font-medium text-navy-900">{item.title || "Untitled"}</span>
              </div>
              <Link
                href={`/workspace/${collectionKey}/${item._id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700"
              >
                <Pencil className="h-3.5 w-3.5" /> Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
