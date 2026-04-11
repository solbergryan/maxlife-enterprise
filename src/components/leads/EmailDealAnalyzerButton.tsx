"use client";

import { useState } from "react";

export interface DealAnalyzerEmailSummary {
  propertyName?: string;
  purchasePrice: number;
  noi: number;
  capRate: number;
  cashOnCash: number;
  irr: number;
  dscr: number;
  equityMultiple: number;
  dealScore?: string;
}

interface Props {
  summary: DealAnalyzerEmailSummary | null;
  inputs?: Record<string, unknown>;
}

/**
 * "Email me this deal summary" button for the deal analyzer.
 * Sends an HTML email (no PDF) with all key underwriting metrics
 * via /api/leads/deal-analyzer.
 */
export default function EmailDealAnalyzerButton({ summary, inputs }: Props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const disabled = !summary;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending" || !summary) return;
    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/leads/deal-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, summary, inputs: inputs || {} }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/40 bg-gold/5 p-6 text-center">
        <div className="mb-2 text-3xl text-gold">✓</div>
        <p className="font-semibold text-white">Sent — check your inbox.</p>
        <p className="mt-1 text-sm text-gray-400">
          Reply to the email if you want me to pressure-test these assumptions on a real property.
        </p>
      </div>
    );
  }

  if (!open) {
    return (
      <div className="rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
              Save or share
            </p>
            <h4 className="text-white font-semibold text-lg">Email me this underwriting summary</h4>
            <p className="text-gray-400 text-sm mt-1">
              Get the full metrics in your inbox — forward to lenders, partners, or yourself.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            disabled={disabled}
            className="shrink-0 rounded-lg bg-gold px-6 py-3 font-semibold text-dark transition-colors hover:bg-gold-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ✉ Email me this
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">Send to</p>
      <h4 className="text-white font-semibold text-lg mb-4">Email me this underwriting summary</h4>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          autoFocus
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "sending"}
          className="flex-1 rounded-lg border border-dark-border bg-dark px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending" || disabled}
          className="rounded-lg bg-gold px-6 py-3 font-semibold text-dark transition-colors hover:bg-gold-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send it"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setStatus("idle");
            setErrorMsg(null);
          }}
          className="text-sm text-gray-500 hover:text-gray-300"
        >
          Cancel
        </button>
      </div>
      {errorMsg && <p className="mt-2 text-sm text-red-400">{errorMsg}</p>}
    </form>
  );
}
