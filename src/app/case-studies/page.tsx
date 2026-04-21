import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Orlando CRE Case Studies & Success Stories",
  description:
    "Browse Orlando commercial real estate success stories and Central Florida CRE case studies. See real deal results from acquisitions and NNN investments.",
  openGraph: {
    title: "Commercial Real Estate Case Studies | Orlando & Central Florida",
    description:
      "Real CRE deal case studies across Central Florida. See how MaxLife Realty helps investors acquire and maximize commercial property value.",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/commercial-business/maxlife-commercial-business-bridge-business-future-training-skyline-development-1916757.webp"
          alt="Commercial real estate success stories and deal track record"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Track Record
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Case Studies &amp; <span className="text-gold">Deal Results</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Real deals, real results. See how we help investors find, acquire,
            and maximize commercial real estate opportunities across Central
            Florida.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss your investment goals and find the right
            commercial real estate opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Current Deals
            </Link>
            <Link
              href="/investor-access"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Off-Market Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
