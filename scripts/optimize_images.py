"""Optimize Pixabay commercial images: strip EXIF, convert to WebP.

- Replaces .jpg/.png with .webp (quality 82, max width 1920)
- Strips all EXIF/metadata
- Updates the folder's _manifest.json in place
- next/image handles responsive sizing at request time, so no pre-generated sizes
"""
import json
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"
MAX_WIDTH = 1920
QUALITY = 82


def optimize_one(src: Path) -> tuple[Path, int, int]:
    original_bytes = src.stat().st_size
    with Image.open(src) as im:
        im = im.convert("RGB")
        if im.width > MAX_WIDTH:
            new_h = int(im.height * MAX_WIDTH / im.width)
            im = im.resize((MAX_WIDTH, new_h), Image.LANCZOS)
        dest = src.with_suffix(".webp")
        # save without EXIF (Pillow drops it by default when not passed)
        im.save(dest, "WEBP", quality=QUALITY, method=6)
    new_bytes = dest.stat().st_size
    if dest != src:
        src.unlink()
    return dest, original_bytes, new_bytes


def main():
    total_before = 0
    total_after = 0
    count = 0
    for manifest_path in ROOT.glob("_manifest.json"):
        manifest = json.loads(manifest_path.read_text())
        updated = []
        for entry in manifest:
            cat = entry["category"]
            cat_dir = ROOT / cat
            # find the current file (matches by id in filename)
            vid = str(entry["id"])
            match = None
            for f in cat_dir.iterdir():
                if f.is_file() and f.suffix.lower() in (".jpg", ".jpeg", ".png"):
                    if f.stem.endswith("-" + vid):
                        match = f
                        break
            if not match:
                updated.append(entry)
                continue
            try:
                new_path, before, after = optimize_one(match)
                total_before += before
                total_after += after
                count += 1
                entry["file"] = f"{cat}/{new_path.name}"
                entry["bytes"] = after
                updated.append(entry)
                if count % 20 == 0:
                    print(f"  [{count}] saved {(total_before-total_after)//1024} KB so far")
            except Exception as e:
                print(f"  ! {match.name}: {e}")
                updated.append(entry)
        manifest_path.write_text(json.dumps(updated, indent=2))

    saved = total_before - total_after
    print(f"\nDONE. {count} images optimized.")
    print(f"  Before: {total_before/1024/1024:.1f} MB")
    print(f"  After:  {total_after/1024/1024:.1f} MB")
    print(f"  Saved:  {saved/1024/1024:.1f} MB ({saved*100//max(total_before,1)}%)")


if __name__ == "__main__":
    main()
