"use client";

import Link from "next/link";
import { Shield, Stethoscope, Building2, FlaskConical, Microscope, BarChart3, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { base44Path } from "@/lib/base44";

const iconMap = { Shield, Stethoscope, Building2, FlaskConical, Microscope, BarChart3, ShoppingBag, Sparkles };

const platformsList = [
  { name: "Passport", user: "Patients & Citizens", purpose: "Personal health record, identity, consent, and engagement.", iconName: "Shield", to: base44Path("/passport-preview"), external: true, tone: "bg-brandred-50 text-brandred-500" },
  { name: "Nexus", user: "Healthcare Providers", purpose: "Clinical workflows, EHR, telemedicine, and care coordination.", iconName: "Stethoscope", to: "/platform", tone: "bg-sky-50 text-sky-600" },
  { name: "CHIP", user: "Health Facilities", purpose: "Facility management, scheduling, and operational workflows.", iconName: "Building2", to: "/platform", tone: "bg-violet-50 text-violet-600" },
  { name: "LifeLab", user: "Lab Professionals", purpose: "Laboratory information management and analyzer integration.", iconName: "FlaskConical", to: "/platform", tone: "bg-amber-50 text-amber-600" },
  { name: "LifeResearch", user: "Researchers", purpose: "Clinical trial management, participant engagement, and registries.", iconName: "Microscope", to: "/solutions/clinical-research", tone: "bg-pink-50 text-pink-600" },
  { name: "LifeData", user: "Decision Makers", purpose: "Analytics, dashboards, and population health intelligence.", iconName: "BarChart3", to: "/data-analytics", tone: "bg-emerald-50 text-emerald-600" },
  { name: "LifeCommerce", user: "Payers & Partners", purpose: "Health marketplace and commercial services.", iconName: "ShoppingBag", to: "/pricing", tone: "bg-orange-50 text-orange-600" },
  { name: "VIMA", user: "All Users", purpose: "AI assistant for clinical support, automation, and insights.", iconName: "Sparkles", to: "/products/vima", tone: "bg-indigo-50 text-indigo-600" },
];

export default function PlatformOverview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 hidden lg:block">
      <img
        src="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/4a1f6b66d_generated_927abc2f.png"
        alt=""
        aria-hidden="true"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative container-wide">
      <SectionHeading
        badge="The Platform"
        title="One operating system. Eight core platforms."
        subtitle="LifeHealth solutions are assembled from interoperable platforms and shared capabilities. Customers receive one coherent solution while LifeHealth maintains one scalable architecture."
      />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platformsList.map((platform, i) => {
            const Icon = iconMap[platform.iconName];
            const LinkComp = platform.external ? "a" : Link;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <LinkComp
                  href={platform.to}
                  className="group block h-full rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-teal-200 hover:bg-white hover:shadow-lg"
                >
                  <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${platform.tone}`}><Icon className="h-6 w-6" /></span>
                  <h3 className="font-heading font-semibold text-navy-900 mb-1">{platform.name}</h3>
                  <p className="text-xs text-teal-600 font-medium mb-2">{platform.user}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{platform.purpose}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-teal-600 font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </LinkComp>
              </motion.div>
            );
          })}
        </div>
      </div>
      </section>
  );
}
