Next.js marketing site + `/workspace` admin for LHN, deployed to Vercel and content-driven by the Sanity Studio in `../studio`.

## Setup

1. Create the Sanity project first (see `../studio/README.md`) — you need its Project ID before this app can fetch content.
2. Copy `.env.local.example` to `.env.local` and fill in the Sanity + workspace variables (see [Environment variables](#environment-variables) below).
3. `npm install` (already done if you're reading this right after scaffolding)
4. `npm run dev` — open http://localhost:3000

## Content-driven routes

- `/blog`, `/blog/[slug]` — blog posts (`post` documents in Sanity)
- `/resources`, `/resources/[slug]`, and `/resources/{case-studies,white-papers,product-briefs,news,videos-webinars}` — `resource`, `video`, and `webinar` documents
- `/faq` — FAQ list (`faq` documents)
- `/workspace` — private admin: manage Resources, Videos, Webinars, and Documents without opening Sanity Studio directly (see below)

## Deploying (Vercel)

This is a normal server-rendered Next.js app — no static export. Connect the repo in the Vercel dashboard (or `vercel --prod` from this directory) and set the environment variables below on the project. Every push redeploys; no manual rebuild/reupload step.

### Content freshness (Sanity webhook → revalidation)

Pages are cached but invalidated on demand: `src/app/api/revalidate/route.ts` calls `revalidatePath("/", "layout")` whenever it's hit. Configure a Sanity webhook (sanity.io/manage → your project → API → Webhooks) to POST to:

```
https://<your-vercel-domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
```

on Create/Update/Delete for all document types. After that, publishing in Sanity shows up on the live site within seconds — no rebuild needed.

## The `/workspace` admin

A private, sidebar CMS for Resources/Videos/Webinars/Documents that writes to Sanity directly (via a server-only write token), without needing Sanity Studio access.

**Access model — stateless, no database:**
- `/workspace/request` — a pre-approved email (`WORKSPACE_ALLOWED_EMAILS`) requests access; a signed, self-verifying one-time token is emailed as their "password" (valid 30 min, via Resend).
- `/workspace/login` — email + that password in, a longer-lived signed session cookie out (valid 7 days).
- `src/proxy.ts` gates every other `/workspace/*` route on that session cookie.

There's no user database — tokens are HMAC-signed with `WORKSPACE_AUTH_SECRET` and verified by signature + expiry alone. This means a leaked access token can't be individually revoked before it expires; acceptable for a low-volume internal tool, but worth knowing.

## Environment variables

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project (public reads) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset, e.g. `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG URL base |
| `NEXT_PUBLIC_BASE44_APP_URL` | Links out to the Base44-hosted app/admin |
| `SANITY_WRITE_TOKEN` | Server-only. Sanity manage → API → Tokens → create one with **Editor** permission. Powers `/workspace` writes. Never expose with a `NEXT_PUBLIC_` prefix. |
| `SANITY_REVALIDATE_SECRET` | Shared secret for the Sanity webhook → `/api/revalidate` |
| `WORKSPACE_AUTH_SECRET` | Long random string signing workspace access/session tokens |
| `WORKSPACE_ALLOWED_EMAILS` | Comma-separated allowlist for who can request workspace access |
| `RESEND_API_KEY` | Sends the workspace one-time-password email |
| `WORKSPACE_EMAIL_FROM` | Optional. Defaults to Resend's shared test sender; set once a sending domain is verified in Resend |
