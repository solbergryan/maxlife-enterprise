"use client";

import { useState, FormEvent, ReactNode } from "react";

export interface LeadCaptureFormProps {
  /** API endpoint to POST to. The form JSON body is passed through. */
  endpoint: string;
  /** Extra JSON fields included in the POST body. */
  payload: Record<string, unknown>;
  /** CTA text on the submit button in its idle state. */
  ctaLabel?: string;
  /** Heading shown above the form. */
  heading?: string;
  /** Subheading / description paragraph. */
  description?: string;
  /** Success message replacing the form after a successful submission. */
  successMessage?: string;
  /** Optional node rendered below the email input (e.g. privacy note). */
  children?: ReactNode;
  /** Visual variant. "dark" = for dark pages (academy), "light" = net sheets. */
  theme?: "dark" | "light";
  /** Whether to show a name field in addition to email. */
  includeName?: boolean;
  /** Callback when the submission succeeds. Use to close modals, track events, etc. */
  onSuccess?: () => void;
}

/**
 * Reusable inline lead-capture form. Used by:
 *   - Academy workbook download CTA
 *   - Net sheet "email me this report" button
 *   - Deal analyzer "email me this report" button
 */
export default function LeadCaptureForm({
  endpoint,
  payload,
  ctaLabel = "Send me the PDF",
  heading,
  description,
  successMessage = "Check your inbox — it's on the way.",
  children,
  theme = "dark",
  includeName = false,
  onSuccess,
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isDark = theme === "dark";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: includeName ? name : undefined, ...payload }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border p-6 text-center ${
          isDark
            ? "border-gold/40 bg-gold/5 text-white"
            : "border-green-200 bg-green-50 text-green-900"
        }`}
      >
        <div className="mb-2 text-3xl">✓</div>
        <p className="font-semibold">{successMessage}</p>
        <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-green-700"}`}>
          If you don't see it in a minute, check your spam folder.
        </p>
      </div>
    );
  }

  const inputClass = isDark
    ? "w-full rounded-lg border border-white/10 bg-dark px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
    : "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none";

  const buttonClass = isDark
    ? "rounded-lg bg-gold px-6 py-3 font-semibold text-dark transition-colors hover:bg-gold-dark disabled:opacity-60"
    : "rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-60";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl p-6 sm:p-8 ${
        isDark ? "border border-white/10 bg-white/[0.04]" : "border border-gray-200 bg-white shadow-sm"
      }`}
    >
      {heading && (
        <h3 className={`mb-2 text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          {heading}
        </h3>
      )}
      {description && (
        <p className={`mb-5 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      )}

      <div className="space-y-3">
        {includeName && (
          <input
            type="text"
            placeholder="First name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            disabled={status === "sending"}
          />
        )}
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          disabled={status === "sending"}
        />
        <button type="submit" className={`${buttonClass} w-full`} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : ctaLabel}
        </button>
      </div>

      {errorMsg && (
        <p className={`mt-3 text-sm ${isDark ? "text-red-400" : "text-red-600"}`}>{errorMsg}</p>
      )}

      {children && (
        <div className={`mt-4 text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
          {children}
        </div>
      )}
    </form>
  );
}
