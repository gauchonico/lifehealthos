"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { CheckCircle } from "lucide-react";

const stats = [
  { number: "13", label: "Countries", sub: "SINCEP-Africa program" },
  { number: "4M+", label: "People Under Surveillance", sub: "EU-funded deployment" },
  { number: "7,972", label: "Facilities", sub: "Signed agreements & MoUs" },
  { number: "31.8M", label: "Annual Patients", sub: "Active deployment pipeline" },
];

const deployments = [
  {
    region: "East Africa",
    items: [
      "Uganda — Ministry of Health infrastructure partner",
      "Kenya & Uganda combined pipeline: 31.8M annual patients",
      "Q-AFYA: 6M existing records ready for integration",
    ]
  },
  {
    region: "West Africa",
    items: [
      "Caritas Nigeria: 9.5M patients, 3,000 facilities",
      "Lagos++ States: 12M addressable population, 3,500 facilities",
      "MTN: 200M subscriber distribution network",
    ]
  },
  {
    region: "North America",
    items: [
      "Nursing home deployments — long-term care integration",
      "Laboratory network deployments across clinical networks",
      "IBM Platinum Partner — VIMA AI built on IBM watsonx",
    ]
  },
];

export default function TractionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          badge="Validated in the Field"
          title="Real deployments. Real relationships. Real impact."
          subtitle="LifeHealth is not a concept — it is the anchor technology of a €14M EU-funded continental program, with 17 named entities ready to activate across three continents."
        />

        {/* Key Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800"
            >
              <p className="font-heading font-bold text-3xl md:text-4xl text-teal-400 mb-1">{stat.number}</p>
              <p className="font-semibold text-white text-sm mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* SINCEP Highlight */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 md:p-10 mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="relative max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-4">Anchor Partnership</span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
              SINCEP-Africa — €14M EU-Funded Program
            </h3>
            <p className="text-teal-50 text-base leading-relaxed mb-4">
              LifeHealth is the only U.S. company selected as essential infrastructure for the EU-funded SINCEP-Africa surveillance program — spanning 13 countries, 16+ institutions, and 3–4 million people under health surveillance. Partners include EDCTP and Africa CDC.
            </p>
            <p className="text-teal-100 text-sm font-medium">Deployment starting imminently · Partnership with Africa CDC and EDCTP</p>
          </div>
        </div>

        {/* Deployment regions */}
        <div className="grid md:grid-cols-3 gap-6">
          {deployments.map((region, i) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <h4 className="font-heading font-bold text-navy-900 mb-4">{region.region}</h4>
              <ul className="space-y-3">
                {region.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
