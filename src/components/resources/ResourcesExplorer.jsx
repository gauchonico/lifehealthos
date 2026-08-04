import Link from "next/link";
import { FileText, BookOpen, Newspaper, Presentation, ArrowRight } from "lucide-react";
import ResourceCardGrid from "@/components/resources/ResourceCardGrid";

const categories = [
  { label: "Case Studies", href: "/resources/case-studies", icon: FileText, desc: "Real results from real organizations using LifeHealth." },
  { label: "White Papers", href: "/resources/white-papers", icon: BookOpen, desc: "In-depth analysis and insights on healthcare technology." },
  { label: "Product Briefs", href: "/resources/product-briefs", icon: FileText, desc: "Concise overviews of LifeHealth platforms and solutions." },
  { label: "News & Updates", href: "/resources/news", icon: Newspaper, desc: "The latest announcements from LifeHealth." },
  { label: "Videos & Webinars", href: "/resources/videos-webinars", icon: Presentation, desc: "Demos, testimonials, and recorded sessions with industry experts." },
];

export default function ResourcesExplorer({ resources }) {
  const latest = resources.filter((r) => r.type !== "white_paper");

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-colors hover:border-teal-300 hover:bg-white"
                >
                  <Icon className="w-10 h-10 text-teal-500 mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-navy-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:text-teal-700">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-white">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Latest Resources</h2>
          <ResourceCardGrid resources={latest} emptyMessage="No resources published yet." />
        </div>
      </section>
    </>
  );
}
