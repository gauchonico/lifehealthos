"use client";

import { useState } from "react";
import { Expand, MapPinned } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { dataAnalyticsVisuals } from "@/lib/dataAnalyticsVisuals";

export default function AnalyticsPortfolio() {
  const [selected, setSelected] = useState(null);
  return <section className="border-t border-slate-100 bg-white py-16 md:py-20"><div className="container-wide">
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700"><MapPinned className="h-3.5 w-3.5" /> Dashboard portfolio</span><h2 className="mt-4 font-heading text-3xl font-bold text-navy-900 md:text-4xl">Built for the questions health systems need to answer.</h2><p className="mt-3 text-lg leading-relaxed text-slate-500">From a single facility to a national programme, LifeData and BIP bring operational, clinical, research and geographic intelligence into clear, decision-ready views.</p></div><p className="text-sm text-slate-500">Select any example to expand it.</p></div>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{dataAnalyticsVisuals.map((item) => <button key={item.title} onClick={() => setSelected(item)} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"><Image src={item.image} alt={item.title} fittingType="fit" className="block aspect-video w-full bg-slate-100" /><div className="p-4"><div className="flex items-center justify-between gap-3"><p className="text-xs font-bold uppercase tracking-wide text-teal-700">{item.category}</p><Expand className="h-4 w-4 text-slate-400 group-hover:text-teal-600" /></div><h3 className="mt-2 font-heading font-bold text-navy-900">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p></div></button>)}</div>
    <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}><DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto p-4 sm:p-6"><DialogHeader><DialogTitle>{selected?.title}</DialogTitle><DialogDescription>{selected?.description}</DialogDescription></DialogHeader>{selected && <Image src={selected.image} alt={selected.title} fittingType="fit" className="mt-2 block w-full" />}</DialogContent></Dialog>
  </div></section>;
}
