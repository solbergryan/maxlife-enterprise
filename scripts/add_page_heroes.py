"""Insert a hero Image into each page's first hero <section>.

Handles two patterns:
  A) <section className="relative overflow-hidden border-b border-dark-border">
       <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
       <div className="max-w-7xl ... relative">
  B) <section className="bg-dark-card/50 border-b border-dark-border">
       <div className="max-w-7xl ...">

Both become:
  <section className="relative overflow-hidden border-b border-dark-border">
    <Image src="..." alt="..." fill priority sizes="100vw" className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />
    <div className="max-w-7xl ... relative">
"""
import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent / "src" / "app"

# (page file, image path, alt text)
TARGETS = [
    (APP / "retail-space-for-rent-orlando" / "page.tsx",
     "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-building-business-design-display-interior-light-1867350.webp",
     "Orlando retail space for rent with display window"),
    (APP / "office-space-for-lease-orlando" / "page.tsx",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-building-glass-windows-modern-2083687.webp",
     "Orlando office space for lease in modern glass tower"),
    (APP / "industrial-property-central-florida" / "page.tsx",
     "/images/commercial-stock/warehouse/maxlife-warehouse-container-metal-port-iron-warehouse-subwoofer-3639617.webp",
     "Central Florida industrial property with shipping containers"),
    (APP / "car-wash-properties-florida" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-dark-night-convenience-store-shop-2583628.webp",
     "Florida car wash and convenience commercial property"),
    (APP / "build-to-suit-orlando" / "page.tsx",
     "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-construction-site-architect-work-building-housebuilding-2733678.webp",
     "Orlando build-to-suit commercial construction project"),
    (APP / "nnn-properties-florida" / "page.tsx",
     "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-germany-shop-window-storefront-sale-business-983358.webp",
     "Florida NNN property storefront"),
    (APP / "1031-exchange-florida" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-amsterdam-blue-sky-business-1448221.webp",
     "Florida 1031 exchange replacement commercial property"),
    (APP / "central-florida-land-for-development" / "page.tsx",
     "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-building-to-build-framework-construction-site-1210677.webp",
     "Central Florida land for development with construction framework"),
    (APP / "orlando-commercial-real-estate-deals" / "page.tsx",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-office-4k-wallpaper-1920x1080-city-3306146.webp",
     "Orlando commercial real estate deals and investment opportunities"),
    (APP / "markets" / "page.tsx",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-city-buildings-houston-texas-office-business-3779038.webp",
     "Central Florida commercial real estate markets"),
    (APP / "market-reports" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-glass-windows-business-blue-1508086.webp",
     "Central Florida commercial real estate market reports"),
    (APP / "market-reports" / "[slug]" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-building-nyc-urban-business-new-1127182.webp",
     "Commercial real estate market report"),
    (APP / "services" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-modern-exterior-skyscraper-facade-5535464.webp",
     "MaxLife Realty commercial real estate services"),
    (APP / "about" / "page.tsx",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-tower-office-building-skyscraper-facade-2175937.webp",
     "About MaxLife Realty Central Florida commercial broker"),
    (APP / "contact" / "page.tsx",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-building-door-architecture-entrance-glass-indoors-8246151.webp",
     "Contact MaxLife Realty commercial real estate broker"),
    (APP / "portfolio" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-building-architecture-travel-tourism-facade-exterior-7114894.webp",
     "MaxLife Realty commercial real estate portfolio"),
    (APP / "lenders" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-bridge-business-future-training-skyline-development-1916757.webp",
     "Central Florida commercial real estate lender network"),
    (APP / "properties" / "page.tsx",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscrapers-buildings-skyline-city-real-5999913.webp",
     "Commercial properties for sale in Central Florida"),
    (APP / "opportunities" / "[slug]" / "page.tsx",
     "/images/commercial-stock/commercial-business/maxlife-commercial-business-architecture-business-building-elevators-modern-tower-3285853.webp",
     "Commercial property investment opportunity"),
    (APP / "investor-access" / "page.tsx",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-businessman-man-stock-broker-real-estate-481113.webp",
     "MaxLife Realty investor access portal"),
    (APP / "investor-tools" / "page.tsx",
     "/images/commercial-stock/office-buildings/maxlife-office-buildings-city-san-francisco-market-street-urban-4764064.webp",
     "Commercial real estate investor tools and analytics"),
]

IMAGE_IMPORT_PATTERN = re.compile(r'^\s*import\s+Image\s+from\s+["\']next/image["\']', re.M)

PATTERN_A = re.compile(
    r'(\s*)<section className="relative overflow-hidden border-b border-dark-border">\s*\n'
    r'\s*<div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />'
)

PATTERN_B = re.compile(
    r'(\s*)<section className="bg-dark-card/50 border-b border-dark-border">\s*\n'
    r'(\s*)<div className="max-w-7xl'
)


def build_image_block(indent: str, src: str, alt: str) -> str:
    pad = indent + "  "
    return (
        f'{indent}<section className="relative overflow-hidden border-b border-dark-border">\n'
        f'{pad}<Image\n'
        f'{pad}  src="{src}"\n'
        f'{pad}  alt="{alt}"\n'
        f'{pad}  fill\n'
        f'{pad}  priority\n'
        f'{pad}  sizes="100vw"\n'
        f'{pad}  className="object-cover"\n'
        f'{pad}/>\n'
        f'{pad}<div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/80 to-navy-dark/70" />'
    )


def ensure_image_import(text: str) -> str:
    if IMAGE_IMPORT_PATTERN.search(text):
        return text
    # Insert import after the first import line
    m = re.search(r'^import[^\n]*\n', text, flags=re.M)
    if not m:
        return 'import Image from "next/image";\n' + text
    return text[:m.end()] + 'import Image from "next/image";\n' + text[m.end():]


def process(path: Path, src: str, alt: str) -> str:
    if not path.exists():
        return "missing"
    text = path.read_text(encoding="utf-8")

    # Match Pattern A first
    m = PATTERN_A.search(text)
    if m:
        indent = m.group(1).replace("\n", "").rstrip()
        if not indent:
            indent = "      "
        replacement = build_image_block(indent, src, alt)
        # Replace matched block with new block (keeps the newline after)
        new_text = text[:m.start()] + "\n" + replacement + text[m.end():]
        new_text = ensure_image_import(new_text)
        path.write_text(new_text, encoding="utf-8")
        return "A"

    # Match Pattern B
    m = PATTERN_B.search(text)
    if m:
        indent = m.group(1).replace("\n", "").rstrip()
        if not indent:
            indent = "      "
        inner_pad = m.group(2).replace("\n", "").rstrip()
        if not inner_pad:
            inner_pad = indent + "  "
        replacement = (
            build_image_block(indent, src, alt) + "\n"
            f'{inner_pad}<div className="max-w-7xl'
        )
        # Need to also make the inner div "relative" — add className transformation
        # The match ends at the `"max-w-7xl` prefix; we need to inject "relative" into
        # that div's className. But we don't have the full className yet — leave it to
        # a post-step that adds "relative" before the closing `"` of the first inner
        # div after our replacement.
        new_text = text[:m.start()] + "\n" + replacement + text[m.end():]
        # Add `relative` to the next `"` terminator of that div's className
        # Find the position right after our insertion for the "max-w-7xl line
        idx = new_text.find('max-w-7xl', m.start())
        if idx >= 0:
            # find the terminating `"` on that line
            end_quote = new_text.find('"', idx)
            if end_quote >= 0:
                # Check that "relative" isn't already present in the className
                className = new_text[idx:end_quote]
                if "relative" not in className:
                    new_text = new_text[:end_quote] + ' relative' + new_text[end_quote:]
        new_text = ensure_image_import(new_text)
        path.write_text(new_text, encoding="utf-8")
        return "B"

    return "no-match"


def main():
    counts = {"A": 0, "B": 0, "missing": 0, "no-match": 0}
    for path, src, alt in TARGETS:
        result = process(path, src, alt)
        rel = path.relative_to(APP.parent.parent)
        print(f"  [{result:8}] {rel}")
        counts[result] = counts.get(result, 0) + 1
    print()
    print(f"Pattern A: {counts['A']}")
    print(f"Pattern B: {counts['B']}")
    print(f"Missing:   {counts['missing']}")
    print(f"No match:  {counts['no-match']}")


if __name__ == "__main__":
    main()
