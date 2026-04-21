"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { CONSENT_EVENT, readConsent } from "@/lib/consent";

/**
 * Loads gtag.js with Google's Consent Mode v2.
 *
 * The script is loaded immediately (so tag firing defaults work), but all
 * storage is denied until the user grants analytics consent. Once they do,
 * we fire gtag('consent', 'update', ...) to switch storage on retroactively.
 */
export default function GoogleAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const sync = () => {
      const consent = readConsent();
      const allowed = !!consent?.analytics;
      setAnalyticsAllowed(allowed);
      if (allowed && typeof window !== "undefined") {
        type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };
        const w = window as GtagWindow;
        w.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
      }
    };
    sync();
    const handler = () => sync();
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: '${analyticsAllowed ? "granted" : "denied"}',
            wait_for_update: 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
