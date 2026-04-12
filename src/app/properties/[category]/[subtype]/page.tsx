import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyTypeLanding from "@/components/PropertyTypeLanding";
import {
  getSubtypeEntry,
  getCategoryEntry,
  propertyTypeRegistry,
} from "@/data/property-types";

interface PageProps {
  params: Promise<{ category: string; subtype: string }>;
}

export function generateStaticParams() {
  return propertyTypeRegistry
    .filter((e) => e.parentSlug)
    .map((entry) => ({
      category: entry.parentSlug as string,
      subtype: entry.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, subtype } = await params;
  const entry = getSubtypeEntry(category, subtype);
  if (!entry) return {};
  return {
    title: entry.meta.title,
    description: entry.meta.description,
    keywords: entry.meta.keywords,
  };
}

export default async function PropertySubtypePage({ params }: PageProps) {
  const { category, subtype } = await params;
  const entry = getSubtypeEntry(category, subtype);
  if (!entry) notFound();
  const parent = getCategoryEntry(category);

  return (
    <PropertyTypeLanding
      {...entry.page}
      slug={entry.slug}
      categorySlug={category}
      breadcrumbs={[
        { name: "Home", href: "" },
        { name: "Properties", href: "/properties" },
        {
          name: parent?.page.displayName ?? category,
          href: `/properties/${category}`,
        },
        {
          name: entry.page.displayName,
          href: `/properties/${category}/${subtype}`,
        },
      ]}
    />
  );
}
