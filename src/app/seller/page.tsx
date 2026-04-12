import type { Metadata } from "next";
import SellerNetSheet from "@/components/net-sheet/SellerNetSheet";

export const metadata: Metadata = {
  title: "Seller Net Sheet Calculator",
  description:
    "Calculate your estimated closing costs and net proceeds from selling your Brevard County, FL home. Includes title insurance, doc stamps, commissions, and more.",
};

export default function SellerPage() {
  return <SellerNetSheet />;
}
