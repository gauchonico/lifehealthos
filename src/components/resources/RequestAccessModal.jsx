"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Lock } from "lucide-react";

export default function RequestAccessModal({ open, onOpenChange, resourceLabel }) {
  const [form, setForm] = useState({ name: "", email: "", organization: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: wire this up to a form-to-email service (e.g. Formspree,
      // Web3Forms) — same as the Contact page. No backend of our own here.
      throw new Error("Request access submission is not wired up yet.");
    } catch {
      toast({ title: "Error", description: "Please try again or contact us directly.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  const handleOpenChange = (isOpen) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      setTimeout(() => { setSubmitted(false); setForm({ name: "", email: "", organization: "" }); }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-5 h-5 text-teal-500" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-navy-900 mb-2">Request Submitted</h3>
            <p className="text-sm text-slate-500">
              Thank you. Our team will review your request and follow up with access details if approved.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading">Request Access</DialogTitle>
              <DialogDescription>
                {resourceLabel} are available by special approval. Share your details and our team will review your request.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Organization</label>
                <input
                  type="text"
                  required
                  value={form.organization}
                  onChange={(e) => update("organization", e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
