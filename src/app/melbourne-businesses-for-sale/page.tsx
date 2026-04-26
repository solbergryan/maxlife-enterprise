import type { Metadata } from "next";
import SpaceCoastLandingPage from "@/components/space-coast/SpaceCoastLandingPage";
import { getPageConfig } from "@/data/space-coast/page-configs";

const SLUG = "melbourne-businesses-for-sale";
const config = getPageConfig(SLUG)!;

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `https://maxlifedevelopment.com/${SLUG}`,
  },
};

export default function Page() {
  return <SpaceCoastLandingPage config={config} />;
}
