import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { allPostsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "News, product updates, and perspectives from the LifeHealth team.",
  path: "/blog",
});

type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  publishedAt?: string;
  author?: { name?: string };
};

export default async function BlogIndexPage() {
  const posts = await client.fetch<PostListItem[]>(allPostsQuery);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-neutral-500">
          No posts published yet.
        </p>
      ) : (
        <ul className="mt-10 flex flex-col gap-10">
          {posts.map((post) => (
            <li key={post._id} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              {post.coverImage ? (
                <Image
                  src={urlFor(post.coverImage).width(320).height(200).url()}
                  alt=""
                  width={320}
                  height={200}
                  className="h-40 w-full shrink-0 rounded-lg object-cover sm:w-56"
                />
              ) : null}
              <div>
                <h2 className="text-xl font-medium">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt ? (
                  <p className="mt-2 text-sm text-neutral-600">{post.excerpt}</p>
                ) : null}
                <p className="mt-2 text-xs text-neutral-400">
                  {post.author?.name}
                  {post.publishedAt
                    ? ` · ${new Date(post.publishedAt).toLocaleDateString()}`
                    : null}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
