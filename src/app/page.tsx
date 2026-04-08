import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Commercial Real Estate",
    href: "/services/commercial-real-estate",
    description:
      "Full-service brokerage for office, retail, industrial, and NNN investment properties. Acquisitions, dispositions, and lease negotiations.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "NNN Investments",
    href: "/services/nnn-investments",
    description:
      "Passive income through triple net lease properties. National credit tenants, long-term leases, and predictable cash flow.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Land Development",
    href: "/services/land-development",
    description:
      "Raw land acquisitions, entitlements, zoning, site planning, and development consulting across Central Florida.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Residential Real Estate",
    href: "/services/residential-real-estate",
    description:
      "Buying, selling, or investing in homes. Personalized service from listing to closing across Orlando and Melbourne.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Property Services",
    href: "/services/property-services",
    description:
      "Maintenance, cleaning, and engineering for investors and property owners. One call for repairs, cleans, and technical work.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    href: "/services/custom-solutions",
    description:
      "Unique projects, property management, renovation coordination, and emergency services. We tackle what others won't.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100+", label: "Projects Completed", href: "/portfolio" },
  { value: "6+", label: "Service Categories", href: "/services" },
  { value: "24/7", label: "Availability", href: "/contact" },
  { value: "100%", label: "Client Satisfaction", href: "/about" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              MaxLife Development
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              One Call.{" "}
              <span className="text-gold">Every Solution.</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Commercial real estate brokerage, NNN investment properties, land
              development, and full-service property solutions. MaxLife
              Development delivers results across Central Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3.5 rounded-lg text-center transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border border-dark-border hover:border-gold/40 text-white font-medium px-8 py-3.5 rounded-lg text-center transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-dark-border bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Link key={stat.label} href={stat.href} className="text-center group block">
                <div className="text-3xl font-bold text-gold group-hover:text-gold-light transition-colors">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1 group-hover:text-white transition-colors">{stat.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What We <span className="text-gold">Do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diverse portfolio of professional services, all delivered with the
            same commitment to quality and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-gold hover:text-gold-light font-medium transition-colors"
          >
            Learn more about our services &rarr;
          </Link>
        </div>
      </section>

      {/* Why MaxLife */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose{" "}
                <span className="text-gold">MaxLife Development</span>?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "One Point of Contact",
                    desc: "Stop juggling multiple contractors. One call handles everything from real estate to repairs.",
                  },
                  {
                    title: "Professional Standards",
                    desc: "Licensed, insured, and held to the highest professional standards across every service.",
                  },
                  {
                    title: "Results-Driven",
                    desc: "We don't just show up — we deliver measurable outcomes and stand behind our work.",
                  },
                  {
                    title: "Flexible & Responsive",
                    desc: "Available when you need us. We adapt to your schedule and project requirements.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/about" className="bg-dark border border-dark-border rounded-xl p-8 text-center block group hover:border-gold/30 transition-colors">
              <div className="text-6xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">ML</div>
              <div className="text-white text-xl font-light mb-4 group-hover:text-gold transition-colors">
                MaxLife Development
              </div>
              <p className="text-gray-400 text-sm">
                Built on integrity. Driven by excellence.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our <span className="text-gold">Clients</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We let our work speak for itself — but our clients have a few words too.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Ryan handled our NNN acquisition from start to finish. His market knowledge and negotiation skills saved us over $50K on the deal. Couldn't recommend him more.",
              name: "David M.",
              role: "NNN Investor, Orlando",
            },
            {
              quote:
                "We needed someone who understood both the land entitlement process and the commercial side. Ryan delivered on both — our site is now fully entitled and under development.",
              name: "Sarah K.",
              role: "Developer, Brevard County",
            },
            {
              quote:
                "Professional, responsive, and honest. Ryan helped us sell our retail property quickly and at a price we were happy with. He made the whole process easy.",
              name: "Mark & Lisa T.",
              role: "Property Owners, Melbourne",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col"
            >
              <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-dark-border pt-4">
                <p className="text-white font-medium text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="bg-dark-card/50 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Central Florida <span className="text-gold">Market Snapshot</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key metrics driving the Central Florida commercial real estate market.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "5.5–7%", label: "NNN Cap Rate Range", detail: "National credit tenants", href: "/blog/cap-rates-explained" },
              { value: "$15–40", label: "Retail Lease PSF", detail: "Class A & B locations", href: "/services/commercial-real-estate" },
              { value: "$30K–150K", label: "Land Per Acre", detail: "Entitled commercial sites", href: "/blog/central-florida-land-development" },
              { value: "2,000+", label: "People/Day", detail: "Moving to Florida", href: "/services/commercial-development" },
            ].map((stat) => (
              <Link
                key={stat.label}
                href={stat.href}
                className="bg-dark border border-dark-border rounded-xl p-6 text-center group hover:border-gold/30 transition-colors block"
              >
                <div className="text-2xl font-bold text-gold mb-1 group-hover:text-gold-light transition-colors">{stat.value}</div>
                <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether it&apos;s a multi-million dollar real estate deal or a leaky
          faucet, we&apos;re here to help. Reach out today for a free
          consultation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
        >
          Contact Us Now
        </Link>
      </section>
    </>
  );
}
