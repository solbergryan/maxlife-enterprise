import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Commercial Real Estate",
    description:
      "Expert brokerage for office, retail, industrial, and investment properties. From acquisitions to dispositions, we close deals.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Residential Real Estate",
    description:
      "Buying, selling, or investing in homes. Personalized service that makes the process smooth from listing to closing.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Handyman Services",
    description:
      "Reliable repairs, installations, and maintenance. No job too small — plumbing, electrical, drywall, and everything in between.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Engineering",
    description:
      "Technical problem-solving and project management. Structural assessments, system design, and hands-on engineering expertise.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Cleaning Services",
    description:
      "Professional cleaning for residential and commercial properties. Deep cleans, move-in/out, and recurring maintenance.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Have a unique project? We tackle challenges others won't. Tell us what you need and we'll make it happen.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "6+", label: "Service Categories" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Client Satisfaction" },
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
              MaxLife Enterprise
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              One Call.{" "}
              <span className="text-gold">Every Solution.</span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              From commercial real estate deals to home repairs, engineering
              challenges to spotless cleans — MaxLife Enterprise delivers
              professional results across every service line.
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
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
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
                <span className="text-gold">MaxLife Enterprise</span>?
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
            <div className="bg-dark border border-dark-border rounded-xl p-8 text-center">
              <div className="text-6xl font-bold text-gold mb-2">ML</div>
              <div className="text-white text-xl font-light mb-4">
                MaxLife Enterprise
              </div>
              <p className="text-gray-400 text-sm">
                Built on integrity. Driven by excellence.
              </p>
            </div>
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
