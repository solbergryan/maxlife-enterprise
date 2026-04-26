"use client";

import { useState } from "react";
import { trackFormSubmit } from "@/lib/analytics";

export default function FindLogisticsSpaceForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", sqft: "", market: "", timeline: "", notes: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setStatus("loading");
    try {
      await fetch("/api/leads/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          name: form.name || undefined,
          source: "logistics-landing",
          source_page: "/find-logistics-space-florida?audience=tenant",
        }),
      });
      setStatus("success");
      trackFormSubmit({ form_type: "logistics-space-request", source_page: "/find-logistics-space-florida" });
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
        <h2 className="text-white text-xl font-bold mb-2">Got it — we&apos;ll be in touch</h2>
        <p className="text-gray-300 text-sm mb-4">Ryan will reach out within 24 hours with qualified options matching your criteria.</p>
        <p className="text-gray-400 text-sm">Prefer to call now?</p>
        <a href="tel:3215862121" className="text-gold font-semibold hover:text-gold-dark transition-colors">
          (321) 586-2121
        </a>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-white font-bold text-xl mb-1">Tell Us What You Need</h2>
      <p className="text-gray-400 text-sm mb-6">We&apos;ll have options to you within 48 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
          />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone (optional)"
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
          />
        </div>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email address"
          required
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm"
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            value={form.sqft}
            onChange={(e) => setForm({ ...form, sqft: e.target.value })}
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold/60 focus:outline-none transition-colors text-sm"
          >
            <option value="">Square footage</option>
            <option>Under 25,000 sf</option>
            <option>25,000–75,000 sf</option>
            <option>75,000–200,000 sf</option>
            <option>200,000 sf+</option>
          </select>
          <select
            value={form.market}
            onChange={(e) => setForm({ ...form, market: e.target.value })}
            className="bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold/60 focus:outline-none transition-colors text-sm"
          >
            <option value="">Market preference</option>
            <option>Jacksonville</option>
            <option>Lakeland / I-4</option>
            <option>Orlando</option>
            <option>Tampa</option>
            <option>Flexible / Multiple</option>
          </select>
        </div>
        <select
          value={form.timeline}
          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold/60 focus:outline-none transition-colors text-sm"
        >
          <option value="">Move-in timeline</option>
          <option>ASAP (within 60 days)</option>
          <option>3–6 months</option>
          <option>6–12 months</option>
          <option>12+ months / planning</option>
        </select>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Any specific requirements? (clear height, dock count, cold storage, etc.)"
          rows={3}
          className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors text-sm resize-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gold hover:bg-gold-dark text-dark font-bold px-6 py-4 rounded-lg transition-colors text-base disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Get My Options in 48 Hours"}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-xs text-center">Something went wrong. Call (321) 586-2121 directly.</p>
        )}
        <p className="text-gray-600 text-xs text-center">No obligation. No cost. Florida broker license BK3354351.</p>
      </form>
    </>
  );
}
