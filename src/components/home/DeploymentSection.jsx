"use client";

import { Cloud, Server, Layers, HardDrive, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const deployments = [
  { icon: Cloud, name: "Public Cloud", customer: "Organizations seeking speed and agility", benefit: "Fastest deployment with automatic scaling and updates.", security: "Enterprise-grade cloud security with encryption at rest and in transit." },
  { icon: Server, name: "Private Cloud", customer: "Enterprises requiring dedicated infrastructure", benefit: "Isolated resources with full control over infrastructure.", security: "Dedicated tenancy with custom security policies." },
  { icon: Layers, name: "Hybrid", customer: "Organizations with existing on-premises investments", benefit: "Best of both worlds — cloud agility with on-premises control.", security: "Segmented workloads with data residency flexibility." },
  { icon: HardDrive, name: "On-Premises", customer: "Organizations with strict data locality requirements", benefit: "Complete data control within your own infrastructure.", security: "Full governance under your security team." },
  { icon: Shield, name: "Sovereign Cloud", customer: "Governments and regulated healthcare entities", benefit: "National data residency with regulatory compliance.", security: "Sovereign governance with jurisdictional data controls." },
];

export default function DeploymentSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeading
          badge="Deployment"
          title="Designed for every operating environment"
          subtitle="LifeHealth does not require one rigid hosting model. Deploy where your organization needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {deployments.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <Icon className="w-8 h-8 text-teal-500 mb-4" />
                <h3 className="font-heading font-semibold text-navy-900 mb-2 text-sm">{item.name}</h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{item.benefit}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.security}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
