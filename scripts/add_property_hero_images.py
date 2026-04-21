"""Insert a heroImage entry into the top-level entry of each property-type data file."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src" / "data" / "property-types"

# (filename, pluralDisplayName, image path relative to /public, alt text)
MAPPINGS = [
    (
        "office.tsx", "Office Properties",
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-office-building-glass-skyscraper-city-4431284.webp",
        "Class A Florida office tower with glass facade",
    ),
    (
        "retail.tsx", "Retail Properties",
        "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-building-convenience-store-grocery-people-2577330.webp",
        "Florida retail storefront with customer foot traffic",
    ),
    (
        "industrial.tsx", "Industrial Properties",
        "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
        "Industrial warehouse and distribution facility",
    ),
    (
        "multifamily.tsx", "Multifamily Properties",
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-real-estate-property-apartment-house-5339245.webp",
        "Florida multifamily apartment community",
    ),
    (
        "hospitality.tsx", "Hospitality Properties",
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-apartment-building-hotel-balcony-terrace-high-6490208.webp",
        "Hospitality hotel building with balconies",
    ),
    (
        "land.tsx", "Land Parcels",
        "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-site-cranes-building-6778044.webp",
        "Central Florida development site with cranes",
    ),
    (
        "mixed-use.tsx", "Mixed-Use Properties",
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-office-4k-wallpaper-1920x1080-city-3306146.webp",
        "Mixed-use commercial and residential district skyline",
    ),
    (
        "special-purpose.tsx", "Special Purpose Properties",
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-dark-night-convenience-store-shop-2583628.webp",
        "Special purpose commercial building at night",
    ),
    (
        "self-storage.tsx", "Self Storage Facilities",
        "/images/commercial-stock/warehouse/maxlife-warehouse-archive-boxes-shelf-folders-documents-data-1850170.webp",
        "Self-storage facility interior with organized shelving",
    ),
    (
        "mobile-home-park.tsx", "Mobile Home Parks",
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-real-estate-house-living-architecture-394961.webp",
        "Mobile home park community in Central Florida",
    ),
    (
        "senior-living.tsx", "Senior Living Properties",
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-tower-office-building-skyscraper-facade-2175937.webp",
        "Senior living community building exterior",
    ),
    (
        "business-for-sale.tsx", "Operating Businesses",
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-glass-windows-business-blue-1508086.webp",
        "Operating commercial business building",
    ),
    (
        "note-loan.tsx", "Notes & Loans",
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-modern-exterior-skyscraper-facade-5535464.webp",
        "Commercial real estate note and mortgage secured by office tower",
    ),
]


def apply(file: str, plural: str, src: str, alt: str) -> bool:
    path = ROOT / file
    text = path.read_text(encoding="utf-8")
    needle = f'pluralDisplayName: "{plural}",'
    if needle not in text:
        print(f"  ! needle not found in {file}")
        return False
    if "heroImage:" in text.split(needle, 1)[1][:400]:
        print(f"  = heroImage already present after first match in {file}")
        return True
    replacement = (
        needle
        + f'\n    heroImage: {{\n'
        + f'      src: "{src}",\n'
        + f'      alt: "{alt}",\n'
        + f'    }},'
    )
    new_text = text.replace(needle, replacement, 1)
    path.write_text(new_text, encoding="utf-8")
    return True


def main():
    ok = 0
    for row in MAPPINGS:
        if apply(*row):
            ok += 1
            print(f"  + {row[0]}")
    print(f"Done. {ok}/{len(MAPPINGS)} updated.")


if __name__ == "__main__":
    main()
