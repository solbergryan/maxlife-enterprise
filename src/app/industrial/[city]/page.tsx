import { buildPropertyTypeCityRoute } from "@/lib/seo/propertyTypeCityPage";

const route = buildPropertyTypeCityRoute("industrial");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
