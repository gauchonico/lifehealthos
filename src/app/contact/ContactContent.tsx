"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", title: "", organization: "", email: "", phone: "",
    country: "", organization_type: "", message: "", preferred_meeting_method: "video_call"
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: wire this up to a form-to-email service (e.g. Formspree,
      // Web3Forms) — this is a fully static site with no backend of its
      // own, so submission has to go to a third-party endpoint from here.
      // Example (Formspree): await fetch("https://formspree.io/f/xxxxxxx", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", Accept: "application/json" },
      //   body: JSON.stringify({ ...form, source_page: "contact" }),
      // });
      throw new Error("Contact form submission is not wired up yet.");
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      setSubmitting(false);
      return;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
            <Send className="w-7 h-7 text-teal-500" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-navy-900 mb-3">Thank you for reaching out</h2>
          <p className="text-slate-500 mb-6">Our team will review your inquiry and contact you within one business day.</p>
          <a href="/" className="text-teal-500 hover:text-teal-600 font-medium">← Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="container-wide">
        <SectionHeading
          badge="Contact Us"
          title="Book a Strategy Session"
          subtitle="Tell us about your organization and we'll schedule a conversation to explore how LifeHealth can support your goals."
        />
        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Full Name *" value={form.name} onChange={(v) => update("name", v)} required />
                <FormField label="Job Title" value={form.title} onChange={(v) => update("title", v)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Organization *" value={form.organization} onChange={(v) => update("organization", v)} required />
                <FormField label="Email *" type="email" value={form.email} onChange={(v) => update("email", v)} required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />
                <FormField label="Country" value={form.country} onChange={(v) => update("country", v)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Organization Type</label>
                <select
                  value={form.organization_type}
                  onChange={(e) => update("organization_type", e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
                >
                  <option value="">Select...</option>
                  <option value="hospital">Hospital or Health System</option>
                  <option value="clinic">Clinic or Primary Care</option>
                  <option value="laboratory">Laboratory or Diagnostics</option>
                  <option value="research">Clinical Research Organization</option>
                  <option value="government">Ministry of Health or Government</option>
                  <option value="insurance">Insurance or Payer</option>
                  <option value="home_healthcare">Home Healthcare</option>
                  <option value="nursing_home">Nursing Home</option>
                  <option value="community">Community Health</option>
                  <option value="employer">Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="font-heading font-semibold text-navy-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Email</p>
                    <p className="text-sm text-slate-500">info@lifehealth.global</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Headquarters</p>
                    <p className="text-sm text-slate-500">CTI Africa LLC</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h3 className="font-heading font-semibold mb-2">Strategy Sessions</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our strategy sessions are designed for organizational decision-makers who want to understand how LifeHealth can transform their healthcare operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
      />
    </div>
  );
}
