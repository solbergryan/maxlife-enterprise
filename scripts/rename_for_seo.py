"""Rename downloaded Pixabay images/videos to SEO-friendly names.

Format: maxlife-{category}-{tag-slug}-{id}.{ext}
Example: maxlife-office-buildings-modern-architecture-glass-facade-1044807.jpg
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "public"
TARGETS = [
    ROOT / "images" / "commercial-stock",
    ROOT / "videos" / "commercial-stock",
]
MAX_TAG_WORDS = 6  # cap slug length for sanity


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s,-]", "", text)
    text = text.replace(",", " ")
    text = re.sub(r"\s+", "-", text.strip())
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def tag_slug(tags: str, max_words: int = MAX_TAG_WORDS) -> str:
    if not tags:
        return ""
    parts = [t.strip() for t in tags.split(",") if t.strip()]
    words = []
    seen = set()
    for p in parts:
        for w in slugify(p).split("-"):
            if w and w not in seen and len(w) > 1:
                seen.add(w)
                words.append(w)
            if len(words) >= max_words:
                break
        if len(words) >= max_words:
            break
    return "-".join(words)


def process(root: Path, kind: str):
    manifest_path = root / "_manifest.json"
    if not manifest_path.exists():
        print(f"! No manifest at {manifest_path}")
        return 0
    manifest = json.loads(manifest_path.read_text())
    renamed = 0
    updated_manifest = []

    for entry in manifest:
        cat = entry["category"]
        vid = entry["id"]
        tags = entry.get("tags", "")
        quality = entry.get("quality", "")
        cat_dir = root / cat

        # find existing file by id prefix
        existing = None
        for f in cat_dir.iterdir():
            if f.is_file() and f.stem.split("_")[0] == str(vid):
                existing = f
                break
        if not existing:
            print(f"  ! missing file id={vid} in {cat}")
            continue

        ext = existing.suffix.lower()
        slug = tag_slug(tags) or "commercial"
        parts = ["maxlife", cat, slug, str(vid)]
        if quality and kind == "video":
            parts.insert(-1, quality)
        new_name = "-".join(parts) + ext
        # trim overly long names (Windows MAX_PATH safety)
        if len(new_name) > 180:
            new_name = new_name[:170] + "-" + str(vid) + ext

        new_path = cat_dir / new_name
        if existing.name == new_name:
            updated_manifest.append({**entry, "file": f"{cat}/{new_name}"})
            continue
        if new_path.exists():
            print(f"  = already exists {new_name}")
            updated_manifest.append({**entry, "file": f"{cat}/{new_name}"})
            continue
        existing.rename(new_path)
        renamed += 1
        updated_manifest.append({**entry, "file": f"{cat}/{new_name}", "original_id": vid})

    manifest_path.write_text(json.dumps(updated_manifest, indent=2))
    print(f"  -> {kind}: renamed {renamed}/{len(manifest)}")
    return renamed


def main():
    for target in TARGETS:
        kind = "video" if "videos" in str(target) else "image"
        print(f"\n=== {target} ===")
        process(target, kind)


if __name__ == "__main__":
    main()
