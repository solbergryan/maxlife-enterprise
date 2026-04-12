"use client";

import { useState, useEffect, useCallback } from "react";
import { trackFormSubmit, trackEvent } from "@/lib/analytics";

/**
 * Exit-intent popup that triggers when the cursor moves toward the top
 * of the viewport (desktop) or after 45s of inactivity (mobile).
 * Shows once per session via sessionStorage.
 */
export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const trigger = useCallback(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exit-popup-shown")) return;
    sessionStorage.setItem("exit-popup-shown", "1");
    setShow(true);
    trackEvent("exit_intent_shown", { page_path: window.location.pathname });
  }, []);

  useEffect(() => {
    // Desktop: mouse leaves viewport toward top
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 5) trigger();
    }

    // Mobile: 45s idle timer
    const timer = setTimeout(trigger, 45000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [trigger]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const sourcePage = typeof window !== "undefined" ? window.location.pathname : "";
      await Promise.all([
        fetch("https://formspree.io/f/xdapjean", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            _subject: "MaxLife — Exit Intent Signup",
            source: "exit-intent",
            source_page: sourcePage,
          }),
        }),
        fetch("/api/leads/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "exit-intent", source_page: sourcePage }),
        }),
      ]);
      setStatus("success");
      trackFormSubmit({
        form_type: "exit-intent",
        source_page: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } catch {
      // Silently fail — don't block the user
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setShow(false)}
      />

      {/* Modal */}
      <div className="relative bg-dark-card border border-dark-border rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">You&apos;re on the list</h3>
            <p className="text-gray-400 text-sm">
              We&apos;ll send you exclusive Central Florida CRE deals and market insights.
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-6 text-gold hover:text-gold-light text-sm font-medium transition-colors"
            >
              Continue browsing
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-gold text-xs font-medium uppercase tracking-widest mb-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Before you go
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                Get Off-Market CRE Deals
              </h3>
              <p className="text-gray-400 text-sm">
                Join 500+ investors getting exclusive Central Florida commercial
                real estate opportunities delivered weekly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoFocus
                className="w-full bg-dark border border-dark-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                data-track="exit-intent-submit"
                className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Send Me Deals"}
              </button>
              <p className="text-gray-600 text-xs text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
