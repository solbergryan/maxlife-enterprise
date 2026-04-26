"use client";

import { useState } from "react";
import { trackFormSubmit } from "@/lib/analytics";

const sizeRanges = [
  "Under 1,500 SF",
  "1,500 – 3,000 SF",
  "3,000 – 5,000 SF",
  "5,000 – 10,000 SF",
  "10,000 – 25,000 SF",
  "25,000+ SF",
];

const useTypes = [
  "Office",
  "Medical Office",
  "Retail",
  "Restaurant",
  "Warehouse / Industrial",
  "Flex / Showroom",
  "Mixed Use",
];

const moveInWindows = [
  "Immediately",
  "Within 30 days",
  "30 – 90 days",
  "90 – 180 days",
  "6 – 12 months",
];

interface TenantInquiryFormProps {
  buttonText?: string;
  subjectPrefix?: string;
  successHeading?: string;
  successMessage?: string;
  source?: string;
  /** Pre-select a use type (e.g. "Office" on the office-lease page). */
  defaultUseType?: string;
}

export default function TenantInquiryForm({
  buttonText = "Start My Tenant Search",
  subjectPrefix = "Space Coast Tenant Inquiry",
  successHeading = "We've got your search request",
  successMessage = "We'll review available Space Coast space matching your criteria and reach out within one business day.",
  source = "space-coast-tenant",
  defaultUseType,
}: TenantInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sizeRange: "",
    useType: defaultUseType ?? "",
    cityPreference: "",
    moveIn: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xdapjean", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "Not provided",
          company: form.company || "Not provided",
          sizeRange: form.sizeRange || "Not specified",
          useType: form.useType || "Not specified",
          cityPreference: form.cityPreference || "Not specified",
          moveIn: form.moveIn || "Not specified",
          message: form.message || "No additional message.",
          source,
          _subject: `${subjectPrefix} — ${form.name}`,
        }),
      });
      if (res.ok) {
        trackFormSubmit({
          form_type: source,
          source_page:
            typeof window !== "undefined" ? window.location.pathname : source,
          investment_range: form.sizeRange || "Not specified",
          timeline: form.moveIn || "Not specified",
        });
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong. Please try again or email us directly.",
        );
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-gold"
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
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">
          {successHeading}
        </h3>
        <p className="text-gray-300 mb-4">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-gold hover:underline text-sm"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Company / Practice (optional)"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          value={form.useType}
          onChange={(e) => setForm({ ...form, useType: e.target.value })}
          className={inputClass}
        >
          <option value="">Use Type</option>
          {useTypes.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
        <select
          value={form.sizeRange}
          onChange={(e) => setForm({ ...form, sizeRange: e.target.value })}
          className={inputClass}
        >
          <option value="">Size Needed (SF)</option>
          {sizeRanges.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Preferred City (e.g. Melbourne)"
          value={form.cityPreference}
          onChange={(e) =>
            setForm({ ...form, cityPreference: e.target.value })
          }
          className={inputClass}
        />
        <select
          value={form.moveIn}
          onChange={(e) => setForm({ ...form, moveIn: e.target.value })}
          className={inputClass}
        >
          <option value="">Move-in Window</option>
          {moveInWindows.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="Anything specific we should know? (parking, drive-thru, restaurant, dock-doors, etc.)"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass}
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : buttonText}
      </button>
      <p className="text-gray-600 text-xs text-center">
        Tenant-rep representation typically costs nothing out-of-pocket — the
        listing side pays our fee.
      </p>
    </form>
  );
}
