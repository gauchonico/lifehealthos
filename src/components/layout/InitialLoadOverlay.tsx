"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Shown once per browser session, right after the shell hydrates, then fades
// out. sessionStorage keeps it from replaying on every client-side navigation.
const SESSION_KEY = "lhn-initial-load-shown";
const MIN_VISIBLE_MS = 500;

export default function InitialLoadOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");

    const showTimer = window.setTimeout(() => setVisible(true), 0);
    const hideTimer = window.setTimeout(() => setVisible(false), MIN_VISIBLE_MS);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-navy-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img
            src="/LH-GIFS/WAVING.gif"
            alt="Loading LifeHealth"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
