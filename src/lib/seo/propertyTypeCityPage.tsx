import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypeCityTemplate from "@/components/seo/PropertyTypeCityTemplate";
import { cities, getCityBySlug } from "@/data/seo/cities";
import {
  fillTemplate,
  getPropertyType,
} from "@/data/seo/propertyTypes";

/**
 * Shared builder for every /<property-type>/[city] dynamic route.
 * Each route file (nnn-properties, office-space, industrial, retail) is a
 * 5-line wrapper that passes its property-type slug into these helpers.
 */
export function buildPropertyTypeCityRoute(propertyTypeSlug: string) {
  async function generateStaticParams() {
    return cities.map((c) => ({ city: c.slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ city: string }>;
  }): Promise<Metadata> {
    const { city: citySlug } = await params;
    const propertyType = getPropertyType(propertyTypeSlug);
    const city = getCityBySlug(citySlug);
    if (!propertyType || !city) return { title: "Not Found" };

    const vars = { city: city.name, county: city.county, population: city.population };
    return {
      title: fillTemplate(propertyType.metaTitle, vars),
      description: fillTemplate(propertyType.metaDescription, vars),
      keywords: propertyType.keywords.concat([
        `${propertyType.name.toLowerCase()} ${city.name}`,
        `${city.name} commercial real estate`,
      ]),
      alternates: { canonical: `/${propertyTypeSlug}/${city.slug}` },
      openGraph: {
        title: fillTemplate(propertyType.metaTitle, vars),
        description: fillTemplate(propertyType.metaDescription, vars),
        url: `https://maxlifedevelopment.com/${propertyTypeSlug}/${city.slug}`,
      },
    };
  }

  async function Page({ params }: { params: Promise<{ city: string }> }) {
    const { city: citySlug } = await params;
    const propertyType = getPropertyType(propertyTypeSlug);
    const city = getCityBySlug(citySlug);
    if (!propertyType || !city) notFound();
    return <PropertyTypeCityTemplate propertyType={propertyType} city={city} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
