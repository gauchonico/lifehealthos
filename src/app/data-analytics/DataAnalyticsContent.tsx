"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Map, Brain, Database, ArrowRight, LineChart } from "lucide-react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeading from "@/components/shared/SectionHeading";
import DataDecisionCanvas from "@/components/analytics/DataDecisionCanvas";
import AnalyticsPortfolio from "@/components/analytics/AnalyticsPortfolio";
import HeroDashboardCollage from "@/components/analytics/HeroDashboardCollage";

const pillars = [
  { icon: Database, title: "Capture", description: "Every clinical encounter, lab result, community visit, and device reading flows into one governed data layer — structured, validated, and consented." },
  { icon: Map, title: "Visualize", description: "See your entire operation on interactive maps and dashboards — facilities, patients, programmes, and coverage gaps, in real time." },
  { icon: LineChart, title: "Analyze", description: "Trend analysis, cohort comparisons, quality indicators, and operational KPIs — configurable for every role in your organization." },
  { icon: Brain, title: "Act", description: "AI-assisted insights from VIMA surface what matters: outbreak signals, capacity risks, care gaps, and opportunities to intervene early." },
];

export default function DataAnalytics() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900 to-teal-900/40" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-6">
              <BarChart3 className="w-4 h-4" /> LifeData — Data & Analytics
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-4">
              Your data, visualized. Your decisions, informed.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              LifeHealth turns every encounter, test, and visit into living intelligence. Map your patients and facilities geographically, track performance in real time, and analyze outcomes — whether you run a nursing home, a hospital group, a national health system, or a disease association.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/25">
                See It With Your Data <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#dashboards" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-white font-semibold rounded-xl transition-colors">
                Explore the Dashboards
              </a>
            </div>
          </div>
          <HeroDashboardCollage />
        </div>
      </section>

      <DataDecisionCanvas />

      {/* From data to decisions */}
      <section className="container-wide py-16 md:py-20">
        <SectionHeading
          badge="How It Works"
          title="From data to decisions in four steps"
          subtitle="One governed data layer powers every visualization and analysis across LifeHealth."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <p.icon className="w-5.5 h-5.5 text-teal-600 w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-teal-500">0{i + 1}</span>
                <h3 className="font-heading font-bold text-navy-900">{p.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AnalyticsPortfolio />

      <CTABanner
        headline="Ready to see your own data come alive?"
        subtitle="Book a session and we'll show you these dashboards and maps configured for your organization."
        primaryCTA={{ label: "Book a Data Demo", href: "/contact" }}
      />
    </div>
  );
}
