"use client";

import { motion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";

export default function ProductConnections({ product }) {
  return <section className="bg-slate-50 py-20 lg:py-28"><div className="container-wide grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100"><Network className="h-7 w-7 text-teal-700"/></div><p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-teal-600">Connected By Design</p><h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 md:text-5xl">Part Of One LifeHealth System</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{product.name} is designed to work as a connected LifeHealth capability—not as an isolated application.</p></div><div className="grid gap-3">{product.relationships.map((relationship, index) => <motion.div key={relationship} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700">{index + 1}</span><p className="flex-1 font-semibold text-navy-900">{relationship}</p><ArrowRight className="h-4 w-4 text-teal-600"/></motion.div>)}</div></div></section>;
}
