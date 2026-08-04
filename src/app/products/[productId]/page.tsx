import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import ProductHero from "@/components/products/ProductHero";
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

  return (
    <>
      <ProductHero product={product} />
      <ProductCapabilityGrid product={product} />
      <ProductConnections product={product} />
      <CTABanner
        headline={`Explore ${product.name} With LifeHealth`}
        subtitle="Talk with our team about how this connected capability can support your healthcare model."
      />
    </>
  );
}
