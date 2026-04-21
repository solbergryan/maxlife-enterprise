"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

type Mode = "hidden" | "banner" | "customize";

export default function CookieConsent() {
  const [mode, setMode] = useState<Mode>("hidden");
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const current = readConsent();
    if (!current) {
      setMode("banner");
    } else {
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
    }
  }, []);

  function accept(state: Pick<ConsentState, "analytics" | "marketing">) {
    writeConsent(state);
    setMode("hidden");
  }

  if (mode === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[90] flex justify-center px-4 pb-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-4xl rounded-2xl border border-dark-border bg-dark-card/95 p-5 shadow-2xl backdrop-blur-md sm:p-6">
        {mode === "banner" ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 text-sm text-gray-300">
              <p className="mb-1 font-semibold text-white">
                We use cookies to improve your experience
              </p>
              <p className="text-gray-400">
                We collect anonymous usage data to make the site better and
                show relevant content. Read our{" "}
                <Link href="/privacy" className="text-gold underline underline-offset-4 hover:text-gold-light">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-nowrap">
              <button
                type="button"
                onClick={() => accept({ analytics: false, marketing: false })}
                className="rounded-lg border border-dark-border bg-dark px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gold hover:text-white"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => setMode("customize")}
                className="rounded-lg border border-dark-border bg-dark px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gold hover:text-white"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={() => accept({ analytics: true, marketing: true })}
                className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Cookie preferences
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Choose which categories of cookies you allow. Necessary
                  cookies are always on.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMode("banner")}
                aria-label="Back"
                className="text-gray-500 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <CategoryRow
                title="Necessary"
                description="Essential for the site to function — login, session state, security."
                checked
                disabled
              />
              <CategoryRow
                title="Analytics"
                description="Anonymous usage data so we can improve the site (Google Analytics, Vercel Analytics)."
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryRow
                title="Marketing"
                description="Helps us measure ad performance and show relevant content (Meta, LinkedIn, visitor-identification tools)."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => accept({ analytics: false, marketing: false })}
                className="rounded-lg border border-dark-border bg-dark px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gold hover:text-white"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => accept({ analytics, marketing })}
                className="rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark"
              >
                Save preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface CategoryRowProps {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

function CategoryRow({ title, description, checked, disabled, onChange }: CategoryRowProps) {
  return (
    <label
      className={`flex items-start gap-3 rounded-lg border border-dark-border bg-dark px-4 py-3 ${
        disabled ? "opacity-60" : "cursor-pointer hover:border-gold/40"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 accent-gold"
      />
      <div>
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="mt-0.5 text-xs text-gray-400">{description}</div>
      </div>
    </label>
  );
}
