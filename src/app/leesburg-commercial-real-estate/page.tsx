import type { Metadata } from "next";
import OrlandoCityPage from "@/components/orlando/OrlandoCityPage";
import { getOrlandoPageConfig } from "@/data/orlando/page-configs";

const SLUG = "leesburg-commercial-real-estate";
const config = getOrlandoPageConfig(SLUG)!;

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
  return <OrlandoCityPage config={config} />;
}
