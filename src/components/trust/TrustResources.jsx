"use client";

import { useState } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { documents, trustFaqs } from "@/lib/trustCenterExperience";

export default function TrustResources() {
  const [open, setOpen] = useState(0);
  return <section className="bg-white py-20"><div className="container-wide grid gap-16 lg:grid-cols-2"><div id="trust-documents" className="scroll-mt-36"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">Trust Documents</p><h2 className="mt-3 font-display text-3xl font-bold text-navy-900">Our documentation library</h2><p className="mt-4 text-slate-600">Approved documents will be published here as they are finalized.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{documents.map((document) => <div key={document} className="flex items-center justify-between rounded-xl border border-slate-200 p-4"><div className="flex items-center gap-3 text-sm font-bold text-navy-900"><FileText className="h-4 w-4 text-teal-600"/>{document}</div><Download className="h-4 w-4 text-slate-300"/></div>)}</div></div><div id="faq" className="scroll-mt-36"><p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">FAQ</p><h2 className="mt-3 font-display text-3xl font-bold text-navy-900">Common trust questions</h2><div className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200">{trustFaqs.map(([question, answer], index) => <div key={question}><button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-navy-900">{question}<ChevronDown className={`h-4 w-4 text-teal-600 transition-transform ${open === index ? "rotate-180" : ""}`}/></button>{open === index && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{answer}</p>}</div>)}</div></div></div></section>;
}
