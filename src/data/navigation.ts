export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "For Sellers", href: "/opportunities" },
  {
    label: "Markets",
    href: "/markets",
    children: [
      { label: "Orlando", href: "/markets/orlando-commercial-real-estate" },
      { label: "Brevard County", href: "/markets/brevard-county-commercial-real-estate" },
      { label: "Lake County", href: "/markets/lake-county-commercial-land" },
      { label: "Central Florida", href: "/markets/central-florida-investment-properties" },
    ],
  },
  { label: "Net Sheets", href: "/net-sheets" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "Insights", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export const footerInvestorLinks: NavLink[] = [
  { label: "Sell Your Property", href: "/opportunities" },
  { label: "Seller Net Sheet", href: "/net-sheets/seller" },
  { label: "Buyer Estimate", href: "/net-sheets/buyer" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "1031 Exchange", href: "/1031-exchange-florida" },
  { label: "NNN Properties", href: "/nnn-properties-florida" },
  { label: "Land for Development", href: "/central-florida-land-for-development" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
  { label: "NNN Investments", href: "/services/nnn-investments" },
  { label: "Land Development", href: "/services/land-development" },
  { label: "Development Services", href: "/services/development" },
  { label: "Residential", href: "/services/residential-real-estate" },
];

export const footerResourceLinks: NavLink[] = [
  { label: "Market Insights", href: "/blog" },
  { label: "Orlando Market", href: "/markets/orlando-commercial-real-estate" },
  { label: "Brevard County Market", href: "/markets/brevard-county-commercial-real-estate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
