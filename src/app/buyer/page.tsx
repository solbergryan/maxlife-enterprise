import type { Metadata } from "next";
import BuyerEstimate from "@/components/net-sheet/BuyerEstimate";

export const metadata: Metadata = {
  title: "Buyer Estimate Calculator",
  description:
    "Calculate your estimated monthly payment, closing costs, and cash to close for buying a home in Brevard County, FL. Supports Conventional, FHA, VA, USDA, and All Cash.",
};

export default function BuyerPage() {
  return <BuyerEstimate />;
}
