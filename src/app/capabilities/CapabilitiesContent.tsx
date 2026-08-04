"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import XValidatorOverlaySection from "@/components/platform/XValidatorOverlaySection";

const parts = [
  {
    id: "platform",
    label: "Part One",
    title: "The Platform",
    subtitle: "One integrated ecosystem, four connected apps.",
    badge: "Micro · Meso · Macro",
    apps: [
      {
        name: "Passport",
        layer: "MICRO",
        audience: "People & Families",
        tagline: "One wallet. Seven capabilities. Lifelong reach.",
        description: "LifeHealth Passport is the patient's lifelong, longitudinal health record. It aggregates data from hospitals, labs, pharmacies, and devices — giving families full ownership and control of their health information.",
        capabilities: [
          "Genomics — genetic insights paired with video counseling",
          "Data Dashboards — personal and family-level health views",
          "Records & AI Concierge — download, summarize, and act on records",
          "E-Commerce — curated wellness marketplace (powered by RxSpark)",
          "Facility & Community Health — connected circle of care",
          "Remote Monitoring — therapeutic and continuous condition tracking",
          "Telemedicine & Consultations — primary care and specialist access"
        ],
        trust: ["Import from PCC, hospitals, labs, pharmacies", "Consent-based sharing via time-boxed QR code", "X-Validator biometric identity at every step", "Patient-owned — families control their data"]
      },
      {
        name: "Nexus",
        layer: "MICRO",
        audience: "Providers & Clinicians",
        tagline: "A complete clinical workstation in your pocket.",
        description: "LifeHealth Nexus gives doctors, nurses, and community health workers a single mobile app to access verified patient records, capture vitals, run telemedicine consults, and document care — anywhere they meet the patient.",
        capabilities: [
          "Consented patient access — search by name or CTI ID, consent in-app",
          "Capture at the point of care — vitals, vaccinations, prescriptions, lab orders",
          "Integrated telemedicine — MedWand: heart, lung, ECG, temperature, dermatoscope",
          "AI-assisted documentation — voice-to-note with VIMA, structured fields",
          "Care notes — voice-recorded or typed, saved against the encounter",
          "Consult log — searchable, replayable telemedicine exam records"
        ],
        trust: ["Every clinical action identity-bound by X-Validator", "Auto Capture: time, date, geo-tagged location on every entry", "Audit-ready: chain-of-custody for regulators, payers, trials", "ONE RECORD: every action writes to the same verified Passport"]
      },
      {
        name: "CHIP",
        layer: "MESO",
        audience: "Facilities & Hospitals",
        tagline: "Built for low-bandwidth realities. Designed for the people doing the work.",
        description: "CHIP is the operational backbone for clinics, hospitals, and community health facilities — from patient encounter to government procurement. Lightweight, offline-first, with a 'No Double Entry' pledge.",
        capabilities: [
          "Lightweight EMR rails: intake, vitals, referrals, labs, pharmacy",
          "Offline-first architecture: syncs when connectivity returns, no data loss",
          "Rapid onboarding: training under 2 hours",
          "Inventory Management: real-time stock tracking, automated reorder alerts, expiry management",
          "Cross-facility visibility: stock pooling and redistribution between sites",
          "Supply chain transparency: manufacturer to patient, auditable end-to-end"
        ],
        trust: ["Integrates with DHIS2 / OpenMRS", "Feeds government dashboards and procurement intel (BIP)", "LifeLab diagnostic results link to records and stock", "VIMA AI: clinical decision support and predictive demand"]
      },
      {
        name: "BIP",
        layer: "MACRO",
        audience: "Governments & Donors",
        tagline: "National-scale insight. Equity, transparency, and preparedness.",
        description: "BIP is the Business Intelligence Platform for governments, NGOs, donors, facilities, and insurers — powered by ESRI. Real-time dashboards, outbreak detection, and supply chain intelligence at national scale.",
        capabilities: [
          "Real-time dashboards for governments, NGOs, donors, facilities, insurers",
          "Equity lens: rural/urban, gender, and income gap analysis",
          "Predictive intelligence: outbreak prediction, fraud detection, supply chain efficiency",
          "Logistics & Supply Chain: facility and manufacturer visibility (999+ facilities mapped)",
          "Facility & Population Health Management — multi-layer dashboards",
          "Central Command Center: 24/7 real-time data sharing across stakeholders"
        ],
        trust: ["Powered by ESRI geospatial technology", "Outbreak signals and anomaly detection (VIMA Macro)", "Aligned with Smart Africa continental health agenda", "WHO, Africa CDC, and EDCTP-connected reporting"]
      }
    ]
  },
  {
    id: "vima",
    label: "AI Layer",
    title: "Meet VIMA",
    subtitle: "Virtual Intelligent Medical Assistant — one AI agent, three platform layers.",
    badge: "Built with IBM watsonx",
    description: "VIMA is the AI thread that runs through every layer of the LifeHealth platform — from a patient's smartphone to a national command center.",
    layers: [
      { scope: "Micro — Passport · Nexus", desc: "Summarizes records, personalizes care, recommends next best action." },
      { scope: "Meso — CHIP", desc: "Clinical decision support and predictive demand for facilities." },
      { scope: "Macro — BIP", desc: "Anomaly detection, outbreak signals, and pattern recognition at scale." }
    ]
  },
  {
    id: "insights",
    label: "Part Three",
    title: "LifeHealth Insights Exchange",
    subtitle: "Health data, reimagined as ethical intelligence.",
    badge: "Research & Analytics",
    pathways: [
      {
        title: "Anonymized / Aggregated Data",
        label: "Pathway One",
        uses: ["Epidemiology, predictive modeling, population analytics", "Public health, insurers, pharma, NGOs", "Low regulatory risk; subscription / API model"]
      },
      {
        title: "Consent-Based Identifiable Data",
        label: "Pathway Two",
        uses: ["Research and precision medicine", "Clinical trial recruitment", "Strict consent governance and traceability"]
      }
    ],
    trustLayer: [
      { step: "01", name: "Anonymization Engine", desc: "Removes identifying fields with auditable, repeatable rules." },
      { step: "02", name: "Consent Registry", desc: "Time-bound, revocable permissions tied to each patient." },
      { step: "03", name: "Data Ethics Dashboard", desc: "Real-time visibility into how data is used and by whom." },
      { step: "04", name: "Partner Access API", desc: "Vetted partner endpoints with role-based access controls." }
    ]
  }
];

const gaps = [
  { stat: "4.6B", title: "The Access Gap", desc: "People lack access to essential health services.", closed: "Passport · Telemedicine · Remote Monitoring" },
  { stat: "800M", title: "The Identity Gap", desc: "People have no legal ID, blocking access to healthcare and aid.", closed: "X-Validator · Passport+" },
  { stat: "2.1B", title: "The Financial Burden", desc: "People face financial hardship from out-of-pocket health costs.", closed: "Passport · Curated Marketplace · Care Coordination" },
  { stat: "Most", title: "The Visibility Gap", desc: "Health systems lack real-time data on outbreaks, supply, and workforce.", closed: "CHIP · BIP · LifeLab" }
];

const advantages = [
  { num: "01", title: "Purpose-Built for Emerging Markets", desc: "Designed from the ground up for mobile-first, low-infrastructure environments. Runs on devices people already own." },
  { num: "02", title: "End-to-End Ecosystem", desc: "Wallet, telehealth, EHR, facility management, analytics, and supply chain in one integrated platform. Not a point solution." },
  { num: "03", title: "Deep Institutional Relationships", desc: "Governmental, faith-based, and multilateral partnerships cultivated over years. Trusted access across health systems and ministries." },
  { num: "04", title: "AI-Driven Intelligence Layer", desc: "Predictive analytics, population health surveillance, and AI precision medicine built into the core." },
  { num: "05", title: "Proprietary IP", desc: "In-house technology developed over years of platform investment. Mobile-first, offline-capable, multilingual architecture." },
  { num: "06", title: "Validated at Scale", desc: "EU-funded SINCEP designation. Active deployment pipeline of 31.8M patients across 17 named entities and 7,972 facilities." }
];

export default function CapabilitiesOverview() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Capabilities Overview · 2026
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight mb-6">
            AI Empowerment<br />
            <span className="text-teal-400">at Scale</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Bringing personal responsibility, compassion, and digital sovereignty to healthcare.
          </p>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            CTI-LifeHealth · Capabilities 2026
          </p>
        </div>
      </section>

      {/* The Gaps We Close */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">The Case for LifeHealth</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">The Gaps We Close</h2>
            <p className="text-slate-500 text-lg italic">Billions of people face layered gaps in healthcare. LifeHealth was built to close them.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gaps.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border-2 border-teal-100 bg-teal-50/30"
              >
                <div className="text-4xl font-heading font-black text-teal-600 mb-2">{g.stat}</div>
                <h3 className="font-heading font-bold text-navy-900 mb-2">{g.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{g.desc}</p>
                <p className="text-xs text-teal-700 font-semibold">Closed by: {g.closed}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 font-heading font-bold text-navy-900 text-lg italic">LifeHealth is built to close these gaps as one connected platform.</p>
        </div>
      </section>

      {/* The Four Apps */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">Part One — The Platform</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">One integrated ecosystem, four connected apps.</h2>
            <p className="text-slate-500">From the family wallet, to the facility, to the nation. Click any app to explore its full capabilities.</p>
          </div>
          <div className="space-y-4">
            {parts[0].apps?.map((app, i) => {
              const isOpen = openApp === app.name;
              return (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-2xl border-2 transition-all overflow-hidden ${isOpen ? "border-teal-300" : "border-slate-100"}`}
                >
                  <button
                    onClick={() => setOpenApp(isOpen ? null : app.name)}
                    className={`w-full text-left p-6 flex items-start gap-5 transition-colors ${isOpen ? "bg-teal-50" : "bg-white hover:bg-slate-50"}`}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold tracking-wider text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full">{app.layer}</span>
                        <span className="text-xs text-slate-400">{app.audience}</span>
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-navy-900 mb-1">{app.name}</h3>
                      <p className="text-sm text-slate-500 italic">{app.tagline}</p>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 bg-teal-50 border-t border-teal-100">
                          <p className="text-slate-600 leading-relaxed mb-6 mt-4">{app.description}</p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-heading font-bold text-navy-900 text-sm mb-3 uppercase tracking-wider">Capabilities</h4>
                              <ul className="space-y-2">
                                {app.capabilities.map((c, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    {c}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-navy-900 text-sm mb-3 uppercase tracking-wider">Trust & Integration</h4>
                              <ul className="space-y-2">
                                {app.trust.map((t, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <XValidatorOverlaySection />

      {/* VIMA */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800" />
        <div className="relative container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-teal-500/20 text-teal-300">AI Across the Platform</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2">Meet VIMA</h2>
            <p className="text-teal-400 font-medium mb-6">Virtual Intelligent Medical Assistant — One AI agent. Three platform layers.</p>
            <p className="text-slate-300 leading-relaxed mb-8">Built with IBM watsonx — CTI-LifeHealth proprietary IP. VIMA is the AI thread that runs through every layer of the platform.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {parts[1].layers?.map((l, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-teal-400 font-semibold text-sm mb-2">{l.scope}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Exchange */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">Part Three</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">LifeHealth Insights Exchange</h2>
            <p className="text-slate-500 text-lg italic mb-4">Health data, reimagined as ethical intelligence.</p>
            <p className="text-slate-500">LifeHealth&apos;s position evolves from a records repository into an insight engine — serving pharma, governments, NGOs, and research organizations through two ethical data pathways.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {parts[2].pathways?.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-navy-900 text-white">
                <p className="text-teal-400 text-xs font-semibold tracking-wider uppercase mb-2">{p.label}</p>
                <h3 className="font-heading font-bold text-xl mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.uses.map((u, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-heading font-bold text-navy-900 text-lg mb-6">Ethical Data Exchange Architecture — Fully GDPR & HIPAA Compliant</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {parts[2].trustLayer?.map((t, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50">
                  <div className="text-2xl font-heading font-black text-teal-600 mb-2">{t.step}</div>
                  <h4 className="font-heading font-bold text-navy-900 text-sm mb-2">{t.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Sets LifeHealth Apart */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">Structural Advantages</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">What Sets LifeHealth Apart</h2>
            <p className="text-slate-500">Six platform characteristics that define how LifeHealth operates in emerging markets.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 bg-white rounded-2xl border border-slate-100"
              >
                <div className="text-3xl font-heading font-black text-teal-600/30 mb-3">{a.num}</div>
                <h3 className="font-heading font-bold text-navy-900 mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-navy-900 rounded-2xl text-center">
            <p className="text-slate-300 italic text-sm">These characteristics define LifeHealth as the digital healthcare backbone for emerging markets — built for the realities on the ground.</p>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">Evidence of Readiness</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-3">Validation in the Field</h2>
            <p className="text-slate-500">LifeHealth&apos;s capabilities are validated by funded programs, signed institutional agreements, and continental partnerships already in motion.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-navy-900 text-white">
              <p className="text-teal-400 text-xs font-semibold tracking-wider uppercase mb-3">Secured Funded Program</p>
              <h3 className="font-heading font-bold text-xl mb-4">EU-Funded SINCEP-Africa Program</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />€14M program with LifeHealth as essential infrastructure</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />Only U.S. company in the program</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />13 countries, 16+ institutions, 3–4M under surveillance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />Partnership with EDCTP and Africa CDC</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />Deployment starting soon</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-teal-600 text-white">
              <p className="text-teal-100 text-xs font-semibold tracking-wider uppercase mb-3">Deployment Pipeline</p>
              <h3 className="font-heading font-bold text-xl mb-4">17 Named Entities Ready to Activate</h3>
              <ul className="space-y-2 text-sm text-teal-50">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />7,972 facilities across signed agreements, MoUs, and LOIs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />31.8M annual patients across Uganda, Kenya, and Nigeria</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />Caritas Nigeria: 9.5M patients, 3,000 facilities</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />Lagos++ States: 12M addressable, 3,500 facilities</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />Astro Mobile, Q-AFYA (6M records), MTN (200M subs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to see the platform in action?"
        subtitle="Talk to our team about a solution built for your organisation."
        primaryCTA={{ label: "Book a Strategy Session", href: "/contact" }}
      />
    </>
  );
}
