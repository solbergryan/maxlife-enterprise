"""Download Pixabay images for property-type pages whose hero imagery is mismatched.

Creates new category folders under public/images/commercial-stock/ and fetches
several horizontal photo candidates per topic. Preserves SEO-friendly filenames.
After running, pick a favorite candidate and update the matching .tsx data file.
"""
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

API_KEY = "15048425-6a1865e8ee64622e4da7809e5"
ROOT = Path(__file__).resolve().parent.parent / "public" / "images" / "commercial-stock"
USER_AGENT = "Mozilla/5.0 (commercial-stock-downloader)"

# folder -> ordered list of search queries (try first, fall back)
CATEGORIES = {
    "senior-living": [
        "assisted living facility",
        "retirement community",
        "senior living building",
        "nursing home exterior",
    ],
    "self-storage": [
        "self storage units",
        "storage facility exterior",
        "storage unit row",
    ],
    "mobile-home-park": [
        "mobile home park",
        "manufactured home community",
        "trailer park",
    ],
    "car-wash": [
        "car wash",
        "car wash tunnel",
        "automatic car wash",
    ],
    "special-purpose": [
        "gas station",
        "funeral home",
        "church building exterior",
        "daycare building",
    ],
    "about-broker": [
        "commercial real estate broker handshake",
        "business team office meeting",
        "real estate agent commercial",
    ],
}

PER_CATEGORY_TARGET = 4
PER_PAGE = 30


def slugify(text: str) -> str:
    import re
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return s[:80]


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


def download(url: str, dest: Path) -> int:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    dest.write_bytes(data)
    return len(data)


def build_filename(folder: str, img_id: int, tags: str, ext: str) -> str:
    tag_slug = slugify(tags)[:60] if tags else "photo"
    return f"maxlife-{folder}-{tag_slug}-{img_id}{ext}"


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    manifest_path = ROOT / "_manifest.json"
    manifest = []
    if manifest_path.exists():
        try:
            manifest = json.loads(manifest_path.read_text())
        except Exception:
            manifest = []
    seen_ids = {m.get("id") for m in manifest}

    for folder, queries in CATEGORIES.items():
        cat_dir = ROOT / folder
        cat_dir.mkdir(exist_ok=True)
        count = 0
        print(f"\n=== {folder} (target {PER_CATEGORY_TARGET}) ===")

        for q in queries:
            if count >= PER_CATEGORY_TARGET:
                break
            try:
                data = search(q)
            except Exception as e:
                print(f"  ! search failed '{q}': {e}")
                continue
            hits = data.get("hits", [])
            for hit in hits:
                if count >= PER_CATEGORY_TARGET:
                    break
                img_id = hit["id"]
                if img_id in seen_ids:
                    continue
                tags = hit.get("tags", "")
                img_url = hit.get("largeImageURL") or hit.get("webformatURL")
                if not img_url:
                    continue
                ext = Path(urllib.parse.urlparse(img_url).path).suffix or ".jpg"
                fname = build_filename(folder, img_id, tags, ext)
                dest = cat_dir / fname
                if dest.exists():
                    count += 1
                    seen_ids.add(img_id)
                    continue
                try:
                    size = download(img_url, dest)
                    seen_ids.add(img_id)
                    count += 1
                    manifest.append({
                        "id": img_id,
                        "category": folder,
                        "query": q,
                        "file": str(dest.relative_to(ROOT.parent.parent.parent)),
                        "tags": tags,
                        "page_url": hit.get("pageURL", ""),
                        "user": hit.get("user", ""),
                        "bytes": size,
                    })
                    print(f"  + {folder}/{fname}  ({size//1024} KB)  [{tags[:60]}]")
                except Exception as e:
                    print(f"  ! download failed {img_id}: {e}")
                time.sleep(0.15)
            time.sleep(0.4)

        print(f"  -> {folder}: {count} images")

    manifest_path.write_text(json.dumps(manifest, indent=2))
    print(f"\nDONE. Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
