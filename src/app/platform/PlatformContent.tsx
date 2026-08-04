"use client";

import { Shield, Stethoscope, Building2, FlaskConical, Microscope, BarChart3, ShoppingBag, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import { capabilities } from "@/lib/solutionsData";
import PlatformMapPreview from "@/components/shared/PlatformMapPreview";
import PlatformShowcaseCard from "@/components/platform/PlatformShowcaseCard";
import DynamicConsentSection from "@/components/platform/DynamicConsentSection";

const capabilitiesDeck = "https://media.base44.com/files/public/6a554b016ff6fa6eb6e63b81/32924953d_LHCapabilitiesDeck.pdf";

const iconMap = { Shield, Stethoscope, Building2, FlaskConical, Microscope, BarChart3, ShoppingBag, Sparkles };

const platformDetails = [
  { name: "Passport", icon: "Shield", color: "teal", user: "Patients & Citizens", purpose: "Personal health record, identity, dynamic consent, and engagement for individuals.", features: ["Health records", "Identity management", "Dynamic consent", "Appointment booking", "Telemedicine access", "Health wallet"] },
  { name: "Nexus", icon: "Stethoscope", color: "blue", user: "Healthcare Providers", purpose: "Clinical workflows, electronic health records, telemedicine, and care coordination for healthcare professionals.", features: ["Electronic health records", "Clinical workflows", "Telemedicine", "Prescriptions", "Referrals", "Care coordination"] },
  { name: "CHIP", icon: "Building2", color: "violet", user: "Health Facilities", purpose: "Facility management, scheduling, bed management, and operational workflows for health facilities.", features: ["Facility management", "Bed management", "Scheduling", "Resource planning", "Operational dashboards", "Staff management"] },
  { name: "LifeLab", icon: "FlaskConical", color: "amber", user: "Laboratory Professionals", purpose: "Laboratory information management, specimen tracking, analyzer integration, and result delivery.", features: ["Test ordering", "Specimen tracking", "Analyzer integration", "Quality control", "Result delivery", "Network analytics"] },
  { name: "LifeResearch", icon: "Microscope", color: "pink", user: "Researchers", purpose: "Clinical trial management, participant engagement, registries, pharmacovigilance, and research analytics.", features: ["Study management", "Participant enrollment", "ePRO & data capture", "Registries", "Pharmacovigilance", "Real-world evidence"] },
  { name: "LifeData", icon: "BarChart3", color: "emerald", user: "Decision Makers", purpose: "Analytics, dashboards, population health intelligence, and real-world evidence.", features: ["Dashboards", "Population health", "Predictive analytics", "Reports", "Data visualization", "Decision support"] },
  { name: "LifeCommerce", icon: "ShoppingBag", color: "orange", user: "Payers & Partners", purpose: "Health marketplace, benefits administration, and commercial services.", features: ["Health marketplace", "Benefits management", "Payment processing", "Provider networks", "Utilization tracking", "Commercial analytics"] },
  { name: "VIMA", icon: "Sparkles", color: "indigo", user: "All Users", purpose: "AI assistant for clinical decision support, workflow automation, education, and intelligent insights across the platform.", features: ["Clinical decision support", "Workflow automation", "Natural language queries", "Intelligent insights", "Education & training", "Predictive models"] },
];

export default function PlatformPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            The Platform
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            One Operating System.{" "}
            <span className="text-teal-400">Eight Core Platforms.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            LifeHealth solutions are assembled from interoperable platforms and shared capabilities. Customers receive one coherent solution while LifeHealth maintains one scalable architecture.
          </p>
        </div>
      </section>

      {/* The Big Picture — full OS overview map */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
                The Big Picture
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 tracking-tight mb-3">
                One platform. Unlimited healthcare solutions.
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Everything below — the eight platforms, shared capabilities, and every industry solution — connects into one operating system. This map shows how it all fits together. Click to explore it in full.
              </p>
            </div>
            <PlatformMapPreview
              url="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/d7b18c47c_image.png"
              title="The LifeHealth OS Overview"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-wide">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">Inside the LifeHealth ecosystem</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900">The connected experience, shown in the approved capability materials</h2>
            <p className="mt-3 leading-relaxed text-slate-600">Passport and Nexus serve different people but share the same consent-first, identity-aware health information flow. The slides alongside each section are the approved LifeHealth capability materials.</p>
          </div>
          <div className="space-y-6">
            <PlatformShowcaseCard id="passport" eyebrow="Micro · people & families" title="LifeHealth Passport: the individual and family health account" description="Passport is the individual-facing starting point: a place to bring health information together, manage family health, and share access intentionally when care is needed." points={["Import or upload records into a personal health account.", "Bring records, health information and family context into one place.", "Share approved information for care and act on it with connected LifeHealth services."]} pdfUrl={capabilitiesDeck} page={9} />
            <PlatformShowcaseCard id="nexus" eyebrow="Micro · providers & care teams" title="LifeHealth Nexus: the provider companion" description="Nexus gives clinicians, nurses and community health workers a connected care environment, with access shaped by the patient’s approved permissions." points={["Find the right patient and request access through the connected workflow.", "Capture care activity—such as vitals, vaccines, notes, orders and referrals—at the point of care.", "Use the same connected record across clinical, telemedicine and follow-up activity."]} pdfUrl={capabilitiesDeck} page={14} />
          </div>
        </div>
      </section>

      <DynamicConsentSection />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-6">
            {platformDetails.map((platform, i) => {
              const Icon = iconMap[platform.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={platform.name}
                  id={platform.name.toLowerCase().replace(/\s/g, '')}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-8 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors bg-slate-50/50"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-teal-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-heading font-bold text-xl text-navy-900">{platform.name}</h3>
                        <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full w-fit">{platform.user}</span>
                      </div>
                      <p className="text-slate-500 mb-4 leading-relaxed">{platform.purpose}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {platform.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            badge="Shared Capabilities"
            title="Capabilities that power every solution"
            subtitle="These shared capabilities are available across all LifeHealth solutions and platforms."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 bg-white rounded-xl border border-slate-100"
              >
                <h4 className="font-heading font-semibold text-navy-900 text-sm mb-1">{cap.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deck Link */}
      <section className="py-12 bg-teal-600">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-teal-100 text-xs font-semibold tracking-wider uppercase mb-1">Capabilities Overview · 2026</p>
            <h2 className="font-heading font-bold text-white text-xl">Go deeper into the platform</h2>
            <p className="text-teal-100 text-sm mt-1">Full capabilities breakdown: Passport, Nexus, CHIP, BIP, VIMA, Insights Exchange, structural advantages, and deployment pipeline.</p>
          </div>
          <Link href="/capabilities" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors shadow-md">
            View Capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
