import type { Metadata } from "next";

const defaultOgImage =
  "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7318e31b1_generated_45527cb5.png";

/**
 * Builds page-specific title/description/canonical/OG/Twitter metadata.
 * `path` must be the page's own route (e.g. "/about") — without this,
 * pages inherit the root layout's homepage canonical + social card.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}): Metadata {
  const ogImage = image || defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "LifeHealth",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
