// Stateless email+password auth for /workspace. There is no database: the
// "password" emailed to a requester IS a signed, self-verifying token (HMAC
// over {email, exp}), and the session cookie set after login is the same
// kind of token with a longer TTL. Nothing is persisted, so a leaked access
// token can't be individually revoked before it expires (30 min) — an
// accepted tradeoff for a low-volume internal tool with no extra
// infrastructure (no KV/DB) to run.

const ACCESS_TOKEN_TTL_SECONDS = 30 * 60; // 30 minutes
const SESSION_TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days
export const SESSION_COOKIE_NAME = "workspace_session";

type TokenPayload = {
  email: string;
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

async function hmac(payloadB64: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payloadB64));
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

export function isEmailAllowed(email: string): boolean {
  const allowlist = (process.env.WORKSPACE_ALLOWED_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return allowlist.includes(email.trim().toLowerCase());
}

export function createAccessToken(email: string): Promise<string> {
  return createToken({ email: email.trim().toLowerCase(), purpose: "access" }, ACCESS_TOKEN_TTL_SECONDS);
}

export async function verifyAccessToken(email: string, token: string): Promise<boolean> {
  const payload = await verifyToken(token, "access");
  return !!payload && payload.email === email.trim().toLowerCase();
}

export function createSessionToken(email: string): Promise<string> {
  return createToken({ email: email.trim().toLowerCase(), purpose: "session" }, SESSION_TOKEN_TTL_SECONDS);
}

export async function verifySessionToken(token: string): Promise<TokenPayload | null> {
  return verifyToken(token, "session");
}
