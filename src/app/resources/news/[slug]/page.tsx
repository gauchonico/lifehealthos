import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { allNewsSlugsQuery, newsBySlugQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  body?: PortableTextBlock[];
  publishDate?: string;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allNewsSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await client.fetch<NewsItem | null>(newsBySlugQuery, { slug });
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/resources/news/${slug}`,
    image: item.coverImage ? urlFor(item.coverImage).width(1200).height(630).url() : undefined,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await client.fetch<NewsItem | null>(newsBySlugQuery, { slug });

  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
      {item.publishDate ? (
        <p className="mt-2 text-sm text-neutral-400">{new Date(item.publishDate).toLocaleDateString()}</p>
      ) : null}

      {item.coverImage ? (
        <Image
          src={urlFor(item.coverImage).width(1200).height(630).url()}
          alt=""
          width={1200}
          height={630}
          className="mt-8 w-full rounded-lg object-cover"
        />
      ) : null}

      {item.excerpt ? <p className="mt-6 text-lg text-neutral-600">{item.excerpt}</p> : null}

      {item.body ? (
        <div className="prose prose-neutral mt-10 max-w-none">
          <PortableText value={item.body} />
        </div>
      ) : null}
    </article>
  );
}
