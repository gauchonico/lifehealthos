"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthogClient = usePostHog();

  useEffect(() => {
    if (!pathname || !posthogClient) return;
    // Next.js client-side navigation doesn't trigger a full page load, so
    // autocapture's default "$pageview on load" never fires between routes —
    // this fires it manually on every path/query change instead.
    let url = window.origin + pathname;
    if (searchParams && searchParams.toString()) {
      url += `?${searchParams.toString()}`;
    }
    posthogClient.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams, posthogClient]);

  return null;
}

export default function PostHogProvider({ children }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!key || posthog.__loaded) return;
    posthog.init(key, {
      api_host: host,
      defaults: "2026-05-30",
      // We capture pageviews manually (see PostHogPageView) since this is a
      // client-side-routed app — autocapture's on-load pageview would miss
      // every soft navigation between routes.
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "identified_only",
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
