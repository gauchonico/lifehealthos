"use client";

import { useRef, useState } from "react";
import { Loader2, X } from "lucide-react";
import { createVideoUpload } from "@/app/workspace/videoUploadActions";

// Uploads the chosen video straight to Hostinger in chunks as soon as it's
// picked, then puts the resulting public URL in a hidden input so the normal
// form submit just saves a URL. The file input itself has no `name`, so the
// video never goes through the Server Action (Vercel caps bodies at ~4.5MB).

type ChunkResult = { done: boolean; received: number };

const MAX_RETRIES = 3;

function sendChunk(
  uploadUrl: string,
  token: string,
  offset: number,
  chunk: Blob,
  onProgress: (loaded: number) => void,
  xhrRef: { current: XMLHttpRequest | null },
): Promise<ChunkResult> {
  return new Promise((resolve, reject) => {
    const body = new FormData();
    body.append("token", token);
    body.append("offset", String(offset));
    body.append("chunk", chunk);

    const xhr = new XMLHttpRequest();
    xhrRef.current = xhr;
    xhr.open("POST", uploadUrl);
    xhr.upload.onprogress = (e) => onProgress(e.loaded);
    xhr.onerror = () =>
      reject(
        Object.assign(
          // Also what a CORS rejection looks like, so name both ends to make
          // an origin missing from ALLOWED_ORIGINS in upload.php easy to spot.
          new Error(`Couldn't reach ${uploadUrl} from ${window.location.origin}. Check your connection, and that this site is listed in ALLOWED_ORIGINS in upload.php.`),
          { retryable: true },
        ),
      );
    xhr.onabort = () => reject(Object.assign(new Error("Upload cancelled."), { aborted: true }));
    xhr.onload = () => {
      let data: { done?: boolean; received?: number; error?: string } = {};
      try {
        data = JSON.parse(xhr.responseText);
      } catch {
        // fall through with an empty body
      }
      if (xhr.status === 200) {
        resolve({ done: Boolean(data.done), received: Number(data.received) });
      } else if (xhr.status === 409 && typeof data.received === "number") {
        // Server already has a different amount than we thought — resume from there.
        resolve({ done: false, received: data.received });
      } else {
        reject(
          Object.assign(new Error(data.error || `Upload failed (HTTP ${xhr.status}).`), {
            retryable: xhr.status >= 500 || xhr.status === 0,
          }),
        );
      }
    };
    xhr.send(body);
  });
}

export default function VideoUploadField({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const xhrRef = useRef<XMLHttpRequest | null>(null);
  const cancelledRef = useRef(false);

  function setBlocking(message: string) {
    // Blocks the form's Save button (via native validation) while uploading.
    fileInputRef.current?.setCustomValidity(message);
  }

  function resetFileInput() {
    setBlocking("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function upload(file: File) {
    setStatus("uploading");
    setProgress(0);
    setError("");
    setBlocking("Please wait for the video to finish uploading.");
    cancelledRef.current = false;

    try {
      const result = await createVideoUpload(file.name, file.size);
      if (!result.ok) throw new Error(result.error);
      const { ticket } = result;
      let offset = 0;
      let retries = 0;

      while (offset < file.size) {
        if (cancelledRef.current) throw Object.assign(new Error("Upload cancelled."), { aborted: true });
        const chunk = file.slice(offset, offset + ticket.chunkSize);
        try {
          const result = await sendChunk(
            ticket.uploadUrl,
            ticket.token,
            offset,
            chunk,
            (loaded) => setProgress(Math.min(99, Math.round(((offset + loaded) / file.size) * 100))),
            xhrRef,
          );
          offset = result.received;
          retries = 0;
          if (result.done) break;
        } catch (err) {
          if ((err as { retryable?: boolean }).retryable && retries < MAX_RETRIES) {
            retries++;
            await new Promise((r) => setTimeout(r, 1000 * retries));
            continue;
          }
          throw err;
        }
      }

      setUrl(ticket.fileUrl);
      setProgress(100);
      setStatus("idle");
      resetFileInput();
    } catch (err) {
      if ((err as { aborted?: boolean }).aborted) {
        setStatus("idle");
      } else {
        setStatus("error");
        setError(err instanceof Error ? err.message : "Upload failed.");
      }
      resetFileInput();
    } finally {
      xhrRef.current = null;
    }
  }

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-600">{label}</label>
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="mb-3 overflow-hidden rounded-xl border border-slate-200">
          <video src={url} controls preload="metadata" className="aspect-video w-full bg-black" />
          <div className="flex items-center justify-between gap-3 px-3 py-2 text-xs text-slate-500">
            <span className="truncate">{decodeURIComponent(url.split("/").pop() || "")}</span>
            <button
              type="button"
              onClick={() => setUrl("")}
              disabled={status === "uploading"}
              className="inline-flex flex-none items-center gap-1 font-semibold text-red-600 hover:underline disabled:opacity-50"
            >
              <X className="h-3.5 w-3.5" />
              Remove
            </button>
          </div>
        </div>
      ) : null}

      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/quicktime,video/x-m4v,.mp4,.webm,.mov,.m4v"
        // Not `disabled` while uploading: disabled inputs skip validation,
        // and the custom validity message is what blocks Save meanwhile.
        onClick={(e) => status === "uploading" && e.preventDefault()}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) upload(file);
        }}
        className={`block w-full text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-navy-900 ${status === "uploading" ? "opacity-60" : ""}`}
      />

      {status === "uploading" ? (
        <div className="mt-2">
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-teal-500 transition-[width]" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Uploading… {progress}% — keep this page open
            </span>
            <button type="button" onClick={() => {
                cancelledRef.current = true;
                xhrRef.current?.abort();
              }} className="font-semibold text-slate-600 hover:underline">
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {status === "error" ? <p className="mt-1 text-xs font-medium text-red-600">{error}</p> : null}

      <p className="mt-1 text-xs text-slate-400">
        MP4, WebM, MOV or M4V. Uploads to the site&apos;s own storage as soon as you pick a file
        {url ? "; picking a new file replaces the current one" : ""}. Use this or a YouTube URL.
      </p>
    </div>
  );
}
