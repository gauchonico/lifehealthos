"use client";

import { motion } from "framer-motion";
import { ClipboardList, TestTube2, Cpu, CheckCircle2, FlaskConical } from "lucide-react";

const flowSteps = [
  { icon: ClipboardList, label: "Test ordered", meta: "Nexus · 0m" },
  { icon: TestTube2, label: "Specimen captured", meta: "Barcode scan · 2m" },
  { icon: Cpu, label: "Analyzer sync", meta: "Auto-imported · 9m" },
  { icon: CheckCircle2, label: "Result delivered", meta: "EMR + Passport · 16m" },
];

const hubStats = [
  ["Tests today", "214"],
  ["Critical alerts", "2"],
  ["Sync status", "Live"],
  ["Mode", "Offline-ready"],
];

export default function LifeLabVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="relative mx-auto w-full max-w-lg pb-10 pl-6 lg:max-w-none lg:pb-14 lg:pl-10"
    >
      <div className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(127,184,50,0.35),transparent_70%)] blur-2xl" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-800 p-5 shadow-2xl shadow-navy-900/20 sm:p-6"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wide text-white">Result Flow</span>
          <span className="flex items-center gap-1.5 rounded-full bg-teal-400/15 px-2 py-0.5 text-[10px] font-medium text-teal-300">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" /> Live
          </span>
        </div>

        <div className="mt-5 space-y-0">
          {flowSteps.map(({ icon: Icon, label, meta }, i) => (
            <div key={label} className="relative flex gap-3.5 pb-5 last:pb-0">
              {i < flowSteps.length - 1 && (
                <span className="absolute left-[15px] top-8 h-[calc(100%-1.25rem)] w-px bg-white/10" />
              )}
              <div className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-500/20 ring-1 ring-teal-300/30">
                <Icon className="h-4 w-4 text-teal-300" />
              </div>
              <div className="pt-0.5">
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-[11px] text-white/50">{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute -bottom-6 -left-4 w-[62%] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-navy-900/15 sm:-left-8"
      >
        <div className="flex items-center gap-2 text-xs font-semibold text-navy-900">
          <FlaskConical className="h-4 w-4 text-teal-600" />
          District Lab Hub
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
          {hubStats.map(([k, v]) => (
            <div key={k} className="rounded-lg border border-slate-100 bg-slate-50 px-2 py-1.5">
              <div className="text-slate-500">{k}</div>
              <div className="mt-0.5 font-bold text-navy-900">{v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
