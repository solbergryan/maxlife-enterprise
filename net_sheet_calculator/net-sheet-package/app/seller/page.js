// Next.js App Router — /app/seller/page.js
import SellerNetSheet from "../../components/SellerNetSheet";

export const metadata = {
  title: "Seller Net Sheet | MaxLife Realty",
  description: "Calculate your estimated closing costs and net proceeds from selling your Brevard County, FL home.",
};

export default function SellerPage() {
  return <SellerNetSheet />;
}
