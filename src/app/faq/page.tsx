import { client } from "@/sanity/client";
import { allFaqsQuery } from "@/sanity/queries";
import CTABanner from "@/components/shared/CTABanner";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about the LifeHealth platform, solutions, deployment, and implementation.",
  path: "/faq",
});

type Faq = {
  _id: string;
  question: string;
  answer: string;
  category?: string;
};

export default async function FAQPage() {
  const faqs = await client.fetch<Faq[]>(allFaqsQuery);

  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container-wide text-center">
          <span className="inline-block px-3 py-1.5 bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">FAQ</span>
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight mb-6">
            Frequently Asked <span className="text-teal-400">Questions</span>
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          {faqs.length === 0 ? (
            <p className="text-center text-slate-400">No FAQs published yet.</p>
          ) : (
            <FaqAccordion faqs={faqs} />
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
