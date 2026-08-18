import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProductHero from "@/components/products/ProductHero";
import PassportHero from "@/components/products/PassportHero";
import LifeLabHero from "@/components/products/LifeLabHero";
import ProductCapabilityGrid from "@/components/products/ProductCapabilityGrid";
import ProductConnections from "@/components/products/ProductConnections";
import CTABanner from "@/components/shared/CTABanner";
import { products } from "@/lib/productData";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(products).map((productId) => ({ productId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products[productId as keyof typeof products];
  if (!product) return {};
  return pageMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${productId}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = products[productId as keyof typeof products];

  if (!product) notFound();

  const customHeroes: Record<string, () => React.JSX.Element> = {
    passport: PassportHero,
    lifelab: LifeLabHero,
  };
  const CustomHero = customHeroes[productId];

  const ctaCopy: Record<string, { headline: string; subtitle: string }> = {
    lifelab: {
      headline: "Put diagnostic intelligence in every encounter.",
      subtitle:
        "From rapid antigen tests to genomic panels — LifeLab delivers real-time result intelligence, seamless EMR integration, and patient-owned data at every facility tier.",
    },
  };
  const cta = ctaCopy[productId] ?? {
    headline: `Explore ${product.name} With LifeHealth`,
    subtitle: "Talk with our team about how this connected capability can support your healthcare model.",
  };

  return (
    <>
      {CustomHero ? <CustomHero /> : <ProductHero product={product} />}
      <ProductCapabilityGrid product={product} />
      <ProductConnections product={product} />
      <CTABanner headline={cta.headline} subtitle={cta.subtitle} />
    </>
  );
}
