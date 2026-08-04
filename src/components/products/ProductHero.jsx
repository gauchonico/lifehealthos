"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FlaskConical, HeartPulse, Sparkles, Stethoscope } from "lucide-react";

const icons = { BadgeCheck, FlaskConical, HeartPulse, Sparkles, Stethoscope };

export default function ProductHero({ product }) {
  const Icon = icons[product.icon];
  return <section className="relative overflow-hidden bg-primary pb-20 pt-32 text-primary-foreground lg:pb-28 lg:pt-40"><div className="absolute -right-28 top-0 h-[34rem] w-[34rem] rounded-full border-[56px] border-teal-500/20"/><div className="absolute -bottom-40 left-[8%] h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"/><div className="relative container-wide"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-300">{product.layer}</p><div className="mt-7 flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/20 ring-1 ring-teal-300/30"><Icon className="h-8 w-8 text-teal-300"/></div><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">For {product.audience}</span></div><h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-tight md:text-6xl">{product.hero}</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">{product.description}</p></motion.div></div></section>;
}
