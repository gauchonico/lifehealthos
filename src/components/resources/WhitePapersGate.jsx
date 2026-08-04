"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import RequestAccessModal from "@/components/resources/RequestAccessModal";

export default function WhitePapersGate() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-slate-50 border border-slate-100 p-10 text-center">
      <Lock className="w-8 h-8 text-teal-500 mx-auto mb-4" />
      <h2 className="font-heading font-semibold text-navy-900 mb-2">Available by request</h2>
      <p className="text-sm text-slate-500 mb-6">
        White papers are available by special approval. Share your details and our team will review your request.
      </p>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-xl transition-colors"
      >
        <Lock className="w-3.5 h-3.5" /> Request Access
      </button>
      <RequestAccessModal open={open} onOpenChange={setOpen} resourceLabel="White Papers" />
    </div>
  );
}
