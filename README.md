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

A private, sidebar CMS for Resources/Videos/Webinars/News/Solutions/FAQs/Documents that writes to Sanity directly (via a server-only write token), without needing Sanity Studio access.

**Access model — two tiers, approval-gated:**
- **Admins** (`WORKSPACE_ADMINS` — one or more accounts) log in directly at `/workspace/login` with their own real password — no email round-trip. Any admin gets an **Access Requests** page in the sidebar for approving/denying everyone else.
- **Everyone else** submits their email at `/workspace/request`, which creates a pending `accessRequest` document in Sanity. Nothing is sent until the admin approves it from `/workspace/access-requests` — approving immediately emails a signed, self-verifying one-time code (valid 30 min, via Resend), so there's no second round trip for the requester. (Requesting again later, once approved, also re-sends a fresh code — handy if the first one expired.) That code is entered as the "password" at `/workspace/login` to get a session cookie (valid 7 days).
- `src/proxy.ts` gates every `/workspace/*` route on having *any* valid session; the Access Requests page additionally checks for the `admin` role itself (both in the page and in its server actions — never relying on the sidebar link being hidden alone).

The one-time codes and session cookies are still stateless — HMAC-signed over `{email, role, purpose, exp}`, verified by signature + expiry alone, so a leaked code can't be individually revoked before it expires. What *is* persisted (in Sanity, as plain `accessRequest` documents — no credentials in there) is who's actually allowed to request a code at all, which is what makes this an approval workflow rather than a static allowlist.

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
| `WORKSPACE_ADMINS` | Comma-separated `email:password` pairs — one per admin account, each logging in directly and able to approve/deny everyone else. Passwords can't contain a comma or colon. Compared via an HMAC'd constant-time-ish check, not stored anywhere else. |
| `RESEND_API_KEY` | Sends the workspace one-time-password email |
| `WORKSPACE_EMAIL_FROM` | Optional. Defaults to Resend's shared test sender; set once a sending domain is verified in Resend |
