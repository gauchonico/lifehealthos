import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { allSolutionSlugsQuery, solutionBySlugQuery } from "@/sanity/queries";
import SolutionPageContent from "@/components/solutions/SolutionPageContent";
import { pageMetadata } from "@/lib/seo";

type Solution = {
  _id: string;
  name: string;
  slug: string;
  shortName?: string;
  icon?: string;
  headline?: string;
  coreMessage?: string;
  summary?: string;
  outcomes?: { title: string; description: string }[];
  challenges?: string[];
  includedPlatforms?: string[];
  includedCapabilities?: string[];
  optionalCapabilities?: string[];
  pricingDrivers?: string[];
  faqs?: { question: string; answer: string }[];
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allSolutionSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = await client.fetch<Solution | null>(solutionBySlugQuery, { slug });
  if (!solution) return {};
  return pageMetadata({
    title: solution.name,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = await client.fetch<Solution | null>(solutionBySlugQuery, { slug });

  if (!solution) notFound();

  return <SolutionPageContent solution={solution} />;
}
