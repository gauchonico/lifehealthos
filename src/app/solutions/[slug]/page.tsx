import { notFound } from "next/navigation";
import { getSolutionBySlug, solutions } from "@/lib/solutionsData";
import SolutionPageContent from "@/components/solutions/SolutionPageContent";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
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
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return <SolutionPageContent slug={slug} />;
}
