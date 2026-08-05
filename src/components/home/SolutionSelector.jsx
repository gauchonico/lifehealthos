"use client";

import Link from "next/link";
import { ArrowRight, Building2, Stethoscope, FlaskConical, Microscope, Landmark, Shield, Home, BedDouble, Heart, Briefcase, Ribbon, Users, Globe, Activity } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import PlatformMapPreview from "@/components/shared/PlatformMapPreview";

const iconMap = { Building2, Stethoscope, FlaskConical, Microscope, Landmark, Shield, Home, BedDouble, Heart, Briefcase, Ribbon, Users, Globe, Activity };
const solutionTones = ["bg-sky-50 text-sky-600", "bg-teal-50 text-teal-600", "bg-amber-50 text-amber-600", "bg-violet-50 text-violet-600", "bg-emerald-50 text-emerald-600", "bg-rose-50 text-rose-600", "bg-indigo-50 text-indigo-600", "bg-orange-50 text-orange-600", "bg-pink-50 text-pink-600", "bg-lime-50 text-lime-600"];

export default function SolutionSelector({ solutions = [] }) {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          badge="Solutions"
          title="What Type of Organization Are You?"
          subtitle="Choose your organization to see how LifeHealth can support your operations, people, data, and healthcare outcomes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution._id} solution={solution} index={i} />
          ))}
        </div>

        {/* The Big Picture — full OS overview map */}
        <div className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto p-6 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-teal-50 text-teal-600">
              The Big Picture
            </span>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 tracking-tight mb-3">
              Every Solution, One Operating System.
            </h3>
            <p className="text-slate-500 leading-relaxed">
              All the solutions above run on the same connected LifeHealth OS — shared records, shared identity, shared intelligence. Click the map to see how it all fits together.
            </p>
          </div>
          <PlatformMapPreview
            url="https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/d7b18c47c_image.png"
            title="The LifeHealth OS Overview"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution, index }) {
  const Icon = iconMap[solution.icon] || Building2;
  const tone = solutionTones[index % solutionTones.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        href={`/solutions/${solution.slug}`}
        className="group block h-full p-6 rounded-2xl border border-slate-100 bg-white hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
      >
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${tone} transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-heading font-semibold text-sm text-navy-900 mb-2 leading-snug">
          {solution.name}
        </h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-2">{solution.summary}</p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 group-hover:gap-2 transition-all">
          Explore <ArrowRight className="w-3 h-3" />
        </span>
      </Link>
    </motion.div>
  );
}
