import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed to Vercel as a real Next.js app (not a static export) — this
  // is what makes the /workspace admin (server-side auth, Sanity writes)
  // and on-demand revalidation from the Sanity webhook possible.
  experimental: {
    serverActions: {
      // Workspace forms upload images/files through saveDocument; the 1MB
      // default rejects ordinary photos. Kept under Vercel's ~4.5MB request
      // body cap — videos bypass this entirely (see VideoUploadField).
      bodySizeLimit: "4mb",
    },
  },
  images: {
    // Sanity's image CDN already resizes via urlFor().width()/.url();
    // no need for Vercel's optimizer to double-process those.
    unoptimized: true,
  },
  async redirects() {
    // 301s preserving SEO equity from the old lifehealth.global WordPress
    // site. Old app/product pages (Wallet, Call-the-Doctor, Admin Portal,
    // School Program, etc.) are intentionally left out — the new product
    // taxonomy (Passport/Nexus/LifeLab/X-Validator/VIMA) replaces them and
    // those old URLs are allowed to 404.
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/faqs", destination: "/faq", permanent: true },
      { source: "/pricing-and-plans", destination: "/pricing", permanent: true },
      { source: "/lifehealth-tv-2", destination: "/lifehealth-tv", permanent: true },
      { source: "/lifehealth-blog", destination: "/blog", permanent: true },
      { source: "/lifehealth-privacy-policy", destination: "/privacy", permanent: true },
      { source: "/lifehealth-privacy-policy-mobile", destination: "/privacy-mobile", permanent: true },
      { source: "/privacy-policy-passport-mobile", destination: "/privacy-passport-mobile", permanent: true },
      { source: "/lifehealth-account-delete-request", destination: "/account-deletion", permanent: true },
      { source: "/category/news-events", destination: "/resources/news", permanent: true },
      { source: "/category/uncategorized", destination: "/blog", permanent: true },
      { source: "/tag/:tag", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
