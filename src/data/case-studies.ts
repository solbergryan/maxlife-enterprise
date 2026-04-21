export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  type: string;
  problem: string;
  strategy: string;
  result: string;
  metrics: { label: string; value: string }[];
  image?: string;
  imageAlt?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "value-add-retail-orlando",
    title: "Value-Add Retail Acquisition — Orlando",
    location: "Orlando, FL",
    type: "Retail",
    problem:
      "An out-of-state investor was looking to deploy capital into Central Florida commercial real estate but had no local market knowledge. They needed a partner who could identify undervalued assets with near-term upside and manage the acquisition process from sourcing through closing.",
    strategy:
      "Conducted a targeted search for below-market retail properties in high-growth corridors. Identified a multi-tenant strip center with below-market rents and strong tenant mix. Negotiated a purchase price 8% below asking based on deferred maintenance items, then coordinated repairs to justify rent increases at lease renewal.",
    result:
      "The investor acquired the property at a 6.9% cap rate. Within 12 months, three leases were renewed at market rate, pushing the effective cap rate to 8.2%. The property appraised 15% above purchase price after stabilization.",
    metrics: [
      { label: "Purchase Cap Rate", value: "6.9%" },
      { label: "Stabilized Cap Rate", value: "8.2%" },
      { label: "Value Increase", value: "15%" },
      { label: "Time to Stabilize", value: "12 Months" },
    ],
    image:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-city-night-supermarket-food-street-regional-7458934.webp",
    imageAlt: "Multi-tenant retail strip center in Orlando",
  },
  {
    slug: "off-market-land-brevard",
    title: "Off-Market Land Deal — Brevard County",
    location: "Brevard County, FL",
    type: "Land",
    problem:
      "A developer was looking for commercially zoned land in Brevard County's growth corridor but couldn't find anything suitable on the open market. Competition from national builders was driving up prices on listed parcels.",
    strategy:
      "Leveraged local relationships and direct outreach to identify an off-market parcel owned by a family trust. Negotiated directly with the trustee, structured a 60-day due diligence period, and coordinated preliminary site planning with the county to confirm development feasibility before closing.",
    result:
      "Secured 6 acres of commercially zoned land at 22% below comparable listed parcels. The developer broke ground on a mixed-use project within 8 months of closing.",
    metrics: [
      { label: "Savings vs. Market", value: "22%" },
      { label: "Parcel Size", value: "6 Acres" },
      { label: "Time to Groundbreaking", value: "8 Months" },
      { label: "Deal Source", value: "Off-Market" },
    ],
    image:
      "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-blue-sky-nature-site-crane-228471.webp",
    imageAlt: "Brevard County commercial land development site",
  },
  {
    slug: "nnn-portfolio-1031-exchange",
    title: "NNN Portfolio — 1031 Exchange",
    location: "Central Florida",
    type: "NNN",
    problem:
      "A retiring business owner needed to defer a significant capital gains tax liability from the sale of their operating business. They wanted to transition into passive income through NNN properties but had a tight 1031 exchange timeline and needed to identify replacement properties quickly.",
    strategy:
      "Pre-screened a pipeline of NNN properties across Central Florida to have options ready when the client's business sale closed. Identified two national credit tenant NNN deals that met the client's return requirements and 1031 timeline. Coordinated with the qualified intermediary to ensure compliance with exchange rules.",
    result:
      "Closed on two NNN properties within the 45-day identification window. The combined portfolio generates stable passive income with zero management responsibilities and deferred the entire capital gains liability.",
    metrics: [
      { label: "Properties Acquired", value: "2" },
      { label: "Combined Cap Rate", value: "6.3%" },
      { label: "Tax Deferred", value: "100%" },
      { label: "Closing Timeline", value: "38 Days" },
    ],
    image:
      "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-germany-shop-window-storefront-sale-business-983358.webp",
    imageAlt: "NNN retail property investment for 1031 exchange",
  },
];
