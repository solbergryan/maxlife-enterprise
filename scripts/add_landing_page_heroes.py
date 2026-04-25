"""Add hero images to landing pages that currently use Pattern B hero sections."""
import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent / "src" / "app"

TARGETS = [
    (APP / "investors" / "page.tsx",
     "/images/commercial-stock/investors/maxlife-investors-stock-trading-monitor-business-finance-exchange-investment-m-1863880.webp",
     "Commercial real estate investment analytics on a trading monitor"),
    (APP / "professionals" / "page.tsx",
     "/images/commercial-stock/professionals/maxlife-professionals-people-business-meeting-business-meeting-coworkers-agreement-1979261.webp",
     "Professional services team meeting across a conference table"),
    (APP / "careers" / "page.tsx",
     "/images/commercial-stock/careers/maxlife-careers-meeting-business-architect-office-team-plan-blueprints-teamw-2284501.webp",
     "MaxLife Realty team reviewing commercial property plans"),
    (APP / "nnn-tenants" / "page.tsx",
     "/images/commercial-stock/retail-storefronts/maxlife-retail-storefronts-apple-inc-mac-store-macintosh-technology-508812.webp",
     "National NNN retail tenant storefront"),
    (APP / "lease-types" / "page.tsx",
     "/images/commercial-stock/lease-types/maxlife-lease-types-contract-agreement-signing-a-contract-document-signature-bus-6951993.webp",
     "Commercial lease agreement being signed"),
    (APP / "glossary" / "page.tsx",
     "/images/commercial-stock/glossary/maxlife-glossary-old-books-book-old-library-education-archive-book-shelf-anti-436498.webp",
     "Commercial real estate glossary reference books"),
    (APP / "faq" / "page.tsx",
     "/images/commercial-stock/faq/maxlife-faq-question-mark-question-symbol-character-help-reply-faq-info--463497.webp",
     "Frequently asked questions about commercial real estate"),
    (APP / "net-sheets" / "page.tsx",
     "/images/commercial-stock/net-sheets/maxlife-net-sheets-money-bills-calculator-to-save-savings-taxes-business-money--256312.webp",
     "Seller net sheet calculator with receipts and calculator"),
    (APP / "marketplace" / "page.tsx",
     "/images/commercial-stock/mixed-commercial/maxlife-mixed-commercial-skyscrapers-skyline-city-buildings-high-rise-450793.webp",
     "Commercial real estate marketplace listings"),
]

IMAGE_IMPORT_PATTERN = re.compile(r'^\s*import\s+Image\s+from\s+["\']next/image["\']', re.M)

# Pattern B
PATTERN_B = re.compile(
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


def process(path: Path, src: str, alt: str) -> str:
    if not path.exists():
        return "missing"
    text = path.read_text(encoding="utf-8")
    # Skip if already has a next/image <Image usage
    if "next/image" in text and re.search(r'<Image\s', text):
        # already has an image somewhere
        pass
    m = PATTERN_B.search(text)
    if not m:
        return "no-match"
    indent = m.group(1).replace("\n", "").rstrip() or "      "
    inner_pad = m.group(2).replace("\n", "").rstrip() or (indent + "  ")
    max_width_class = m.group(3)
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
    stats = {"ok": 0, "missing": 0, "no-match": 0}
    for path, src, alt in TARGETS:
        result = process(path, src, alt)
        stats[result] = stats.get(result, 0) + 1
        rel = path.relative_to(APP.parent.parent)
        print(f"  [{result:8}] {rel}")
    print()
    for k, v in stats.items():
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
