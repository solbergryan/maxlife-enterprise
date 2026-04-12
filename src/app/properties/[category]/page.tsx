import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypeLanding from "@/components/PropertyTypeLanding";
import {
  getCategoryEntry,
  topLevelCategories,
  getSubtypesForCategory,
} from "@/data/property-types";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return topLevelCategories.map((entry) => ({ category: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const entry = getCategoryEntry(category);
  if (!entry) return {};
  return {
    title: entry.meta.title,
    description: entry.meta.description,
    keywords: entry.meta.keywords,
  };
}

export default async function PropertyCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const entry = getCategoryEntry(category);
  if (!entry) notFound();

  // Build related resources by merging subtype links with any existing
  // related resources from the data file.
  const subtypes = getSubtypesForCategory(category);
  const subtypeLinks = subtypes.slice(0, 3).map((s) => ({
    title: s.page.displayName,
    description: s.meta.description,
    href: `/properties/${category}/${s.slug}`,
  }));
  const merged = [
    ...(entry.page.relatedResources ?? []),
    ...subtypeLinks,
  ].slice(0, 6);

  return (
    <PropertyTypeLanding
      {...entry.page}
      slug={entry.slug}
      breadcrumbs={[
        { name: "Home", href: "" },
        { name: "Properties", href: "/properties" },
        { name: entry.page.displayName, href: `/properties/${entry.slug}` },
      ]}
      relatedResources={merged.length > 0 ? merged : entry.page.relatedResources}
    />
  );
}
