"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PlatformMapPreview from "@/components/shared/PlatformMapPreview";
import DashboardShowcase from "@/components/shared/DashboardShowcase";
import { SOLUTION_DASHBOARDS } from "@/lib/solutionDashboards";
import { Image } from "@/components/ui/image";
import { base44Path } from "@/lib/base44";
import { getSolutionBySlug } from "@/lib/solutionsData";

const SOLUTION_MAPS = {
  "ministry-of-health": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/013653a50_image.png",
    title: "The Public Health & Government Platform Map",
  },
  "community-health": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/c8711a0a5_image.png",
    title: "The Community Health Platform Map",
  },
  "employers": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/918f208ad_image.png",
    title: "The Employers Platform Map",
  },
  "disease-care": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/550c38191_image.png",
    title: "The Disease Care & Health Associations Platform Map",
  },
  "insurance": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/8294f9fda_image.png",
    title: "The Insurance Companies & Payers Platform Map",
  },
  "laboratories": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/608793f61_image.png",
    title: "The Diagnostic Laboratories Platform Map",
  },
  "clinics": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/59596830b_image.png",
    title: "The Primary Care & Physician Networks Platform Map",
  },
  "clinical-research": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/8f286049a_image.png",
    title: "The Clinical Research Platform Map",
  },
  "hospitals": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/dbaa0faa5_image.png",
    title: "The Hospital Platform Map",
  },
  "home-healthcare": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7bd01d4d9_image.png",
    title: "The Home Healthcare Platform Map",
  },
  "nursing-homes": {
    url: "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/5f4878ba4_LHPlatformOverview.png",
    title: "The Long-Term Care Platform Map",
  },
};

export default function SolutionPageContent({ slug }) {
  const solution = getSolutionBySlug(slug);
  const Icon = solution.icon;
  const solutionMap = SOLUTION_MAPS[solution.slug];
  const showLTCMap = Boolean(solutionMap);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide">
          <Link href="/#solutions" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-teal-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Solutions
          </Link>
          <div className="text-center mb-10 lg:mb-14">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Image src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/0b5f49e26_LHlogowtag-Copy.jpg" alt="LifeHealth" className="h-10 w-32 rounded-lg bg-white object-contain px-2 py-1" fittingType="fit" />
              <span className="text-sm font-semibold text-teal-300">By LifeHealth</span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
              {solution.name}
            </h2>
            <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto mt-4" />
          </div>
          <div className={showLTCMap ? "grid lg:grid-cols-2 gap-10 lg:gap-14 items-center" : ""}>
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-teal-400" />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              {solution.headline}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">{solution.coreMessage}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={base44Path("/pricing/estimator")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors">
                Estimate Pricing <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-slate-400 text-white font-semibold rounded-xl transition-colors">
                Book a Strategy Session
              </Link>
            </div>
          </div>
          {showLTCMap && <PlatformMapPreview className="mt-10 lg:mt-0" url={solutionMap.url} title={solutionMap.title} />}
          </div>
        </div>
      </section>

      {/* LTC Deep Dive Banner — only for nursing homes and home healthcare */}
      {(solution.slug === "nursing-homes" || solution.slug === "home-healthcare") && (
        <section className="py-10 bg-teal-600">
          <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-teal-100 text-xs font-semibold tracking-wider uppercase mb-1">Long-Term Care · Deep Dive</p>
              <h2 className="font-heading font-bold text-white text-xl">Explore the full LifeHealth for Long-Term Care vision</h2>
              <p className="text-teal-100 text-sm mt-1">Patient journey · Connected ecosystem · Lab workflows · Stakeholder value — all in one place.</p>
            </div>
            <Link href="/long-term-care" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition-colors shadow-md">
              Explore the vision <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* Live dashboard showcase */}
      {SOLUTION_DASHBOARDS[solution.slug] && (
        <DashboardShowcase solutionName={solution.name} {...SOLUTION_DASHBOARDS[solution.slug]} />
      )}

      {/* Challenges */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            badge="The Challenge"
            title="Challenges you may be facing"
            subtitle="Common pain points that LifeHealth addresses for your organization."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {solution.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100/50"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{challenge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            badge="Outcomes"
            title="What LifeHealth delivers"
            subtitle="Measurable outcomes that transform your organization."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-teal-500" />
                </div>
                <h3 className="font-heading font-semibold text-navy-900 mb-2">{outcome.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-heading font-semibold text-lg text-navy-900 mb-6">Included Platforms</h3>
              <div className="space-y-3">
                {solution.includedPlatforms.map((p) => (
                  <div key={p} className="flex items-center gap-3 p-3 rounded-lg bg-teal-50/50 border border-teal-100/50">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-900">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-navy-900 mb-6">Included Capabilities</h3>
              <div className="space-y-3 mb-8">
                {solution.includedCapabilities.map((c) => (
                  <div key={c} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-navy-900">{c}</span>
                  </div>
                ))}
              </div>
              {solution.optionalCapabilities.length > 0 && (
                <>
                  <h4 className="font-heading font-semibold text-sm text-slate-500 mb-4">Optional Capabilities</h4>
                  <div className="space-y-2">
                    {solution.optionalCapabilities.map((c) => (
                      <div key={c} className="flex items-center gap-3 p-2.5 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                        <span className="text-sm text-slate-500">{c}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Drivers */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <SectionHeading
            badge="Pricing"
            title="Pricing drivers for this solution"
            subtitle="Pricing is based on your specific scale, configuration, and deployment needs."
          />
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {solution.pricingDrivers.map((d, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                <span className="w-8 h-8 rounded-lg bg-navy-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-600">{d}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={base44Path("/pricing/estimator")} className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/20">
              Estimate Your Solution <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {solution.faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-narrow">
            <SectionHeading badge="FAQ" title="Frequently asked questions" />
            <Accordion type="single" collapsible className="max-w-2xl mx-auto">
              {solution.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-navy-900 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-500 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
