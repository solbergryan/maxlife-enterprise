import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Retail Space for Rent in Orlando | MaxLife Realty",
  description:
    "Retail space for rent in Orlando's top submarkets. Endcap, inline, and anchored retail spaces from your Central Florida commercial real estate broker.",
  alternates: { canonical: "/retail-space-for-rent-orlando" },
  openGraph: {
    title: "Retail Space for Rent in Orlando | MaxLife Realty",
    description:
      "Endcap, inline, freestanding, and anchored retail space for rent in Orlando, Lake Nona, I-Drive, Sand Lake, and Winter Park.",
  },
};

const submarkets = [
  {
    name: "International Drive (I-Drive)",
    desc: "Orlando's tourism corridor — high foot traffic retail serving 75M+ annual visitors. Strong for experiential retail, dining, and entertainment concepts.",
  },
  {
    name: "Sand Lake Road / Restaurant Row",
    desc: "Upscale dining and retail destination with strong affluent residential demographics from Dr. Phillips and Windermere.",
  },
  {
    name: "Winter Park & Park Avenue",
    desc: "Boutique retail and specialty shops with loyal local customer base. Historic district commands premium rents.",
  },
  {
    name: "Lake Nona Town Center",
    desc: "Master-planned town center retail serving Medical City and fast-growing surrounding communities.",
  },
  {
    name: "Millenia / Mall Corridor",
    desc: "Regional mall-adjacent inline and freestanding retail with strong daytime and weekend traffic.",
  },
  {
    name: "East Orlando / Waterford Lakes",
    desc: "Suburban power-center retail serving dense residential neighborhoods and the UCF student population.",
  },
];

const retailTypes = [
  {
    title: "Endcap Space",
    desc: "Corner locations with drive-thru potential, exterior signage, and maximum visibility. Ideal for QSR, coffee, and service retail.",
  },
  {
    title: "Inline Retail",
    desc: "Mid-center storefronts in multi-tenant strip centers. Typically the most affordable option with existing co-tenant draw.",
  },
  {
    title: "Anchored Centers",
    desc: "Spaces in grocery-anchored or big-box-anchored centers — higher traffic, stronger credit tenants, more stable occupancy.",
  },
  {
    title: "Freestanding Buildings",
    desc: "Single-tenant retail buildings with full branding control, dedicated parking, and drive-thru or outdoor seating flexibility.",
  },
  {
    title: "Second-Generation Space",
    desc: "Former restaurant, medical, or retail space with existing build-out — dramatically reduces TI costs and speeds opening.",
  },
  {
    title: "Ground-Floor Mixed-Use",
    desc: "Retail below residential or office in Orlando's growing mixed-use developments in Lake Nona, Downtown, and Baldwin Park.",
  },
];

const thingsToKnow = [
  {
    title: "CAM Charges",
    desc: "Retail leases in Orlando typically include CAM (common area maintenance) in addition to base rent — covering parking lot upkeep, landscaping, trash, and property management. Understand what's billable before signing.",
  },
  {
    title: "Percentage Rent",
    desc: "Some anchored centers require percentage rent on sales above a breakpoint. This is common with national brands but negotiable for local operators.",
  },
  {
    title: "Exclusivity Clauses",
    desc: "Restaurant and service tenants should always negotiate an exclusive use clause — protecting you from direct competition within the same center.",
  },
  {
    title: "Co-Tenancy",
    desc: "Your lease should include co-tenancy provisions tied to anchor tenants. If the anchor goes dark, you may have rent reduction or termination rights.",
  },
];

const faqs = [
  {
    q: "What does retail space for rent in Orlando cost?",
    a: "Retail rents in Orlando vary widely by submarket and center type. Premium locations on I-Drive and Sand Lake command the highest rates, while suburban inline space is more affordable. We'll give you current market comps for any target area.",
  },
  {
    q: "What's a typical retail lease term?",
    a: "Most Orlando retail leases run 5 to 10 years, with national brands taking longer terms. Shorter 3-year terms are possible for local operators in second-gen space.",
  },
  {
    q: "Do I need a broker to find retail space?",
    a: "Tenant representation is paid by the landlord in virtually every retail deal, so working with a broker like MaxLife costs the tenant nothing while providing negotiating leverage and market insight.",
  },
  {
    q: "Can you help with build-out and permitting?",
    a: "Yes. Our team works with architects, contractors, and the City of Orlando permitting office to help tenants navigate build-out, signage, and certificate of occupancy.",
  },
];

export default function RetailSpaceForRentOrlandoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://maxlifedevelopment.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Retail Space for Rent in Orlando",
              item: "https://maxlifedevelopment.com/retail-space-for-rent-orlando",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Retail Space for Rent in Orlando",
          provider: {
            "@type": "RealEstateAgent",
            name: "MaxLife Realty",
            url: "https://maxlifedevelopment.com",
          },
          areaServed: [
            { "@type": "City", name: "Orlando" },
            { "@type": "AdministrativeArea", name: "Central Florida" },
          ],
          serviceType: "Retail space tenant representation and leasing",
          description:
            "Tenant representation for retail space for rent across Orlando — endcap, inline, anchored, and freestanding retail in I-Drive, Sand Lake, Winter Park, Lake Nona, and Millenia.",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Retail Tenant Representation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Retail Space for Rent{" "}
            <span className="text-gold">in Orlando</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            Endcap, inline, freestanding, and anchored retail space across
            Orlando&apos;s top submarkets
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            MaxLife Realty represents retail tenants across Orlando and
            Central Florida — from local restaurants and service businesses to
            regional and national chains. We find the right space, negotiate
            favorable lease terms, and help you open on time and on budget.
          </p>
          <div className="mt-8">
            <a
              href="#retail-space-request"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Find Retail Space for Rent
            </a>
          </div>
        </div>
      </section>

      {/* Submarkets */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Best Orlando Submarkets for Retail Space for Rent
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The right submarket depends on your concept, customer, and
            operating model. These are the Orlando areas where we place the
            most retail tenants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submarkets.map((s) => (
              <div
                key={s.name}
                className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Types */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Types of Retail Space We Lease
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Orlando&apos;s retail inventory ranges from anchored shopping
            centers to freestanding pad sites. Each configuration has its own
            economics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retailTypes.map((t) => (
              <div
                key={t.title}
                className="bg-dark border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold mb-2">{t.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Tenants Should Know */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            What Retail Tenants Should Know
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The lease terms that matter most — beyond the base rent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thingsToKnow.map((item) => (
              <div
                key={item.title}
                className="bg-dark-card border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Orlando Retail Space FAQ
          </h2>
          <div className="space-y-6 max-w-4xl mt-12">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-dark border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section
        id="retail-space-request"
        className="bg-dark-card/50 border-b border-dark-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Find Your Retail Space
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tell us your concept, target submarket, and size — we&apos;ll
              build a shortlist and schedule tours.
            </p>
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Start My Search"
                subjectPrefix="Retail Space for Rent Orlando"
                source="retail-space-for-rent-orlando"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-bold text-white mb-6">
            Explore More Orlando CRE Resources
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/office-space-for-lease-orlando"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Office Space for Lease
            </Link>
            <Link
              href="/blog/orlando-retail-commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Orlando Retail Market Guide
            </Link>
            <Link
              href="/markets/orlando-commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Orlando Market Overview
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
