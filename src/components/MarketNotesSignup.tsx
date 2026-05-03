"use client";

import { useState, useRef } from "react";

export default function MarketNotesSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const mountedAtRef = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      await Promise.all([
        fetch("https://formspree.io/f/xdapjean", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            _gotcha: website,
            _subject: "MaxLife Market Notes Signup",
            source: "market-notes-homepage",
          }),
        }),
        fetch("/api/leads/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, website, _t: mountedAtRef.current, source: "market-notes-homepage" }),
        }),
      ]);
      setStatus("success");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative border-y border-gold/20 bg-gradient-to-r from-gold/5 via-white/[0.03] to-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-gold font-medium text-xs tracking-widest uppercase mb-3">
            Free Weekly Market Notes
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Stay Ahead of the{" "}
            <span className="text-gold">Florida CRE Market</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Weekly cap rate shifts, new listings, and deals worth watching —
            delivered straight to your inbox. No spam, unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-gold text-base font-medium">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re in! First market note hits your inbox this week.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                className="sm:w-44 bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing…" : "Get Market Notes"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">
              Something went wrong. Please try again or email{" "}
              <a href="mailto:Ryan@MaxLifeRealty.com" className="underline">
                Ryan@MaxLifeRealty.com
              </a>
              .
            </p>
          )}

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No spam, ever
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Central Florida CRE focus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
