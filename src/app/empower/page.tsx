import MPWRFeature from "@/components/home/MPWRFeature";
import CTABanner from "@/components/shared/CTABanner";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "MPWR Loyalty Platform",
  description:
    "A connected engagement programme that recognizes eligible healthy actions across the LifeHealth ecosystem.",
  path: "/empower",
});

export default function Empower() {
  return <main className="bg-slate-50 pt-20">
    <section className="bg-navy-900 px-4 py-16 text-center md:py-24">
      <span className="rounded-full bg-lime-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950">LifeHealth Platform</span>
      <h1 className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">MPWR Loyalty Platform</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">A connected engagement programme that recognizes eligible healthy actions across the LifeHealth ecosystem.</p>
    </section>
    <MPWRFeature />
    <CTABanner headline="Build A More Engaged Health Community." subtitle="Explore how Empower can support your health programme, members, and partners." />
  </main>;
}
