/**
 * Google Analytics 4 event tracking helpers.
 *
 * All events respect the NEXT_PUBLIC_GA_MEASUREMENT_ID env variable.
 * If no ID is set, gtag calls are no-ops — safe to call everywhere.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

/** Safely call window.gtag if it's loaded. */
function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  if (typeof w.gtag === "function") {
    w.gtag(...args);
  }
}

/** Fire a custom event with parameters. */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  if (!GA_MEASUREMENT_ID) return;
  gtag("event", eventName, params);
}

/** Track a page view (used on client-side route changes). */
export function trackPageView(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

/** Form submission event — called from LeadCaptureForm. */
export function trackFormSubmit(params: {
  form_type: string;
  source_page: string;
  investment_range?: string;
  timeline?: string;
}) {
  trackEvent("form_submit", params);
}

/** CTA button/link click event — called from a global listener. */
export function trackCtaClick(params: {
  cta_name: string;
  source_page: string;
}) {
  trackEvent("cta_click", params);
}

/** Deal Analyzer usage event — called when a user runs a calculation. */
export function trackDealAnalyzerUse(params: {
  asset_type: string;
  purchase_price: number;
  cap_rate: number;
}) {
  trackEvent("deal_analyzer_use", params);
}

/** Blog scroll depth event — called at 25/50/75/100% thresholds. */
export function trackScrollDepth(params: {
  percent: number;
  page_path: string;
}) {
  trackEvent("blog_scroll_depth", params);
}
