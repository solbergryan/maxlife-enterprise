import type { Metadata } from "next";
import Link from "next/link";
import DealAnalyzerClient from "./DealAnalyzerClient";

export const metadata: Metadata = {
  title: "PDF Deal Analyzer | Upload Any OM, Get Full CRE Underwriting in Seconds",
  description:
    "Drop in any commercial real estate offering memorandum (PDF). Get a full underwriting analysis — IRR, DSCR, cash-on-cash, equity multiple, deal grade — in under a minute. Free, no signup.",
  alternates: { canonical: "/pdf-analyzer" },
  openGraph: {
    title: "MaxLife Development — PDF Deal Analyzer",
    description:
      "Upload any OM. Get IRR, DSCR, cap rate, and a deal grade in 60 seconds.",
    url: "https://maxlifedevelopment.com/pdf-analyzer",
  },
};

export default function PdfAnalyzerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools · AI-Powered
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            PDF <span className="text-gold">Deal Analyzer</span>
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg mb-6">
            Drop any commercial offering memorandum into the box below. Claude
            reads the PDF, extracts the deal terms, and runs the full
            underwriting — IRR, DSCR, cash-on-cash, equity multiple, and a
            letter-grade deal score — in under a minute.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Reads scanned & native PDFs
            </span>
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-gold rounded-full" />
              Up to 25 MB · ~10 second analysis
            </span>
            <span className="inline-flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Free · No signup
            </span>
          </div>
        </div>
      </section>

      {/* Tool */}
      <DealAnalyzerClient />

      {/* How it works */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            How the PDF Analyzer Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-gold text-3xl font-bold mb-3">01</div>
              <h3 className="text-white font-semibold mb-2">Upload Your OM</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Drag any offering memorandum, broker package, or property listing
                PDF into the box. Native PDFs and scanned documents both work.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">02</div>
              <h3 className="text-white font-semibold mb-2">AI Extracts the Numbers</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Claude reads the entire PDF and pulls the price, rent, NOI, cap
                rate, building specs, tenant info, and lease terms — even when
                they&rsquo;re buried in tables or footnotes.
              </p>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-3">03</div>
              <h3 className="text-white font-semibold mb-2">Full Underwriting</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The same engine that powers our{" "}
                <Link href="/deal-analyzer" className="text-gold hover:underline">
                  manual Deal Analyzer
                </Link>{" "}
                runs IRR, DSCR, cash-on-cash, and equity multiple. You get a
                letter-grade score and traffic-light benchmarks.
              </p>
            </div>
          </div>

          <p className="mt-10 text-xs text-gray-500 leading-relaxed">
            Estimates only — for informational and educational use. Not
            investment, tax, legal, or accounting advice. AI-extracted figures
            should be verified against the source document. See our{" "}
            <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
