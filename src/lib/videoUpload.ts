import "server-only";

// Keep in sync with ALLOWED_EXTENSIONS in hostinger/upload.php.
export const VIDEO_EXTENSIONS = ["mp4", "webm", "mov", "m4v"];

export function getVideoUploadConfig() {
  const uploadUrl = process.env.HOSTINGER_UPLOAD_URL;
  const publicBaseUrl = process.env.HOSTINGER_PUBLIC_BASE_URL?.replace(/\/+$/, "");
  const secret = process.env.VIDEO_UPLOAD_SECRET;

  if (!uploadUrl || !publicBaseUrl || !secret) {
    throw new Error(
      "Video uploads are not configured. Set HOSTINGER_UPLOAD_URL, HOSTINGER_PUBLIC_BASE_URL and VIDEO_UPLOAD_SECRET.",
    );
  }

  return { uploadUrl, publicBaseUrl, secret };
}

/** True if `url` points at a video we uploaded to Hostinger (vs. an arbitrary URL typed into the form). */
export function isUploadedVideoUrl(url: string) {
  const base = process.env.HOSTINGER_PUBLIC_BASE_URL?.replace(/\/+$/, "");
  return Boolean(base) && url.startsWith(`${base}/`) && !url.slice(base!.length + 1).includes("/");
}
