import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { allPostSlugsQuery, postBySlugQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  body?: PortableTextBlock[];
  publishedAt?: string;
  seo?: { metaTitle?: string; metaDescription?: string };
  author?: { name?: string; role?: string; bio?: string };
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allPostSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
  if (!post) return {};
  return pageMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    path: `/blog/${slug}`,
    image: post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-2 text-sm text-neutral-400">
        {post.author?.name}
        {post.publishedAt
          ? ` · ${new Date(post.publishedAt).toLocaleDateString()}`
          : null}
      </p>

      {post.coverImage ? (
        <Image
          src={urlFor(post.coverImage).width(1200).height(630).url()}
          alt=""
          width={1200}
          height={630}
          className="mt-8 w-full rounded-lg object-cover"
        />
      ) : null}

      {post.body ? (
        <div className="prose prose-neutral mt-10 max-w-none">
          <PortableText value={post.body} />
        </div>
      ) : null}
    </article>
  );
}
