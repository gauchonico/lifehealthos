import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import PostHogProvider from "@/components/PostHogProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lhn.lifehealth.global";
const ogImage = "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/7318e31b1_generated_45527cb5.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LifeHealth OS — One Healthcare Operating System. Unlimited Solutions.",
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
    title: "LifeHealth OS — One Healthcare Operating System",
    description:
      "A unified digital health platform connecting patients, providers, laboratories, researchers, and governments to deliver better healthcare outcomes.",
    type: "website",
    url: siteUrl,
    siteName: "LifeHealth",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeHealth OS — One Healthcare Operating System",
    description:
      "A unified digital health platform connecting patients, providers, laboratories, researchers, and governments.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PostHogProvider>
          <Header />
          <main className="flex-1 pt-16 lg:pt-20">{children}</main>
          <Footer />
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
