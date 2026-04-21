"""Add heroImage + heroAlt to each market entry in src/data/markets.ts."""
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent / "src" / "data" / "markets.ts"

MAPPINGS = [
    ("orlando-commercial-real-estate",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-glass-facades-modern-facade-2256489.webp",
     "Orlando commercial real estate skyline"),
    ("brevard-county-commercial-real-estate",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-skyscraper-office-architecture-skyline-district-3939138.webp",
     "Brevard County Space Coast commercial real estate"),
    ("lake-county-commercial-land",
     "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-nature-site-building-helmet-architecture-257326.webp",
     "Lake County Florida commercial development land"),
    ("central-florida-investment-properties",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-exzenterhaus-architecture-building-bochum-skyscraper-germany-2175925.webp",
     "Central Florida commercial investment properties"),
    ("lake-nona-commercial-real-estate",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-city-street-architecture-business-skyscrapers-building-4667143.webp",
     "Lake Nona commercial real estate corridor"),
    ("international-drive-commercial-real-estate",
     "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-apple-inc-mac-store-macintosh-technology-508812.webp",
     "International Drive Orlando commercial retail"),
    ("downtown-orlando-commercial-real-estate",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-city-window-architecture-urban-glass-construction-4991094.webp",
     "Downtown Orlando commercial office buildings"),
]


def main():
    text = SRC.read_text(encoding="utf-8")
    ok = 0
    for slug, src, alt in MAPPINGS:
        needle = f'slug: "{slug}",'
        if needle not in text:
            print(f"  ! needle not found: {slug}")
            continue
        # Check if heroImage is already present shortly after
        idx = text.find(needle)
        if "heroImage:" in text[idx : idx + 2000]:
            print(f"  = heroImage already set for {slug}")
            ok += 1
            continue
        # Insert after the `heroSubheading:` line (multi-line string possible) — find the first closing `,` after heroSubheading
        # Structure: heroSubheading: "..." | `...`,\n<next>
        sub_idx = text.find("heroSubheading:", idx)
        if sub_idx < 0:
            print(f"  ! heroSubheading not found for {slug}")
            continue
        # Find end of this assignment: the first ",\n    sections" or ",\n    propertyTypes" etc.
        end_idx = text.find(',\n    sections', sub_idx)
        if end_idx < 0:
            # try looking for next common key
            for key in ("propertyTypes:", "stats:", "whyInvest:"):
                alt_end = text.find(key, sub_idx)
                if alt_end > 0:
                    # back up to previous ",\n"
                    end_idx = text.rfind(",", sub_idx, alt_end)
                    break
        if end_idx < 0:
            print(f"  ! end of heroSubheading not found for {slug}")
            continue
        insertion = (
            f',\n'
            f'    heroImage:\n'
            f'      "{src}",\n'
            f'    heroAlt: "{alt}"'
        )
        text = text[:end_idx] + insertion + text[end_idx:]
        print(f"  + {slug}")
        ok += 1
    SRC.write_text(text, encoding="utf-8")
    print(f"Done. {ok}/{len(MAPPINGS)}")


if __name__ == "__main__":
    main()
