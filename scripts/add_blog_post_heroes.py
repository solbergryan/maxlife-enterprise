"""Add a hero image to each individual blog post page.

Each blog article's hero currently uses:
  <section className="bg-dark-card/50 border-b border-dark-border">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

Transformed to:
  <section className="relative overflow-hidden border-b border-dark-border">
    <Image ... />
    <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">

Image source comes from the same mapping used in blog/page.tsx (articleImages).
"""
import re
from pathlib import Path

BLOG_DIR = Path(__file__).resolve().parent.parent / "src" / "app" / "blog"

# slug -> (image path, alt text) — same mapping as articleImages in blog/page.tsx
ARTICLE_IMAGES = {
    "orlando-commercial-real-estate-trends-2026": (
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-office-4k-wallpaper-1920x1080-city-3306146.webp",
        "Orlando commercial real estate market skyline",
    ),
    "orlando-entertainment-district-investment-guide": (
        "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-adidas-atlantic-city-shopping-fisheye-store-458043.webp",
        "Orlando entertainment district retail and shopping storefronts",
    ),
    "brevard-county-investment-property-outlook": (
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-building-city-sky-sunlight-office-houston-4549648.webp",
        "Brevard County commercial investment property",
    ),
    "what-is-nnn-lease": (
        "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-architecture-building-convenience-store-grocery-people-2577330.webp",
        "Single-tenant NNN retail property storefront",
    ),
    "central-florida-land-development": (
        "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-site-crane-building-helmet-architecture-228470.webp",
        "Central Florida land development construction site",
    ),
    "orlando-industrial-real-estate-guide": (
        "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
        "Orlando industrial warehouse and distribution facility",
    ),
    "orlando-multifamily-investment-guide": (
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-real-estate-property-apartment-house-5339245.webp",
        "Orlando multifamily apartment investment property",
    ),
    "orlando-retail-commercial-real-estate": (
        "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-buildings-city-coffee-shop-doors-street-1836478.webp",
        "Orlando retail commercial storefronts on a city street",
    ),
    "orlando-nnn-properties-for-sale": (
        "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-germany-shop-window-storefront-sale-business-983358.webp",
        "Orlando NNN retail property for sale",
    ),
    "how-to-buy-commercial-property-orlando": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-building-glass-windows-modern-2083687.webp",
        "Orlando commercial office skyscraper acquisition",
    ),
    "orlando-cap-rates-investor-guide": (
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-glass-windows-business-blue-1508086.webp",
        "Commercial real estate cap rate analysis building",
    ),
    "1031-exchange-orlando-guide": (
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-amsterdam-blue-sky-business-1448221.webp",
        "1031 exchange replacement commercial property",
    ),
    "lake-county-commercial-real-estate-guide": (
        "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-building-to-build-framework-construction-site-1210677.webp",
        "Lake County Florida commercial development framework",
    ),
    "how-to-evaluate-commercial-real-estate-deal": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-full-hd-wallpaper-building-facade-21883.webp",
        "Evaluating a commercial real estate office deal",
    ),
    "medical-office-investing-central-florida": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-glass-facades-modern-facade-2256489.webp",
        "Central Florida medical office building",
    ),
    "why-invest-commercial-real-estate-florida": (
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-tower-office-building-skyscraper-facade-2175937.webp",
        "Florida commercial real estate investment skyline",
    ),
    "office-space-for-lease-orlando-guide": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-building-architecture-glass-facade-exterior-glassware-3285254.webp",
        "Orlando office space for lease with glass facade",
    ),
    "build-to-suit-vs-existing-commercial-orlando": (
        "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-site-architect-work-building-housebuilding-2733678.webp",
        "Build-to-suit commercial construction with architect on site",
    ),
    "central-florida-commercial-real-estate-submarkets": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscrapers-buildings-skyline-city-real-5999913.webp",
        "Central Florida commercial real estate submarkets skyline",
    ),
    "war-oil-prices-orlando-commercial-real-estate-spring-2026": (
        "/images/commercial-stock/commercial-business/maxlife-commercial-business-bridge-business-future-training-skyline-development-1916757.webp",
        "Orlando commercial real estate amid global economic shifts",
    ),
}

IMAGE_IMPORT_PATTERN = re.compile(r'^\s*import\s+Image\s+from\s+["\']next/image["\']', re.M)

# Pattern B with flexible max-w-* width and py-*
HERO_PATTERN = re.compile(
    r'(\s*)<section className="bg-dark-card/50 border-b border-dark-border">\s*\n'
    r'(\s*)<div className="(max-w-[^"]+)">'
)


def ensure_image_import(text: str) -> str:
    if IMAGE_IMPORT_PATTERN.search(text):
        return text
    m = re.search(r'^import[^\n]*\n', text, flags=re.M)
    if not m:
        return 'import Image from "next/image";\n' + text
    return text[:m.end()] + 'import Image from "next/image";\n' + text[m.end():]


def process(slug: str) -> str:
    mapping = ARTICLE_IMAGES.get(slug)
    if not mapping:
        return "no-mapping"
    src, alt = mapping
    path = BLOG_DIR / slug / "page.tsx"
    if not path.exists():
        return "missing-file"
    text = path.read_text(encoding="utf-8")

    m = HERO_PATTERN.search(text)
    if not m:
        return "no-match"

    indent = m.group(1).replace("\n", "").rstrip() or "      "
    inner_pad = m.group(2).replace("\n", "").rstrip() or (indent + "  ")
    max_width_class = m.group(3)  # e.g. "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    pad = indent + "  "

    replacement = (
        f'{indent}<section className="relative overflow-hidden border-b border-dark-border">\n'
        f'{pad}<Image\n'
        f'{pad}  src="{src}"\n'
        f'{pad}  alt="{alt}"\n'
        f'{pad}  fill\n'
        f'{pad}  priority\n'
        f'{pad}  sizes="100vw"\n'
        f'{pad}  className="object-cover"\n'
        f'{pad}/>\n'
        f'{pad}<div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />\n'
        f'{inner_pad}<div className="{max_width_class} relative">'
    )
    new_text = text[:m.start()] + "\n" + replacement + text[m.end():]
    new_text = ensure_image_import(new_text)
    path.write_text(new_text, encoding="utf-8")
    return "ok"


def main():
    stats = {"ok": 0, "no-match": 0, "missing-file": 0, "no-mapping": 0}
    for slug in sorted(ARTICLE_IMAGES.keys()):
        result = process(slug)
        stats[result] = stats.get(result, 0) + 1
        print(f"  [{result:12}] {slug}")
    print()
    for k, v in stats.items():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
