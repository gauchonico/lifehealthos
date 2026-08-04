Next.js marketing/content site for LHN, statically exported and content-driven by the Sanity Studio in `../studio`.

## Setup

1. Create the Sanity project first (see `../studio/README.md`) — you need its Project ID before this app can fetch content.
2. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<your project id>
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
   ```
3. `npm install` (already done if you're reading this right after scaffolding)
4. `npm run dev` — open http://localhost:3000

## Content-driven routes

- `/blog`, `/blog/[slug]` — blog posts (`post` documents in Sanity)
- `/resources`, `/resources/[slug]` — case studies, white papers, webinars, etc. (`resource` documents)
- `/faq` — FAQ list (`faq` documents)

These are intentionally plain/unstyled for now — they prove the Sanity → Next.js data flow. The next step is porting the visual design from the original Base44 pages (`src/pages/Resources.jsx`, `src/pages/FAQPage.jsx`, etc. in the repo root) onto these routes, and adding the rest of the marketing pages (Home, About, Solutions, Trust Center...).

## Build & static export

```bash
npm run build
```

Because `next.config.ts` sets `output: "export"`, this produces a fully static `out/` directory — no Node server required to serve it. That's what gets uploaded to Hostinger.

Dynamic routes (`/blog/[slug]`, `/resources/[slug]`) are pre-rendered for every published slug at build time via `generateStaticParams`. **This means new/edited content requires a rebuild** — set up a Sanity webhook (Settings → API → Webhooks in sanity.io) pointing at whatever rebuild trigger you wire up on deploy (a small script over SSH, or a CI job that runs `npm run build` and re-uploads `out/`). Until that's set up, rebuild and redeploy manually after editing content.

## Deploying to Hostinger (shared business hosting)

`out/` is static HTML/CSS/JS — upload its contents to `public_html` (or a subdirectory) via File Manager or SFTP. No Node.js app setup needed in cPanel for this piece, since there's no server process to run. (The Sanity Studio, if you self-host it instead of using Sanity's free hosting, is a separate concern — see `../studio/README.md`.)
