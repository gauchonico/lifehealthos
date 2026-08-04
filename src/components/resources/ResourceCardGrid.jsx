import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

const typeLabels = {
  case_study: "Case Study",
  white_paper: "White Paper",
  product_brief: "Product Brief",
  news: "News",
};

export default function ResourceCardGrid({ resources, emptyMessage = "No resources published in this category yet." }) {
  if (resources.length === 0) {
    return <p className="text-center text-slate-400">{emptyMessage}</p>;
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <li key={resource._id} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-6">
          {resource.image ? (
            <Image
              src={urlFor(resource.image).width(400).height(240).url()}
              alt=""
              width={400}
              height={240}
              className="h-40 w-full rounded-lg object-cover"
            />
          ) : null}
          <span className="text-xs font-medium uppercase tracking-wide text-teal-600">
            {typeLabels[resource.type] ?? resource.type}
          </span>
          <h3 className="font-heading font-semibold text-navy-900">
            <Link href={`/resources/${resource.slug}`} className="hover:underline">
              {resource.title}
            </Link>
          </h3>
          {resource.summary ? <p className="text-sm text-slate-500">{resource.summary}</p> : null}
        </li>
      ))}
    </ul>
  );
}
