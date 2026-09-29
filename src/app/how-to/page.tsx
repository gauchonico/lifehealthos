import { client } from "@/sanity/client";
import { howToVideosQuery } from "@/sanity/queries";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/shared/CTABanner";
import HowToContent from "./HowToContent";
import type { Image as SanityImage } from "sanity";

export const metadata = pageMetadata({
  title: "How-To Guides",
  description: "Short video explainers that walk you through LifeHealth products step by step.",
  path: "/how-to",
});

export type HowToVideo = {
  _id: string;
  title: string;
  slug: string;
  youtubeUrl?: string;
  videoFileUrl?: string;
  orientation?: "landscape" | "portrait";
  featuredImage?: SanityImage;
  summary?: string;
  tags?: string[];
  publishDate?: string;
};

export default async function HowToPage() {
  const videos = await client.fetch<HowToVideo[]>(howToVideosQuery);

  return (
    <>
      <HowToContent videos={videos} />
      <CTABanner
        headline="Need a hand getting set up?"
        subtitle="Our team can walk you through any LifeHealth product, live."
        primaryCTA={{ label: "Talk to our team", href: "/contact" }}
      />
    </>
  );
}
