export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
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
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "Net Sheets", href: "/net-sheets" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export const footerInvestorLinks: NavLink[] = [
  { label: "Current Opportunities", href: "/opportunities" },
  { label: "Off-Market Deals", href: "/orlando-commercial-real-estate-deals" },
  { label: "1031 Exchange", href: "/1031-exchange-florida" },
  { label: "NNN Properties", href: "/nnn-properties-florida" },
  { label: "Deal Analyzer", href: "/deal-analyzer" },
  { label: "Net Sheet Calculator", href: "/net-sheets" },
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
