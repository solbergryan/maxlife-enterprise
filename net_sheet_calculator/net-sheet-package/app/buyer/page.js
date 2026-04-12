// Next.js App Router — /app/buyer/page.js
import BuyerEstimate from "../../components/BuyerEstimate";

export const metadata = {
  title: "Buyer Estimate | MaxLife Realty",
  description: "Calculate your estimated monthly payment and closing costs for buying a home in Brevard County, FL.",
};

export default function BuyerPage() {
  return <BuyerEstimate />;
}
