"""Download commercial real estate stock photos from Pixabay into categorized folders."""
import os
import sys
import time
import json
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = "15048425-6a1865e8ee64622e4da7809e5"
ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"

# category folder -> list of search queries
CATEGORIES = {
    "office-buildings": ["office building", "modern office building", "office tower"],
    "retail-storefronts": ["retail storefront", "shopping mall", "store front"],
    "warehouse": ["warehouse", "industrial warehouse", "distribution center"],
    "commercial-business": ["commercial business building", "downtown business"],
    "real-estate-development": ["construction site building", "real estate development"],
    "mixed-commercial": ["commercial real estate", "city skyline business"],
}

PER_PAGE = 60  # Pixabay allows 3-200
TARGET_PER_CATEGORY = 30
USER_AGENT = "Mozilla/5.0 (commercial-stock-downloader)"


def search(query: str, page: int = 1):
    params = {
        "key": API_KEY,
        "q": query,
        "image_type": "photo",
        "orientation": "horizontal",
        "per_page": PER_PAGE,
        "page": page,
        "safesearch": "true",
    }
    url = "https://pixabay.com/api/?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def download(url: str, dest: Path):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    dest.write_bytes(data)
    return len(data)


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    seen_ids = set()
    total = 0
    manifest = []

    for folder, queries in CATEGORIES.items():
        cat_dir = ROOT / folder
        cat_dir.mkdir(exist_ok=True)
        cat_count = 0
        print(f"\n=== {folder} (target {TARGET_PER_CATEGORY}) ===")

        for q in queries:
            if cat_count >= TARGET_PER_CATEGORY:
                break
            page = 1
            while cat_count < TARGET_PER_CATEGORY and page <= 3:
                try:
                    data = search(q, page=page)
                except Exception as e:
                    print(f"  ! search failed '{q}' p{page}: {e}")
                    break
                hits = data.get("hits", [])
                if not hits:
                    break
                for hit in hits:
                    if cat_count >= TARGET_PER_CATEGORY:
                        break
                    img_id = hit["id"]
                    if img_id in seen_ids:
                        continue
                    seen_ids.add(img_id)
                    img_url = hit.get("largeImageURL") or hit.get("webformatURL")
                    if not img_url:
                        continue
                    ext = Path(urllib.parse.urlparse(img_url).path).suffix or ".jpg"
                    fname = f"{img_id}{ext}"
                    dest = cat_dir / fname
                    if dest.exists():
                        cat_count += 1
                        total += 1
                        continue
                    try:
                        size = download(img_url, dest)
                        cat_count += 1
                        total += 1
                        manifest.append({
                            "id": img_id,
                            "category": folder,
                            "query": q,
                            "file": str(dest.relative_to(ROOT.parent.parent.parent)),
                            "tags": hit.get("tags", ""),
                            "page_url": hit.get("pageURL", ""),
                            "user": hit.get("user", ""),
                            "bytes": size,
                        })
                        print(f"  + {folder}/{fname}  ({size//1024} KB)  [{hit.get('tags','')[:50]}]")
                    except Exception as e:
                        print(f"  ! download failed {img_id}: {e}")
                    time.sleep(0.15)
                page += 1
                time.sleep(0.5)
        print(f"  -> {folder}: {cat_count} images")

    # write manifest
    manifest_path = ROOT / "_manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2))
    print(f"\nDONE. Total images: {total}")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
