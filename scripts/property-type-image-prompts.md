# Property Type Hero Image Prompts

Prompts for generating hero images for every `/properties/*` landing page.
Style is tuned to match `/public/car-wash/maxlife-car-wash.png` — professional
Florida real estate photography, golden hour light, crisp architectural detail,
subtle palm trees or Florida-sky backdrop for location cueing.

## House style (prepend or append to every prompt)

Use this shared style string for visual consistency across all 150+ images:

> Professional commercial real estate photography, Florida setting, golden
> hour lighting, crisp architectural detail, clean composition, subtle palm
> trees in the background, blue sky with light cumulus clouds, cinematic wide
> shot, high dynamic range, 4:3 aspect ratio, editorial magazine quality, no
> people, no text overlays, shot on Hasselblad medium format, 24mm lens.

## Output spec

- **Aspect ratio:** 4:3 (or 3:2 — both fit the hero component)
- **Minimum resolution:** 1600 x 1200
- **Format:** PNG or JPEG, saved under `/public/properties/<slug>.jpg`
- **Naming:** match the slug used in the page file
  (e.g. `/public/properties/retail.jpg` for `/properties/retail`).

## File-path convention

Each prompt below lists a `Save as:` line indicating the target filename.
After generating the image, drop it into `/public/properties/` using that
exact filename, then I can wire `heroImage` into the page component.

---

# 1. Retail

## Retail (top-level)
**Save as:** `retail.jpg`
> Aerial exterior of a large open-air Florida retail shopping plaza with tile-roof buildings, palm-tree-lined parking lot, mix of storefronts with clean signage blanked out, golden hour sunlight reflecting off the polished asphalt, visible pad-site outparcels with drive-thrus.

## Shopping Center (top-level of subtype)
**Save as:** `retail/shopping-center.jpg`
> Wide-angle exterior of a Florida grocery-anchored shopping center at golden hour, Mediterranean-style architecture with stucco facades and tile roofs, long canopy walkway in front of shop spaces, clean manicured landscaping, palm trees, clear blue sky, parking lot busy but no recognizable logos.

## Neighborhood Center
**Save as:** `retail/neighborhood-center.jpg`
> A modern Florida neighborhood shopping center with 8-12 storefronts in a single row, grocery anchor on the left end, tile roof, clean blank signage panels, palm trees and flowering landscaping out front, warm afternoon sun.

## Community Center
**Save as:** `retail/community-center.jpg`
> Expansive Florida community shopping center seen from a drone, two large anchor stores with a mid-sized junior anchor, long shop-tenant row connecting them, pad-site outparcels with drive-thrus in the foreground, massive parking field, lush landscaping, Florida blue sky.

## Power Center
**Save as:** `retail/power-center.jpg`
> Aerial view of a large Florida power center with multiple big-box anchors, category-killer storefronts, wide drive aisles, outparcel pads along the main road, dramatic golden hour lighting, palm trees lining access points.

## Regional Mall / Super-Regional Mall
**Save as:** `retail/regional-mall.jpg`
> Drone shot of a massive Florida enclosed regional mall with multiple department-store anchors, circular ring road, enormous parking decks, lush interior landscaping, dramatic sunset sky, palm-tree lined perimeter.

## Lifestyle Center
**Save as:** `retail/lifestyle-center.jpg`
> Upscale open-air Florida lifestyle center with Mediterranean-revival architecture, cobblestone walkways, water fountains, outdoor restaurant patios with umbrellas, flowering planters, palm trees, warm evening light just before dusk.

## Outlet Center
**Save as:** `retail/outlet-center.jpg`
> Large Florida outlet center with long rows of storefronts under colorful awnings, Mediterranean-style covered walkways, landscaped central courtyards, palm trees and fountains, drone angle showing parking lot vastness.

## Strip Center / Strip Mall
**Save as:** `retail/strip-center.jpg`
> Classic Florida strip center with 6-10 small storefronts in a single row, flat canopy roof, stucco facade, small front parking lot, palm trees at the ends, blue sky, afternoon sun, no recognizable brand signage.

## Freestanding / Single-Tenant (NNN)
**Save as:** `retail/freestanding-nnn.jpg`
> A freestanding Florida single-tenant retail pad building with modern brick-and-glass architecture, drive-thru on one side, manicured landscaping, palm trees, clean parking lot, Florida blue sky at golden hour, no brand logos.

## Restaurant / QSR
**Save as:** `retail/restaurant-qsr.jpg`
> Modern Florida quick-service restaurant pad building with drive-thru window, clean glass storefront, outdoor patio with umbrellas, palm trees at the corners, landscaped planters, bright blue sky, no recognizable branding.

## Bank
**Save as:** `retail/bank.jpg`
> Freestanding Florida bank branch building with classic brick and glass architecture, drive-thru lanes on one side, small manicured lawn, palm trees flanking the entrance, American flag on pole, clear midday sun.

## Auto Dealership
**Save as:** `retail/auto-dealership.jpg`
> Modern Florida auto dealership with a massive glass showroom, rows of new vehicles (generic, no logos) on polished pavement, service bays in the background, palm trees lining the property, bright Florida sun, clean composition.

## Convenience Store / C-Store
**Save as:** `retail/convenience-store.jpg`
> Modern Florida convenience store and gas station pad, clean metal canopy over fuel pumps, small retail building with glass storefront, palm trees, landscaped islands, golden hour light, no recognizable brand logos.

## Pharmacy / Drugstore
**Save as:** `retail/pharmacy.jpg`
> Freestanding Florida drugstore pad building, classic rectangular single-story architecture, drive-thru pharmacy lane on one side, clean parking lot, palm trees at the corners, bright Florida afternoon sky.

## Big Box / Anchor
**Save as:** `retail/big-box.jpg`
> Massive Florida big-box retail store exterior, long horizontal facade with tall entry tower, vast parking lot, tile roof detailing, palm trees lining the drive aisles, dramatic golden hour light, no brand signage.

## Pad Site / Outparcel
**Save as:** `retail/pad-site.jpg`
> A single outparcel pad building at the corner of a Florida shopping center, freestanding with drive-thru, clean glass storefront, prominent corner location, palm trees, landscaped islands, shopping center visible in the background.

## High Street Retail / Storefront
**Save as:** `retail/high-street.jpg`
> Classic Florida main-street storefront retail district with two- and three-story mixed-use buildings, brick facades, canvas awnings, wide sidewalks with outdoor cafe seating, palm trees in planters, warm late afternoon light.

---

# 2. Office

## Office (top-level)
**Save as:** `office.jpg`
> Modern Florida Class A office tower exterior, glass-and-steel facade reflecting golden hour sky, landscaped plaza entrance with fountains, palm trees, clean wide-angle architectural shot, dramatic sunset clouds.

## Traditional Office (Class A/B/C)
**Save as:** `office/traditional.jpg`
> A Class A Florida office building with glass curtain-wall facade, stone-clad lobby entrance, circular drive with landscaped median, palm trees, corporate flags, afternoon sun.

## Medical Office Building (MOB)
**Save as:** `office/medical.jpg`
> Modern Florida medical office building with clean white stucco facade, large windows, covered patient drop-off area, landscaped entry with flowering plants and palm trees, ambulance bay visible, bright midday sun.

## Creative Office / Loft
**Save as:** `office/creative-loft.jpg`
> Converted Florida warehouse loft office building with exposed brick facade, floor-to-ceiling industrial windows, original roll-up doors converted to entries, outdoor patio with string lights, palm trees, warm dusk light.

## Executive Suites / Coworking
**Save as:** `office/coworking.jpg`
> Modern Florida coworking and executive suites building exterior, contemporary architecture with wood accents and glass, outdoor lounge patio, palm trees, landscaped entry, golden hour light.

## Professional / Dental
**Save as:** `office/professional-dental.jpg`
> Small Florida professional office building for dental or legal practice, clean stucco facade, covered entry portico, landscaped front lawn with palm trees and flowering shrubs, midday sun.

## Office Condo
**Save as:** `office/office-condo.jpg`
> Single-story Florida office condo development with individual unit entries under a continuous canopy, Mediterranean-style architecture, tile roof, palm trees, manicured landscaping, clean parking lot.

## Government Office
**Save as:** `office/government.jpg`
> Classical Florida government office building with columned portico, brick facade, American and Florida flags on poles, landscaped entry plaza with oak trees and palms, bright morning sun.

## Office Campus
**Save as:** `office/office-campus.jpg`
> Aerial view of a Florida corporate office campus with multiple low-rise glass buildings connected by landscaped walkways, reflective pond, palm trees, parking structure in the background, golden hour sunset.

---

# 3. Industrial

## Industrial (top-level)
**Save as:** `industrial.jpg`
> Modern Florida industrial warehouse exterior with tilt-wall concrete panels, blue accent stripe, dozens of dock-high loading doors, clean truck court, palm trees at the perimeter, Florida blue sky, dramatic perspective shot.

## Warehouse
**Save as:** `industrial/warehouse.jpg`
> Large Florida distribution warehouse with concrete tilt-wall facade, numerous dock-high doors, trucks backed in at loading bays, expansive paved truck court, palm trees at the entrance drive, golden hour sun.

## Distribution Center
**Save as:** `industrial/distribution-center.jpg`
> Massive Florida distribution center seen from aerial angle, rows of dock-high loading bays, semi trucks in the yard, cross-dock configuration, large trailer parking, palm trees at perimeter.

## Manufacturing
**Save as:** `industrial/manufacturing.jpg`
> Florida manufacturing facility with metal-panel facade, overhead roll-up doors, pipes and HVAC on the roof, paved yard for equipment staging, fence line, palm trees at the front office, afternoon sun.

## Flex / R&D
**Save as:** `industrial/flex-rd.jpg`
> Modern Florida flex industrial building combining office glass storefronts and warehouse roll-up doors, clean tilt-wall facade, landscaped front entries with palm trees, drive-up and dock-high doors on one end.

## Light Industrial
**Save as:** `industrial/light-industrial.jpg`
> Florida light industrial park with multi-bay tilt-wall buildings, grade-level roll-up doors, small front offices with glass entries, trucks and vans in the parking lot, palm trees lining the drive.

## Heavy Industrial
**Save as:** `industrial/heavy-industrial.jpg`
> Florida heavy industrial facility with steel structures, tall exhaust stacks, overhead cranes visible, large staging yard with equipment, chain link fence, palm trees at the office entrance.

## Refrigerated / Cold Storage
**Save as:** `industrial/cold-storage.jpg`
> Florida refrigerated cold storage warehouse, thick insulated white-panel walls, dock-high doors with rubber seals, refrigerated trailers in the yard, mechanical equipment on the roof, palm trees at perimeter.

## Truck Terminal / Transportation
**Save as:** `industrial/truck-terminal.jpg`
> Florida trucking terminal with long cross-dock building, semi trucks backed into both sides, massive paved yard, tractor-trailer parking rows, fleet fuel island, palm trees at entrance, golden hour.

## Data Center
**Save as:** `industrial/data-center.jpg`
> Modern Florida data center exterior, windowless tilt-wall building with subtle corporate branding, massive rooftop cooling units, secure fenced perimeter with palm trees, dramatic sunset sky with purple clouds.

## Industrial Outdoor Storage (IOS)
**Save as:** `industrial/ios.jpg`
> Florida industrial outdoor storage yard, fenced gravel lot filled with equipment, containers, and trailers, small office trailer at entry, palm trees at perimeter, golden hour sun casting long shadows.

---

# 4. Multifamily

## Multifamily (top-level)
**Save as:** `multifamily.jpg`
> Modern Florida garden-style apartment community exterior, three-story buildings with stucco and siding, swimming pool with palm-tree border, clubhouse in the background, tropical landscaping, golden hour sunset.

## Garden-Style (1–3 stories)
**Save as:** `multifamily/garden-style.jpg`
> Florida garden-style apartment complex, three-story buildings arranged around a central courtyard pool, tropical landscaping with palm trees, covered walkways, Mediterranean-revival architecture, clear blue sky.

## Mid-Rise (4–9 stories)
**Save as:** `multifamily/mid-rise.jpg`
> Florida mid-rise apartment building, seven-story modern architecture with balconies, ground-floor retail glass storefronts, street-level landscaping with palm trees, dusk sky with warm uplighting on facade.

## High-Rise (10+ stories)
**Save as:** `multifamily/high-rise.jpg`
> Florida high-rise luxury apartment tower, 25+ stories of glass and steel, waterfront setting with marina, palm trees at base, dramatic sunset sky with pink and orange clouds, cinematic wide shot.

## Low-Rise / Walk-Up
**Save as:** `multifamily/low-rise.jpg`
> Florida walk-up apartment building, two-story stucco architecture with exterior stairways, tile roof, tropical landscaping with palm trees, small parking lot, afternoon sun.

## Duplex / Triplex / Fourplex
**Save as:** `multifamily/small-multifamily.jpg`
> Florida fourplex residential building, two-story clean architecture with four separate front doors under a covered porch, small landscaped yard with palm trees, driveway with two cars, warm afternoon light.

## Apartment Complex (5+ units)
**Save as:** `multifamily/apartment-complex.jpg`
> Mid-sized Florida apartment complex, two-story buildings arranged in a U-shape around a courtyard with a small pool, palm trees and tropical plants, covered walkways, golden hour sunset.

## Student Housing
**Save as:** `multifamily/student-housing.jpg`
> Modern Florida student housing building near a university, bright colorful accents on the facade, outdoor study patios with picnic tables, palm trees, bike racks, dusk lighting with warm interior glow.

## Affordable / LIHTC Housing
**Save as:** `multifamily/affordable-lihtc.jpg`
> Clean modern Florida affordable housing community, three-story buildings with tidy stucco facades, community garden, playground, palm trees, community center building in the background, bright morning sun.

## Military Housing
**Save as:** `multifamily/military-housing.jpg`
> Florida military base housing community, uniform two-story stucco residential buildings in neat rows, American flags on poles, palm-tree-lined streets, manicured lawns, clear morning sky.

## Condominium Building
**Save as:** `multifamily/condominium.jpg`
> Florida condominium tower, 20 stories of white modern architecture with glass balconies, waterfront pool deck with cabanas, palm trees, marina in the background, golden hour sunset light.

## Co-op Building
**Save as:** `multifamily/co-op.jpg`
> Classic Florida co-op residential building, eight-story 1960s modernist architecture with balconies, mature landscaping with large palm trees and banyans, circular drive at entrance, late afternoon sun.

## Mixed-Use Multifamily
**Save as:** `multifamily/mixed-use-multifamily.jpg`
> Florida mixed-use building with ground-floor retail storefronts and five stories of apartments above, street-level outdoor cafe seating, palm trees in planters, dusk with warm interior glow from the storefronts.

---

# 5. Hospitality

## Hospitality (top-level)
**Save as:** `hospitality.jpg`
> Luxury Florida resort hotel exterior at sunset, Mediterranean-revival architecture with tile roof, palm-tree-lined circular drive at entry, fountain in the center, uplighting on facade, pink and gold sunset clouds.

## Full-Service Hotel
**Save as:** `hospitality/full-service-hotel.jpg`
> Large Florida full-service hotel, 15 stories of glass and stone, covered porte-cochere with guests arriving, palm trees at the entry, landscaped fountains, dusk with warm lobby glow.

## Limited-Service Hotel
**Save as:** `hospitality/limited-service-hotel.jpg`
> Florida limited-service hotel, four-story building with stucco facade, small porte-cochere entry, landscaped parking lot with palm trees, clear blue afternoon sky.

## Select-Service Hotel
**Save as:** `hospitality/select-service-hotel.jpg`
> Modern Florida select-service hotel, five-story brand-neutral architecture, small pool visible on the side, landscaped parking lot with palm trees, covered entry canopy, golden hour light.

## Boutique Hotel
**Save as:** `hospitality/boutique-hotel.jpg`
> Charming Florida boutique hotel in a restored historic building, colorful stucco facade, wrought-iron balconies with flower boxes, outdoor cafe patio, palm trees, warm late afternoon light.

## Extended-Stay Hotel
**Save as:** `hospitality/extended-stay-hotel.jpg`
> Florida extended-stay hotel, four-story suburban-style building with residential facade, small outdoor seating area with grills, palm trees, landscaped parking lot, morning sun.

## Resort
**Save as:** `hospitality/resort.jpg`
> Luxurious Florida beachfront resort, multiple mid-rise buildings surrounding a lagoon pool, palm-tree-lined pathways, cabanas, beach visible beyond the pool, dramatic sunset sky over the ocean.

## Motel
**Save as:** `hospitality/motel.jpg`
> Classic Florida single-story motel with rooms opening onto an exterior walkway, neon signage (blanked out), small pool, palm trees, gravel parking lot with a few cars, late afternoon light.

## Bed & Breakfast / Inn
**Save as:** `hospitality/bed-and-breakfast.jpg`
> Historic Florida bed and breakfast inn, two-story Victorian-style wooden home with wrap-around porch, rocking chairs, lush garden with palm trees and flowering plants, warm evening light.

## Casino / Gaming
**Save as:** `hospitality/casino.jpg`
> Florida casino resort exterior at dusk, massive entry with illuminated porte-cochere, glass facade, palm-tree-lined drive, fountains, dramatic sunset sky with uplighting on the facade.

## Hostel
**Save as:** `hospitality/hostel.jpg`
> Colorful Florida coastal hostel, three-story stucco building with bright accent colors, outdoor common area with picnic tables and string lights, bike racks, palm trees, golden hour light.

---

# 6. Land

## Land (top-level)
**Save as:** `land.jpg`
> Aerial drone shot of undeveloped Florida commercial land parcel, cleared and graded with access road, surrounded by palm trees and palmettos, blue sky, shot at golden hour, open horizon, Florida wilderness on the edges.

## Commercial Land
**Save as:** `land/commercial.jpg`
> Aerial view of a cleared commercial land parcel at a Florida major intersection, for-sale sign visible, palm trees and native vegetation surrounding, highway visible in the distance, clear blue sky.

## Residential Land / Development Parcel
**Save as:** `land/residential.jpg`
> Aerial drone shot of a large Florida residential development parcel, partially cleared with preserved oak trees and pines, planned road right-of-way, surrounded by existing subdivisions, golden hour light.

## Industrial Land
**Save as:** `land/industrial.jpg`
> Aerial view of a large flat industrial land parcel in Florida, cleared and graded for future warehouse development, utility infrastructure visible, adjacent to highway and rail line, dramatic sunset sky.

## Retail Pad / Outparcel
**Save as:** `land/retail-pad.jpg`
> Small Florida retail pad site carved from a shopping center, grass lot with corner-location visibility, palm trees, traffic signal and main road in the foreground, for-sale sign, bright afternoon sun.

## Mixed-Use Development Land
**Save as:** `land/mixed-use-development.jpg`
> Aerial drone shot of a large Florida mixed-use development site, partially cleared with design markers, adjacent to existing downtown area, preserved water features and tree clusters, golden hour light.

## Agricultural Land
**Save as:** `land/agricultural.jpg`
> Aerial view of Florida agricultural land, rows of orange groves stretching to the horizon, farm roads, irrigation equipment, palm trees at the farmhouse, clear morning sky with light mist.

## Ranch / Farm
**Save as:** `land/ranch-farm.jpg`
> Classic Florida ranch property at golden hour, wooden fence line, cattle grazing in pasture, oak trees with Spanish moss, small farmhouse in the background, dramatic sunset sky.

## Timberland
**Save as:** `land/timberland.jpg`
> North Florida managed pine timberland, tall loblolly pines in neat rows, sun rays filtering through the canopy, forest floor with pine straw, clearing visible in the distance.

## Hunting / Recreational Land
**Save as:** `land/hunting-recreational.jpg`
> Florida hunting property, native wetland and pine flatwoods landscape, elevated deer stand visible in the distance, wildlife pond in the foreground, misty morning atmosphere, Spanish moss on oaks.

## Waterfront / Coastal Land
**Save as:** `land/waterfront-coastal.jpg`
> Pristine Florida waterfront land parcel, white sand beach meeting tropical vegetation, palm trees, turquoise Gulf waters, dramatic sunset sky with pink and gold clouds.

## Entitled Land
**Save as:** `land/entitled.jpg`
> Aerial view of a fully entitled Florida development parcel, road grading complete, infrastructure stubs visible, surveyor stakes, construction equipment in the staging area, golden hour light.

## Raw Land / Unentitled
**Save as:** `land/raw-unentitled.jpg`
> Unimproved Florida raw land, native palmetto and pine landscape untouched, dirt access road, distant water line, morning mist, tropical hardwoods in the background.

---

# 7. Mixed Use

## Mixed-Use (top-level)
**Save as:** `mixed-use.jpg`
> Modern Florida mixed-use development, five-story building with glass-fronted retail and restaurant at street level, apartments above with balconies, outdoor cafe seating on wide sidewalks, palm trees in planters, dusk with warm interior lighting.

## Retail + Office
**Save as:** `mixed-use/retail-office.jpg`
> Florida three-story mixed-use building with retail storefronts at street level and office space above, clean modern architecture, palm trees in sidewalk planters, outdoor seating at a ground-floor cafe, late afternoon light.

## Retail + Residential
**Save as:** `mixed-use/retail-residential.jpg`
> Florida urban mixed-use building, ground-floor retail with glass storefronts, four stories of apartments above with balconies, pedestrian walkway with palm-tree planters, dusk lighting with warm glows from windows.

## Office + Residential
**Save as:** `mixed-use/office-residential.jpg`
> Florida mixed-use tower with office floors in the lower half and residential condos above, glass facade reflecting sunset, landscaped plaza at the base, palm trees, dramatic wide shot.

## Live/Work
**Save as:** `mixed-use/live-work.jpg`
> Florida live/work townhouse building, three-story units with glass storefronts on the ground floor and residential above, outdoor terraces, palm trees in front, warm dusk lighting.

## Vertical Mixed-Use
**Save as:** `mixed-use/vertical.jpg`
> Modern Florida vertical mixed-use tower, ground-floor retail, office levels in the middle, residential at the top, distinct architectural banding, palm trees at the base plaza, dusk sky with warm interior lighting.

---

# 8. Special Purpose

## Special Purpose (top-level)
**Save as:** `special-purpose.jpg`
> Florida purpose-built retail building on a prominent corner location, modern architecture with glass and stone, landscaped surroundings with palm trees, traffic intersection in the foreground, golden hour light.

## Car Wash
**Save as:** `special-purpose/car-wash.jpg`
> Modern Florida express tunnel car wash, long clean tunnel building with glass storefront, stacking lane with cars waiting, vacuum stalls in the foreground, palm trees, bright afternoon sun (match existing car wash image style).

## Gas Station
**Save as:** `special-purpose/gas-station.jpg`
> Modern Florida gas station with large fuel canopy, clean convenience store building, landscaped islands with palm trees, pad-site corner location, bright afternoon sun.

## Church / Religious Facility
**Save as:** `special-purpose/church.jpg`
> Florida church building, white stucco facade with tall bell tower, tile roof, landscaped entry with palm trees and flowering plants, cross visible on facade, warm morning sun.

## School / Daycare
**Save as:** `special-purpose/school-daycare.jpg`
> Florida childcare facility, single-story stucco building with colorful accents, outdoor playground with rubber surface and shade sails, fenced yard, palm trees, bright morning sun.

## Auto Repair / Body Shop
**Save as:** `special-purpose/auto-repair.jpg`
> Florida auto repair facility, single-story building with four roll-up service bay doors open, cars on lifts visible inside, small office on one side, palm trees at the property edge, afternoon sun.

## Funeral Home / Cemetery
**Save as:** `special-purpose/funeral-home.jpg`
> Classic Florida funeral home building, traditional architecture with columned portico and brick facade, mature oak trees with Spanish moss, manicured lawn, circular drive, subdued late afternoon light.

## Marina / Boat Storage
**Save as:** `special-purpose/marina.jpg`
> Florida marina with dry boat storage building, boats on racks visible, dock with slips full of yachts and fishing boats, palm trees at the shore, dramatic sunset over the water.

## Parking Garage / Lot
**Save as:** `special-purpose/parking-garage.jpg`
> Modern Florida parking garage structure, clean precast concrete facade, open-air levels visible, cars parked inside, landscaped perimeter with palm trees, dusk with interior lighting.

## Fitness Center / Gym
**Save as:** `special-purpose/fitness-center.jpg`
> Florida fitness center building exterior, modern glass storefront with large windows showing workout equipment inside, branded-neutral facade, palm trees at entry, parking lot with cars, evening lighting.

## Movie Theater / Cinema
**Save as:** `special-purpose/movie-theater.jpg`
> Florida multiplex movie theater building, modern architecture with tall lit marquee (blank), curved glass entry, palm trees at the entrance, evening sky with dramatic lighting, anchor of a retail center visible.

## Golf Course / Country Club
**Save as:** `special-purpose/golf-course.jpg`
> Lush Florida golf course fairway at golden hour, manicured greens, sand traps, palm trees and live oaks lining the fairway, water hazard reflecting the sky, clubhouse in the distance.

## Bowling Alley
**Save as:** `special-purpose/bowling-alley.jpg`
> Retro Florida bowling alley building exterior, mid-century modern architecture with angled rooflines, large windows, palm trees, small parking lot in front, dusk with warm interior glow.

## Amusement / Entertainment
**Save as:** `special-purpose/amusement.jpg`
> Florida family entertainment center building, colorful modern architecture with decorative facade, outdoor mini-golf holes visible on one side, palm trees, bright afternoon sun, no branding.

## Sports Facility / Arena
**Save as:** `special-purpose/sports-facility.jpg`
> Florida multi-sport athletic facility, large metal-clad building with arched roof, outdoor field turf visible alongside, palm-tree-lined access road, dramatic afternoon sun casting long shadows.

## RV Park / Campground
**Save as:** `special-purpose/rv-park.jpg`
> Florida RV park, rows of level RV pads with utility hookups, mature palm trees between sites, small clubhouse building and pool in the background, golden hour sunset light.

## Winery / Distillery / Brewery
**Save as:** `special-purpose/winery-brewery.jpg`
> Florida craft brewery building, converted industrial architecture with metal siding, outdoor beer garden with picnic tables and string lights, palm trees, warm dusk light, no branding.

## Nursery / Garden Center
**Save as:** `special-purpose/nursery-garden.jpg`
> Florida plant nursery and garden center, open-air rows of potted plants under shade structures, palm trees, small retail greenhouse building, golden hour sun filtering through the canopy.

## Cannabis-Compliant Facility
**Save as:** `special-purpose/cannabis.jpg`
> Secure Florida cannabis-compliant facility exterior, windowless tilt-wall industrial building with subtle modern architecture, fenced perimeter, landscaped entry with palm trees, security cameras visible, bright afternoon sun.

## Post Office
**Save as:** `special-purpose/post-office.jpg`
> Classic Florida post office building, brick-and-stucco architecture, American flag on pole, covered entry, landscaped front with palm trees, small parking lot, bright morning sun.

## Veterinary / Animal Hospital
**Save as:** `special-purpose/veterinary.jpg`
> Modern Florida veterinary hospital building, clean glass storefront with stone accents, covered entry with pet-friendly landscaping, palm trees, small outdoor pet relief area, afternoon sun.

---

# 9. Self Storage

## Self Storage (top-level)
**Save as:** `self-storage.jpg`
> Modern multi-story Florida self-storage facility, clean tilt-wall construction with colorful accent band, rolling doors visible on the ground floor, landscaped entry with palm trees, secure gate, golden hour light.

## Drive-Up Self Storage
**Save as:** `self-storage/drive-up.jpg`
> Traditional Florida drive-up self-storage facility, long single-story rows of orange and white roll-up doors, wide drive aisles, palm trees at the perimeter, secure gate, bright afternoon sun.

## Climate-Controlled Self Storage
**Save as:** `self-storage/climate-controlled.jpg`
> Modern Florida climate-controlled self-storage building, three-story enclosed building with corporate-style facade, large canopied entry for customer loading, palm trees, clean parking area, afternoon sun.

## Boat & RV Storage
**Save as:** `self-storage/boat-rv.jpg`
> Florida boat and RV storage facility, large covered canopy structures over RV and boat parking spaces, secure fenced perimeter, palm trees, boats and RVs visible, clear morning sky.

## Mixed Self Storage Facility
**Save as:** `self-storage/mixed.jpg`
> Florida mixed-format self-storage facility combining multi-story climate-controlled building and single-story drive-up buildings, landscaped entry drive with palm trees, secure gate, golden hour light.

---

# 10. Manufactured Housing / Mobile Home Park

## Mobile Home Park (top-level)
**Save as:** `mobile-home-park.jpg`
> Clean well-maintained Florida manufactured housing community, rows of modern mobile homes on landscaped lots, palm trees along the streets, community clubhouse and pool in the background, golden hour sun.

## All-Age Park
**Save as:** `mobile-home-park/all-age.jpg`
> Florida all-age mobile home community, family-oriented, playground visible, streets with palm trees, tidy homes with small yards, bright afternoon sun.

## Age-Restricted / 55+
**Save as:** `mobile-home-park/age-restricted.jpg`
> Florida 55+ manufactured home community, upscale homes with carports and landscaping, community clubhouse with pool and pickleball courts, palm trees, golden hour light, serene atmosphere.

## Family Park
**Save as:** `mobile-home-park/family-park.jpg`
> Family-oriented Florida mobile home park, playground equipment, community center, tidy homes on landscaped lots, palm trees along streets, bright afternoon sun.

## RV Park (nested)
**Save as:** `mobile-home-park/rv-park.jpg`
> Florida RV park with numbered pads, utility pedestals, mature palm trees between sites, clubhouse and pool in the background, golden hour sunset.

---

# 11. Senior Living / Healthcare

## Senior Living (top-level)
**Save as:** `senior-living.jpg`
> Upscale Florida senior living community, three-story Mediterranean-style building with tile roof, covered entry porte-cochere, landscaped courtyard with fountains, palm trees, residents visible on outdoor patio, golden hour light.

## Independent Living
**Save as:** `senior-living/independent-living.jpg`
> Florida independent living community for seniors, mid-rise stucco building with balconies, lush landscaping with palm trees and flower beds, covered entry, residents on outdoor patio, warm afternoon light.

## Assisted Living Facility
**Save as:** `senior-living/assisted-living.jpg`
> Modern Florida assisted living facility, two-story residential-style architecture, covered entry porte-cochere, landscaped front with palm trees and flowering plants, bright morning sun.

## Memory Care
**Save as:** `senior-living/memory-care.jpg`
> Florida memory care facility, single-story building with warm residential-style facade, secured outdoor garden visible on the side, palm trees, landscaped front, midday sun.

## Skilled Nursing Facility (SNF)
**Save as:** `senior-living/skilled-nursing.jpg`
> Florida skilled nursing facility, modern healthcare building with covered entry, clean white facade with stone accents, landscaped front yard with palm trees, ambulance bay visible, bright afternoon sun.

## CCRC
**Save as:** `senior-living/ccrc.jpg`
> Large Florida continuing care retirement community, multi-building campus with different care-level buildings, central dining clubhouse, landscaped walking paths with palm trees, residents outdoors, golden hour light.

## Hospital
**Save as:** `senior-living/hospital.jpg`
> Modern Florida hospital building, large glass-and-stone facade, emergency entrance with ambulance bay visible, helicopter pad on roof, palm trees at main entry, clear blue afternoon sky.

## Surgery Center / Ambulatory
**Save as:** `senior-living/surgery-center.jpg`
> Florida ambulatory surgery center, modern single-story medical building with clean white facade, covered patient drop-off, landscaped entry with palm trees, bright morning sun.

## Urgent Care
**Save as:** `senior-living/urgent-care.jpg`
> Florida urgent care freestanding building, modern architecture with glass storefront and stone accents, covered entry canopy, landscaped parking lot with palm trees, afternoon sun.

## Rehab / LTAC
**Save as:** `senior-living/rehab-ltac.jpg`
> Florida rehabilitation hospital, three-story modern healthcare building, landscaped therapy garden visible on one side, palm trees, covered entry, bright morning sun.

---

# 12. Business for Sale

## Business for Sale (top-level)
**Save as:** `business-for-sale.jpg`
> Florida small business exterior, small commercial storefront in a well-maintained strip center, clean glass storefront, for-sale sign visible, palm trees, afternoon sun, no brand logos.

## Car Wash Business
**Save as:** `business-for-sale/car-wash-business.jpg`
> Florida express tunnel car wash operating business, tunnel building with cars in stacking lane, vacuum stalls active, palm trees, bright afternoon light, sign pylon visible but blank.

## Restaurant / Bar Business
**Save as:** `business-for-sale/restaurant-bar.jpg`
> Florida full-service restaurant building, warm inviting facade with outdoor patio seating under pergola, string lights, palm trees, dusk with warm interior glow, no branding.

## Franchise Resale
**Save as:** `business-for-sale/franchise-resale.jpg`
> Florida freestanding franchise QSR building, modern drive-thru architecture with covered entry, landscaped parking lot with palm trees, afternoon sun, no recognizable branding.

## Liquor Store / Package Store
**Save as:** `business-for-sale/liquor-store.jpg`
> Florida liquor store building, small freestanding stucco-front building with clean signage (blanked), palm trees in front, parking lot with cars, bright afternoon light.

## Laundromat
**Save as:** `business-for-sale/laundromat.jpg`
> Florida laundromat storefront in a strip center, glass front showing rows of washers and dryers inside, clean signage (blanked), palm trees in planters, dusk with warm interior glow.

## Gym / Fitness Business
**Save as:** `business-for-sale/gym-fitness.jpg`
> Florida independent gym building, modern glass storefront showing workout equipment inside, clean facade, palm trees at entry, parking lot with cars, dusk lighting.

## C-Store / Gas Business
**Save as:** `business-for-sale/cstore-gas.jpg`
> Florida convenience store and gas station pad with operating fuel canopy, clean store building, palm trees, landscaped islands, afternoon sun, no branding.

## Hotel / Motel Business
**Save as:** `business-for-sale/hotel-motel.jpg`
> Florida roadside motel, single-story U-shaped building with rooms opening onto exterior walkway, pool in center courtyard, palm trees, retro neon sign blanked out, late afternoon light.

## Auto Service Business
**Save as:** `business-for-sale/auto-service.jpg`
> Florida auto service business building, multi-bay facility with roll-up doors open, cars on lifts visible, small office front with glass storefront, palm trees, parking lot with cars, afternoon sun.

---

# 13. Note / Loan / NPL

## Note / Loan (top-level)
**Save as:** `note-loan.jpg`
> Conceptual Florida commercial real estate scene — aerial view of a diverse city skyline at golden hour with office towers, retail centers, and apartment buildings, palm trees lining main roads, dramatic sunset clouds, representing the broad CRE landscape underlying a loan portfolio.

## Performing Note
**Save as:** `note-loan/performing.jpg`
> Stable Florida Class A commercial building exterior representing a performing loan — modern office tower with glass facade, full parking lot, well-maintained landscaping with palm trees, golden hour sun.

## Non-Performing Note (NPL)
**Save as:** `note-loan/npl.jpg`
> Florida commercial building representing a distressed property, older retail strip with some vacant storefronts, faded signage blanked out, patchy landscaping with older palm trees, overcast afternoon sky, subdued lighting.

## Reperforming Note
**Save as:** `note-loan/reperforming.jpg`
> Florida commercial building mid-turnaround, freshly repainted retail facade, construction fencing on one side, new landscaping being installed with young palm trees, bright afternoon sun suggesting recovery.

## Commercial Mortgage
**Save as:** `note-loan/commercial-mortgage.jpg`
> Classic Florida multi-tenant office building representing institutional commercial mortgage collateral, brick-and-glass architecture, full parking lot, mature palm trees, late afternoon light.

## Residential Mortgage Pool
**Save as:** `note-loan/residential-pool.jpg`
> Aerial view of a Florida suburban residential neighborhood, rows of single-family homes with tile roofs and pools, palm-tree-lined streets, representing a residential mortgage pool collateral, golden hour sunset.

---

## Usage notes

1. **Tooling:** Paste any prompt into Midjourney (`/imagine`), DALL-E 3, Claude
   (via image generation in claude.ai), or Flux. Prepend the house-style
   block above for visual consistency across all images.
2. **Batch sizing:** Generate 2-3 variants per prompt, pick the best.
3. **File placement:** Save outputs into `/public/properties/` matching the
   exact filename in each `Save as:` line. Subfolders are fine — the loader
   will look them up by slug.
4. **Wiring in:** Once images are saved, pass `heroImage` into each page:
   ```tsx
   heroImage={{
     src: "/properties/retail.jpg",
     alt: "Florida retail shopping center at golden hour",
     caption: "Florida retail real estate",
   }}
   ```
   I can batch-wire these once the image files exist.
