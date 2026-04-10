import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Orlando Commercial Real Estate Broker",
  description:
    "Contact MaxLife Realty — Central Florida commercial realtors serving Orlando, the Space Coast, and Lake Nona. Free CRE consultations for investors, developers, and owners.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact MaxLife Realty | Orlando CRE Broker",
    description:
      "Schedule a consultation with Ryan Solberg. Commercial real estate broker serving Orlando and Central Florida investors.",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact MaxLife Realty",
  description:
    "Contact Orlando commercial real estate broker Ryan Solberg and the MaxLife Realty team.",
  url: "https://maxlifedevelopment.com/contact",
  mainEntity: {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: "MaxLife Realty",
    telephone: "(321) 586-2121",
    email: "Ryan@MaxLifeRealty.com",
    url: "https://maxlifedevelopment.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Orlando" },
      { "@type": "AdministrativeArea", name: "Central Florida" },
      { "@type": "County", name: "Orange County" },
      { "@type": "County", name: "Brevard County" },
      { "@type": "County", name: "Seminole County" },
      { "@type": "County", name: "Lake County" },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$$$",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s <span className="text-gold">Talk</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Have a project in mind? Need a quote? Just want to ask a question?
            We&apos;re here and ready to help.
          </p>
        </div>
      </section>

      {/* Intro / keyword H2 */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-white mb-3">
            Commercial Realtors Serving Central Florida
          </h2>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            MaxLife Realty is a full-service commercial real estate
            brokerage serving Orlando, the Space Coast, Lake Nona, and the
            surrounding Central Florida markets. Whether you&apos;re buying,
            selling, leasing, or developing commercial property, our team
            combines local market knowledge with disciplined underwriting to
            deliver results for investors, developers, and owners.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Phone</h3>
                  <p className="text-gray-400 text-sm">(321) 586-2121</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400 text-sm">
                    Ryan@MaxLifeRealty.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-gray-400 text-sm">Central Florida — Orlando & Melbourne Areas</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Hours</h3>
                  <p className="text-gray-400 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
