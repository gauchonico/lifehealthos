import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { allPostSlugsQuery, allResourceSlugsQuery, allNewsSlugsQuery, allSolutionSlugsQuery } from "@/sanity/queries";
import { products } from "@/lib/productData";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lhn.lifehealth.global";

const staticRoutes = [
  "",
  "/about",
  "/platform",
  "/pricing",
  "/contact",
  "/capabilities",
  "/data-analytics",
  "/lifehealth-tv",
  "/long-term-care",
  "/empower",
  "/trust-center",
  "/resources",
  "/resources/case-studies",
  "/resources/white-papers",
  "/resources/product-briefs",
  "/resources/news",
  "/resources/videos-webinars",
  "/faq",
  "/blog",
  "/privacy",
  "/privacy-mobile",
  "/privacy-passport-mobile",
  "/account-deletion",
  "/legal",
  "/terms",
  "/accessibility",
  "/terms-and-conditions-nexus-and-passport",
  "/consent-form-passport-web-mobile",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, resourceSlugs, newsSlugs, solutionSlugs] = await Promise.all([
    client.fetch<string[]>(allPostSlugsQuery),
    client.fetch<string[]>(allResourceSlugsQuery),
    client.fetch<string[]>(allNewsSlugsQuery),
    client.fetch<string[]>(allSolutionSlugsQuery),
  ]);

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
  }));

  for (const slug of solutionSlugs) {
    entries.push({ url: `${siteUrl}/solutions/${slug}` });
  }

  for (const productId of Object.keys(products)) {
    entries.push({ url: `${siteUrl}/products/${productId}` });
  }

  for (const slug of postSlugs) {
    entries.push({ url: `${siteUrl}/blog/${slug}` });
  }

  for (const slug of resourceSlugs) {
    entries.push({ url: `${siteUrl}/resources/${slug}` });
  }

  for (const slug of newsSlugs) {
    entries.push({ url: `${siteUrl}/resources/news/${slug}` });
  }

  return entries;
}
