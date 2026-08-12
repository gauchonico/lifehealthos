import { client } from "@/sanity/client";
import { allVideosQuery } from "@/sanity/queries";
import { pageMetadata } from "@/lib/seo";
import LifeHealthTV2Content from "./LifeHealthTV2Content";
import type { Image as SanityImage } from "sanity";

export const metadata = pageMetadata({
  title: "LifeHealth TV Hub",
  description: "Browse LifeHealth video content by topic in a premium streaming-style hub.",
  path: "/lifehealth-tv2",
});

export type TVVideo = {
  _id: string;
  title: string;
  slug: string;
  youtubeUrl: string;
  featuredImage?: SanityImage;
  summary?: string;
  tags?: string[];
};

export default async function LifeHealthTV2Page() {
  const videos = await client.fetch<TVVideo[]>(allVideosQuery);

  return <LifeHealthTV2Content videos={videos} />;
}
