"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  trackPageView,
  trackCtaClick,
  trackScrollDepth,
} from "@/lib/analytics";

/**
 * Client-side analytics tracker mounted once in the root layout.
 *
 * Responsibilities:
 * 1. Track SPA route changes as page views
 * 2. Track CTA clicks on any element with `data-track="cta-name"`
 * 3. Track blog scroll depth (25/50/75/100%) on /blog/* pages
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();
  const firedDepths = useRef<Set<number>>(new Set());

  // 1. Page view tracking on route change
  useEffect(() => {
    if (!pathname) return;
    trackPageView(pathname);
    // Reset scroll depth thresholds for the new page
    firedDepths.current = new Set();
  }, [pathname]);

  // 2. CTA click tracking (global listener with event delegation)
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const ctaEl = target.closest<HTMLElement>("[data-track]");
      if (!ctaEl) return;
      const ctaName = ctaEl.getAttribute("data-track");
      if (!ctaName) return;
      trackCtaClick({
        cta_name: ctaName,
        source_page: window.location.pathname,
      });
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // 3. Blog scroll depth tracking
  useEffect(() => {
    if (!pathname || !pathname.startsWith("/blog/")) return;

    const thresholds = [25, 50, 75, 100];

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScrollable = docHeight - winHeight;
      if (totalScrollable <= 0) return;
      const percent = Math.round((scrollTop / totalScrollable) * 100);

      for (const threshold of thresholds) {
        if (percent >= threshold && !firedDepths.current.has(threshold)) {
          firedDepths.current.add(threshold);
          trackScrollDepth({
            percent: threshold,
            page_path: window.location.pathname,
          });
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fire once in case the page is short enough that initial load covers a threshold
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
