import Link from "next/link";

interface Feature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: Feature[];
  process: ProcessStep[];
  benefits: string[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  icon,
  features,
  process,
  benefits,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-dark-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
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
              {icon}
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                {subtitle}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          What We <span className="text-gold">Offer</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our <span className="text-gold">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="text-5xl font-bold text-gold/15 absolute -top-2 -left-1">
                  {step.step}
                </div>
                <div className="pt-8 pl-2">
                  <h3 className="text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 text-dark-border">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MaxLife */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">
          Why Choose <span className="text-gold">MaxLife</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-dark-card border border-dark-border rounded-lg p-4"
            >
              <svg className="w-5 h-5 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-300 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-card/50 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Contact us today for a free consultation. We&apos;ll discuss your
            needs and put together a plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get a Free Quote
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
