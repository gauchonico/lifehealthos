import { client } from "@/sanity/client";
import { allVideosQuery } from "@/sanity/queries";
import LifeHealthTVContent from "./LifeHealthTVContent";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

export const metadata = pageMetadata({
  title: "LifeHealth TV",
  description:
    "Product walkthroughs, real deployment stories, and conversations with the people building healthcare for billions — now on YouTube.",
  path: "/lifehealth-tv",
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

export default async function LifeHealthTVPage() {
  const videos = await client.fetch<TVVideo[]>(allVideosQuery);

  return <LifeHealthTVContent videos={videos} />;
}
