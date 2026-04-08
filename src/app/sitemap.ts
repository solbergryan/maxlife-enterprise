import type { MetadataRoute } from "next";

const baseUrl = "https://www.maxlifedevelopment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/commercial-real-estate", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/nnn-investments", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial-development", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/commercial-financing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/land-development", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/residential-real-estate", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/services/property-services", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/services/custom-solutions", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/blog/what-is-nnn-lease", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/central-florida-land-development", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/1031-exchange-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/cap-rates-explained", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/due-diligence-checklist", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/transaction-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
