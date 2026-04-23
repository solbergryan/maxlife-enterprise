import type { Metadata } from "next";
import { markets, getMarketBySlug } from "@/data/markets";
import MarketPageLayout from "@/components/MarketPageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
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

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Markets", href: "/markets" },
            { name: market.name, href: `/markets/${market.slug}` },
          ]}
        />
      </div>
      <MarketPageLayout market={market} />
    </>
  );
}
