"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartPulse,
  BadgeCheck,
  Video,
  FileText,
  Activity,
  ShieldCheck,
  BarChart3,
  Home as HomeIcon,
  Sparkles,
} from "lucide-react";

const familyStats = [
  ["Members", "5"],
  ["Records", "248"],
  ["Vaccines", "100%"],
];

const familyMembers = [
  ["John Sample", "Primary · CTI_79_BK_0000022"],
  ["Mary Sample", "Dependant · age 7"],
  ["Eli Sample", "Dependant · age 4"],
];

const appTiles = [
  ["Call a Doctor", Video],
  ["Medical Records", FileText],
  ["My Vitals", Activity],
  ["Vaccinations", ShieldCheck],
  ["Lab Tests", BarChart3],
  ["LifeProfile", HomeIcon],
];

export default function PassportVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="absolute -inset-10 -z-10 bg-[radial-gradient(closest-side,rgba(127,184,50,0.35),transparent_70%)] blur-2xl" />

      {/* Backing card — Family roster */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative ml-auto w-[85%] rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 to-navy-800 p-5 shadow-2xl shadow-navy-900/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-teal-300" />
            <span className="text-xs font-semibold tracking-wide text-white">
              Family Health Account
            </span>
          </div>
          <span className="rounded-full bg-teal-400/15 px-2 py-0.5 text-[10px] font-medium text-teal-300">
            SOVEREIGN
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
          {familyStats.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-2">
              <div className="text-white/50">{k}</div>
              <div className="mt-0.5 text-sm font-bold text-white">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {familyMembers.map(([n, r]) => (
            <div
              key={n}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px]"
            >
              <span className="font-semibold text-white">{n}</span>
              <span className="text-white/50">{r}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phone — Passport home */}
      <motion.div
        initial={{ y: 30, opacity: 0, rotate: -4 }}
        animate={{ y: 0, opacity: 1, rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="absolute -left-2 top-10 w-[58%] sm:-left-6 lg:-left-10"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-navy-900/15">
          <div className="rounded-[1.6rem] bg-navy-900 p-4">
            <div className="flex items-center justify-between text-[10px] text-white/50">
              <span>9:41</span>
              <span>&bull;&bull;&bull;</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-teal-500 text-white">
                <HeartPulse className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-white">JOHN SAMPLE</div>
                <div className="text-[9px] text-white/50">CTI_79_BK_0000022</div>
              </div>
              <BadgeCheck className="ml-auto h-4 w-4 text-teal-300" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-1.5">
              {appTiles.map(([label, Icon]) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-2.5 text-[9px]"
                >
                  <Icon className="h-3.5 w-3.5 text-teal-300" />
                  <span className="text-white/80">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-teal-500/15 p-2.5 text-[10px] text-white/80">
              <div className="flex items-center gap-1.5 font-semibold text-teal-300">
                <Sparkles className="h-3 w-3" /> VIMA AI
              </div>
              <p className="mt-1 leading-snug">Pentavalent dose 2 due in 4 days. Tap to schedule.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
