"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle, ArrowLeft } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import PillarDeepDiveModal from "@/components/ltc/PillarDeepDiveModal";
import { base44Path } from "@/lib/base44";

const journey = [
  {
    step: 1,
    label: "Patient Enrolled",
    title: "LifeHealth Passport Created",
    color: "teal",
    description: "The moment a patient is admitted to a nursing home or home healthcare programme, a LifeHealth Passport is established — their secure, lifelong longitudinal health record.",
    details: [
      "Data securely imported from PointClickCare (PCC)",
      "Hospital electronic medical records connected",
      "MatchRite-connected health records integrated",
      "Pharmacy systems and lab systems linked",
      "Patient-uploaded documents via LifeUpload",
      "Future LifeHealth Connect integrations ready"
    ]
  },
  {
    step: 2,
    label: "Daily Care",
    title: "Nexus — Care Team at Work",
    color: "blue",
    description: "Every shift, caregivers open Nexus on their mobile device or web browser. VIMA AI delivers a concise handoff summary before a single step is taken.",
    details: [
      "VIMA AI shift summary: outstanding tasks, alerts, and observations",
      "Voice-driven care documentation — speak naturally, VIMA structures it",
      "ICD-10 code suggestions automatically surfaced",
      "Tasks, medication orders, and vitals captured bedside",
      "Every entry enriches the longitudinal record instantly"
    ]
  },
  {
    step: 3,
    label: "Clinical Decision",
    title: "Complete Picture for Providers",
    color: "violet",
    description: "When a provider needs to assess or act, every piece of clinical history is immediately available — labs, medications, allergies, diagnoses, prior encounters.",
    details: [
      "Full history visible in one workspace — no system switching",
      "Lab orders created directly within Nexus",
      "LifeLab validates the order and attaches clinical context",
      "VIMA assists with documentation and ICD-10 coding",
      "Faster, better-informed clinical decisions"
    ]
  },
  {
    step: 4,
    label: "Lab Coordination",
    title: "LifeLab — Diagnostics Connected",
    color: "amber",
    description: "LifeLab coordinates the complete diagnostic process — from order to result — without a single manual handoff or paper requisition.",
    details: [
      "Laboratory order routing to appropriate lab",
      "Phlebotomy scheduling — automated task creation",
      "Barcode and specimen labeling at collection",
      "Real-time specimen tracking and status updates",
      "Analyzer integration through middleware (HL7/ASTM)",
      "Quality control and results collection"
    ]
  },
  {
    step: 5,
    label: "Results Delivered",
    title: "Results Flow Back Automatically",
    color: "green",
    description: "Once analysis is complete, results flow through LifeLab middleware back into LifeHealth and are immediately distributed to the right people.",
    details: [
      "Treating physicians alerted with context and recommended actions",
      "Nursing staff notified in Nexus immediately",
      "Patient Passport updated without duplicate data entry",
      "PointClickCare (PCC) updated via bi-directional integration",
      "Critical values flagged with automated alerts"
    ]
  },
  {
    step: 6,
    label: "Connected Care",
    title: "One Record, Any Location",
    color: "indigo",
    description: "Because all clinical information lives in one ecosystem, care continues seamlessly regardless of where the patient is — or where the provider is.",
    details: [
      "In-person consultations from the same record",
      "Telemedicine visits with full clinical context",
      "Remote specialist consultations without patient transport",
      "Family participation with patient authorization",
      "Care transitions and hospital admissions supported",
      "Medication management across settings"
    ]
  },
  {
    step: 7,
    label: "Continuous Intelligence",
    title: "The Record Gets Richer Over Time",
    color: "rose",
    description: "New data sources continuously enrich every patient's record — turning a static file into a living, increasingly intelligent health asset.",
    details: [
      "Laboratory trends tracked over time",
      "Remote patient monitoring devices connected",
      "BINA facial health assessments integrated",
      "MedWand and connected diagnostic devices",
      "Medication adherence and vital sign history",
      "Functional assessments accumulated"
    ]
  },
  {
    step: 8,
    label: "Better Outcomes",
    title: "Intelligent Healthcare at Scale",
    color: "teal",
    description: "The result is not a digital record — it is a continuously improving ecosystem where every interaction contributes to better care for every stakeholder.",
    details: [
      "Patients: more coordinated, personalized care",
      "Families: greater visibility and confidence",
      "Caregivers: less documentation, more patient time",
      "Providers: better-informed clinical decisions",
      "Nursing homes: efficiency, compliance, and reimbursement support"
    ]
  }
];

const pillars = [
  {
    number: "1",
    title: "Patient Passport",
    subtitle: "The Foundation",
    color: "teal",
    items: ["One lifelong health record", "Patient-controlled & consent-driven", "Accessible to patient, care team & family", "Available anytime, anywhere"]
  },
  {
    number: "2",
    title: "Nexus — Care Workspace",
    subtitle: "Empowering Care Teams",
    color: "blue",
    items: ["Voice-first with VIMA AI", "Shift handoff summaries", "Care notes by voice", "Tasks, orders, meds, vitals", "ICD-10 assistance", "Continuity of care"]
  },
  {
    number: "3",
    title: "Clinical Workflows",
    subtitle: "Intelligent & Integrated",
    color: "violet",
    items: ["Orders: Labs, Meds, Imaging", "Care Plans & Tasks", "Medication Management", "Alerts & Notifications"]
  },
  {
    number: "4",
    title: "LifeLab — Diagnostics",
    subtitle: "Seamless Lab Experience",
    color: "amber",
    items: ["Order Sent → Phlebotomy Scheduled", "Specimen Tracked → Analyzed", "Results Integrated into LifeHealth", "Sent to PCC automatically"]
  },
  {
    number: "5",
    title: "Connected Care",
    subtitle: "Everywhere, All the Time",
    color: "green",
    items: ["Telemedicine", "Remote patient monitoring", "BINA Face Scan", "MedWand & future devices", "Family engagement"]
  }
];

const stakeholders = [
  { role: "Patients", value: "Better care. Full record. More control." },
  { role: "Families", value: "Transparency, peace of mind, engagement." },
  { role: "Caregivers", value: "Less paperwork, more time for care." },
  { role: "Providers", value: "Complete information, better decisions." },
  { role: "Nursing Homes", value: "Efficiency, quality, compliance, retention." },
  { role: "Payers & Partners", value: "Better data, lower costs, outcomes." }
];

const colorMap: Record<string, { bg: string; border: string; badge: string; text: string; num: string }> = {
  teal: { bg: "bg-teal-50", border: "border-teal-200", badge: "bg-teal-500", text: "text-teal-700", num: "bg-teal-500" },
  blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-500", text: "text-blue-700", num: "bg-blue-500" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", badge: "bg-violet-500", text: "text-violet-700", num: "bg-violet-500" },
  amber: { bg: "bg-amber-50", border: "border-amber-200", badge: "bg-amber-500", text: "text-amber-700", num: "bg-amber-500" },
  green: { bg: "bg-green-50", border: "border-green-200", badge: "bg-green-500", text: "text-green-700", num: "bg-green-500" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-200", badge: "bg-indigo-500", text: "text-indigo-700", num: "bg-indigo-500" },
  rose: { bg: "bg-rose-50", border: "border-rose-200", badge: "bg-rose-500", text: "text-rose-700", num: "bg-rose-500" }
};

function JourneyStep({ step, index, expanded, onToggle }: { step: typeof journey[number]; index: number; expanded: boolean; onToggle: () => void }) {
  const c = colorMap[step.color] || colorMap.teal;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`rounded-2xl border-2 ${expanded ? c.border : "border-slate-100"} transition-all overflow-hidden`}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left p-6 flex items-start gap-4 ${expanded ? c.bg : "bg-white hover:bg-slate-50"} transition-colors`}
      >
        <span className={`w-9 h-9 rounded-xl ${c.num} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5`}>
          {step.step}
        </span>
        <div className="flex-1">
          <p className={`text-xs font-semibold tracking-wider uppercase mb-1 ${c.text}`}>{step.label}</p>
          <h3 className="font-heading font-bold text-navy-900 text-lg">{step.title}</h3>
          <p className="text-slate-500 text-sm mt-1 leading-relaxed">{step.description}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`px-6 pb-6 pt-2 ${c.bg} border-t ${c.border}`}>
              <ul className="grid sm:grid-cols-2 gap-2">
                {step.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${c.text}`} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LongTermCare() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activePillar, setActivePillar] = useState<{ number: string; color: string } | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1920&q=80"
            alt="Long-term care"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide">
          <Link href="/solutions/nursing-homes" className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium mb-8 hover:text-teal-300 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Nursing Homes
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
              Long-Term Care · Deep Dive
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              LifeHealth for<br />
              <span className="text-teal-400">Long-Term Care</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-4">
              The Digital Operating System for Nursing Homes and Home Healthcare.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              One Patient. One Record. Every Interaction. Better Care.
            </p>
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              Long-term care is challenged by fragmented information, workforce shortages, documentation burdens, disconnected laboratory workflows, and rising expectations from patients, families, providers, and payers. Most technology solutions address only one part of this problem. LifeHealth connects the entire continuum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25">
                Book a Strategy Session <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={base44Path("/pricing/estimator")} className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-slate-400 text-white font-semibold rounded-xl transition-colors">
                Estimate Your Solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
              The Architecture
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-4">
              Five connected layers. One ecosystem.
            </h2>
            <p className="text-slate-500 text-lg">
              Rather than replacing existing systems, LifeHealth creates a digital operating layer that sits above them — connecting patients, caregivers, providers, laboratories, and families into a single intelligent ecosystem.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {pillars.map((p, i) => {
              const c = colorMap[p.color] || colorMap.teal;
              return (
                <motion.button
                  key={p.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setActivePillar({ number: p.number, color: p.color })}
                  className={`text-left rounded-2xl border ${c.border} ${c.bg} p-5 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer`}
                >
                  <div className={`w-8 h-8 rounded-lg ${c.num} text-white font-bold text-sm flex items-center justify-center mb-3`}>
                    {p.number}
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-sm mb-0.5">{p.title}</h3>
                  <p className={`text-xs font-medium ${c.text} mb-3`}>{p.subtitle}</p>
                  <ul className="space-y-1.5">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle className={`w-3 h-3 flex-shrink-0 mt-0.5 ${c.text}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-4 pt-3 border-t ${c.border} flex items-center gap-1 text-xs font-semibold ${c.text}`}>
                    Explore slides <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Architecture Visual */}
      <section className="py-16 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
              Platform Overview
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">
              The connected ecosystem, visualized.
            </h2>
            <p className="text-slate-500">The full LifeHealth for Long-Term Care architecture — from patient enrollment through to connected care and continuous intelligence.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <img
              src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/f6a354c4e_LHPlatformOverview.png"
              alt="LifeHealth for Long-Term Care — Platform Overview"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* The 8-Step Patient Journey */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
              The Patient Journey
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-4">
              From admission to continuous care.
            </h2>
            <p className="text-slate-500 text-lg">
              Every step of the long-term care journey — connected, documented, and enriched. Click any step to see exactly what happens.
            </p>
          </div>
          <div className="space-y-3 max-w-4xl">
            {journey.map((step, i) => (
              <JourneyStep
                key={step.step}
                step={step}
                index={i}
                expanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Flow Diagram */}
      <section className="py-16 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
              End-to-End Ecosystem
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">
              From patient registration to complete longitudinal record.
            </h2>
            <p className="text-slate-500">
              12 steps from PCC registration to a complete longitudinal medical record in LifeHealth Passport — with real-time data flow across every stakeholder.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <img
              src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/23ca58f47_LifeLab-LHEndtoEnd.png"
              alt="LifeHealth Ecosystem End-to-End Flow"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Lab Workflow */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-amber-50 text-amber-600">
              LifeLab — Laboratory Workflow
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">
              From order placement to results in LifeHealth and PCC.
            </h2>
            <p className="text-slate-500">
              The complete 12-step lab workflow: Nursing Home → LifeHealth → Lab → Middleware → PCC. Every step automated. No manual handoffs.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-8">
            <img
              src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/abc793fb6_LifeLanWorkflow.png"
              alt="LifeLab Lab Workflow — Order to Results"
              className="w-full"
            />
          </div>
          {/* Lab key benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {[
              "Eliminates manual paperwork & duplicate entry",
              "Reduces errors in ordering, labeling & results",
              "Faster turnaround and real-time visibility",
              "Seamless data flow across all stakeholders",
              "Complete longitudinal record for better care",
              "HL7/ASTM/API standards — works with your lab"
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value for Everyone */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800" />
        <div className="relative container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-500/20 text-teal-300">
              Value for Everyone
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Every stakeholder benefits.
            </h2>
            <p className="text-slate-400">
              LifeHealth is not simply another healthcare application. It is the digital operating system for connected care — with measurable value at every level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stakeholders.map((s, i) => (
              <motion.div
                key={s.role}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h4 className="font-heading font-bold text-teal-400 text-sm uppercase tracking-wider mb-2">{s.role}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{s.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 max-w-2xl">
            <blockquote className="text-xl text-slate-300 italic leading-relaxed border-l-4 border-teal-400 pl-6">
              &quot;Every patient interaction. Every laboratory result. Every care note. Every device. Every clinical encounter. Together they create an increasingly intelligent healthcare ecosystem.&quot;
            </blockquote>
            <p className="mt-4 text-teal-400 text-sm font-medium">— LifeHealth for Long-Term Care Vision Document</p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to transform your long-term care operations?"
        subtitle="Talk to our team about a deployment built for your nursing home or home healthcare organisation."
        primaryCTA={{ label: "Book a Strategy Session", href: "/contact" }}
      />

      {activePillar && (
        <PillarDeepDiveModal
          pillarNumber={activePillar.number}
          pillarColor={activePillar.color}
          onClose={() => setActivePillar(null)}
        />
      )}
    </>
  );
}
