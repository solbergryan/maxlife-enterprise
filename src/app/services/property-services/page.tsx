import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Services | MaxLife Realty",
  description:
    "Full-service property maintenance, cleaning, and engineering services in Orlando and Melbourne, FL. Handyman repairs, professional cleaning, and technical consulting.",
};

export default function PropertyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <Image
          src="/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-architecture-construction-design-business-office-849849.webp"
          alt="Commercial property maintenance and services in Central Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">
          <Link
            href="/services"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 mt-1">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                Property Services
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Maintenance, Cleaning & Engineering
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                Comprehensive property services for investors, landlords, and
                homeowners. From routine maintenance to deep cleans to
                technical engineering — one call covers it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Repairs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          Maintenance & <span className="text-gold">Repairs</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Reliable handyman services for residential and commercial properties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Plumbing repairs & installations",
            "Electrical work & fixture installs",
            "Drywall repair & painting",
            "Carpentry & trim work",
            "Appliance & fixture installation",
            "Pressure washing & exterior maintenance",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Cleaning */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Professional <span className="text-gold">Cleaning</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Spotless results for homes, offices, and investment properties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Deep cleaning (residential & commercial)",
              "Move-in / move-out cleaning",
              "Post-construction cleanup",
              "Office & workspace cleaning",
              "Recurring maintenance cleaning",
              "Carpet, window & specialty cleaning",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-dark border border-dark-border rounded-lg p-4"
              >
                <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          Technical & <span className="text-gold">Engineering</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Engineering expertise for complex property challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Structural assessments",
            "System design & optimization",
            "Project management",
            "Technical consulting & code compliance",
            "Energy efficiency audits",
            "Problem diagnosis & resolution",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Property Work Done?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Whether it&apos;s a quick repair, a deep clean, or a technical
            assessment — we&apos;ve got you covered. One call, done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:3215862121"
              className="inline-block border border-dark-border hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              Call (321) 586-2121
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
