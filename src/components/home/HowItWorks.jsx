"use client";

import Link from "next/link";
import { Shield, Stethoscope, FlaskConical, Sparkles, BarChart3, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { base44Path } from "@/lib/base44";

const steps = [
  { icon: Shield, label: "Patient", platform: "Passport", description: "Patients manage their health records, consent, and care access.", to: base44Path("/passport-preview"), external: true, tone: "bg-brandred-50 text-brandred-500" },
  { icon: Stethoscope, label: "Provider", platform: "Nexus", description: "Clinicians deliver care with connected workflows and records.", to: "/platform", tone: "bg-sky-50 text-sky-600" },
  { icon: FlaskConical, label: "Laboratory", platform: "LifeLab", description: "Laboratories process orders, track specimens, and deliver results.", to: "/platform", tone: "bg-amber-50 text-amber-600" },
  { icon: Sparkles, label: "AI (VIMA)", platform: "VIMA", description: "AI provides real-time clinical insights, automation, and support.", to: base44Path("/ai-core"), external: true, tone: "bg-violet-50 text-violet-600" },
  { icon: BarChart3, label: "Analytics", platform: "LifeData", description: "Decision-makers access dashboards, reports, and population intelligence.", to: "/data-analytics", tone: "bg-emerald-50 text-emerald-600" },
  { icon: Heart, label: "Better Outcomes", platform: "LifeHealth OS", description: "Organizations and governments improve healthcare delivery and outcomes.", to: "/solutions/hospitals", tone: "bg-rose-50 text-rose-600" },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          badge="The Journey"
          title="One Connected Journey Across the Care Continuum"
          subtitle="LifeHealth connects every step of the healthcare journey through one interoperable platform."
        />
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const LinkComp = step.external ? "a" : Link;
              const linkProps = step.external ? { href: step.to } : { href: step.to };
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <LinkComp {...linkProps} className="group block rounded-2xl p-3 transition-colors hover:bg-slate-50">
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.tone} mb-4 mx-auto transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-navy-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-navy-900 mb-1">{step.label}</h4>
                  <p className="text-xs text-teal-600 font-medium mb-2">{step.platform}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  <span className="mt-2 inline-block text-xs font-semibold text-teal-600">Explore →</span>
                  </LinkComp>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
