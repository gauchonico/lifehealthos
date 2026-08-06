"use client";

import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";
import VideoRow from "@/components/lifehealth-tv/VideoRow";
import TagVideoRow from "@/components/lifehealth-tv/TagVideoRow";
import { YoutubeIcon } from "@/components/icons/BrandIcons";
import { featuredVideo, videoSections } from "@/lib/lifeHealthTVVideos";
import type { Image as SanityImage } from "sanity";

const productions = [
  { title: "LifeHealth CTC", desc: "A look at the LifeHealth CTC programme.", duration: "0:59", id: "wkrhCaQwhyo" },
  { title: "The Sickle Cell Trait Part 1", desc: "A CTI LifeHealth production focused on sickle cell trait awareness.", duration: "2:42", id: "gGgyA-ZmnZg" },
  { title: "LifeHealth Platform for Digital Blood Bank & Clinical Trials", desc: "An overview of LifeHealth capabilities for connected clinical programmes.", duration: "7:00", id: "k3szaX8LXvs" },
  { title: "Community Health Information Platform (CHIP)", desc: "An introduction to the Community Health Information Platform.", duration: "3:03", id: "Zi3b38FZgyA" },
];

type TVVideo = {
  _id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  featuredImage?: SanityImage;
  summary?: string;
  tags?: string[];
};

function groupByTag(videos: TVVideo[]) {
  const byTag = new Map<string, TVVideo[]>();
  for (const video of videos) {
    for (const tag of video.tags || []) {
      if (!byTag.has(tag)) byTag.set(tag, []);
      byTag.get(tag)!.push(video);
    }
  }
  return Array.from(byTag.entries()).map(([tag, items]) => ({ tag, items }));
}

export default function LifeHealthTV({ videos = [] }: { videos?: TVVideo[] }) {
  const tagSections = groupByTag(videos);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/40 pb-16 pt-28 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0"><div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-3xl" /></div>
        <div className="relative container-wide text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700"><Play className="h-3 w-3 fill-teal-600" />LifeHealth TV</span>
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-navy-900 md:text-5xl">Watch healthcare, <span className="text-teal-600">reimagined.</span></h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-500">Product tours, real-world deployments, and conversations with the people building connected care — all on our YouTube channel.</p>
          <a href="https://www.youtube.com/@CTIAFRICA?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-4 font-semibold text-white shadow-lg shadow-teal-500/25 transition-colors hover:bg-teal-500"><YoutubeIcon className="h-5 w-5" />Subscribe on YouTube</a>
        </div>
      </section>

      {tagSections.length > 0 ? (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/40 py-16 lg:py-20">
          <div className="relative container-wide">
            <SectionHeading badge="Browse by Tag" title="Explore videos by topic" />
            {tagSections.map(({ tag, items }) => (
              <TagVideoRow key={tag} tag={tag} videos={items} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeading badge="Browse by Theme" title="What you'll find on LifeHealth TV" />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200"><iframe className="aspect-video w-full" src="https://www.youtube-nocookie.com/embed/k3szaX8LXvs" title="LifeHealth Platform for Digital Blood Bank & Clinical Trials" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></motion.div>
          <div className="grid gap-6 sm:grid-cols-2">{productions.map((production, i) => <motion.a key={production.id} href={`https://www.youtube.com/watch?v=${production.id}`} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-colors hover:border-teal-300 hover:bg-white"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-wide text-teal-600">Production · {production.duration}</span><ArrowRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-teal-500" /></div><h3 className="mb-2 font-heading text-lg font-bold text-navy-900">{production.title}</h3><p className="text-sm leading-relaxed text-slate-500">{production.desc}</p></motion.a>)}</div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20"><div className="container-wide"><SectionHeading badge="CTI Africa Productions" title="Explore by focus area" />{videoSections.map((section) => <VideoRow key={section.title} {...section} />)}<section className="relative mt-8 min-h-80 overflow-hidden rounded-2xl bg-navy-900"><Image src={`https://i.ytimg.com/vi/${featuredVideo.id}/maxresdefault.jpg`} alt={featuredVideo.title} className="absolute inset-0 h-full w-full opacity-60" /><div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/75 to-navy-900/10" /><div className="relative flex min-h-80 max-w-2xl flex-col justify-center p-8 lg:p-12"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{featuredVideo.label}</p><h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">{featuredVideo.title}</h2><p className="mt-4 text-sm leading-6 text-slate-200">{featuredVideo.description}</p><a href={`https://www.youtube.com/watch?v=${featuredVideo.id}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-navy-900 hover:bg-teal-400"><Play className="h-4 w-4 fill-navy-900" />Play now</a></div></section></div></section>
      <CTABanner />
    </>
  );
}
