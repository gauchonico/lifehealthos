"use client";

import { Layers, Users, Sparkles, Cloud, Link2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const advantages = [
  { icon: Layers, title: "One Operating System", desc: "All solutions are built on one interoperable platform. Build once, assemble many, deploy anywhere." },
  { icon: Users, title: "Patient-Controlled Data", desc: "Consent, access, and information-sharing preferences are embedded in the platform by design." },
  { icon: Sparkles, title: "AI Everywhere", desc: "VIMA supports users, workflows, decision-making, education, and automation across every solution." },
  { icon: Cloud, title: "Deploy Anywhere", desc: "Public cloud, private cloud, hybrid, on-premises, and sovereign environments — your choice." },
  { icon: Link2, title: "Interoperability by Design", desc: "FHIR, HL7, APIs, devices, laboratories, and external systems — connected from day one." },
  { icon: TrendingUp, title: "Built for Scale", desc: "From a single clinic or research study to a national programme — LifeHealth grows with you." },
];

export default function WhyLifeHealth() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container-wide">
        <SectionHeading
          light
          badge="Why LifeHealth"
          title="Why LifeHealth OS?"
          subtitle="One platform. Endless advantages. Built for the future of healthcare."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
