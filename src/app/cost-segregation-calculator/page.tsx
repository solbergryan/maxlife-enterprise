import type { Metadata } from "next";
import Link from "next/link";
import CostSegCalculator from "@/components/CostSegCalculator";

export const metadata: Metadata = {
  title:
    "Cost Segregation ROI Calculator — Estimate Tax Savings on Commercial Property",
  description:
    "Free cost segregation calculator. Estimate first-year tax savings from accelerated depreciation on NNN, office, multifamily, industrial, and hotel properties. Includes 2026 bonus depreciation phase-out.",
  keywords: [
    "cost segregation calculator",
    "cost seg study ROI",
    "bonus depreciation calculator",
    "accelerated depreciation",
    "commercial real estate tax savings",
    "MACRS depreciation",
    "Florida cost segregation",
    "CRE tax planning",
  ],
  alternates: { canonical: "/cost-segregation-calculator" },
  openGraph: {
    title: "Cost Segregation Calculator | MaxLife Development",
    description:
      "Estimate first-year tax savings from cost segregation on commercial real estate.",
    url: "https://maxlifedevelopment.com/cost-segregation-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cost Segregation ROI Calculator",
  description:
    "Estimate first-year tax savings and ROI from cost segregation studies on commercial real estate.",
  url: "https://maxlifedevelopment.com/cost-segregation-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function CostSegPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cost Segregation{" "}
            <span className="text-gold">ROI Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Estimate your first-year tax savings from accelerated depreciation
            on commercial real estate. Cost segregation studies reclassify
            building components into 5-year and 15-year depreciation
            schedules — often delivering six-figure first-year tax savings.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CostSegCalculator />
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            What Is Cost Segregation?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Cost segregation is an IRS-approved tax strategy that reclassifies
            components of a commercial property from the default 39-year
            (27.5-year for multifamily) straight-line depreciation schedule
            into accelerated 5-year and 15-year MACRS schedules. The result:
            massive first-year deductions that significantly reduce taxable
            income.
          </p>
          <p className="text-gray-300 leading-relaxed">
            A licensed engineering firm conducts the study, typically
            identifying 20-40% of the building value as reclassifiable. For a
            $2M NNN property, that can mean $300K-$600K of accelerated
            deductions in year one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-dark-card border border-dark-border rounded-xl p-5">
            <h3 className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">
              5-Year Property
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Personal property components that can be reclassified from the
              building:
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Decorative lighting, fixtures</li>
              <li>• Removable carpeting & flooring</li>
              <li>• Specialty electrical (process equipment)</li>
              <li>• Specialty plumbing (commercial kitchens)</li>
              <li>• Cabinetry, millwork</li>
              <li>• Furniture & equipment</li>
            </ul>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-5">
            <h3 className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">
              15-Year Property
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Land improvements that can be depreciated over 15 years:
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Paving & parking lots</li>
              <li>• Site lighting</li>
              <li>• Landscaping & irrigation</li>
              <li>• Signage</li>
              <li>• Site drainage</li>
              <li>• Fencing & walls</li>
            </ul>
          </div>
          <div className="bg-dark-card border border-dark-border rounded-xl p-5">
            <h3 className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">
              39-Year Property
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Structural components remaining on the standard schedule:
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Foundation & structure</li>
              <li>• Roof & walls</li>
              <li>• HVAC (primary systems)</li>
              <li>• Primary electrical</li>
              <li>• Primary plumbing</li>
              <li>• Elevators</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-3">
            Who Benefits Most From Cost Segregation?
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex gap-2">
              <span className="text-gold">•</span>
              <span>
                <strong className="text-white">Real Estate Professionals</strong>{" "}
                (IRS definition) — can offset passive losses against active income
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">•</span>
              <span>
                <strong className="text-white">High-income active investors</strong>{" "}
                with passive income from other properties
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">•</span>
              <span>
                <strong className="text-white">Owners of $500K+ commercial properties</strong>{" "}
                (study ROI breaks even around this threshold)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-gold">•</span>
              <span>
                <strong className="text-white">Recent buyers</strong> who can
                apply cost seg retroactively (catch-up depreciation)
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            2026 Bonus Depreciation Status
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Under the 2017 Tax Cuts and Jobs Act, bonus depreciation is phasing
            out:
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { year: "2022", rate: "100%" },
              { year: "2023", rate: "80%" },
              { year: "2024", rate: "60%" },
              { year: "2025", rate: "40%" },
              { year: "2026", rate: "20%" },
              { year: "2027+", rate: "0%" },
            ].map((y) => (
              <div
                key={y.year}
                className="bg-dark-card border border-dark-border rounded-lg p-3 text-center"
              >
                <p className="text-gray-500 text-xs">{y.year}</p>
                <p className="text-gold font-bold text-lg">{y.rate}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Even without bonus depreciation, cost segregation provides
            significant value through accelerated 5-year and 15-year MACRS
            schedules. Congressional proposals to restore 100% bonus
            depreciation are ongoing — consult your CPA for current
            legislation status.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-dark-card border border-dark-border rounded-lg p-5">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-400">Disclaimer:</strong> This
            calculator provides estimates for educational purposes only. Actual
            cost segregation results depend on a detailed engineering study,
            property-specific components, and current tax law. Reclassification
            percentages shown are typical ranges and vary significantly by
            property. Not tax advice. Consult a qualified CPA and cost
            segregation specialist before making decisions based on these
            estimates. MaxLife Development does not provide tax or legal
            advice.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Planning a CRE <span className="text-gold">Acquisition</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            MaxLife Development sources commercial real estate across Florida
            with strong cost segregation potential. We work with qualified CPAs
            and cost seg specialists to help clients maximize tax benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?interest=CRE Acquisition with Cost Seg"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Find a Property
            </Link>
            <Link
              href="/deal-analyzer"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Deal Analyzer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
