import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: fits Hostinger shared hosting (plain HTML/CSS/JS, no
  // always-on Node process required). Content updates require a rebuild
  // (see web/README.md), triggered by a Sanity webhook.
  output: "export",
  // Exports each route as `<route>/index.html` instead of `<route>.html` —
  // needed on plain Apache/LiteSpeed hosting (Hostinger), which serves
  // directory index files automatically but won't guess a `.html`
  // extension for an extensionless request like `/about`.
  trailingSlash: true,
  images: {
    // Sanity's image CDN already resizes via urlFor().width()/.url();
    // next/image's built-in optimizer isn't available in static export mode.
    unoptimized: true,
  },
};

export default nextConfig;
