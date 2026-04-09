import Link from "next/link";
import type { Metadata } from "next";
import InvestorSignupForm from "@/components/InvestorSignupForm";

export const metadata: Metadata = {
  title: "Off-Market Commercial Real Estate Orlando",
  description:
    "Get access to off-market commercial real estate deals in Orlando and Central Florida. Exclusive NNN, retail & multifamily investment property opportunities.",
  openGraph: {
    title: "Off-Market Orlando Investment Property Deals",
    description:
      "Join our investor network for exclusive off-market commercial real estate opportunities across Orlando and the Space Coast.",
  },
};

export default function InvestorAccessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Investor Access
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Exclusive Access to{" "}
            <span className="text-gold">Off-Market Commercial Deals</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Join our investor network and receive curated commercial real estate
            opportunities in Central Florida and the Space Coast before they hit
            the open market.
          </p>
        </div>
      </section>

      {/* Value Prop + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Value Props */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Why Our Investors Get Better Deals
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Off-Market Sourcing",
                    desc: "We source deals directly through our network — many properties never hit the MLS or public listings.",
                  },
                  {
                    title: "Pre-Screened Opportunities",
                    desc: "Every deal comes with preliminary underwriting, market analysis, and our honest assessment of the opportunity.",
                  },
                  {
                    title: "Matched to Your Criteria",
                    desc: "Tell us your investment range, preferred property types, and target returns — we only send you relevant deals.",
                  },
                  {
                    title: "Speed Advantage",
                    desc: "Off-market deals move fast. Our investor network gets first look before broader marketing begins.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                How It Works
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Sign Up",
                    desc: "Tell us your investment criteria — property types, price range, and goals.",
                  },
                  {
                    step: "2",
                    title: "Get Matched",
                    desc: "Receive curated deal opportunities that match your criteria with full underwriting.",
                  },
                  {
                    step: "3",
                    title: "Close Deals",
                    desc: "We handle the transaction from offer to closing — you focus on building your portfolio.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 bg-dark-card border border-dark-border rounded-lg p-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-white font-semibold mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-2">
                Get Started
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below and we&apos;ll add you to our investor
                network. No spam — just real deals.
              </p>
              <InvestorSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Prefer to Talk First?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Have questions about our investor network or a specific deal?
            Let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule a Call
            </Link>
            <Link
              href="/opportunities"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse Current Deals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
