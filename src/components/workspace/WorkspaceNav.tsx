"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileStack,
  Video,
  Presentation,
  FolderOpen,
  HelpCircle,
  Newspaper,
  Building2,
  ShieldCheck,
  Link2,
} from "lucide-react";
import { collections } from "@/lib/workspaceCollections";

const icons: Record<string, typeof FileStack> = {
  resources: FileStack,
  videos: Video,
  webinars: Presentation,
  news: Newspaper,
  solutions: Building2,
  faqs: HelpCircle,
  documents: FolderOpen,
  quickLinks: Link2,
};

const linkClass = (active: boolean) =>
  `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
    active ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-navy-900"
  }`;

export default function WorkspaceNav({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="flex-1 space-y-1 px-3 py-4">
      <Link href="/workspace" className={linkClass(pathname === "/workspace")}>
        <LayoutDashboard className="h-4 w-4" /> Dashboard
      </Link>
      {collections.map((c) => {
        const Icon = icons[c.key] ?? FileStack;
        const href = `/workspace/${c.key}`;
        return (
          <Link key={c.key} href={href} className={linkClass(isActive(href))}>
            <Icon className="h-4 w-4" /> {c.label}
          </Link>
        );
      })}
      {isAdmin ? (
        <Link href="/workspace/access-requests" className={linkClass(isActive("/workspace/access-requests"))}>
          <ShieldCheck className="h-4 w-4" /> Access Requests
        </Link>
      ) : null}
    </nav>
  );
}
