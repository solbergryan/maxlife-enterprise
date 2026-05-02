import type { Metadata } from "next";
import Link from "next/link";
import RentVsBuyCalculator from "@/components/RentVsBuyCalculator";

export const metadata: Metadata = {
  title: "Rent vs. Buy Calculator — Is Buying a Home Worth It in Florida?",
  description:
    "Free rent vs. buy calculator. Compare cumulative costs of renting vs. buying over any time horizon — includes mortgage, taxes, maintenance, appreciation, and opportunity cost.",
  keywords: [
    "rent vs buy calculator",
    "should I rent or buy",
    "rent vs buy Florida",
    "buy vs rent comparison",
    "home buying calculator",
    "renting vs buying calculator",
  ],
  alternates: { canonical: "/rent-vs-buy-calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Rent vs. Buy Calculator",
  description:
    "Compare the total cost of renting vs. buying over a custom time horizon, accounting for mortgage, taxes, insurance, maintenance, appreciation, and opportunity cost.",
  url: "https://maxlifedevelopment.com/rent-vs-buy-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "MaxLife Development",
    url: "https://maxlifedevelopment.com",
  },
};

export default function RentVsBuyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white/[0.03] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Tools
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Rent vs. Buy{" "}
            <span className="text-gold">Calculator</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Compare the true cost of renting against buying over any time horizon.
            Factors in mortgage principal and interest, property taxes, insurance,
            maintenance, home appreciation, rent increases, and the opportunity
            cost of your down payment.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <RentVsBuyCalculator />
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          Estimates only — for informational and educational use. Not financial,
          tax, legal, or investment advice. Consult a licensed financial advisor
          and lender before making housing decisions. See our{" "}
          <Link href="/terms" className="text-gold hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            How the Rent vs. Buy Calculation Works
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The calculator models two scenarios over your chosen time horizon and
            shows the net cost of each path — accounting not just for out-of-pocket
            expenses, but also for the equity you build and the investment returns
            you give up by tying money into a down payment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Buying costs include",
              items: [
                "Mortgage principal & interest (30-year fixed assumed)",
                "Annual property taxes",
                "Homeowner's insurance",
                "Maintenance & repairs",
                "Opportunity cost of the down payment",
                "Minus equity built (appreciation + principal paydown)",
              ],
            },
            {
              title: "Renting costs include",
              items: [
                "Monthly rent payments",
                "Annual rent increases (inflation)",
                "No equity accumulation",
                "Full investment return on down payment equivalent",
                "No maintenance or tax burden",
                "Maximum flexibility",
              ],
            },
          ].map((col) => (
            <div
              key={col.title}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
            >
              <p className="text-gold font-semibold text-sm mb-3">{col.title}</p>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-gold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Florida-Specific Considerations
          </h2>
          <ul className="space-y-3">
            {[
              {
                title: "No state income tax",
                desc: "Florida has no state income tax — a major financial advantage that improves the effective cost of homeownership relative to high-tax states.",
              },
              {
                title: "Homestead exemption",
                desc: "Florida homeowners who use the property as a primary residence can receive up to a $50,000 homestead exemption on assessed value, reducing property taxes significantly.",
              },
              {
                title: "Save Our Homes cap",
                desc: "Once homesteaded, annual property tax assessment increases are capped at 3% or CPI (whichever is lower) — protecting buyers from runaway tax bills as values rise.",
              },
              {
                title: "Insurance premiums",
                desc: "Florida homeowner insurance rates are among the highest in the nation due to hurricane risk. Budget $2,000–$5,000+ annually depending on location and structure age.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-4"
              >
                <p className="text-gold font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-6">
          <h3 className="text-white font-semibold text-lg mb-3">
            The Breakeven Point
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            The breakeven year is when cumulative buying costs (net of equity) drop
            below cumulative renting costs. Before that year, renting may be
            cheaper. After it, buying has typically paid off. In Florida&apos;s
            high-appreciation coastal markets, breakeven often arrives in years
            4–8. In slower markets, it may be year 8–12.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Explore the{" "}
            <span className="text-gold">Florida Market</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Use our Mortgage Calculator to model your monthly payment, or reach
            out to Ryan to discuss residential or commercial opportunities across
            Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/mortgage-calculator"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Talk to Ryan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
