"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// The /workspace admin tool is a separate surface — no marketing header/nav
// or footer around it, and no top offset reserved for a fixed header that
// isn't there.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWorkspace = pathname?.startsWith("/workspace");

  if (isWorkspace) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
