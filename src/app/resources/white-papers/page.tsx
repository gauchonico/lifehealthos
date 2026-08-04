import CTABanner from "@/components/shared/CTABanner";
import WhitePapersGate from "@/components/resources/WhitePapersGate";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "White Papers",
  description: "In-depth analysis and insights on healthcare technology.",
  path: "/resources/white-papers",
});

export default function WhitePapersPage() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">Resources</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            White <span className="text-teal-400">Papers</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">In-depth analysis and insights on healthcare technology.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <WhitePapersGate />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
