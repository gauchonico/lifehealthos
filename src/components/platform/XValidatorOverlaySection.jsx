import { BadgeCheck, CalendarClock, MapPin, ScanLine, ShieldCheck } from "lucide-react";

const signals = [
  { icon: BadgeCheck, title: "Verified identity", text: "An official identity document can be checked where supported verification services are available." },
  { icon: ScanLine, title: "Liveness confirmation", text: "A live person check can be used at enrolment, sign-in, telemedicine, or another high-trust moment." },
  { icon: CalendarClock, title: "Event timing", text: "The verification record can capture when a consent or clinical event took place." },
  { icon: MapPin, title: "Location context", text: "Location can be collected when appropriate and permitted for the event." }
];

export default function XValidatorOverlaySection() {
  return <section id="xvalidator" className="scroll-mt-28 bg-navy-900 py-16 lg:py-20">
    <div className="container-wide">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
        <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">X‑Validator · the trust overlay</p><h2 className="mt-3 font-heading text-3xl font-bold text-white">Verification that strengthens every important interaction.</h2><p className="mt-4 leading-relaxed text-slate-300">X‑Validator sits across Passport, Nexus, Dynamic Consent and connected services. It helps create a clear evidence record for high-trust access, consent, clinical activity, research participation, insurance and verified product events.</p><div className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-200"><ShieldCheck className="h-4 w-4" />A shared capability—not a separate workflow</div></div>
        <div className="grid gap-3 sm:grid-cols-2">{signals.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Icon className="h-6 w-6 text-teal-300" /><h3 className="mt-4 font-heading font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p></div>)}</div>
      </div>
      <div className="mt-8 rounded-2xl border border-teal-400/20 bg-teal-500/10 px-5 py-4 text-center text-sm font-medium text-teal-100">Verified person <span className="px-2 text-teal-400">→</span> informed choice or action <span className="px-2 text-teal-400">→</span> time, location and event context <span className="px-2 text-teal-400">→</span> auditable trust record</div>
    </div>
  </section>;
}
