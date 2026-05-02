import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers, getTeamMember } from "@/lib/team";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Not Found" };

  return {
    title: `${member.name} — ${member.title} | MaxLife Realty`,
    description: member.metaDescription,
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      title: `${member.name} | MaxLife Realty`,
      description: member.metaDescription,
      url: `https://maxlifedevelopment.com/team/${member.slug}`,
      type: "profile",
      images: [
        {
          url: `https://maxlifedevelopment.com${member.photo}`,
          width: 400,
          height: 400,
          alt: member.name,
        },
      ],
    },
  };
}

export default async function TeamMemberPage({ params }: { params: Params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return notFound();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.title,
    description: member.metaDescription,
    url: `https://maxlifedevelopment.com/team/${member.slug}`,
    image: `https://maxlifedevelopment.com${member.photo}`,
    telephone: member.phone,
    email: member.email,
    ...(member.linkedinUrl ? { sameAs: [member.linkedinUrl] } : {}),
    worksFor: {
      "@type": "RealEstateAgent",
      name: "MaxLife Realty",
      url: "https://maxlifedevelopment.com",
    },
    hasCredential: member.licenses.map((lic) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: lic.type,
      identifier: lic.number,
      ...(lic.issuer
        ? { recognizedBy: { "@type": "Organization", name: lic.issuer } }
        : {}),
    })),
    knowsAbout: member.specialties,
    areaServed: member.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  return (
    <>
      <JsonLd data={personSchema} />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Team", href: "/team" },
            { name: member.name, href: `/team/${member.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <Link
            href="/team"
            className="text-gray-300 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Team Members
          </Link>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Photo */}
            <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-gold/30 shrink-0">
              <Image
                src={member.photo}
                alt={`${member.name} — ${member.title}`}
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Name / title / contact */}
            <div>
              <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
                MaxLife Realty
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {member.name}
              </h1>
              <p className="text-gold text-lg mb-4">{member.title}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <a
                  href={`tel:${member.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </a>
                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">

            {/* Specialties */}
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5 text-gray-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Licenses */}
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Licenses &amp; Credentials
              </h3>
              <div className="space-y-3">
                {member.licenses.map((lic) => (
                  <div
                    key={lic.number}
                    className="border-b border-white/5 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="text-gray-300 text-sm font-medium">
                      {lic.type}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      #{lic.number}
                      {lic.issuer ? ` · ${lic.issuer}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white/[0.04] border border-gold/20 rounded-xl p-6 text-center">
              <p className="text-white font-semibold mb-1">
                Ready to connect?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Reach out directly to discuss your CRE goals.
              </p>
              <a
                href={`mailto:${member.email}`}
                className="block bg-gold hover:bg-gold-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Email {member.name.split(" ")[0]}
              </a>
            </div>
          </aside>

          {/* Bio + expertise */}
          <div className="lg:col-span-2 space-y-10">

            {/* Bio */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                About <span className="text-gold">{member.name.split(" ")[0]}</span>
              </h2>
              <div className="space-y-4">
                {member.bio.map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Expertise cards */}
            {member.expertiseCards && member.expertiseCards.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Areas of <span className="text-gold">Expertise</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.expertiseCards.map((card) => (
                    <div
                      key={card.title}
                      className="bg-white/[0.04] border border-white/10 rounded-lg p-5"
                    >
                      <h3 className="text-gold font-semibold mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Featured deals */}
            {member.featuredDeals && member.featuredDeals.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Featured <span className="text-gold">Transactions</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.featuredDeals.map((deal, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.04] border border-white/10 rounded-lg p-5"
                    >
                      <p className="text-white font-medium text-sm">
                        {deal.title}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {deal.value && (
                          <span className="text-gold text-xs font-semibold">
                            {deal.value}
                          </span>
                        )}
                        {deal.type && (
                          <span className="text-gray-400 text-xs">{deal.type}</span>
                        )}
                        {deal.location && (
                          <span className="text-gray-500 text-xs">
                            {deal.location}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* CTA footer */}
      <section className="bg-white/[0.03] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Work with{" "}
            <span className="text-gold">{member.name.split(" ")[0]}</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Let&apos;s discuss your commercial real estate goals across Central
            Florida and the Space Coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              data-track={`team-${member.slug}-contact-cta`}
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/team"
              className="inline-block border border-white/10 hover:border-gold/40 text-white font-medium px-10 py-4 rounded-lg transition-colors"
            >
              All Team Members
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
