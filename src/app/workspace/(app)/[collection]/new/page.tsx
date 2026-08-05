import { notFound } from "next/navigation";
import { getCollection } from "@/lib/workspaceCollections";
import DocumentForm from "@/components/workspace/DocumentForm";

export default async function NewDocumentPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection: collectionKey } = await params;
  const collection = getCollection(collectionKey);
  if (!collection) notFound();

  return (
    <div>
      <h1 className="mb-8 font-heading text-2xl font-bold text-navy-900">New {collection.label.replace(/s$/, "")}</h1>
      <DocumentForm collectionKey={collectionKey} collection={collection} />
    </div>
  );
}
