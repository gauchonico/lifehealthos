import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import InitialLoadOverlay from "@/components/layout/InitialLoadOverlay";
import { Toaster } from "@/components/ui/toaster";
import PostHogProvider from "@/components/PostHogProvider";
import { client } from "@/sanity/client";
import { allSolutionsQuery } from "@/sanity/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lhn.lifehealth.global";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LifeHealth — One Healthcare Operating System. Unlimited Solutions.",
    template: "%s | LifeHealth",
  },
  description:
    "A unified digital health platform connecting patients, providers, laboratories, researchers, healthcare organizations, payers, and governments to deliver better healthcare outcomes.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LifeHealth — One Healthcare Operating System",
    description:
      "A unified digital health platform connecting patients, providers, laboratories, researchers, and governments to deliver better healthcare outcomes.",
    type: "website",
    url: siteUrl,
    siteName: "LifeHealth",
  },
  twitter: {
    card: "summary",
    title: "LifeHealth — One Healthcare Operating System",
    description:
      "A unified digital health platform connecting patients, providers, laboratories, researchers, and governments.",
  },
};

type NavSolution = { name: string; slug: string };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const solutions = await client.fetch<NavSolution[]>(allSolutionsQuery);

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PostHogProvider>
          <InitialLoadOverlay />
          <SiteChrome solutions={solutions}>{children}</SiteChrome>
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
