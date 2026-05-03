"use client";

import { upload } from "@vercel/blob/client";
import { useRef, useState } from "react";

const MAX_PDF_BYTES = 25 * 1024 * 1024;

type Extracted = {
  propertyName: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  assetType: string;
  purchasePrice: number | null;
  annualRent: number | null;
  noi: number | null;
  capRate: number | null;
  buildingSqft: number | null;
  units: number | null;
  tenant: string | null;
  leaseType: string | null;
  summary: string;
};

type Analysis = {
  grade: string;
  rawNumbers: {
    purchasePrice: number;
    noi: number;
    entranceCap: number;
    irr: number;
    dscr: number;
    avgCashOnCash: number;
    equityMultiple: number;
    yearOneCashFlow: number;
    totalEquityInvested: number;
    exitValue: number;
    totalReturn: number;
    annualDebtService: number;
    loanAmount: number;
    downPayment: number;
  };
  benchmarks: {
    irr: { value: number; status: string; target: string };
    dscr: { value: number; status: string; target: string };
    cashOnCash: { value: number; status: string; target: string };
    equityMultiple: { value: number; status: string; target: string };
  };
};

type ApiResponse = {
  extracted?: Extracted;
  analysis?: Analysis;
  error?: string;
};

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

const gradeAccent = (g: string) => {
  if (g.startsWith("A")) return { ring: "ring-green-500/40", text: "text-green-400", label: "STRONG BUY" };
  if (g.startsWith("B")) return { ring: "ring-gold/40", text: "text-gold", label: "WORTH A LOOK" };
  return { ring: "ring-red-500/40", text: "text-red-400", label: "PASS" };
};

const statusStyle = (s: string) => {
  if (s === "PASS") return "bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-500/30";
  if (s === "WATCH") return "bg-gold/10 text-gold ring-1 ring-inset ring-gold/30";
  return "bg-red-500/10 text-red-400 ring-1 ring-inset ring-red-500/30";
};

export default function DealAnalyzerClient() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [downPaymentPct, setDownPaymentPct] = useState("25");
  const [interestRate, setInterestRate] = useState("6.75");
  const [holdPeriod, setHoldPeriod] = useState("10");
  const [purchasePriceOverride, setPurchasePriceOverride] = useState("");
  const [annualRentOverride, setAnnualRentOverride] = useState("");
  const [uploaderName, setUploaderName] = useState("");
  const [uploaderEmail, setUploaderEmail] = useState("");
  const [stage, setStage] = useState<"idle" | "uploading" | "analyzing">("idle");
  const [uploadPct, setUploadPct] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File | null) => {
    if (!f) return;
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      alert("Please upload a PDF.");
      return;
    }
    if (f.size > MAX_PDF_BYTES) {
      alert("PDF too large (max 25 MB).");
      return;
    }
    setFile(f);
    setResult(null);
  };

  const submit = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    setUploadPct(0);
    try {
      setStage("uploading");
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const blob = await upload(`pdf-analyzer/${Date.now()}-${safeName}`, file, {
        access: "private",
        handleUploadUrl: "/api/analyze-pdf/upload",
        contentType: "application/pdf",
        onUploadProgress: (e) => setUploadPct(Math.round(e.percentage)),
      });

      setStage("analyzing");
      const res = await fetch("/api/analyze-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blobUrl: blob.url,
          filename: file.name,
          downPaymentPct: downPaymentPct || undefined,
          interestRate: interestRate || undefined,
          holdPeriod: holdPeriod || undefined,
          purchasePrice: purchasePriceOverride || undefined,
          annualRent: annualRentOverride || undefined,
          uploaderName: uploaderName || undefined,
          uploaderEmail: uploaderEmail || undefined,
        }),
      });
      const data: ApiResponse = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: err instanceof Error ? err.message : "Network error" });
    } finally {
      setLoading(false);
      setStage("idle");
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setPurchasePriceOverride("");
    setAnnualRentOverride("");
    setUploaderName("");
    setUploaderEmail("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {!result?.analysis && (
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 sm:p-10">
          {/* Step 1 — drop zone */}
          <div className="mb-3 flex items-baseline gap-3">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Step 01
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
            Upload the Offering Memorandum
          </h2>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFile(e.dataTransfer.files[0]);
            }}
            onClick={() => inputRef.current?.click()}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-10 text-center transition ${
              dragOver
                ? "border-gold bg-gold/5"
                : file
                ? "border-green-500/40 bg-green-500/5"
                : "border-white/15 bg-white/[0.02] hover:border-gold/50 hover:bg-gold/5"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf,.pdf"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
              className="hidden"
            />
            {!file ? (
              <>
                <svg className="mb-4 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-lg font-semibold text-white">Drop your PDF here</p>
                <p className="mt-1 text-sm text-gray-400">
                  or click to browse · PDF · up to 25 MB
                </p>
              </>
            ) : (
              <>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/40">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-white">{file.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB · click to replace
                </p>
              </>
            )}
          </div>

          {/* Step 2 — uploader contact */}
          <div className="mt-8">
            <div className="mb-3 flex items-baseline gap-3">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">
                Step 02 · Optional
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="text-xl font-bold text-white">
              Want a human review from Ryan?
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Add your name and email and Ryan will personally follow up.
              Leave blank to stay anonymous.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              <input
                type="text"
                value={uploaderName}
                onChange={(e) => setUploaderName(e.target.value)}
                placeholder="Your name"
                className="bg-dark-card border border-white/15 rounded px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <input
                type="email"
                value={uploaderEmail}
                onChange={(e) => setUploaderEmail(e.target.value)}
                placeholder="Email address"
                className="bg-dark-card border border-white/15 rounded px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* Underwriting assumptions */}
          <details className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-4">
            <summary className="cursor-pointer text-xs font-semibold uppercase tracking-widest text-gray-300 hover:text-gold">
              Underwriting assumptions
              <span className="ml-2 font-normal normal-case tracking-normal text-gray-500">
                (defaults shown — change if you like)
              </span>
            </summary>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              <Field label="Down payment %" value={downPaymentPct} onChange={setDownPaymentPct} />
              <Field label="Interest rate %" value={interestRate} onChange={setInterestRate} step="0.05" />
              <Field label="Hold period (years)" value={holdPeriod} onChange={setHoldPeriod} />
            </div>
          </details>

          {/* Re-submit overrides */}
          {result?.error && result.extracted && (
            <div className="mt-6 rounded border-l-2 border-gold bg-gold/10 p-4">
              <p className="text-sm font-semibold text-gold">{result.error}</p>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
                <Field label="Purchase price ($)" value={purchasePriceOverride} onChange={setPurchasePriceOverride} placeholder="2500000" />
                <Field label="Annual rent ($)" value={annualRentOverride} onChange={setAnnualRentOverride} placeholder="180000" />
              </div>
            </div>
          )}

          {result?.error && !result.extracted && (
            <div className="mt-6 rounded border-l-2 border-red-500 bg-red-500/10 p-4 text-sm text-red-400">
              {result.error}
            </div>
          )}

          {/* Submit */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={submit}
              disabled={!file || loading}
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-500"
            >
              {stage === "uploading"
                ? `Uploading · ${uploadPct}%`
                : stage === "analyzing"
                ? "Analyzing the Deal…"
                : "Run Analysis"}
              {stage === "idle" && <span>→</span>}
            </button>
          </div>

          {loading && (
            <div className="mt-6 space-y-3 text-center">
              <div className="mx-auto h-1 w-72 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full bg-gold ${stage === "analyzing" ? "w-1/3 animate-pulse" : "transition-all duration-300"}`}
                  style={stage === "uploading" ? { width: `${uploadPct}%` } : undefined}
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {stage === "uploading"
                  ? "Uploading to secure storage…"
                  : "Reading PDF · extracting terms · running underwriting…"}
              </p>
            </div>
          )}
        </div>
      )}

      {result?.analysis && result.extracted && (
        <Results extracted={result.extracted} analysis={result.analysis} onReset={reset} />
      )}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  step,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        {label}
      </span>
      <input
        type="number"
        step={step}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-dark-card border border-white/15 rounded px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </label>
  );
}

function Results({ extracted, analysis, onReset }: { extracted: Extracted; analysis: Analysis; onReset: () => void }) {
  const a = analysis.rawNumbers;
  const b = analysis.benchmarks;
  const accent = gradeAccent(analysis.grade);

  return (
    <div className="space-y-6">
      {/* Grade card */}
      <div className={`rounded-xl bg-white/[0.04] border border-white/10 ring-2 ${accent.ring} p-8`}>
        <div className="grid items-end gap-6 md:grid-cols-[auto,1fr]">
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
              Investment Grade
            </p>
            <div className="flex items-baseline gap-4">
              <span className="text-7xl md:text-8xl font-bold leading-none text-white">
                {analysis.grade}
              </span>
              <span className={`text-sm font-semibold tracking-widest uppercase ${accent.text}`}>
                {accent.label}
              </span>
            </div>
          </div>

          <div className="border-l border-white/10 pl-6 md:text-right md:[border-left:none] md:[border-right:1px_solid_rgba(255,255,255,0.1)] md:pr-6 md:pl-0">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
              Subject Property
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              {extracted.propertyName ?? "Untitled deal"}
            </p>
            {(extracted.address || extracted.city) && (
              <p className="mt-1 text-sm text-gray-400">
                {[extracted.address, extracted.city, extracted.state].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Headline metrics */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "IRR", value: pct(a.irr), bench: b.irr },
          { label: "DSCR", value: `${a.dscr.toFixed(2)}x`, bench: b.dscr },
          { label: "Cash-on-Cash", value: pct(a.avgCashOnCash), bench: b.cashOnCash },
          { label: "Equity Multiple", value: `${a.equityMultiple.toFixed(2)}x`, bench: b.equityMultiple },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.04] border border-white/10 rounded-lg p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{m.label}</p>
            <p className="mt-1.5 text-3xl md:text-4xl font-bold text-white">{m.value}</p>
            <p className={`mt-3 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${statusStyle(m.bench.status)}`}>
              {m.bench.status} · {m.bench.target}
            </p>
          </div>
        ))}
      </div>

      {/* Detail panels */}
      <div className="grid gap-3 md:grid-cols-2">
        <DetailCard title="Sources & Uses">
          <Row label="Purchase Price" value={fmt(a.purchasePrice)} />
          <Row label="Loan Amount" value={fmt(a.loanAmount)} />
          <Row label="Down Payment" value={fmt(a.downPayment)} />
          <Row label="Total Equity Invested" value={fmt(a.totalEquityInvested)} bold />
        </DetailCard>
        <DetailCard title="Cash Flow & Exit">
          <Row label="NOI (Yr 1)" value={fmt(a.noi)} />
          <Row label="Annual Debt Service" value={fmt(a.annualDebtService)} />
          <Row label="Year 1 Cash Flow" value={fmt(a.yearOneCashFlow)} bold />
          <Row label="Entrance Cap" value={pct(a.entranceCap)} />
          <Row label="Projected Exit Value" value={fmt(a.exitValue)} />
          <Row label="Total Return" value={fmt(a.totalReturn)} bold />
        </DetailCard>
      </div>

      {/* From the OM */}
      <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            From the OM
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <p className="text-base italic leading-relaxed text-gray-200">
          &ldquo;{extracted.summary}&rdquo;
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 text-sm md:grid-cols-3">
          {extracted.assetType && <Row label="Asset Type" value={extracted.assetType} />}
          {extracted.tenant && <Row label="Tenant" value={extracted.tenant} />}
          {extracted.leaseType && <Row label="Lease" value={extracted.leaseType} />}
          {extracted.buildingSqft && (
            <Row label="Building" value={`${extracted.buildingSqft.toLocaleString()} SF`} />
          )}
          {extracted.units && <Row label="Units" value={String(extracted.units)} />}
          {extracted.capRate && <Row label="Stated Cap" value={`${extracted.capRate}%`} />}
        </dl>
      </div>

      {/* CTA */}
      <div className="rounded-xl bg-gradient-to-br from-navy via-navy-dark to-dark border border-gold/20 p-8">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
          Real Human Underwriting
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Want Ryan to look at this deal personally?
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
          Florida-licensed broker focused on commercial deals. He&rsquo;ll
          pressure-test the assumptions, run a comp set, and tell you whether
          the seller is being honest with you. No charge, no obligation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:Ryan@MaxLifeRealty.com?subject=Deal%20Review%20Request"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Email Ryan <span>→</span>
          </a>
          <a
            href="tel:+18557652374"
            className="inline-flex items-center gap-2 border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Call (855) 765-2374
          </a>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={onReset}
          className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-gold underline-offset-4 hover:underline transition"
        >
          ← Analyze another deal
        </button>
      </div>

      <p className="pt-2 text-center text-[11px] leading-relaxed text-gray-500">
        For informational purposes only. Not financial or investment advice.
        AI-extracted figures should be verified against the source document.
      </p>
    </div>
  );
}

function DetailCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6">
      <div className="mb-4 flex items-baseline gap-3">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <dl className="space-y-1.5 text-sm">{children}</dl>
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 py-1.5 last:border-0">
      <dt className="text-gray-400">{label}</dt>
      <dd className={`text-white ${bold ? "text-base font-bold" : "font-medium"}`}>
        {value}
      </dd>
    </div>
  );
}
