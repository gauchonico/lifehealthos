"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ProductCapabilityGrid({ product }) {
  return <section className="bg-white py-20 lg:py-28"><div className="container-wide"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-600">Core Capabilities</p><h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 md:text-5xl">What {product.name} Enables</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{product.capabilities.map((capability, index) => <motion.div key={capability} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-transform hover:-translate-y-1"><CheckCircle2 className="h-5 w-5 text-teal-600"/><p className="mt-5 font-heading text-base font-bold leading-snug text-navy-900">{capability}</p></motion.div>)}</div></div></section>;
}
