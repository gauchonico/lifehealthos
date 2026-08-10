import type { Metadata } from "next";

/**
 * Builds page-specific title/description/canonical/OG/Twitter metadata.
 * `path` must be the page's own route (e.g. "/about") — without this,
 * pages inherit the root layout's homepage canonical + social card.
 *
 * No image is set unless `image` is passed explicitly — link previews
 * show title/description text only.
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
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
