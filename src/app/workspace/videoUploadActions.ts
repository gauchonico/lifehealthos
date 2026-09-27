"use server";

import { createHmac, randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/workspaceAuth";
import { VIDEO_EXTENSIONS, getVideoUploadConfig } from "@/lib/videoUpload";

// Video files go straight from the browser to hostinger/upload.php in
// chunks — Vercel rejects request bodies over ~4.5MB, so they can't pass
// through a Server Action. This action only issues the short-lived, signed
// token that upload.php checks on every chunk.

const UPLOAD_TOKEN_TTL_SECONDS = 6 * 60 * 60; // long enough for a big file on a slow connection
const MAX_VIDEO_BYTES = 5 * 1024 * 1024 * 1024; // 5GB
const CHUNK_BYTES = 8 * 1024 * 1024; // must fit under upload_max_filesize/post_max_size on Hostinger

export type VideoUploadTicket = {
  uploadUrl: string;
  token: string;
  fileUrl: string;
  chunkSize: number;
};

function base64url(input: Buffer | string) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Errors are returned rather than thrown: in production Next.js replaces a
// thrown Server Action error's message with a generic "An error occurred in
// the Server Components render", which hides the actual cause from the admin.
export async function createVideoUpload(
  filename: string,
  size: number,
): Promise<{ ok: true; ticket: VideoUploadTicket } | { ok: false; error: string }> {
  try {
    return { ok: true, ticket: await issueTicket(filename, size) };
  } catch (err) {
    console.error("createVideoUpload failed", err);
    return { ok: false, error: err instanceof Error ? err.message : "Couldn't start the upload." };
  }
}

async function issueTicket(filename: string, size: number): Promise<VideoUploadTicket> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!session || !(await verifySessionToken(session))) {
    throw new Error("Your workspace session has expired. Log in again.");
  }

  const { uploadUrl, publicBaseUrl, secret } = getVideoUploadConfig();

  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (!VIDEO_EXTENSIONS.includes(ext)) {
    throw new Error(`Unsupported video type. Use one of: ${VIDEO_EXTENSIONS.join(", ")}.`);
  }
  if (!Number.isInteger(size) || size <= 0 || size > MAX_VIDEO_BYTES) {
    throw new Error("Video must be smaller than 5GB.");
  }

  const base = filename
    .slice(0, -(ext.length + 1))
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .slice(0, 60);
  const name = `${Date.now()}-${randomUUID().slice(0, 8)}-${base || "video"}.${ext}`;

  const payload = base64url(JSON.stringify({ name, size, exp: Math.floor(Date.now() / 1000) + UPLOAD_TOKEN_TTL_SECONDS }));
  const signature = base64url(createHmac("sha256", secret).update(payload).digest());

  return {
    uploadUrl,
    token: `${payload}.${signature}`,
    fileUrl: `${publicBaseUrl}/${name}`,
    chunkSize: CHUNK_BYTES,
  };
}
