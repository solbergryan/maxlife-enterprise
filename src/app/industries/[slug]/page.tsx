import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry, type IndustryIconKey } from "@/data/industries";
import IndustryPageLayout from "@/components/IndustryPageLayout";
import Breadcrumbs from "@/components/Breadcrumbs";

const BASE_URL = "https://maxlifedevelopment.com";

const ICONS: Record<IndustryIconKey, React.ReactNode> = {
  healthcare: (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4v16m-8-8h16"
      />
    </svg>
  ),
  finance: (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 21h18M5 21V10l4-3 6 4 4-2v12M9 13v8m4-6v6m4-4v4"
      />
    </svg>
  ),
  logistics: (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 100-4 2 2 0 000 4zM18 20a2 2 0 100-4 2 2 0 000 4z"
      />
    </svg>
  ),
  aerospace: (
    <svg
      className="w-8 h-8 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2c2.5 3 4 7 4 11s-1.5 8-4 11c-2.5-3-4-7-4-11s1.5-8 4-11zM4 14c2-1 4-1 4-1m12 1c-2-1-4-1-4-1M9 22h6M11 11h2"
      />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg
    className="w-8 h-8 text-gold"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21H3M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"
    />
  </svg>
);

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const icon = industry.iconKey ? ICONS[industry.iconKey] : DEFAULT_ICON;

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Industries", href: "/industries" },
            {
              name: industry.title,
              href: `/industries/${industry.slug}`,
            },
          ]}
        />
      </div>
      <IndustryPageLayout
        slug={industry.slug}
        title={industry.title}
        subtitle={industry.subtitle}
        description={industry.description}
        icon={icon}
        marketStats={industry.marketStats}
        tenantFeatures={industry.tenantFeatures}
        investorFeatures={industry.investorFeatures}
        process={industry.process}
        benefits={industry.benefits}
        heroImage={industry.heroImage}
        heroAlt={industry.heroAlt}
      />
    </>
  );
}
