"use client";

import { useState } from "react";

const investmentRanges = [
  "$100K – $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M – $5M",
  "$5M+",
];

const propertyTypes = [
  "NNN Investments",
  "Retail / Commercial",
  "Multifamily",
  "Industrial",
  "Land / Development",
];

export default function InvestorSignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    investmentRange: "",
    interests: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleInterest(type: string) {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(type)
        ? prev.interests.filter((t) => t !== type)
        : [...prev.interests, type],
    }));
  }

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
          investmentRange: form.investmentRange || "Not specified",
          propertyInterests: form.interests.length > 0 ? form.interests.join(", ") : "Not specified",
          message: form.message || "No additional message.",
          _subject: `Off-Market Deal Access Request — ${form.name}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-dark border border-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">
          You&apos;re on the List
        </h3>
        <p className="text-gray-400 mb-4">
          We&apos;ve received your information and will be in touch with
          off-market opportunities that match your criteria.
        </p>
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
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        <select
          value={form.investmentRange}
          onChange={(e) => setForm({ ...form, investmentRange: e.target.value })}
          className={inputClass}
        >
          <option value="">Investment Range</option>
          {investmentRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Property Type Interests */}
      <div>
        <p className="text-gray-400 text-sm mb-2">
          What types of properties interest you?
        </p>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => toggleInterest(type)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                form.interests.includes(type)
                  ? "bg-gold/20 border-gold/50 text-gold"
                  : "bg-dark border-dark-border text-gray-400 hover:border-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <textarea
        placeholder="Tell us about your investment goals (optional)"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={inputClass}
      />

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Get Off-Market Deal Access"}
      </button>
    </form>
  );
}
