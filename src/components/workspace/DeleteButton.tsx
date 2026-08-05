"use client";

import { Trash2 } from "lucide-react";
import { deleteDocument } from "@/app/workspace/documentActions";

export default function DeleteButton({ collectionKey, documentId }: { collectionKey: string; documentId: string }) {
  return (
    <form
      action={deleteDocument.bind(null, collectionKey, documentId)}
      onSubmit={(e) => {
        if (!window.confirm("Delete this permanently? This can't be undone.")) {
          e.preventDefault();
        }
      }}
    >
      <button type="submit" className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700">
        <Trash2 className="h-4 w-4" /> Delete
      </button>
    </form>
  );
}
