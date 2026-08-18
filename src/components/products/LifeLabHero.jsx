"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Network, Sparkles } from "lucide-react";
import LifeLabVisual from "@/components/products/LifeLabVisual";

const heroFeatures = [
  {
    icon: FlaskConical,
    title: "Point-of-care testing",
    desc: "Order tests and capture specimens right where care happens, online or off.",
  },
  {
    icon: Network,
    title: "Analyzer & EMR integration",
    desc: "HL7/FHIR-compliant sync with lab analyzers and your existing EMR.",
  },
  {
    icon: Sparkles,
    title: "Result intelligence",
    desc: "VIMA-powered anomaly detection across longitudinal biomarker trends.",
  },
];

export default function LifeLabHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-20 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-teal-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-navy-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600"
          >
            Meso &middot; Diagnostic Integration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">LifeLab:</span>{" "}
            <span>Clinical Data Engine.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            The diagnostic backbone for point-of-care testing, lab integration, and result
            intelligence — closing the loop between diagnostics and care across every facility
            tier.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 space-y-5"
          >
            {heroFeatures.map(({ icon: Icon, title, desc }, i) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-navy-900">{title}</div>
                  <p className="mt-0.5 text-sm text-slate-500">{desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/platform"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition hover:bg-navy-800"
            >
              Explore the Platform
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-navy-900 transition hover:border-teal-300 hover:bg-teal-50"
            >
              <FlaskConical className="h-4 w-4 text-teal-600" /> See CHIP
            </Link>
          </motion.div>
        </div>

        <LifeLabVisual />
      </div>
    </section>
  );
}
