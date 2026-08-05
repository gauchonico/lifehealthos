import Link from "next/link";
import { LayoutDashboard, FileStack, Video, Presentation, FolderOpen, HelpCircle, LogOut } from "lucide-react";
import { collections } from "@/lib/workspaceCollections";
import { logout } from "@/app/workspace/actions";

const icons: Record<string, typeof FileStack> = {
  resources: FileStack,
  videos: Video,
  webinars: Presentation,
  faqs: HelpCircle,
  documents: FolderOpen,
};

export const metadata = { title: "Workspace", robots: { index: false, follow: false } };
// Always render fresh: this reflects live (including unpublished) Sanity
// content behind an auth check that depends on the request's session cookie
// — neither of those is safe to bake into a static/prerendered page.
export const dynamic = "force-dynamic";

export default function WorkspaceAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="flex w-64 flex-none flex-col border-r border-slate-200 bg-white">
        <div className="border-b border-slate-100 px-6 py-5">
          <span className="font-heading text-lg font-bold text-navy-900">LifeHealth</span>
          <span className="block text-xs font-semibold uppercase tracking-widest text-teal-600">Workspace</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          <Link href="/workspace" className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy-900">
            <LayoutDashboard className="h-4 w-4" /> Dashboard
          </Link>
          {collections.map((c) => {
            const Icon = icons[c.key] ?? FileStack;
            return (
              <Link
                key={c.key}
                href={`/workspace/${c.key}`}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy-900"
              >
                <Icon className="h-4 w-4" /> {c.label}
              </Link>
            );
          })}
        </nav>

        <form action={logout} className="border-t border-slate-100 px-3 py-4">
          <button type="submit" className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-red-600">
            <LogOut className="h-4 w-4" /> Log Out
          </button>
        </form>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-8 py-10">{children}</div>
      </main>
    </div>
  );
}
