"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function VimaVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg pt-16">
      <motion.div
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: -28 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2"
      >
        <motion.img
          src="/LH-GIFS/meditating.gif"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-28 w-28 object-contain sm:h-62 sm:w-62"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-3xl border border-navy-800 bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-left shadow-2xl shadow-navy-900/20"
      >
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(127,184,50,0.3),transparent_70%)] blur-2xl" />

        <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
          <Sparkles className="h-4 w-4" /> VIMA &middot; Conversation
        </div>
        <div className="mt-5 space-y-3 text-sm">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
            &quot;Summarize Nakato&apos;s last 12 months of cardiology records.&quot;
          </div>
          <div className="rounded-2xl border border-teal-400/30 bg-teal-400/10 px-4 py-3 text-white/90">
            Stable LV function. HR variability improved 14%. Last lipid panel within target. Next
            follow-up suggested in 90 days.{" "}
            <span className="text-teal-300">Sources: 8 records, 3 labs.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
