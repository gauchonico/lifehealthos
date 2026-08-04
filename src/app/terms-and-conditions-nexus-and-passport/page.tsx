import ReactMarkdown from "react-markdown";
import nexusPassportTerms from "@/lib/nexusPassportTerms";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions — Nexus and Passport",
  description: "Terms and Conditions of Use for LifeHealth Nexus and Passport.",
  path: "/terms-and-conditions-nexus-and-passport",
});

export default function NexusPassportTerms() {
  return (
    <main className="bg-slate-50">
      <section className="bg-navy-900 py-20 md:py-24">
        <div className="container-narrow">
          <p className="text-teal-300 text-sm font-semibold uppercase tracking-[0.2em] mb-4">LifeHealth Platform</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">Terms and Conditions of Use</h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-slate-300 text-sm">
            <span>Effective Date: 16/07/2026</span>
            <span>Last Updated: 16/07/2026</span>
          </div>
        </div>
      </section>
      <article className="container-narrow py-14 md:py-20">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10 md:px-14 md:py-14">
          <ReactMarkdown
            components={{
              h2: ({ children }) => <h2 className="mt-12 first:mt-0 font-heading text-2xl font-bold text-navy-900">{children}</h2>,
              p: ({ children }) => <p className="mt-4 text-slate-600 leading-7">{children}</p>,
              ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 leading-7">{children}</ul>,
              strong: ({ children }) => <strong className="font-semibold text-navy-900">{children}</strong>,
            }}
          >
            {nexusPassportTerms}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
