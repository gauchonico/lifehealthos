"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function DashboardShowcase({ solutionName, title, description, dashboards = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const openDashboard = openIndex !== null ? dashboards[openIndex] : null;

  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />
      <div className="relative container-wide">
        {solutionName && (
          <p className="text-center font-heading font-bold text-teal-400 text-lg md:text-xl tracking-tight mb-2">
            {solutionName} <span className="text-slate-400 font-medium">· by LifeHealth</span>
          </p>
        )}
        <SectionHeading badge="See It Live" title={title} subtitle={description} light />

        <div className="space-y-16 max-w-5xl mx-auto">
          {dashboards.map((d, i) => (
            <div key={i}>
              <div className="mb-4">
                <h3 className="font-heading font-semibold text-lg text-white">{d.name}</h3>
                {d.caption && <p className="text-sm text-slate-400 mt-1 max-w-3xl">{d.caption}</p>}
              </div>
              <button
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:border-teal-400/50 transition-all"
              >
                <img src={d.image} alt={d.name} className="w-full h-auto" loading="lazy" />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-900 text-sm font-semibold rounded-xl shadow-lg">
                    <Maximize2 className="w-4 h-4" /> View full dashboard
                  </span>
                </div>
              </button>
              {d.highlights?.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {d.highlights.map((h) => (
                    <div key={h.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <BarChart3 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <h4 className="font-heading font-semibold text-sm text-white">{h.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-6xl p-2 bg-white">
          {openDashboard && (
            <>
              <img src={openDashboard.image} alt={openDashboard.name} className="w-full h-auto rounded-lg" />
              <a
                href={openDashboard.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-teal-600 hover:underline pb-1"
              >
                Open full-size in a new tab
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
