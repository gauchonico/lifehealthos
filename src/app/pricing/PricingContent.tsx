"use client";

import { ArrowRight, Users, Building2, Cloud, Link2, Headphones, Settings } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import { base44Path } from "@/lib/base44";

const pricingFactors = [
  { icon: Users, title: "Users & Scale", desc: "Based on the number of users, facilities, and population served." },
  { icon: Settings, title: "Capabilities", desc: "Selected capabilities and platform components included in your solution." },
  { icon: Cloud, title: "Deployment Model", desc: "Public cloud, private cloud, hybrid, on-premises, or sovereign." },
  { icon: Link2, title: "Integrations", desc: "Connections to existing systems, devices, and external platforms." },
  { icon: Building2, title: "Implementation", desc: "Professional services, training, data migration, and onboarding." },
  { icon: Headphones, title: "Support Tier", desc: "Standard, premium, or dedicated support and service levels." },
];

export default function Pricing() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">Pricing</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Pricing designed around <span className="text-teal-400">your organization</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            LifeHealth pricing is based on the solution, scale, deployment model, capabilities, implementation needs, and support requirements relevant to each customer.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading
            badge="How Pricing Works"
            title="What drives your pricing"
            subtitle="Every LifeHealth solution is priced around your specific organizational needs."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {pricingFactors.map((factor, i) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <Icon className="w-8 h-8 text-teal-500 mb-3" />
                  <h3 className="font-heading font-semibold text-navy-900 mb-1">{factor.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{factor.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href={base44Path("/pricing/estimator")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/20"
            >
              Estimate Your Solution <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to explore pricing for your organization?"
        primaryCTA={{ label: "Book a Strategy Session", href: "/contact" }}
      />
    </>
  );
}
