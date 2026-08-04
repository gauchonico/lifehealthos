import Image from "next/image";
import { Play } from "lucide-react";
import { client } from "@/sanity/client";
import { allVideosQuery, allWebinarsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import CTABanner from "@/components/shared/CTABanner";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

export const metadata = pageMetadata({
  title: "Videos & Webinars",
  description: "See LifeHealth in action through demos, testimonials, and recorded sessions with industry experts.",
  path: "/resources/videos-webinars",
});

type MediaItem = {
  _id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  featuredImage?: SanityImage;
  summary?: string;
};

function MediaGrid({ items, emptyMessage }: { items: MediaItem[]; emptyMessage: string }) {
  if (items.length === 0) {
    return <p className="text-slate-400">{emptyMessage}</p>;
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <li key={item._id}>
          <a href={item.youtubeUrl} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200">
              {item.featuredImage ? (
                <Image
                  src={urlFor(item.featuredImage).width(500).height(280).url()}
                  alt=""
                  width={500}
                  height={280}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : null}
              <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30">
                <Play className="h-10 w-10 fill-white text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </div>
            <h3 className="mt-3 font-heading font-semibold text-navy-900 group-hover:text-teal-600">{item.title}</h3>
            {item.summary ? <p className="mt-1 text-sm text-slate-500">{item.summary}</p> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default async function VideosWebinarsPage() {
  const [videos, webinars] = await Promise.all([
    client.fetch<MediaItem[]>(allVideosQuery),
    client.fetch<MediaItem[]>(allWebinarsQuery),
  ]);

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">Resources</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Videos &amp; <span className="text-teal-400">Webinars</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See LifeHealth in action through demos, testimonials, and recorded sessions with industry experts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Videos</h2>
            <MediaGrid items={videos} emptyMessage="No videos published yet." />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Webinars</h2>
            <MediaGrid items={webinars} emptyMessage="No webinars published yet." />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
