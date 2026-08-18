"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import PassportVisual from "@/components/products/PassportVisual";

const stats = [
  ["1", "Wallet"],
  ["8", "Capabilities"],
  ["∞", "Lifelong reach"],
];

export default function PassportHero() {
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
            Micro &middot; People &amp; Families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">Digital Health Passport</span>{" "}
            <span>for people &amp; families.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Portable, lifelong, family-centered health assets — owned by you and verified by
            X-Validator. LifeHealth Passport puts families in control of their own health data,
            wherever care happens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
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
              <Sparkles className="h-4 w-4 text-teal-600" /> Meet VIMA AI
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200 pt-8"
          >
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-bold text-gradient sm:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs text-slate-500">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <PassportVisual />
      </div>
    </section>
  );
}
