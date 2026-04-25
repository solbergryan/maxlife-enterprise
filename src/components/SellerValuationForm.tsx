"use client";

import { useState } from "react";

// Option lists — keep in sync with /data/markets.ts counties where they overlap.
const counties = [
  "Orange",
  "Brevard",
  "Lake",
  "Seminole",
  "Osceola",
  "Volusia",
  "Polk",
  "Other / Central Florida",
];

const propertyTypes = [
  "Retail",
  "Office",
  "Industrial / Warehouse",
  "Multifamily",
  "Land / Development",
  "NNN / Single-Tenant",
  "Mixed Use",
  "Hospitality",
  "Self-Storage",
  "Medical Office",
  "Other",
];

const timelines = [
  "ASAP / Within 30 days",
  "1\u20133 months",
  "3\u20136 months",
  "6\u201312 months",
  "12+ months / Just exploring",
];

const tenantedOptions = [
  "Owner-occupied (not tenanted)",
  "Fully tenanted",
  "Partially tenanted",
  "Vacant",
  "Prefer not to say",
];

const reasons = [
  "Retirement",
  "Portfolio rebalancing",
  "1031 exchange",
  "Partnership dissolution",
  "Tax considerations",
  "Relocation / life change",
  "Market timing",
  "Other / prefer not to say",
];

const inputCls =
  "w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-gold focus:outline-none transition-colors";
const labelCls = "block text-sm font-medium text-gray-300 mb-1.5";
const requiredDot = <span className="text-gold ml-0.5">*</span>;

export default function SellerValuationForm() {
  const [form, setForm] = useState({
    // Contact
    name: "",
    email: "",
    phone: "",
    bestTime: "",
    // Property
    propertyAddress: "",
    propertyCity: "",
    propertyCounty: "",
    propertyType: "",
    sqft: "",
    lotSize: "",
    yearBuilt: "",
    tenanted: "",
    // Sale
    estimatedValue: "",
    noi: "",
    timeline: "",
    exchange1031: false,
    openOffMarket: false,
    reason: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const subject = `Seller Valuation Request \u2014 ${form.propertyType || "Property"}${
        form.propertyCounty ? ` in ${form.propertyCounty} County` : ""
      }`;
      const res = await fetch("https://formspree.io/f/xdapjean", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _formType: "Seller Valuation Request",
          name: form.name,
          email: form.email,
          phone: form.phone,
          bestTimeToReach: form.bestTime,
          propertyAddress: form.propertyAddress,
          propertyCity: form.propertyCity,
          propertyCounty: form.propertyCounty,
          propertyType: form.propertyType,
          approximateSqft: form.sqft,
          lotSize: form.lotSize,
          yearBuilt: form.yearBuilt,
          occupancyStatus: form.tenanted,
          estimatedValue: form.estimatedValue,
          annualNOIOrGross: form.noi,
          timelineToSell: form.timeline,
          considering1031Exchange: form.exchange1031 ? "Yes" : "No",
          openToOffMarket: form.openOffMarket ? "Yes" : "No",
          reasonForSelling: form.reason,
          additionalNotes: form.notes,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setError(
          "Something went wrong submitting the form. Please try again or email Ryan@MaxLifeRealty.com directly."
        );
      }
    } catch {
      setError(
        "Something went wrong submitting the form. Please try again or email Ryan@MaxLifeRealty.com directly."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/[0.04] border border-gold/30 rounded-2xl p-8 sm:p-10 text-center">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">
          Request received
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-lg mx-auto mb-6">
          Thanks for reaching out. Ryan will personally review the details of
          your property and get back to you within one business day to
          schedule a no-obligation valuation call. In the meantime, feel
          free to run a net sheet for your own numbers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/net-sheets/seller"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Open Seller Net Sheet
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                bestTime: "",
                propertyAddress: "",
                propertyCity: "",
                propertyCounty: "",
                propertyType: "",
                sqft: "",
                lotSize: "",
                yearBuilt: "",
                tenanted: "",
                estimatedValue: "",
                noi: "",
                timeline: "",
                exchange1031: false,
                openOffMarket: false,
                reason: "",
                notes: "",
              });
            }}
            className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Submit another property
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ─── Section 1: Contact ─── */}
      <fieldset className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
        <legend className="px-3 text-gold font-semibold text-sm tracking-widest uppercase">
          About you
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          <div>
            <label className={labelCls}>
              Full Name {requiredDot}
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputCls}
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label className={labelCls}>
              Email {requiredDot}
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputCls}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className={labelCls}>
              Phone {requiredDot}
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputCls}
              placeholder="(321) 555-0100"
            />
          </div>
          <div>
            <label className={labelCls}>Best time to reach</label>
            <input
              type="text"
              value={form.bestTime}
              onChange={(e) => setForm({ ...form, bestTime: e.target.value })}
              className={inputCls}
              placeholder="Weekday mornings, etc. (optional)"
            />
          </div>
        </div>
      </fieldset>

      {/* ─── Section 2: Property ─── */}
      <fieldset className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
        <legend className="px-3 text-gold font-semibold text-sm tracking-widest uppercase">
          About the property
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          <div className="sm:col-span-2">
            <label className={labelCls}>
              Property Address {requiredDot}
            </label>
            <input
              type="text"
              required
              value={form.propertyAddress}
              onChange={(e) =>
                setForm({ ...form, propertyAddress: e.target.value })
              }
              className={inputCls}
              placeholder="123 Orange Blossom Trail"
            />
          </div>
          <div>
            <label className={labelCls}>
              City {requiredDot}
            </label>
            <input
              type="text"
              required
              value={form.propertyCity}
              onChange={(e) =>
                setForm({ ...form, propertyCity: e.target.value })
              }
              className={inputCls}
              placeholder="Orlando"
            />
          </div>
          <div>
            <label className={labelCls}>
              County {requiredDot}
            </label>
            <select
              required
              value={form.propertyCounty}
              onChange={(e) =>
                setForm({ ...form, propertyCounty: e.target.value })
              }
              className={inputCls}
            >
              <option value="">Select county</option>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>
              Property Type {requiredDot}
            </label>
            <select
              required
              value={form.propertyType}
              onChange={(e) =>
                setForm({ ...form, propertyType: e.target.value })
              }
              className={inputCls}
            >
              <option value="">Select type</option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Occupancy</label>
            <select
              value={form.tenanted}
              onChange={(e) =>
                setForm({ ...form, tenanted: e.target.value })
              }
              className={inputCls}
            >
              <option value="">Select status (optional)</option>
              {tenantedOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Approximate Square Footage</label>
            <input
              type="text"
              inputMode="numeric"
              value={form.sqft}
              onChange={(e) => setForm({ ...form, sqft: e.target.value })}
              className={inputCls}
              placeholder="e.g. 12,500 (optional)"
            />
          </div>
          <div>
            <label className={labelCls}>Lot Size</label>
            <input
              type="text"
              value={form.lotSize}
              onChange={(e) => setForm({ ...form, lotSize: e.target.value })}
              className={inputCls}
              placeholder="e.g. 0.85 acres (optional)"
            />
          </div>
          <div className="sm:col-span-2 sm:w-1/2">
            <label className={labelCls}>Year Built</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={form.yearBuilt}
              onChange={(e) =>
                setForm({ ...form, yearBuilt: e.target.value })
              }
              className={inputCls}
              placeholder="e.g. 1998 (optional)"
            />
          </div>
        </div>
      </fieldset>

      {/* ─── Section 3: Sale ─── */}
      <fieldset className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8">
        <legend className="px-3 text-gold font-semibold text-sm tracking-widest uppercase">
          About the sale
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          <div>
            <label className={labelCls}>Estimated value or asking price</label>
            <input
              type="text"
              value={form.estimatedValue}
              onChange={(e) =>
                setForm({ ...form, estimatedValue: e.target.value })
              }
              className={inputCls}
              placeholder="$ (optional)"
            />
          </div>
          <div>
            <label className={labelCls}>Annual NOI or gross income</label>
            <input
              type="text"
              value={form.noi}
              onChange={(e) => setForm({ ...form, noi: e.target.value })}
              className={inputCls}
              placeholder="$ (optional)"
            />
          </div>
          <div>
            <label className={labelCls}>
              Timeline to sell {requiredDot}
            </label>
            <select
              required
              value={form.timeline}
              onChange={(e) =>
                setForm({ ...form, timeline: e.target.value })
              }
              className={inputCls}
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Primary reason for selling</label>
            <select
              value={form.reason}
              onChange={(e) =>
                setForm({ ...form, reason: e.target.value })
              }
              className={inputCls}
            >
              <option value="">Select reason (optional)</option>
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-5">
            <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.exchange1031}
                onChange={(e) =>
                  setForm({ ...form, exchange1031: e.target.checked })
                }
                className="mt-0.5 w-4 h-4 rounded border-white/10 bg-dark text-gold focus:ring-gold focus:ring-offset-0"
              />
              <span>
                Considering a 1031 exchange
                <span className="block text-xs text-gray-500">
                  We&apos;ll flag the timing constraints in your call.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.openOffMarket}
                onChange={(e) =>
                  setForm({ ...form, openOffMarket: e.target.checked })
                }
                className="mt-0.5 w-4 h-4 rounded border-white/10 bg-dark text-gold focus:ring-gold focus:ring-offset-0"
              />
              <span>
                Open to an off-market sale
                <span className="block text-xs text-gray-500">
                  Discreet placement to a short buyer list.
                </span>
              </span>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Additional notes</label>
            <textarea
              rows={4}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className={`${inputCls} resize-none`}
              placeholder="Anything else we should know \u2014 known issues, leases expiring, prior offers, etc. (optional)"
            />
          </div>
        </div>
      </fieldset>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto sm:px-10 bg-gold hover:bg-gold-dark text-dark font-bold py-3.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting\u2026" : "Request My Valuation"}
        </button>
        <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
          Submitting this form does{" "}
          <span className="text-gray-300 font-semibold">not</span> create a
          brokerage, agency, or listing relationship with MaxLife Realty. It
          is a no-obligation request for an initial valuation call.
          Information you provide is confidential and used only to prepare
          for that call. MaxLife Realty &middot; Florida Licensed Real Estate
          Brokerage &middot; FL Broker License #3354351 &middot; Equal
          Housing Opportunity.
        </p>
      </div>
    </form>
  );
}
