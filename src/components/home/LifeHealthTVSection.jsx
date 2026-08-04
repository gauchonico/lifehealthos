"use client";

import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { YoutubeIcon } from "@/components/icons/BrandIcons";

const episodes = [
  { title: "LifeHealth CTC", duration: "0:59", tag: "CTI LifeHealth", id: "wkrhCaQwhyo" },
  { title: "The Sickle Cell Trait Part 1", duration: "2:42", tag: "Health Education", id: "gGgyA-ZmnZg" },
  { title: "LifeHealth Platform for Digital Blood Bank & Clinical Trials", duration: "7:00", tag: "Platform", id: "k3szaX8LXvs" },
  { title: "Community Health Information Platform (CHIP)", duration: "3:03", tag: "Platform", id: "Zi3b38FZgyA" },
];

export default function LifeHealthTVSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl" />
      </div>
      <div className="relative container-wide">
        <SectionHeading
          badge="LifeHealth TV"
          title="See it in motion."
          subtitle="Product walkthroughs, real deployment stories, and conversations with the people building healthcare for billions — now on YouTube."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200"
          >
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube-nocookie.com/embed/k3szaX8LXvs"
              title="LifeHealth Platform for Digital Blood Bank & Clinical Trials"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>

          {/* Episode list */}
          <div className="space-y-3">
            {episodes.map((ep, i) => (
              <motion.a
                key={ep.title}
                href={`https://www.youtube.com/watch?v=${ep.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-300 hover:bg-white transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-100 group-hover:bg-teal-600 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Play className="w-5 h-5 fill-teal-600 text-teal-600 group-hover:fill-white group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-navy-900 font-medium text-sm leading-snug truncate">{ep.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <span className="text-teal-600">{ep.tag}</span> · {ep.duration}
                  </p>
                </div>
              </motion.a>
            ))}
            <a
              href="https://www.youtube.com/@CTIAFRICA?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-teal-500/25"
            >
              <YoutubeIcon className="w-4 h-4" />
              Subscribe on YouTube
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
