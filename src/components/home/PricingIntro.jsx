"use client";

import { Users, Building2, Heart, FlaskConical, Microscope, Layers, Cloud, Link2, Headphones, ArrowRight, Settings } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { base44Path } from "@/lib/base44";

const drivers = [
  { icon: Users, label: "Number of users" },
  { icon: Building2, label: "Number of facilities" },
  { icon: Heart, label: "Population or covered lives" },
  { icon: FlaskConical, label: "Laboratory volume" },
  { icon: Microscope, label: "Research participants" },
  { icon: Settings, label: "Enabled capabilities" },
  { icon: Cloud, label: "Deployment model" },
  { icon: Link2, label: "Integration requirements" },
  { icon: Layers, label: "Professional services" },
  { icon: Headphones, label: "Support tier" },
];

export default function PricingIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          badge="Pricing"
          title="Pricing designed around your organization"
          subtitle="LifeHealth pricing is based on the solution, scale, deployment model, capabilities, implementation needs, and support requirements relevant to each customer."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {drivers.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <Icon className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-sm text-slate-600">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center">
          <a
            href={base44Path("/pricing/estimator")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/20"
          >
            Estimate Your Solution
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
