import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | MaxLife Development",
  description:
    "Learn about MaxLife Development — our mission, philosophy, and the experience behind our multi-service approach.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Story Behind{" "}
            <span className="text-gold">MaxLife Development</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Built on real-world experience across multiple industries. One
            person, one vision, unlimited capability.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Photo / Headshot placeholder */}
          <div className="lg:col-span-1">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8 text-center sticky top-24">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gold/30">
                <Image
                  src="/headshot.jpg"
                  alt="Ryan Solberg"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-white text-xl font-semibold">
                Ryan Solberg
              </h3>
              <p className="text-gold text-sm mt-1">Founder & Operator</p>
              <div className="border-t border-dark-border mt-6 pt-6 space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Central Florida — Orlando & Melbourne Areas
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Licensed FL Broker
                </div>
                <div className="text-gray-500 text-xs mt-2">
                  License #3354351
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                MaxLife Development was founded to be a full-service commercial
                real estate partner for investors, developers, and property owners
                across Florida. Whether you&apos;re acquiring NNN properties,
                developing build-to-suit projects, or navigating a complex
                commercial transaction, one call should be enough.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We bring a breadth of expertise that most brokerages can&apos;t
                match — NNN investment brokerage, ground-up commercial development,
                land entitlements, commercial financing, and residential real estate.
                It&apos;s about having the range and market knowledge to handle
                whatever your investment goals require.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Philosophy
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Integrity First",
                    desc: "We do what we say and say what we do. No shortcuts, no surprises.",
                  },
                  {
                    title: "Results Over Promises",
                    desc: "Talk is cheap. We let our work speak for itself — and it speaks volumes.",
                  },
                  {
                    title: "Adapt & Deliver",
                    desc: "Every project is different. We tailor our approach to fit the situation, not the other way around.",
                  },
                  {
                    title: "Long-Term Relationships",
                    desc: "We're not chasing one-time transactions. We build partnerships that last.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-dark-card border border-dark-border rounded-lg p-5"
                  >
                    <h3 className="text-gold font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
              Most brokerages focus on one niche. MaxLife Development operates
                across the full commercial real estate lifecycle — from sourcing
                land and securing tenants to financing construction and selling
                stabilized assets. Our founder brings hands-on experience in NNN
                investments, commercial development, and capital markets. That
                vertically integrated approach means better deals, faster
                execution, and fewer middlemen.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When you work with MaxLife, you&apos;re getting a licensed Florida
                broker and mortgage loan originator who understands every angle of
                a commercial deal — from the pro forma to the closing table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Ready to see what MaxLife Development can do for you? Get in touch —
            we&apos;d love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
