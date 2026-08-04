// The live Base44 app still hosts auth, the pricing estimator, AI Core, and
// the admin dashboard — this Next.js site only covers the marketing/content
// pages, so links into those tools point back at the Base44 deployment.
export const BASE44_APP_URL =
  process.env.NEXT_PUBLIC_BASE44_APP_URL || "https://life-health.base44.app";

export function base44Path(path) {
  return `${BASE44_APP_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
