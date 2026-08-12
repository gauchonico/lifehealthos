"use client";

import { useMemo, useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Flame,
  Sparkles,
  Stethoscope,
  FlaskConical,
  Clapperboard,
  Syringe,
  HeartPulse,
  Tv,
} from "lucide-react";
import { Image } from "@/components/ui/image";
import { YoutubeIcon } from "@/components/icons/BrandIcons";
import { urlFor } from "@/sanity/image";
import { featuredVideo, videoSections } from "@/lib/lifeHealthTVVideos";
import VideoModal from "./VideoModal";
import type { Image as SanityImage } from "sanity";

type TVVideo = {
  _id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  featuredImage?: SanityImage;
  summary?: string;
  tags?: string[];
};

type HubCard = {
  id: string;
  title: string;
  summary?: string;
  categories: string[];
  href: string;
  videoId: string | null;
  thumb: { kind: "plain"; url: string } | { kind: "sanity"; image: SanityImage };
};

const PRODUCTIONS = [
  { title: "LifeHealth CTC", desc: "A look at the LifeHealth CTC programme.", id: "wkrhCaQwhyo" },
  { title: "The Sickle Cell Trait Part 1", desc: "A CTI LifeHealth production focused on sickle cell trait awareness.", id: "gGgyA-ZmnZg" },
  { title: "LifeHealth Platform for Digital Blood Bank & Clinical Trials", desc: "An overview of LifeHealth capabilities for connected clinical programmes.", id: "k3szaX8LXvs" },
  { title: "Community Health Information Platform (CHIP)", desc: "An introduction to the Community Health Information Platform.", id: "Zi3b38FZgyA" },
];

const ICON_POOL = [Sparkles, Stethoscope, FlaskConical, Clapperboard, Syringe, HeartPulse, Tv];

function iconForCategory(category: string) {
  if (category === "Trending") return Flame;
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return ICON_POOL[hash % ICON_POOL.length];
}

function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

function extractYoutubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1) || null;
    const v = parsed.searchParams.get("v");
    if (v) return v;
    const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
    return embedMatch ? embedMatch[1] : null;
  } catch {
    return null;
  }
}

function buildCards(videos: TVVideo[]): HubCard[] {
  const cards: HubCard[] = [];

  cards.push({
    id: "featured-pilot",
    title: featuredVideo.title,
    summary: featuredVideo.description,
    categories: [featuredVideo.label],
    href: `https://www.youtube.com/watch?v=${featuredVideo.id}`,
    videoId: featuredVideo.id,
    thumb: { kind: "plain", url: youtubeThumb(featuredVideo.id) },
  });

  for (const production of PRODUCTIONS) {
    cards.push({
      id: `production-${production.id}`,
      title: production.title,
      summary: production.desc,
      categories: ["Productions"],
      href: `https://www.youtube.com/watch?v=${production.id}`,
      videoId: production.id,
      thumb: { kind: "plain", url: youtubeThumb(production.id) },
    });
  }

  for (const section of videoSections) {
    for (const video of section.videos) {
      cards.push({
        id: `section-${video.id}`,
        title: video.title,
        categories: [section.title],
        href: `https://www.youtube.com/watch?v=${video.id}`,
        videoId: video.id,
        thumb: { kind: "plain", url: youtubeThumb(video.id) },
      });
    }
  }

  for (const video of videos) {
    if (!video.featuredImage) continue;
    cards.push({
      id: video._id,
      title: video.title,
      summary: video.summary,
      categories: video.tags && video.tags.length > 0 ? video.tags : ["Trending"],
      href: video.youtubeUrl,
      videoId: extractYoutubeId(video.youtubeUrl),
      thumb: { kind: "sanity", image: video.featuredImage },
    });
  }

  return cards;
}

function CardThumb({ card, sizes }: { card: HubCard; sizes: string }) {
  if (card.thumb.kind === "sanity") {
    return (
      <NextImage
        src={urlFor(card.thumb.image).width(640).height(360).url()}
        alt=""
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }
  return (
    <Image
      src={card.thumb.url}
      alt=""
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  );
}

export default function LifeHealthTV2Content({ videos = [] }: { videos?: TVVideo[] }) {
  const cards = useMemo(() => buildCards(videos), [videos]);

  const categories = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const card of cards) {
      for (const category of card.categories) {
        if (!seen.has(category)) {
          seen.add(category);
          list.push(category);
        }
      }
    }
    return list;
  }, [cards]);

  const [active, setActive] = useState("Trending");
  const [playing, setPlaying] = useState<HubCard | null>(null);

  const visibleCards = active === "Trending" ? cards : cards.filter((c) => c.categories.includes(active));

  const heroCards = cards.slice(0, 2);

  const playCard = (card: HubCard) => {
    if (card.videoId) {
      setPlaying(card);
    } else {
      window.open(card.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-teal-50/40">
      <div className="absolute inset-0"><div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-200/30 blur-3xl" /></div>

      <div className="relative pb-16 pt-28 lg:pb-20 lg:pt-36">
        <div className="container-wide text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-700"><Play className="h-3 w-3 fill-teal-600" />LifeHealth TV</span>
          <h1 className="mb-6 font-heading text-3xl font-bold tracking-tight text-navy-900 md:text-5xl">Watch healthcare, <span className="text-teal-600">reimagined.</span></h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-500">Product tours, real-world deployments, and conversations with the people building connected care — all on our YouTube channel.</p>
          <a href="https://www.youtube.com/@CTIAFRICA?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-4 font-semibold text-white shadow-lg shadow-teal-500/25 transition-colors hover:bg-teal-500"><YoutubeIcon className="h-5 w-5" />Subscribe on YouTube</a>
        </div>
      </div>

      <div className="relative pb-20">
      <div className="container-wide">
        {/* Hero banners */}
        <div className="grid gap-4 sm:grid-cols-2">
          {heroCards.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => playCard(card)}
              className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-200 text-left shadow-xl ring-1 ring-slate-100"
            >
              <CardThumb card={card} sizes="(min-width: 640px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center gap-3 p-6 lg:p-8">
                <h2 className="max-w-xs font-heading text-xl font-bold leading-tight text-white lg:text-2xl">
                  {card.title}
                </h2>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors group-hover:bg-teal-500">
                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                  </span>
                  Watch now
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {["Trending", ...categories].map((category) => {
            const Icon = iconForCategory(category);
            const isActive = active === category;
            return (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`flex flex-none items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-10"
          >
            <h3 className="mb-5 font-heading text-lg font-bold text-navy-900">
              {active === "Trending" ? "Trending Now" : `Trending in ${active}`}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {visibleCards.map((card) => (
                <button key={card.id} type="button" onClick={() => playCard(card)} className="group block w-full text-left">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-200 shadow-md ring-1 ring-slate-100">
                    <CardThumb card={card} sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw" />
                    <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30">
                      <Play className="h-8 w-8 fill-white text-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </div>
                  <p className="mt-2.5 line-clamp-2 text-sm font-medium leading-snug text-navy-900 group-hover:text-teal-600">
                    {card.title}
                  </p>
                </button>
              ))}
            </div>
            {visibleCards.length === 0 ? (
              <p className="text-sm text-slate-400">No videos in this category yet.</p>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
      </div>

      <VideoModal videoId={playing?.videoId ?? null} title={playing?.title} onClose={() => setPlaying(null)} />
    </div>
  );
}
