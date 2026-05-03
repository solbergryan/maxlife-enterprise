"use client";

import { useState, useRef } from "react";
import { trackFormSubmit } from "@/lib/analytics";

interface BlogLeadCaptureProps {
  /** Short heading for the CTA box */
  heading?: string;
  /** Description below heading */
  description?: string;
  /** Tracks where this form was shown */
  sourcePage?: string;
}

/**
 * Inline lead capture form for the bottom of blog posts.
 * Collects email + optional name, posts to Formspree.
 */
export default function BlogLeadCapture({
  heading = "Get Off-Market CRE Deals in Your Inbox",
  description = "Join our investor list for exclusive Central Florida opportunities, market reports, and deal analysis — delivered weekly. No spam, unsubscribe anytime.",
  sourcePage = "blog",
}: BlogLeadCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const mountedAtRef = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const [res] = await Promise.all([
        fetch("https://formspree.io/f/xdapjean", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: name || undefined,
            _gotcha: website,
            _subject: "MaxLife Blog — New Investor Signup",
            source: "blog-inline",
            source_page: sourcePage,
          }),
        }),
        fetch("/api/leads/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name: name || undefined, website, _t: mountedAtRef.current, source: "blog-inline", source_page: sourcePage }),
        }),
      ]);

      if (res.ok) {
        setStatus("success");
        trackFormSubmit({
          form_type: "blog-inline",
          source_page: sourcePage,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/[0.04] border border-gold/30 rounded-xl p-8 text-center mt-12">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">You&apos;re In</h3>
        <p className="text-gray-300 text-sm">
          Watch your inbox for exclusive Central Florida CRE opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 mt-12">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-xl font-bold text-white mb-2">{heading}</h3>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
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
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="sm:w-40 bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              data-track="blog-lead-capture"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap disabled:opacity-60"
            >
              {status === "loading" ? "Joining..." : "Join the List"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-red-400 text-xs">Something went wrong. Try again or email Ryan@MaxLifeRealty.com directly.</p>
          )}
          <p className="text-gray-600 text-xs">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </div>
  );
}
