import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { writeClient } from "@/sanity/writeClient";
import { collections } from "@/lib/workspaceCollections";

export default async function WorkspaceDashboard() {
  const counts = await Promise.all(
    collections.map((c) => writeClient.fetch<number>(`count(*[_type == $type])`, { type: c.sanityType })),
  );

  return (
    <div>
      <h1 className="mb-1 font-heading text-2xl font-bold text-navy-900">Dashboard</h1>
      <p className="mb-8 text-sm text-slate-500">Manage your Sanity content from here.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((c, i) => (
          <Link
            key={c.key}
            href={`/workspace/${c.key}`}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-teal-300"
          >
            <div>
              <p className="font-heading text-2xl font-bold text-navy-900">{counts[i]}</p>
              <p className="text-sm text-slate-500">{c.label}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-teal-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}
