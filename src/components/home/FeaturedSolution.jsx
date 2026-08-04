"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope, FlaskConical, Video, Sparkles, BarChart3, Link2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { base44Path } from "@/lib/base44";

const outcomeAreas = [
  { icon: Stethoscope, label: "Clinical Care", desc: "Comprehensive EHR and care coordination", tone: "bg-sky-50 text-sky-600", href: "/solutions/hospitals" },
  { icon: FlaskConical, label: "Laboratory Integration", desc: "Connected ordering and results", tone: "bg-amber-50 text-amber-600", href: "/solutions/laboratories" },
  { icon: Video, label: "Telemedicine", desc: "Virtual consultations and remote care", tone: "bg-rose-50 text-rose-600", href: "/solutions/clinics" },
  { icon: Sparkles, label: "AI Assistance", desc: "VIMA-powered clinical decision support", tone: "bg-violet-50 text-violet-600", href: "/platform#vima" },
  { icon: BarChart3, label: "Analytics", desc: "Real-time dashboards and reporting", tone: "bg-emerald-50 text-emerald-600", href: "/data-analytics" },
  { icon: Link2, label: "Interoperability", desc: "FHIR, HL7, and API connectivity", tone: "bg-teal-50 text-teal-600", href: "/solutions/hospitals" },
];

const includedPlatforms = ["Passport", "Nexus", "CHIP", "LifeLab", "LifeData", "VIMA"];
const availableCapabilities = ["Dynamic Consent", "LifeHealth Connect", "X-Validator", "Advanced Analytics", "Payments", "Device Integration"];

export default function FeaturedSolution() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeading
          badge="Featured Solution"
          title="Everything Your Hospital Needs. One Operating System."
          subtitle="A complete healthcare operating environment for hospitals and health systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {outcomeAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="h-full"
              >
                <Link href={area.href} className="group block h-full rounded-xl border border-slate-100 bg-white p-5 transition-colors hover:border-teal-200 hover:shadow-sm">
                  <span className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${area.tone}`}><Icon className="h-5 w-5" /></span>
                  <h4 className="font-heading font-semibold text-navy-900 mb-1">{area.label}</h4>
                  <p className="text-sm text-slate-500">{area.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-100">
            <h3 className="font-heading font-semibold text-lg text-navy-900 mb-4">Included Platforms</h3>
            <div className="grid grid-cols-2 gap-3">
              {includedPlatforms.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-100">
            <h3 className="font-heading font-semibold text-lg text-navy-900 mb-4">Available Capabilities</h3>
            <div className="grid grid-cols-2 gap-3">
              {availableCapabilities.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href={base44Path("/pricing/estimator")} className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors">
            Estimate Pricing
          </a>
          <Link href="/solutions/hospitals" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 hover:border-teal-300 text-navy-900 font-semibold rounded-xl transition-colors">
            View Hospital Solution <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-teal-600 hover:text-teal-700 font-semibold transition-colors">
            Book a Strategy Session
          </Link>
        </div>
      </div>
    </section>
  );
}
