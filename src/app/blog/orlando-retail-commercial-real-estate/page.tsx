import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orlando Retail Commercial Real Estate | MaxLife",
  description:
    "Orlando retail commercial real estate opportunities. Strip centers, outparcels, shopping centers, and single-tenant retail properties across Central Florida.",
};

export default function OrlandoRetailGuideArticle() {
  return (
    <>
      {/* Header */}
      <section className="bg-dark-card/50 border-b border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/blog"
            className="text-gray-400 hover:text-gold text-sm transition-colors inline-flex items-center gap-1 mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-2.5 py-1 rounded">
              Investment Guide
            </span>
            <span className="text-gray-500 text-xs">April 2026</span>
            <span className="text-gray-500 text-xs">18 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Orlando Retail Commercial Real Estate Guide
          </h1>
          <p className="text-gray-400 text-lg">
            A guide to investing in Orlando retail properties — strip centers,
            outparcels, shopping centers, and single-tenant net lease retail
            across Central Florida&apos;s highest-traffic corridors.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Retail Market Overview
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Orlando&apos;s retail real estate market benefits from a
              combination of factors that few metros can match: a massive
              tourism industry that drives foot traffic to commercial corridors,
              a rapidly growing resident population that sustains neighborhood
              and community retail, and a business-friendly regulatory
              environment that supports new development. The result is a retail
              market with diverse investment opportunities across a wide range
              of property types and price points.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              While the broader narrative around retail real estate nationally
              has focused on challenges facing enclosed malls and big-box
              stores, Orlando&apos;s open-air retail formats have performed
              well. Strip centers, grocery-anchored shopping centers, and
              single-tenant net lease properties have seen stable or improving
              occupancy, supported by population growth and the continued
              expansion of service-oriented retailers that are resistant to
              e-commerce disruption.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The metro area&apos;s retail inventory totals roughly 130 million
              square feet spread across Orange, Seminole, Osceola, and Lake
              counties. Vacancy rates for well-located retail properties have
              hovered between 4% and 6% in recent years, with grocery-anchored
              centers and high-traffic corridor strip centers often running
              below 3% vacancy. Net absorption has been consistently positive,
              driven by both organic tenant expansion and new-to-market brands
              establishing their first Central Florida locations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Orlando&apos;s population growth rate has outpaced the national
              average for over a decade. The metro adds an estimated 1,500 new
              residents per week, which translates directly into demand for
              neighborhood retail services such as grocery stores, medical
              offices, restaurants, fitness centers, and personal care
              businesses. This resident-driven demand creates a durable floor
              under retail occupancy that distinguishes Orlando from metros
              where retail performance depends more heavily on discretionary
              spending alone.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The{" "}
              <Link href="/markets/orlando-commercial-real-estate" className="text-gold hover:underline">
                Orlando commercial real estate market
              </Link>{" "}
              offers retail investors access to a large, liquid market with
              strong demographic tailwinds. Whether you are targeting
              single-tenant NNN properties or multi-tenant strip centers, the
              metro provides a deep pool of available opportunities. Average
              asking rents for inline retail space across the metro range from
              $18 to $35 per square foot on a triple net basis, with premium
              corridor locations commanding $40 or more per square foot for
              high-visibility endcap and outparcel positions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Retail Property Types in Orlando
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Understanding the different categories of retail real estate is
              essential for identifying investments that align with your risk
              tolerance, return objectives, and management capacity. Each
              property type carries its own set of characteristics.
            </p>
            <div className="space-y-4 mb-4">
              {[
                {
                  name: "Single-Tenant Net Lease (NNN)",
                  desc: "Freestanding buildings leased to a single tenant on a triple net basis. National credit tenants like pharmacies, quick-service restaurants, auto parts stores, and dollar stores are common. These properties offer the most passive form of retail investment with predictable income streams.",
                },
                {
                  name: "Strip Centers",
                  desc: "Small to mid-size multi-tenant retail buildings, typically 5,000 to 30,000 square feet, anchored by a mix of local and regional tenants. Strip centers require more active management than NNN properties but can offer higher yields and value-add upside through releasing and renovation.",
                },
                {
                  name: "Grocery-Anchored Shopping Centers",
                  desc: "Larger retail centers anchored by a major grocery chain such as Publix, Walmart Neighborhood Market, or Aldi. The grocery anchor drives consistent foot traffic that benefits inline tenants and supports stable occupancy. These properties are highly sought by institutional investors.",
                },
                {
                  name: "Outparcels",
                  desc: "Freestanding pad sites located at the perimeter of larger shopping centers, often along major roadways with high visibility and traffic counts. Outparcels are frequently leased to quick-service restaurants, banks, and coffee shops on NNN terms.",
                },
                {
                  name: "Power Centers and Big Box",
                  desc: "Large-format retail centers anchored by national retailers. While these properties face more disruption risk from e-commerce, well-located power centers with experiential tenants and essential retailers continue to perform in the Orlando market.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-dark-card border border-dark-border rounded-xl p-5"
                >
                  <h3 className="text-gold font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              For investors new to retail, single-tenant NNN properties provide
              the simplest entry point. Our{" "}
              <Link href="/blog/what-is-nnn-lease" className="text-gold hover:underline">
                guide to triple net leases
              </Link>{" "}
              explains how NNN lease structures work and what to evaluate before
              making an investment.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              In the Orlando market, single-tenant NNN retail properties
              typically trade between $1.2 million and $4.5 million for
              freestanding quick-service restaurants and pharmacies. Common
              tenants include Walgreens, CVS, Dollar General, Dollar Tree,
              Starbucks, Chick-fil-A, Taco Bell, and Wawa. Properties leased to
              tenants with investment-grade credit ratings (BBB- or higher)
              command tighter cap rates and greater buyer competition, while
              franchisee-guaranteed leases offer higher yields with
              correspondingly higher risk.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Multi-tenant strip centers in Orlando typically range from $1.5
              million to $8 million, depending on size, occupancy, and location.
              Value-add investors frequently target strip centers with
              below-market rents, deferred maintenance, or vacancy that can be
              addressed through releasing, renovation, and improved property
              management. A well-executed value-add strategy on a strip center
              can compress cap rates by 100 to 200 basis points over a three-
              to five-year hold period, generating attractive total returns
              through both income growth and appreciation. Use our{" "}
              <Link href="/deal-analyzer" className="text-gold hover:underline">
                Deal Analyzer
              </Link>{" "}
              to model these scenarios before committing capital.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Top Retail Corridors and Submarkets
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Retail property performance is heavily influenced by location, and
              Orlando offers several high-performing corridors that attract
              strong tenant interest and command premium rents. Traffic counts,
              population density, household income, and proximity to major
              employers all factor into corridor quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">International Drive</h3>
                <p className="text-gray-400 text-sm">
                  One of the highest-traffic retail corridors in Florida,
                  International Drive benefits from tens of millions of annual
                  tourist visitors. Retail properties here serve both tourist and
                  resident populations, with strong demand from restaurants,
                  entertainment concepts, and specialty retail.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Colonial Drive (SR 50)</h3>
                <p className="text-gray-400 text-sm">
                  A major east-west arterial that bisects the metro, Colonial
                  Drive serves a dense resident population with neighborhood
                  retail, services, and dining. Traffic counts exceed 50,000
                  vehicles per day in many segments, supporting strong tenant
                  demand.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">US-192 / Kissimmee</h3>
                <p className="text-gray-400 text-sm">
                  The US-192 corridor in Kissimmee has evolved from a
                  tourism-focused strip into a major retail destination serving
                  the rapidly growing Osceola County population. New retail
                  development and redevelopment activity has accelerated along
                  this corridor.
                </p>
              </div>
              <div className="bg-dark-card border border-dark-border rounded-xl p-5">
                <h3 className="text-gold font-semibold mb-2">Narcoossee Road / Lake Nona</h3>
                <p className="text-gray-400 text-sm">
                  The growth of Lake Nona has created significant retail demand
                  along Narcoossee Road and the surrounding area. New
                  grocery-anchored centers and outparcels have been developed to
                  serve the expanding residential and employment base.
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Beyond these primary corridors, several secondary submarkets
              deserve attention from retail investors. The Semoran Boulevard
              (SR 436) corridor running through Casselberry, Altamonte Springs,
              and south into Orange County carries daily traffic counts above
              45,000 vehicles and supports a dense concentration of strip
              centers and outparcels. Sand Lake Road, connecting International
              Drive to the Orlando International Airport, has emerged as a
              dining and retail destination with rents approaching $35 to $45
              per square foot for prime pad sites. The Apopka-Vineland Road
              corridor near the attractions area and Windermere continues to
              benefit from residential growth in the western suburbs, with new
              Publix-anchored centers and quick-service restaurant outparcels
              under construction.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Horizon West, located in southwest Orange County, represents one
              of the fastest-growing planned communities in the country. The
              area has attracted significant new retail development including
              Hamlin Town Center, which features a mix of national and regional
              tenants serving the tens of thousands of new homes delivered in
              the surrounding master-planned communities. Retail vacancy in
              Horizon West is among the lowest in the metro, and asking rents
              for new construction inline space start at $28 to $32 per square
              foot NNN.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our{" "}
              <Link href="/markets/international-drive-commercial-real-estate" className="text-gold hover:underline">
                International Drive market page
              </Link>{" "}
              provides additional detail on one of the most dynamic retail
              corridors in the Southeast. Investors focused on NNN retail along
              these corridors can also explore our{" "}
              <Link href="/blog/orlando-nnn-properties-for-sale" className="text-gold hover:underline">
                Orlando NNN properties guide
              </Link>{" "}
              for current opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Retail Lease Structures in Orlando
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Lease structure is one of the most critical variables in retail
              real estate investment, and Orlando&apos;s retail market features
              the full spectrum of lease types. Understanding the differences
              between triple net (NNN), modified gross, and percentage rent
              leases is essential for accurately underwriting income,
              forecasting expenses, and comparing properties on an
              apples-to-apples basis.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Triple net leases are the dominant structure for single-tenant
              retail properties in the Orlando market. Under a{" "}
              <Link href="/blog/what-is-nnn-lease" className="text-gold hover:underline">
                NNN lease
              </Link>
              , the tenant is responsible for property taxes, insurance, and
              common area maintenance (CAM) in addition to base rent. This
              effectively shifts operating expense risk from the landlord to the
              tenant, creating a predictable net income stream for investors.
              National credit tenants such as Walgreens, AutoZone, O&apos;Reilly
              Auto Parts, and 7-Eleven typically execute absolute NNN leases
              with 10- to 20-year initial terms and contractual rent increases
              of 1.5% to 2% annually or 10% every five years.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Multi-tenant strip centers and shopping centers in Orlando more
              commonly use modified gross or NNN structures with landlord-
              managed CAM billing. In these arrangements, the landlord collects
              base rent plus a pro-rata share of operating expenses from each
              tenant. Typical CAM charges for Orlando strip centers range from
              $4 to $8 per square foot, covering property taxes, insurance,
              landscaping, parking lot maintenance, and management fees.
              Investors should pay close attention to CAM reconciliation
              practices and whether the landlord retains an administrative fee,
              typically 10% to 15% of total CAM costs.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Percentage rent clauses are less common in Orlando strip centers
              but appear frequently in grocery-anchored and power center leases
              with national tenants. Under a percentage rent structure, the
              tenant pays base rent plus a percentage of gross sales above a
              defined breakpoint. For example, a restaurant tenant might pay 6%
              of annual gross sales exceeding $1.2 million in addition to base
              rent. These clauses provide investors with upside participation
              in tenant performance and serve as a natural hedge against
              inflation over long lease terms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For investors evaluating{" "}
              <Link href="/blog/orlando-nnn-properties-for-sale" className="text-gold hover:underline">
                Orlando NNN properties for sale
              </Link>
              , lease analysis should extend beyond the base rent figure. Key
              metrics include the remaining lease term, the presence and
              structure of renewal options, rent escalation schedules, tenant
              termination rights, co-tenancy clauses in multi-tenant
              properties, and assignment provisions. A 15-year absolute NNN
              lease with 2% annual bumps to a BBB-rated tenant represents a
              fundamentally different risk and return profile than a 5-year
              modified gross lease with a local franchisee. Our{" "}
              <Link href="/deal-analyzer" className="text-gold hover:underline">
                Deal Analyzer
              </Link>{" "}
              can help you model the cash flow differences across these
              structures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Tourism-Driven vs. Population-Driven Retail
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              One of the most important distinctions in Orlando retail real
              estate is the difference between tourism-driven and
              population-driven retail properties. The metro&apos;s unique
              position as both a major tourist destination and a rapidly growing
              residential market creates two distinct demand drivers that
              affect property performance, tenant mix, lease terms, and
              investment risk in meaningfully different ways.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Tourism-driven retail is concentrated along the{" "}
              <Link href="/markets/international-drive-commercial-real-estate" className="text-gold hover:underline">
                International Drive corridor
              </Link>
              , the US-192 gateway to Walt Disney World, and the areas
              immediately surrounding the major theme park complexes. These
              properties benefit from Orlando&apos;s approximately 75 million
              annual visitors, generating foot traffic volumes that far exceed
              what the local resident population alone could support. Tenants
              in tourism-driven locations skew toward restaurants, souvenir
              shops, entertainment venues, and experiential concepts. Rents in
              prime tourism corridors can reach $50 to $70 per square foot for
              high-visibility restaurant and retail pad sites, reflecting the
              outsized sales volumes these locations can produce.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              However, tourism-driven retail carries unique risks. Revenue is
              seasonal, with peak periods during summer and holidays and softer
              months in September and January. External disruptions such as
              hurricanes, public health events, or economic downturns can
              sharply reduce visitor counts and tenant sales in ways that do not
              affect population-driven retail to the same degree. Investors in
              tourism-corridor properties should underwrite conservatively,
              stress-test cash flows against historical demand volatility, and
              favor tenants with strong balance sheets capable of weathering
              seasonal and cyclical swings.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Population-driven retail, by contrast, is anchored by the daily
              spending needs of Orlando&apos;s resident base. Grocery stores,
              medical offices, veterinary clinics, dry cleaners, hair salons,
              fitness centers, and quick-service restaurants generate revenue
              from repeat local customers rather than transient visitors. These
              properties tend to be located in suburban growth corridors like
              Lake Nona, Horizon West, Winter Garden, and the Kissimmee-St.
              Cloud area. Occupancy is typically more stable, lease terms are
              often longer for anchor tenants, and cash flows are less volatile
              across economic cycles.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The most resilient retail investments in the Orlando market often
              blend both demand drivers. A grocery-anchored center on Sand Lake
              Road, for instance, draws its primary customer base from nearby
              residents but also captures spending from convention attendees and
              tourists visiting the nearby attractions. Understanding where a
              property falls on the tourism-to-residential demand spectrum, and
              how that affects tenant performance, is fundamental to accurate
              underwriting. Explore how these dynamics affect pricing across
              the{" "}
              <Link href="/markets/orlando-commercial-real-estate" className="text-gold hover:underline">
                Orlando commercial real estate market
              </Link>{" "}
              in our full market overview.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Retail Investment Strategy and Cap Rates
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Retail cap rates in Orlando vary significantly by property type,
              tenant quality, lease term, and location. Single-tenant NNN
              properties leased to investment-grade credit tenants with long
              remaining lease terms trade at the lowest cap rates, often in the
              4.5-5.5% range. Multi-tenant strip centers and unanchored retail
              properties offer higher yields, typically in the 6.5-8.5% range,
              reflecting the additional management intensity and leasing risk.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Grocery-anchored shopping centers in Orlando typically trade at
              cap rates between 5.5% and 7.0%, positioning them between the
              safety of credit-tenant NNN and the higher yields of unanchored
              strip centers. Publix-anchored centers are particularly sought
              after due to the chain&apos;s dominant market share in Florida,
              strong same-store sales performance, and reputation for driving
              consistent foot traffic. A Publix-anchored center with strong
              inline occupancy in a growing submarket like Lake Nona or Horizon
              West will trade at a meaningful premium to a comparable center
              anchored by a less dominant grocer.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Value-add retail investments represent a compelling strategy in
              the current Orlando market. Properties with near-term lease
              expirations, below-market rents, or correctable vacancy offer the
              opportunity to acquire at higher going-in cap rates and drive cap
              rate compression through active management. For example, a
              12,000-square-foot strip center on Semoran Boulevard purchased at
              an 8.0% cap rate with two vacant suites could be stabilized at a
              6.5% cap rate within 18 to 24 months through targeted leasing and
              modest tenant improvement investment, generating significant
              equity creation on a leveraged basis.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Successful retail investors in Orlando focus on properties with
              strong traffic counts, established tenant mixes, and lease
              structures that provide income growth. Look for properties with
              built-in rent escalations, percentage rent clauses tied to tenant
              sales, and staggered lease expirations that reduce the risk of
              simultaneous vacancy.
            </p>
            <p className="text-gray-400 leading-relaxed">
              For a comprehensive look at cap rate trends across all commercial
              property types in the Orlando metro, visit our{" "}
              <Link href="/blog/orlando-cap-rates-investor-guide" className="text-gold hover:underline">
                Orlando cap rates investor guide
              </Link>
              . Use our{" "}
              <Link href="/deal-analyzer" className="text-gold hover:underline">
                Deal Analyzer
              </Link>{" "}
              to model retail investment scenarios and compare returns across
              different property types and lease structures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Retail Market Outlook
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The outlook for Orlando retail real estate is cautiously
              optimistic. While the sector faces ongoing structural shifts
              driven by e-commerce and changing consumer preferences, the
              formats that have adapted — service-oriented tenants, experiential
              retail, grocery-anchored centers, and essential-service NNN
              properties — continue to perform well in the Orlando market.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Population growth remains the primary tailwind. As Orlando
              continues to add residents, the demand for neighborhood goods and
              services grows proportionally. New residential communities in Lake
              Nona, Horizon West, and the Kissimmee-St. Cloud corridor are
              creating retail voids that developers and investors are working to
              fill, presenting near-term acquisition and development
              opportunities.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Construction activity in the retail sector has been disciplined
              compared to previous cycles. Developers are primarily building
              grocery-anchored and necessity-based retail rather than
              speculative power centers or lifestyle projects, which limits
              new supply and supports occupancy for existing properties. The
              cost of new construction, which has risen to $250 to $350 per
              square foot for ground-up retail in desirable Orlando
              submarkets, creates a replacement cost floor that supports values
              for existing well-located properties. When the cost to build new
              exceeds the cost to acquire existing stabilized assets, investors
              benefit from a natural value backstop.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The continued expansion of the Orlando International Airport,
              including the new Terminal C that opened in 2022 and the planned
              Brightline high-speed rail connection, will further boost the
              metro&apos;s accessibility and reinforce its position as a leading
              tourism and business destination. These infrastructure
              investments support long-term retail demand by increasing both
              visitor counts and the desirability of the metro for new
              residents and employers. The recently completed I-4 Ultimate
              reconstruction project has also improved traffic flow through
              the core of the metro, benefiting retail corridors along and
              adjacent to the interstate.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Investors who focus on well-located properties with
              e-commerce-resistant tenant mixes and strong lease structures are
              well-positioned to generate attractive risk-adjusted returns in
              the Orlando retail market. The key is selectivity — not all retail
              is created equal, and the gap between winning and losing
              properties continues to widen. Properties anchored by grocery,
              medical, and essential-service tenants in growing suburban
              corridors offer the strongest combination of income stability and
              long-term appreciation potential in the current{" "}
              <Link href="/markets/orlando-commercial-real-estate" className="text-gold hover:underline">
                Orlando commercial real estate
              </Link>{" "}
              landscape.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-dark-card border border-gold/20 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-3">
              Explore Orlando Retail Investments
            </h3>
            <p className="text-gray-400 mb-6">
              MaxLife Enterprise helps investors source, evaluate, and acquire
              retail properties across Central Florida. From NNN single-tenant
              assets to multi-tenant strip centers, we cover the full spectrum
              of retail investment opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
