"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Submit to Formspree for email notification + subscribe API for nurture
      await Promise.all([
        fetch("https://formspree.io/f/xdapjean", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            _subject: "MaxLife Newsletter Signup",
            source: "newsletter-footer",
          }),
        }),
        fetch("/api/leads/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "newsletter-footer" }),
        }),
      ]);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Get <span className="text-gold">Market Insights</span> Delivered
          </h2>
          <p className="text-gray-300 mb-8">
            Weekly Central Florida CRE updates — cap rates, new listings, market
            trends, and investment opportunities. No spam, unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-gold">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-medium">
                You&apos;re in! Watch your inbox for the next update.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
