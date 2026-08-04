import { client } from "@/sanity/client";
import { resourcesByTypeQuery } from "@/sanity/queries";
import CTABanner from "@/components/shared/CTABanner";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";
import { pageMetadata } from "@/lib/seo";
import type { Image as SanityImage } from "sanity";

export const metadata = pageMetadata({
  title: "Product Briefs",
  description: "Concise overviews of LifeHealth platforms and solutions.",
  path: "/resources/product-briefs",
});

type ResourceListItem = {
  _id: string;
  title: string;
  slug: string;
  type: string;
  summary?: string;
  image?: SanityImage;
  publishDate?: string;
};

export default async function ProductBriefsPage() {
  const resources = await client.fetch<ResourceListItem[]>(resourcesByTypeQuery, { type: "product_brief" });

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">Resources</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Product <span className="text-teal-400">Briefs</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Concise overviews of LifeHealth platforms and solutions.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <ResourceCardGrid resources={resources} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
