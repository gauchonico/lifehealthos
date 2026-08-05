import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/image";

export default function NewsCardGrid({ items }) {
  if (items.length === 0) {
    return <p className="text-center text-slate-400">No news published yet.</p>;
  }

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <li key={item._id} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-6">
          {item.coverImage ? (
            <Image
              src={urlFor(item.coverImage).width(400).height(240).url()}
              alt=""
              width={400}
              height={240}
              className="h-40 w-full rounded-lg object-cover"
            />
          ) : null}
          <span className="text-xs font-medium uppercase tracking-wide text-teal-600">News</span>
          <h3 className="font-heading font-semibold text-navy-900">
            <Link href={`/resources/news/${item.slug}`} className="hover:underline">
              {item.title}
            </Link>
          </h3>
          {item.excerpt ? <p className="text-sm text-slate-500">{item.excerpt}</p> : null}
        </li>
      ))}
    </ul>
  );
}
