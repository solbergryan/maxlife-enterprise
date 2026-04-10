import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Office Space for Lease in Orlando | MaxLife Enterprise",
  description:
    "Find office space for lease in Orlando, Lake Nona, and Downtown Orlando. Class A, B, and flex office space from Central Florida's commercial real estate broker.",
  alternates: { canonical: "/office-space-for-lease-orlando" },
  openGraph: {
    title: "Office Space for Lease in Orlando | MaxLife Enterprise",
    description:
      "Class A, B, and flex office space for lease across Orlando, Lake Nona, Maitland, Winter Park, and Downtown Orlando.",
  },
};

const submarkets = [
  {
    name: "Downtown Orlando",
    desc: "Class A high-rise office space in the CBD — ideal for legal, financial, and professional services tenants that need a central location.",
  },
  {
    name: "Lake Nona / Medical City",
    desc: "Fast-growing medical office and life-sciences corridor anchored by UCF Medical, Nemours, and the VA Medical Center.",
  },
  {
    name: "Maitland & Winter Park",
    desc: "Established suburban office submarkets with strong demographics and long tenant retention — popular with professional services firms.",
  },
  {
    name: "Sand Lake Road / Dr. Phillips",
    desc: "Upscale office demand driven by affluent residential neighborhoods and proximity to the tourism corridor.",
  },
  {
    name: "I-Drive / Convention Center",
    desc: "Flexible office and creative space serving hospitality, entertainment, and convention-adjacent businesses.",
  },
  {
    name: "SoDo / Airport",
    desc: "Flex office and office-warehouse combinations popular with logistics, medical, and service-trade tenants.",
  },
];

const whatToKnow = [
  {
    title: "Class A vs Class B vs Flex",
    desc: "Class A buildings offer the highest finishes and amenities and command premium rents. Class B and flex space deliver lower operating costs and often come with stronger TI packages.",
  },
  {
    title: "Tenant Improvement (TI) Allowance",
    desc: "Orlando landlords typically offer TI allowances based on lease term and creditworthiness. A well-negotiated TI package can offset most build-out costs.",
  },
  {
    title: "Rent Structure: Gross vs NNN",
    desc: "Office leases in Orlando range from full-service gross to triple-net (NNN). Understanding which expenses you're responsible for is critical to comparing offers.",
  },
  {
    title: "Parking Ratios",
    desc: "Parking is a major factor in Orlando office selection — ratios vary from 3/1,000 SF in the CBD to 5/1,000 SF or better in suburban submarkets.",
  },
];

const howWeHelp = [
  {
    step: "1",
    title: "Define Your Requirements",
    desc: "Square footage, budget, preferred submarkets, lease term, and any specialized needs — medical, tech, creative, or traditional office.",
  },
  {
    step: "2",
    title: "Tour & Shortlist",
    desc: "We source both listed and unlisted opportunities, tour buildings with you, and build a shortlist that actually fits your business.",
  },
  {
    step: "3",
    title: "Negotiate & Close",
    desc: "We negotiate rent, TI, free rent, options, and exit clauses — then manage the LOI and lease through signing.",
  },
];

const faqs = [
  {
    q: "What does office space for lease in Orlando cost per square foot?",
    a: "Rates vary significantly by submarket and class. Class A space in Downtown Orlando and Lake Nona generally commands the highest rates, while suburban Class B space is typically more affordable. Contact us for current market rates tailored to your target submarket.",
  },
  {
    q: "What's a typical office lease term in Orlando?",
    a: "Most commercial office leases in Orlando run 3 to 7 years, with longer terms (7–10 years) common when significant tenant improvements are involved. Shorter-term flexible options exist in coworking and executive suites.",
  },
  {
    q: "Do tenants pay a broker commission?",
    a: "No. Tenant representation in Orlando commercial real estate is paid by the landlord out of the deal — so working with a tenant-rep broker like MaxLife Enterprise costs you nothing.",
  },
  {
    q: "How long does it take to find and lease office space?",
    a: "Plan on 60–120 days from initial search to lease signing for a standard office requirement. Highly customized build-outs or larger floor plates may take longer.",
  },
];

export default function OfficeSpaceForLeaseOrlandoPage() {
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
              name: "Office Space for Lease in Orlando",
              item: "https://maxlifedevelopment.com/office-space-for-lease-orlando",
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Office Space for Lease in Orlando",
          provider: {
            "@type": "RealEstateAgent",
            name: "MaxLife Enterprise",
            url: "https://maxlifedevelopment.com",
          },
          areaServed: [
            { "@type": "City", name: "Orlando" },
            { "@type": "AdministrativeArea", name: "Central Florida" },
          ],
          serviceType: "Office space tenant representation and leasing",
          description:
            "Tenant representation and office leasing across Orlando — Class A, B, and flex office space in Downtown Orlando, Lake Nona, Maitland, Winter Park, Sand Lake, and I-Drive.",
        }}
      />

      {/* Hero */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Tenant Representation
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Office Space for Lease{" "}
            <span className="text-gold">in Orlando</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg sm:text-xl mb-6">
            Class A, B, and flex office space across Orlando, Lake Nona, and
            Downtown Orlando
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            MaxLife Enterprise helps tenants find office space for lease in
            Orlando and throughout Central Florida. From single-office users
            needing a few hundred square feet to growing companies taking a full
            floor, our tenant-rep team identifies the right buildings, tours
            them with you, and negotiates the lease — at no cost to the tenant.
          </p>
          <div className="mt-8">
            <a
              href="#office-space-request"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Request an Office Space Tour
            </a>
          </div>
        </div>
      </section>

      {/* Submarkets */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Orlando Office Submarkets We Cover
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Every Orlando office submarket has its own rent structure, tenant
            mix, and commute considerations. Here&apos;s where our tenants most
            commonly lease.
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

      {/* What to Know */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            What to Know Before Leasing Office Space in Orlando
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            Office leasing is more than a per-square-foot rate. Here are the
            four factors that most often determine whether a deal is actually
            good.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatToKnow.map((item) => (
              <div
                key={item.title}
                className="bg-dark border border-dark-border rounded-xl p-6"
              >
                <h3 className="text-gold font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            How MaxLife Helps Tenants Find Office Space
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            A simple, three-step process for finding the right space without
            the back-and-forth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeHelp.map((item) => (
              <div
                key={item.step}
                className="bg-dark-card border border-dark-border rounded-xl p-6 text-center"
              >
                <span className="inline-flex w-10 h-10 rounded-full bg-gold/20 text-gold font-bold items-center justify-center mb-4 text-lg">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h3>
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
            Orlando Office Space Leasing FAQ
          </h2>
          <p className="text-gray-400 max-w-2xl mb-12">
            The questions we hear most from tenants searching for office space
            in Orlando.
          </p>
          <div className="space-y-6 max-w-4xl">
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
        id="office-space-request"
        className="bg-dark-card/50 border-b border-dark-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
              Request an Office Space Tour
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Tell us your size, submarket, and target move-in date — we&apos;ll
              come back with a shortlist and tour schedule.
            </p>
            <div className="bg-dark-card border border-gold/20 rounded-xl p-8">
              <LeadCaptureForm
                buttonText="Request a Tour"
                subjectPrefix="Office Space for Lease Orlando"
                source="office-space-for-lease-orlando"
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
              href="/retail-space-for-rent-orlando"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Retail Space for Rent in Orlando
            </Link>
            <Link
              href="/markets/orlando-commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Orlando Market Overview
            </Link>
            <Link
              href="/services/commercial-real-estate"
              className="inline-block border border-gold/30 text-gold hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Commercial Real Estate Services
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
