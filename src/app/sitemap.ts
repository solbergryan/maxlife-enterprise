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
  ];
}
