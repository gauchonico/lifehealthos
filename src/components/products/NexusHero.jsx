"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Video, Users } from "lucide-react";
import NexusVisual from "@/components/products/NexusVisual";

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Consented patient access",
    desc: "See only what the patient has approved you to see, verified by X-Validator.",
  },
  {
    icon: HeartPulse,
    title: "Point-of-care capture",
    desc: "Record vitals, blood type, and vaccinations the moment care happens.",
  },
  {
    icon: Video,
    title: "Integrated telemedicine",
    desc: "Run remote consults with MedWand device integration built in.",
  },
];

export default function NexusHero() {
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
            Micro &middot; Providers &amp; Clinicians
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">A Complete Clinical Workstation</span>{" "}
            <span>In Your Pocket.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            A provider companion app that enables doctors, nurses, and community health workers
            to access verified patient records, capture vitals and vaccinations, run telemedicine
            consults, and document care.
          </motion.p>

          

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="https://nexus.lifehealth.app/"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition hover:bg-navy-800"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            {/* <Link
              href="/products/passport"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-navy-900 transition hover:border-teal-300 hover:bg-teal-50"
            >
              <Users className="h-4 w-4 text-teal-600" /> See Passport
            </Link> */}
          </motion.div>
        </div>

        <NexusVisual />
      </div>
    </section>
  );
}
