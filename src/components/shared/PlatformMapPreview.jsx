"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DEFAULT_MAP_URL = "https://media.base44.com/images/public/6a554b016ff6fa6eb6e63b81/5f4878ba4_LHPlatformOverview.png";
const DEFAULT_TITLE = "The Long-Term Care Platform Map";

export default function PlatformMapPreview({ className = "", url = DEFAULT_MAP_URL, title = DEFAULT_TITLE }) {
  const MAP_URL = url;
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`group relative block w-full max-w-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl text-left focus:outline-none focus:ring-2 focus:ring-teal-400 ${className}`}
      >
        <img
          src={MAP_URL}
          alt={`${title} — platform overview`}
          className="w-full aspect-[16/10] object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/5 transition-colors" />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-900/95 via-navy-900/70 to-transparent p-4 pt-10 flex items-end justify-between gap-3">
          <div>
            <p className="text-white text-sm font-heading font-semibold">{title}</p>
            <p className="text-slate-300 text-xs">One patient. One record. Every interaction. Click to enlarge.</p>
          </div>
          <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-teal-500 group-hover:bg-teal-400 flex items-center justify-center transition-colors">
            <Maximize2 className="w-4 h-4 text-white" />
          </span>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-3 bg-white">
          <div className="max-h-[82vh] overflow-auto rounded-lg border border-slate-100">
            <img
              src={MAP_URL}
              alt={`${title} — full size`}
              className="w-full h-auto"
            />
          </div>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-teal-600 hover:text-teal-700 font-medium text-center"
          >
            Open full size in a new tab →
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}
