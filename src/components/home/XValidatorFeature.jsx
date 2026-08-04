import Link from "next/link";
import { ArrowRight, FileCheck2, MapPin, ScanFace, ShieldCheck } from "lucide-react";

const signals = [
  { icon: ScanFace, label: "Identity" },
  { icon: ShieldCheck, label: "Liveness" },
  { icon: MapPin, label: "Time & location" },
  { icon: FileCheck2, label: "Verified event" }
];

export default function XValidatorFeature() {
  return <section className="bg-slate-50 py-16 md:py-20"><div className="container-wide"><div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-teal-800 p-8 md:p-12"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><span className="inline-flex rounded-full bg-teal-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-200">X-Validator</span><h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">Trust every person, action and care event.</h2><p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">X-Validator is LifeHealth’s cross-platform verification layer—bringing trusted identity and verified context into consent, clinical care and health-system workflows.</p><Link href="/trust-center" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-300">Explore X-Validator <ArrowRight className="h-4 w-4" /></Link></div><div className="grid grid-cols-2 gap-3">{signals.map(({ icon: Icon, label }) => <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-5"><Icon className="h-6 w-6 text-teal-300" /><p className="mt-5 text-sm font-semibold text-white">{label}</p></div>)}</div></div></div></div></section>;
}
