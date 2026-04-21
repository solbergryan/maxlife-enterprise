"""For long-form blog posts that use <article> directly (no hero section),
insert a decorative banner image above the article."""
import re
from pathlib import Path

BLOG_DIR = Path(__file__).resolve().parent.parent / "src" / "app" / "blog"

TARGETS = {
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
    "how-to-evaluate-commercial-real-estate-deal": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-full-hd-wallpaper-building-facade-21883.webp",
        "Evaluating a commercial real estate office deal",
    ),
    "lake-county-commercial-real-estate-guide": (
        "/images/commercial-stock/real-estate-development/maxlife-real-estate-development-building-to-build-framework-construction-site-1210677.webp",
        "Lake County Florida commercial development framework",
    ),
    "medical-office-investing-central-florida": (
        "/images/commercial-stock/office-buildings/maxlife-office-buildings-architecture-skyscraper-glass-facades-modern-facade-2256489.webp",
        "Central Florida medical office building",
    ),
    "why-invest-commercial-real-estate-florida": (
        "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-architecture-tower-office-building-skyscraper-facade-2175937.webp",
        "Florida commercial real estate investment skyline",
    ),
}

IMAGE_IMPORT_PATTERN = re.compile(r'^\s*import\s+Image\s+from\s+["\']next/image["\']', re.M)
ARTICLE_PATTERN = re.compile(r'(\s*)<article className="(max-w-4xl[^"]+py-16)"')


def ensure_image_import(text: str) -> str:
    if IMAGE_IMPORT_PATTERN.search(text):
        return text
    m = re.search(r'^import[^\n]*\n', text, flags=re.M)
    if not m:
        return 'import Image from "next/image";\n' + text
    return text[:m.end()] + 'import Image from "next/image";\n' + text[m.end():]


def process(slug: str, src: str, alt: str) -> str:
    path = BLOG_DIR / slug / "page.tsx"
    if not path.exists():
        return "missing"
    text = path.read_text(encoding="utf-8")
    if "commercial-stock/" in text:
        return "already-has-banner"
    m = ARTICLE_PATTERN.search(text)
    if not m:
        return "no-match"

    indent = m.group(1).replace("\n", "").rstrip() or "      "
    article_class = m.group(2)
    # Reduce article top padding to avoid double-stacking whitespace under banner
    new_article_class = article_class.replace("py-16", "pt-10 pb-16")
    pad = indent + "  "

    banner = (
        f'{indent}<section className="relative overflow-hidden border-b border-dark-border aspect-[21/6]">\n'
        f'{pad}<Image\n'
        f'{pad}  src="{src}"\n'
        f'{pad}  alt="{alt}"\n'
        f'{pad}  fill\n'
        f'{pad}  priority\n'
        f'{pad}  sizes="100vw"\n'
        f'{pad}  className="object-cover"\n'
        f'{pad}/>\n'
        f'{pad}<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />\n'
        f'{indent}</section>\n'
        f'{indent}<article className="{new_article_class}"'
    )
    new_text = text[:m.start()] + "\n" + banner + text[m.end():]
    new_text = ensure_image_import(new_text)
    path.write_text(new_text, encoding="utf-8")
    return "ok"


def main():
    stats = {"ok": 0, "already-has-banner": 0, "no-match": 0, "missing": 0}
    for slug, (src, alt) in TARGETS.items():
        r = process(slug, src, alt)
        stats[r] += 1
        print(f"  [{r:18}] {slug}")
    print()
    for k, v in stats.items():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
