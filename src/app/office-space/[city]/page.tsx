import { buildPropertyTypeCityRoute } from "@/lib/seo/propertyTypeCityPage";

const route = buildPropertyTypeCityRoute("office-space");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
