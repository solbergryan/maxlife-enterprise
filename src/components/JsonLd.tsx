export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "MaxLife Development",
    url: "https://www.maxlifedevelopment.com",
    logo: "https://www.maxlifedevelopment.com/og-image.jpg",
    image: "https://www.maxlifedevelopment.com/headshot.jpg",
    description:
      "Florida commercial real estate brokerage specializing in NNN investment properties, build-to-suit development, land brokerage, and commercial financing.",
    telephone: "+1-321-586-2121",
    email: "Ryan@MaxLifeRealty.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Florida",
      },
      {
        "@type": "City",
        name: "Orlando",
      },
      {
        "@type": "City",
        name: "Melbourne",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Ryan Solberg",
      jobTitle: "Founder & Licensed Florida Real Estate Broker",
      url: "https://www.maxlifedevelopment.com/about",
    },
    sameAs: [],
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial Real Estate Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "NNN Investment Properties",
            description:
              "Triple net lease property acquisitions and sales with national credit tenants.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Development",
            description:
              "NNN build-to-suit development from site selection through disposition.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Land Brokerage & Development",
            description:
              "Raw land acquisitions, entitlements, zoning, and development consulting.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Financing",
            description:
              "Commercial mortgage origination for acquisitions, construction, and NNN investment loans.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MaxLife Development",
    url: "https://www.maxlifedevelopment.com",
    description:
      "Florida commercial real estate brokerage — NNN investments, build-to-suit development, land brokerage, and commercial financing.",
    publisher: {
      "@type": "Organization",
      name: "MaxLife Development",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished = "2026-04-01",
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://www.maxlifedevelopment.com${url}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: "Ryan Solberg",
      url: "https://www.maxlifedevelopment.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxLife Development",
      url: "https://www.maxlifedevelopment.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.maxlifedevelopment.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
