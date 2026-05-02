import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { teamMembers } from "@/lib/team";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Meet the Team | MaxLife Realty",
  description:
    "Meet the licensed commercial real estate professionals at MaxLife Realty serving Central Florida and the Space Coast. Expert brokers specializing in NNN investments, 1031 exchanges, land, and multifamily.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the Team | MaxLife Realty",
    description:
      "Licensed Florida commercial real estate brokers specializing in NNN investments, land development, and multifamily across Central Florida and the Space Coast.",
    url: "https://maxlifedevelopment.com/team",
    type: "website",
  },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MaxLife Realty Team",
  url: "https://maxlifedevelopment.com/team",
  itemListElement: teamMembers.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      url: `https://maxlifedevelopment.com/team/${m.slug}`,
      image: `https://maxlifedevelopment.com${m.photo}`,
      telephone: m.phone,
      email: m.email,
    },
  })),
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={listSchema} />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Team", href: "/team" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-3">
            Our People
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet the <span className="text-gold">Team</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Licensed Florida commercial real estate professionals dedicated to
            helping investors, business owners, and developers succeed across
            Central Florida and the Space Coast.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.slug}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-gold/30 transition-colors"
            >
              {/* Photo */}
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-gold/30 shrink-0">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.title}`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & title */}
              <div className="text-center mb-5">
                <h2 className="text-white text-xl font-semibold">
                  {member.name}
                </h2>
                <p className="text-gold text-sm mt-1">{member.title}</p>
                {member.yearsExperience && (
                  <p className="text-gray-500 text-xs mt-1">
                    {member.yearsExperience}+ years experience
                  </p>
                )}
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                {member.specialties.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-2 text-sm text-center mb-6">
                <a
                  href={`tel:${member.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </a>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href={`/team/${member.slug}`}
                  className="block text-center bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Our team is here to help you find, analyze, and close your next
            commercial real estate deal across Central Florida and the Space
            Coast.
          </p>
          <Link
            href="/contact"
            data-track="team-page-contact-cta"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
