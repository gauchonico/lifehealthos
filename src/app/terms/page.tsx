import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Terms governing your access to and use of the LifeHealth website and services provided by CTI Africa LLC.",
  path: "/terms",
});

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="container-narrow">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-navy-900 mb-8">Terms of Use</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-500 leading-relaxed text-lg mb-6">
            These Terms of Use govern your access to and use of the LifeHealth website and services provided by CTI Africa LLC.
          </p>
          <p className="text-slate-400 italic">
            This is a placeholder page. The full terms of use will be published here once finalized and approved by LifeHealth&apos;s legal team.
          </p>
        </div>
      </div>
    </div>
  );
}
