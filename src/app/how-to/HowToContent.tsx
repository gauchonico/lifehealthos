"use client";

import { useMemo, useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Search, GraduationCap } from "lucide-react";
import { urlFor } from "@/sanity/image";
import VideoModal from "@/app/lifehealth-tv/VideoModal";
import type { HowToVideo } from "./page";

const ALL = "All guides";
const HOW_TO_TAGS = new Set(["how-to", "how to", "howto"]);

function extractYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1) || null;
    const v = parsed.searchParams.get("v");
    if (v) return v;
    const embedMatch = parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);
    return embedMatch ? embedMatch[1] : null;
  } catch {
    return null;
  }
}

/** The video's tags minus the "How-to" tag itself — used as product filters, e.g. "Passport". */
function productTags(video: HowToVideo) {
  return (video.tags ?? []).filter((tag) => !HOW_TO_TAGS.has(tag.trim().toLowerCase()));
}

type Playing = { videoId: string | null; fileUrl?: string; title: string };

export default function HowToContent({ videos = [] }: { videos?: HowToVideo[] }) {
  const playable = useMemo(() => videos.filter((v) => v.videoFileUrl || v.youtubeUrl), [videos]);

  const products = useMemo(() => {
    const seen = new Set<string>();
    for (const video of playable) for (const tag of productTags(video)) seen.add(tag);
    return [...seen].sort((a, b) => a.localeCompare(b));
  }, [playable]);

  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<Playing | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return playable.filter((video) => {
      if (active !== ALL && !productTags(video).includes(active)) return false;
      if (!q) return true;
      return [video.title, video.summary ?? "", ...(video.tags ?? [])].some((text) => text.toLowerCase().includes(q));
    });
  }, [playable, active, query]);

  const play = (video: HowToVideo) => {
    const videoId = video.videoFileUrl || !video.youtubeUrl ? null : extractYoutubeId(video.youtubeUrl);
    if (video.videoFileUrl || videoId) {
      setPlaying({ videoId, fileUrl: video.videoFileUrl, title: video.title });
    } else if (video.youtubeUrl) {
      window.open(video.youtubeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/40">
      <div className="absolute inset-0"><div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-3xl" /></div>

      <div className="relative pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="container-wide text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700"><GraduationCap className="h-3.5 w-3.5" />How-To Guides</span>
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-navy-900 md:text-5xl">Learn LifeHealth, <span className="text-teal-600">step by step.</span></h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">Short video explainers that show you how to get the most out of every LifeHealth product.</p>
        </div>
      </div>

      <div className="relative pb-20">
        <div className="container-wide">
          {playable.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
              <p className="font-heading text-lg font-semibold text-navy-900">How-to guides are on their way.</p>
              <p className="mt-2 text-sm text-slate-500">Check back soon for step-by-step product explainers.</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                  {[ALL, ...products].map((product) => {
                    const isActive = active === product;
                    return (
                      <button
                        key={product}
                        type="button"
                        onClick={() => setActive(product)}
                        className={`flex-none whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                        }`}
                      >
                        {product}
                      </button>
                    );
                  })}
                </div>
                <label className="relative block w-full lg:w-72">
                  <span className="sr-only">Search guides</span>
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search guides"
                    className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                  />
                </label>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}|${query}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-10"
                >
                  {visible.length === 0 ? (
                    <p className="text-sm text-slate-400">No guides match your search.</p>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {visible.map((video) => (
                        <button key={video._id} type="button" onClick={() => play(video)} className="group block w-full text-left">
                          <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 shadow-md ring-1 ring-slate-100">
                            {video.featuredImage ? (
                              <NextImage
                                src={urlFor(video.featuredImage).width(640).height(360).url()}
                                alt=""
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : null}
                            <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30">
                              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-colors group-hover:bg-teal-500">
                                <Play className="h-5 w-5 fill-teal-600 text-teal-600 group-hover:fill-white group-hover:text-white" />
                              </span>
                            </span>
                          </div>
                          {productTags(video).length > 0 ? (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {productTags(video).map((tag) => (
                                <span key={tag} className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">{tag}</span>
                              ))}
                            </div>
                          ) : null}
                          <p className="mt-2 font-heading text-base font-semibold leading-snug text-navy-900 group-hover:text-teal-600">{video.title}</p>
                          {video.summary ? <p className="mt-1 line-clamp-2 text-sm text-slate-500">{video.summary}</p> : null}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </div>

      <VideoModal videoId={playing?.videoId ?? null} fileUrl={playing?.fileUrl} title={playing?.title} onClose={() => setPlaying(null)} />
    </div>
  );
}
