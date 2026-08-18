"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/shared/ChatWidget";

// The /workspace admin tool is a separate surface — no marketing header/nav
// or footer around it, and no top offset reserved for a fixed header that
// isn't there.
type NavSolution = { name: string; slug: string };

export default function SiteChrome({
  children,
  solutions = [],
}: {
  children: React.ReactNode;
  solutions?: NavSolution[];
}) {
  const pathname = usePathname();
  const isWorkspace = pathname?.startsWith("/workspace");

  if (isWorkspace) {
    return <>{children}</>;
  }

  return (
    <>
      <Header solutions={solutions} />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
