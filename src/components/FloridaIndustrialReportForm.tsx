"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { trackFormSubmit } from "@/lib/analytics";

export default function FloridaIndustrialReportForm() {
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
      await fetch("/api/leads/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || undefined,
          website,
          _t: mountedAtRef.current,
          source: "lead-magnet",
          source_page: "/florida-industrial-market-report",
        }),
      });
      setStatus("success");
      trackFormSubmit({ form_type: "lead-magnet", source_page: "/florida-industrial-market-report" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">Report on its way</h3>
        <p className="text-gray-300 text-sm mb-6">Check your inbox. Ryan will follow up with market-specific insights for your area.</p>
        <Link href="/industries/logistics-distribution" className="text-gold hover:text-gold-dark text-sm font-semibold">
          View Logistics Properties →
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-white font-bold text-xl mb-2">Get the Free Report</h2>
      <p className="text-gray-400 text-sm mb-6">Delivered to your inbox instantly.</p>
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
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name (optional)"
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Me the Report"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-xs text-center">Something went wrong. Email Ryan@MaxLifeRealty.com directly.</p>
        )}
      </form>
    </>
  );
}
