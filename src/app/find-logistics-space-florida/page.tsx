import type { Metadata } from "next";
import FindLogisticsSpaceForm from "@/components/FindLogisticsSpaceForm";

const BASE_URL = "https://maxlifedevelopment.com";

export const metadata: Metadata = {
  title: "Find Industrial & Warehouse Space in Florida | MaxLife Realty",
  description:
    "Looking for industrial space in Jacksonville, Lakeland, or Orlando? We source on- and off-market options for 3PLs and logistics operators in 48 hours. Free tenant rep.",
  alternates: { canonical: `${BASE_URL}/find-logistics-space-florida` },
};

export default function FindLogisticsSpacePage() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — value prop */}
          <div className="lg:pt-4">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">Industrial Tenant Rep · Florida</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Find Industrial Space in Florida.{" "}
              <span className="text-gold">Fast.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We find 3PLs, last-mile operators, and distribution companies the right warehouse space across Jacksonville, Lakeland, and Orlando — on- and off-market — in 48 hours or less.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: "⚡", title: "48-Hour Sourcing", desc: "3–5 qualified options matching your spec within 2 business days." },
                { icon: "🔒", title: "Off-Market First", desc: "40%+ of available Florida industrial space never hits LoopNet." },
                { icon: "💰", title: "No Cost to You", desc: "Landlords pay both sides of the commission. Tenant rep is free." },
                { icon: "📞", title: "Direct Access", desc: "Ryan Solberg, (321) 586-2121. One broker, no handoffs." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5">
              <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
                &ldquo;We needed 75,000 sf in Lakeland in 90 days. Ryan had 6 options in 2 weeks. We signed at below-asking rent.&rdquo;
              </p>
              <p className="text-gray-500 text-xs">— VP of Operations, Regional 3PL</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 lg:sticky lg:top-8">
            <FindLogisticsSpaceForm />
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold text-lg">MaxLife <span className="text-gold">Realty</span></span>
            <span className="text-gray-600 text-xs">FL Broker BK3354351</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:3215862121" className="text-gray-300 hover:text-gold transition-colors">(321) 586-2121</a>
            <a href="mailto:Ryan@MaxLifeRealty.com" className="text-gray-300 hover:text-gold transition-colors">Ryan@MaxLifeRealty.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
