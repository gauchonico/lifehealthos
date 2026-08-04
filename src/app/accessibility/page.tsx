import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accessibility Statement",
  description:
    "LifeHealth's commitment to digital accessibility for people with disabilities.",
  path: "/accessibility",
});

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-8">Accessibility Statement</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-500 leading-relaxed text-lg mb-6">
            CTI Africa LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
          </p>
          <p className="text-slate-400 italic">
            This is a placeholder page. The full accessibility statement will be published here once finalized.
          </p>
        </div>
      </div>
    </div>
  );
}
