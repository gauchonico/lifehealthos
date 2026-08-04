"use client";

import Link from "next/link";
import { FileText, BookOpen, Newspaper, Presentation, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const resourceTypes = [
  { icon: FileText, title: "Case Studies", desc: "Real results from real organizations.", href: "/resources/case-studies" },
  { icon: BookOpen, title: "White Papers", desc: "Deep insights on healthcare innovation.", href: "/resources/white-papers" },
  { icon: FileText, title: "Product Briefs", desc: "Concise platform and solution overviews.", href: "/resources/product-briefs" },
  { icon: Newspaper, title: "News", desc: "The latest from LifeHealth.", href: "/resources/news" },
  { icon: Presentation, title: "Videos & Webinars", desc: "See LifeHealth in action, and learn from industry experts.", href: "/resources/videos-webinars" },
];

export default function ResourcesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeading
          badge="Resources"
          title="Knowledge. Insights. Evidence."
          subtitle="Explore resources to understand how LifeHealth transforms healthcare delivery."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resourceTypes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={item.href}
                  className="group block p-6 bg-white rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                >
                  <Icon className="w-8 h-8 text-teal-500 mb-3" />
                  <h3 className="font-heading font-semibold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-teal-600 font-medium group-hover:gap-2 transition-all">
                    Browse <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
