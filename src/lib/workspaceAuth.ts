// Email+password auth for /workspace, in two tiers:
//
// - Admin: one fixed account (WORKSPACE_ADMIN_EMAIL / WORKSPACE_ADMIN_PASSWORD
//   env vars), logs in directly with a real password — no email round-trip.
// - Members: anyone else must first have an `accessRequest` Sanity doc with
//   status "approved" (set by the admin from inside /workspace) before they
//   can request a one-time login code by email.
//
// Tokens (the emailed one-time code, and the session cookie) are stateless:
// signed, self-verifying HMACs over {email, role, purpose, exp} — nothing
// persisted for them, so a leaked access code can't be individually revoked
// before its 30-minute expiry. The *approval* state itself (who's allowed to
// request a code at all) is what's actually persisted, in Sanity.

const ACCESS_TOKEN_TTL_SECONDS = 30 * 60; // 30 minutes
const SESSION_TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days
export const SESSION_COOKIE_NAME = "workspace_session";

export type Role = "admin" | "member";

type TokenPayload = {
  email: string;
  role: Role;
  purpose: "access" | "session";
  exp: number;
};

function bytesToBase64url(bytes: Uint8Array): string {
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlToBytes(str: string): Uint8Array {
  const padded = str.padEnd(str.length + ((4 - (str.length % 4)) % 4), "=");
  const base64 = padded.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function getSecret(): string {
  const secret = process.env.WORKSPACE_AUTH_SECRET;
  if (!secret) throw new Error("WORKSPACE_AUTH_SECRET is not set");
  return secret;
}

async function hmac(payload: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return bytesToBase64url(new Uint8Array(sig));
}

async function createToken(data: Omit<TokenPayload, "exp">, ttlSeconds: number): Promise<string> {
  const encoder = new TextEncoder();
  const payload: TokenPayload = { ...data, exp: Date.now() + ttlSeconds * 1000 };
  const payloadB64 = bytesToBase64url(encoder.encode(JSON.stringify(payload)));
  const signature = await hmac(payloadB64, getSecret());
  return `${payloadB64}.${signature}`;
}

async function verifyToken(token: string, purpose: TokenPayload["purpose"]): Promise<TokenPayload | null> {
  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return null;

  const expectedSignature = await hmac(payloadB64, getSecret());
  if (expectedSignature !== signature) return null;

  try {
    const payload = JSON.parse(new TextDecoder().decode(base64urlToBytes(payloadB64))) as TokenPayload;
    if (payload.purpose !== purpose) return null;
    if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function getAdminEmail(): string {
  return (process.env.WORKSPACE_ADMIN_EMAIL || "").trim().toLowerCase();
}

export function isAdminEmail(email: string): boolean {
  const adminEmail = getAdminEmail();
  return !!adminEmail && email.trim().toLowerCase() === adminEmail;
}

// Constant-time-ish comparison: HMAC both sides first so the compared
// strings are fixed-length digests rather than the raw, variable-length
// secrets — avoids a naive `===` leaking length/prefix via timing.
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const expected = process.env.WORKSPACE_ADMIN_PASSWORD;
  if (!expected) return false;
  const [a, b] = await Promise.all([hmac(password, getSecret()), hmac(expected, getSecret())]);
  return a === b;
}

export function createAccessToken(email: string): Promise<string> {
  return createToken({ email: email.trim().toLowerCase(), role: "member", purpose: "access" }, ACCESS_TOKEN_TTL_SECONDS);
}

export async function verifyAccessToken(email: string, token: string): Promise<boolean> {
  const payload = await verifyToken(token, "access");
  return !!payload && payload.email === email.trim().toLowerCase();
}

export function createSessionToken(email: string, role: Role): Promise<string> {
  return createToken({ email: email.trim().toLowerCase(), role, purpose: "session" }, SESSION_TOKEN_TTL_SECONDS);
}

export async function verifySessionToken(token: string): Promise<TokenPayload | null> {
  return verifyToken(token, "session");
}
