import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { allResourceSlugsQuery, resourceBySlugQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

type Resource = {
  _id: string;
  title: string;
  slug: string;
  type: string;
  summary?: string;
  body?: PortableTextBlock[];
  image?: SanityImage;
  file?: { url?: string };
  tags?: string[];
  publishDate?: string;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allResourceSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await client.fetch<Resource | null>(resourceBySlugQuery, { slug });
  if (!resource) return {};
  return pageMetadata({
    title: resource.title,
    description: resource.summary,
    path: `/resources/${slug}`,
    image: resource.image ? urlFor(resource.image).width(1200).height(630).url() : undefined,
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await client.fetch<Resource | null>(resourceBySlugQuery, { slug });

  if (!resource) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{resource.title}</h1>
      {resource.summary ? (
        <p className="mt-3 text-lg text-neutral-600">{resource.summary}</p>
      ) : null}

      {resource.image ? (
        <Image
          src={urlFor(resource.image).width(1200).height(630).url()}
          alt=""
          width={1200}
          height={630}
          className="mt-8 w-full rounded-lg object-cover"
        />
      ) : null}

      {resource.file?.url ? (
        <a
          href={resource.file.url}
          className="mt-6 inline-block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700"
        >
          Download
        </a>
      ) : null}

      {resource.body ? (
        <div className="prose prose-neutral mt-10 max-w-none">
          <PortableText value={resource.body} />
        </div>
      ) : null}
    </article>
  );
}
