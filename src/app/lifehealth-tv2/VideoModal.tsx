"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string | null;
  title?: string;
  onClose: () => void;
}) {
  return (
    <Dialog.Root open={Boolean(videoId)} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-black shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Title className="sr-only">{title || "Video player"}</Dialog.Title>
          {videoId ? (
            <div className="aspect-video w-full">
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
