import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed to Vercel as a real Next.js app (not a static export) — this
  // is what makes the /workspace admin (server-side auth, Sanity writes)
  // and on-demand revalidation from the Sanity webhook possible.
  images: {
    // Sanity's image CDN already resizes via urlFor().width()/.url();
    // no need for Vercel's optimizer to double-process those.
    unoptimized: true,
  },
};

export default nextConfig;
