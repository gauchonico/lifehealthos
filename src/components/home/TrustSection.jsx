"use client";

import { Shield, KeyRound, Users, FileCheck, Eye, CheckCircle, HardDrive, Cloud, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const trustItems = [
  { icon: Shield, title: "Security & Zero Trust", desc: "Defense-in-depth architecture with zero-trust principles." },
  { icon: KeyRound, title: "Identity & Access", desc: "Role-based access control with multi-factor authentication." },
  { icon: Users, title: "Dynamic Consent", desc: "Patient-controlled, granular, auditable consent management." },
  { icon: FileCheck, title: "Audit & Traceability", desc: "Complete audit trails for every data access and modification." },
  { icon: Eye, title: "Privacy by Design", desc: "Privacy embedded into the architecture from the ground up." },
  { icon: CheckCircle, title: "Data Quality", desc: "X-Validator ensures data quality and integrity across the platform." },
  { icon: HardDrive, title: "Business Continuity", desc: "High availability, disaster recovery, and backup capabilities." },
  { icon: Cloud, title: "Sovereign Deployment", desc: "In-country data residency and jurisdictional governance." },
  { icon: Link2, title: "Standards-Based", desc: "FHIR, HL7, and open standards for healthcare interoperability." },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container-wide">
        <SectionHeading
          light
          badge="Trust & Security"
          title="Enterprise-grade trust by design"
          subtitle="Security, privacy, and governance are built into the platform — not bolted on after."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-colors"
              >
                <Icon className="w-6 h-6 text-teal-400 mb-3" />
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
