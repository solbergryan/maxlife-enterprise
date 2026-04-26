export interface SpaceCoastDriver {
  title: string;
  desc: string;
}

/** Space Coast / Brevard County economic drivers — extracted from active-listing themes
 *  and kept current as of 2026-Q2. These are reused across every Space Coast page. */
export const spaceCoastDrivers: SpaceCoastDriver[] = [
  {
    title: "Aerospace & Defense Cluster",
    desc: "L3Harris (global HQ in Melbourne, ~7,000 Brevard employees), Northrop Grumman, Embraer, SpaceX, Blue Origin, and the broader KSC contractor base anchor the region's industrial and office demand.",
  },
  {
    title: "Kennedy Space Center & Cape Canaveral",
    desc: "America's busiest launch complex — NASA, the Space Force, and an expanding commercial launch industry sustain a deep, well-paid workforce within an hour of every Brevard submarket.",
  },
  {
    title: "Melbourne Orlando International Airport",
    desc: "$72M terminal expansion completed in 2022; international service to Frankfurt, London, and Toronto. Anchors the West Melbourne industrial submarket and the surrounding flex / aerospace-supplier inventory.",
  },
  {
    title: "Ellis Road Expansion (mid-2028)",
    desc: "Major roadway improvement opening new industrial frontage west of MLB Airport — already shaping development decisions in West Melbourne.",
  },
  {
    title: "Port Canaveral",
    desc: "The fourth-busiest cruise port globally and a growing cargo terminal — drives cruise-passenger retail, hospitality, and last-mile logistics demand throughout central Brevard.",
  },
  {
    title: "Population Growth",
    desc: "Brevard County added population every year for the past decade and is projected to keep growing 1.5–2% annually — Palm Bay leads on raw rooftops, Viera/Suntree leads on incomes.",
  },
  {
    title: "Sub-3% Industrial Vacancy",
    desc: "Industrial vacancy on the Space Coast has tracked below 3% — a structurally tight market keeping rents firm and giving landlords leverage on renewals.",
  },
  {
    title: "I-95 + SR-528 Connectivity",
    desc: "Direct logistics links to Orlando, Jacksonville, and South Florida via I-95; SR-528 (the Beachline) connects Cocoa to Orlando International Airport in under an hour.",
  },
];
