"use client";

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const WIDGET_SRC = "https://widgets.sociablekit.com/linkedin-page-posts/widget.js";
const EMBED_ID = "25718009";
const LINKEDIN_URL = "https://www.linkedin.com/company/76553520";

export default function SocialFeedSection() {
  // The SociableKit widget scans the DOM for its container once when the
  // script runs. next/script only loads a script once per session, so after a
  // client-side navigation back to the home page the container would stay
  // empty. Injecting a fresh script tag on every mount avoids that.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-wide">
        <div className="mb-6 md:mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-teal-50 text-teal-600">
              Social
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-navy-900">
              Latest from LifeHealth.
            </h2>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-teal-600 font-medium hover:gap-2 transition-all"
          >
            View all on LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="sk-ww-linkedin-page-post" data-embed-id={EMBED_ID} />
      </div>
    </section>
  );
}
