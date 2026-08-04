import { ExternalLink } from "lucide-react";

export default function PlatformShowcaseCard({ id, eyebrow, title, description, points, pdfUrl, page }) {
  return <article id={id} className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
    <div className="grid lg:grid-cols-2">
      <div className="p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">{eyebrow}</p>
        <h3 className="mt-3 font-heading text-2xl font-bold text-navy-900">{title}</h3>
        <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />{point}</li>)}
        </ul>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 p-3 lg:border-l lg:border-t-0">
        <iframe title={`${title} approved capability slide`} src={`${pdfUrl}#page=${page}&zoom=page-width`} className="h-[390px] w-full rounded-lg border-0 bg-white" />
        <a href={`${pdfUrl}#page=${page}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800">Open approved source slide <ExternalLink className="h-4 w-4" /></a>
      </div>
    </div>
  </article>;
}
