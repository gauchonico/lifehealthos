"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function VideoModal({
  videoId,
  fileUrl,
  title,
  orientation = "landscape",
  onClose,
}: {
  videoId: string | null;
  /** An uploaded video file; takes precedence over videoId. */
  fileUrl?: string;
  title?: string;
  /** Portrait (9:16) videos get a tall player sized to fit the viewport height. */
  orientation?: "landscape" | "portrait";
  onClose: () => void;
}) {
  const portrait = orientation === "portrait";
  const frameClass = portrait ? "aspect-[9/16] w-full" : "aspect-video w-full";

  return (
    <Dialog.Root open={Boolean(videoId || fileUrl)} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className={`fixed left-1/2 top-1/2 z-50 ${portrait ? "w-[min(92vw,calc(85vh*9/16))]" : "w-[92vw] max-w-4xl"} -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-black shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95`}>
          <Dialog.Title className="sr-only">{title || "Video player"}</Dialog.Title>
          {fileUrl ? (
            <div className={frameClass}>
              <video key={fileUrl} src={fileUrl} controls autoPlay playsInline className="h-full w-full" />
            </div>
          ) : videoId ? (
            <div className={frameClass}>
              <iframe
                key={videoId}
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                title={title || "Video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
          <Dialog.Close className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
