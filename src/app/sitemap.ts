import type { MetadataRoute } from "next";
import { markets } from "@/data/markets";
import { deals } from "@/data/deals";
import { getAllCourses } from "@/lib/academy/content";
import { getPublishedReports } from "@/data/marketReports";
import { cities } from "@/data/seo/cities";
import { getAllPropertyTypes } from "@/data/seo/propertyTypes";
import { submarkets } from "@/data/seo/submarkets";
import { getOutlookParams } from "@/data/seo/outlooks";
import { propertyTypeRegistry } from "@/data/property-types";
import { professionals } from "@/lib/professionals";
import { jobs } from "@/data/careers";
import { faqTopics } from "@/data/faqs";
import { nnnTenants } from "@/data/nnn-tenants";
import { glossaryTerms } from "@/data/glossary";
import { investorPersonas } from "@/data/investor-personas";
import { leaseTypes } from "@/data/lease-types";
import { cities as seoCities } from "@/data/seo/cities";
import { createClient } from "@/lib/supabase/server";

const BASE_URL = "https://maxlifedevelopment.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/opportunities`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/markets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/investor-access`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/investor-tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/deal-analyzer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/net-sheets`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/net-sheets/seller`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/net-sheets/buyer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/lenders`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/market-reports`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Services
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/commercial-real-estate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/nnn-investments`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/land-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/residential-real-estate`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/property-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/custom-solutions`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Blog index
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Landing pages
    {
      url: `${BASE_URL}/orlando-commercial-real-estate-deals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/1031-exchange-florida`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nnn-properties-florida`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/car-wash-properties-florida`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/central-florida-land-for-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/office-space-for-lease-orlando`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/retail-space-for-rent-orlando`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industrial-property-central-florida`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/build-to-suit-orlando`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Academy
    {
      url: `${BASE_URL}/academy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog articles
  const blogSlugs = [
    "orlando-commercial-real-estate-trends-2026",
    "brevard-county-investment-property-outlook",
    "central-florida-land-development",
    "orlando-entertainment-district-investment-guide",
    "what-is-nnn-lease",
    "orlando-industrial-real-estate-guide",
    "orlando-multifamily-investment-guide",
    "orlando-retail-commercial-real-estate",
    "orlando-nnn-properties-for-sale",
    "how-to-buy-commercial-property-orlando",
    "orlando-cap-rates-investor-guide",
    "1031-exchange-orlando-guide",
    "lake-county-commercial-real-estate-guide",
    "how-to-evaluate-commercial-real-estate-deal",
    "medical-office-investing-central-florida",
    "why-invest-commercial-real-estate-florida",
    "office-space-for-lease-orlando-guide",
    "build-to-suit-vs-existing-commercial-orlando",
    "central-florida-commercial-real-estate-submarkets",
    "war-oil-prices-orlando-commercial-real-estate-spring-2026",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic market pages (4 markets from data)
  const marketPages: MetadataRoute.Sitemap = markets.map((market) => ({
    url: `${BASE_URL}/markets/${market.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic opportunity/deal pages
  const dealPages: MetadataRoute.Sitemap = deals.map((deal) => ({
    url: `${BASE_URL}/opportunities/${deal.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic academy course + lesson pages
  const courses = await getAllCourses();
  const academyPages: MetadataRoute.Sitemap = [];
  for (const course of courses) {
    academyPages.push({
      url: `${BASE_URL}/academy/courses/${course.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    });
    for (const lesson of course.lessons) {
      academyPages.push({
        url: `${BASE_URL}/academy/courses/${course.slug}/lessons/${lesson.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Dynamic quarterly market report pages
  const marketReportPages: MetadataRoute.Sitemap = getPublishedReports().map(
    (r) => ({
      url: `${BASE_URL}/market-reports/${r.slug}`,
      lastModified: r.publishDate,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })
  );

  // Programmatic SEO — property type × city pages
  const propertyTypeCityPages: MetadataRoute.Sitemap = getAllPropertyTypes().flatMap((pt) =>
    cities.map((city) => ({
      url: `${BASE_URL}/${pt.slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  // Programmatic SEO — cap rates by submarket
  const capRatePages: MetadataRoute.Sitemap = submarkets.map((s) => ({
    url: `${BASE_URL}/cap-rates/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Programmatic SEO — sector investment outlook reports
  const outlookPages: MetadataRoute.Sitemap = getOutlookParams().map(({ sector, year }) => ({
    url: `${BASE_URL}/investment-outlook/${sector}/${year}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  // /properties hub — index + 13 top-level categories + 126 subtypes
  const propertiesIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/properties`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];
  // Professionals directory — hub + individual role pages
  const professionalsHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/professionals`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/professionals/org-chart`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ];
  const professionalPages: MetadataRoute.Sitemap = professionals.map((p) => ({
    url: `${BASE_URL}/professionals/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const propertyTypePages: MetadataRoute.Sitemap = propertyTypeRegistry.map(
    (entry) => ({
      url: entry.parentSlug
        ? `${BASE_URL}/properties/${entry.parentSlug}/${entry.slug}`
        : `${BASE_URL}/properties/${entry.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // Top-level categories get higher priority than niche subtypes.
      priority: entry.parentSlug ? 0.7 : 0.85,
    }),
  );

  // Marketplace — user-submitted listings (read via Supabase if configured).
  // Fails soft: if Supabase env isn't set or the table doesn't exist, skip.
  const marketplaceIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/marketplace`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
  ];
  let marketplaceListings: MetadataRoute.Sitemap = [];
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    try {
      const supabase = await createClient();
      const { data } = await supabase
        .from("listings")
        .select("slug, updated_at, status")
        .in("status", ["active", "under_contract", "sold"])
        .limit(1000);
      marketplaceListings = (data ?? []).map((row) => ({
        url: `${BASE_URL}/marketplace/${row.slug}`,
        lastModified: row.updated_at ?? now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    } catch {
      // Table may not exist yet — silently omit.
    }
  }

  return [
    ...staticPages,
    ...blogPages,
    ...marketPages,
    ...dealPages,
    ...academyPages,
    ...marketReportPages,
    ...propertyTypeCityPages,
    ...capRatePages,
    ...outlookPages,
    ...propertiesIndex,
    ...propertyTypePages,
    ...professionalsHub,
    ...professionalPages,
    ...marketplaceIndex,
    ...marketplaceListings,
    // Careers pages
    {
      url: `${BASE_URL}/careers`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...jobs.map((j) => ({
      url: `${BASE_URL}/careers/${j.slug}`,
      lastModified: j.datePosted,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    // FAQ pages
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    ...faqTopics.map((t) => ({
      url: `${BASE_URL}/faq/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // NNN Tenant landing pages
    {
      url: `${BASE_URL}/nnn-tenants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...nnnTenants.map((t) => ({
      url: `${BASE_URL}/nnn-tenants/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // New investor tools
    {
      url: `${BASE_URL}/1031-timeline-calculator`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/cost-segregation-calculator`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/cap-rate-calculator`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    // Lease type pages
    {
      url: `${BASE_URL}/lease-types`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...leaseTypes.map((l) => ({
      url: `${BASE_URL}/lease-types/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Sell commercial property hub + city pages (programmatic)
    {
      url: `${BASE_URL}/sell-commercial-property`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...seoCities.map((c) => ({
      url: `${BASE_URL}/sell-commercial-property/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Buy NNN property hub + city pages (programmatic)
    {
      url: `${BASE_URL}/buy-nnn-property`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...seoCities.map((c) => ({
      url: `${BASE_URL}/buy-nnn-property/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    // Cap rates research hub (individual submarkets added above)
    {
      url: `${BASE_URL}/cap-rates`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    // Investment outlook research hub (sector/year pages added above)
    {
      url: `${BASE_URL}/investment-outlook`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    // Investor persona pages
    {
      url: `${BASE_URL}/investors`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...investorPersonas.map((p) => ({
      url: `${BASE_URL}/investors/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Glossary
    {
      url: `${BASE_URL}/glossary`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    ...glossaryTerms.map((t) => ({
      url: `${BASE_URL}/glossary/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // New comparison blog posts
    ...[
      "nnn-vs-multifamily-investing",
      "build-to-suit-vs-value-add",
      "1031-exchange-vs-opportunity-zone",
      "cap-rate-vs-cash-on-cash-return",
      "ground-lease-vs-fee-simple",
      "orlando-vs-tampa-cre-market",
    ].map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
