import { Award, BookOpen, CalendarCheck, HeartPulse, ShieldCheck } from "lucide-react";

const waysToEarn = [
  { icon: HeartPulse, title: "Healthy Actions", text: "Build healthier routines and complete eligible wellness activities.", tone: "bg-rose-50 text-rose-500" },
  { icon: CalendarCheck, title: "Care Milestones", text: "Stay on track with appointments, screenings, and care-plan goals.", tone: "bg-sky-50 text-sky-600" },
  { icon: BookOpen, title: "Health Learning", text: "Learn through trusted health education and programme content.", tone: "bg-amber-50 text-amber-600" },
];

export default function MPWRFeature() {
  return <section className="section-padding overflow-hidden bg-white">
    <div className="container-wide">
      <div className="rounded-3xl bg-gradient-to-br from-violet-950 via-indigo-900 to-teal-800 p-7 md:p-12 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div><span className="inline-flex rounded-full bg-lime-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">MPWR Loyalty Platform</span><h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">Make Every Healthy Step More Rewarding.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-indigo-100">MPWR connects health engagement with meaningful recognition. Members can earn points through eligible healthy actions, care milestones, and learning experiences across the LifeHealth ecosystem.</p><div className="mt-7 flex items-center gap-3 text-sm font-semibold text-teal-100"><ShieldCheck className="h-5 w-5 text-lime-300" />Verified activities can support trusted point earning.</div></div>
          <div className="grid gap-4 sm:grid-cols-3">{waysToEarn.map(({ icon: Icon, title, text, tone }) => <article key={title} className="rounded-2xl border border-white/15 bg-white p-5 shadow-lg"><span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone}`}><Icon className="h-6 w-6" /></span><h3 className="mt-5 font-heading font-bold text-navy-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div>
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-lime-300/25 bg-lime-300/10 px-5 py-4 text-lime-100"><Award className="h-6 w-6 shrink-0 text-lime-300" /><p className="text-sm font-medium">A flexible engagement layer for individuals, employers, health programmes, and participating partners.</p></div>
      </div>
    </div>
  </section>;
}
