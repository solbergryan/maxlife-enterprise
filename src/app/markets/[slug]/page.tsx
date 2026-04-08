import type { Metadata } from "next";
import { markets, getMarketBySlug } from "@/data/markets";
import MarketPageLayout from "@/components/MarketPageLayout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return { title: "Market Not Found" };
  return {
    title: market.metaTitle,
    description: market.metaDescription,
  };
}

export default async function MarketDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  return <MarketPageLayout market={market} />;
}
