"""Optimize Pixabay commercial videos with ffmpeg.

- Re-encodes to H.264 CRF 28 (good web quality, ~50% smaller)
- Scales to max 1280px wide (plenty for background video)
- Generates a poster JPG at 1s mark for each video
- Moves compressed videos OUT of public/ to assets/ (avoids Next.js build bloat)
- Poster JPGs stay in public/images/video-posters/ (small, servable)
- Updates the _manifest.json with new paths + poster paths
"""
import json
import os
import subprocess
import shutil
from pathlib import Path

FFMPEG = r"C:\Users\solbe\AppData\Local\Microsoft\WinGet\Links\ffmpeg.exe"
PROJECT = Path(__file__).resolve().parent.parent
SRC_ROOT = PROJECT / "public" / "videos" / "commercial-stock"
OUT_ROOT = PROJECT / "assets" / "videos" / "commercial-stock"
POSTER_ROOT = PROJECT / "public" / "images" / "video-posters"

CRF = 28
MAX_WIDTH = 1280


def run_ffmpeg(args: list[str]) -> bool:
    try:
        result = subprocess.run(
            [FFMPEG, "-y", "-hide_banner", "-loglevel", "error", *args],
            capture_output=True, text=True, timeout=600,
        )
        if result.returncode != 0:
            print(f"  ! ffmpeg: {result.stderr[:200]}")
            return False
        return True
    except Exception as e:
        print(f"  ! ffmpeg exception: {e}")
        return False


def optimize_video(src: Path, dest: Path) -> bool:
    scale = f"scale='min({MAX_WIDTH},iw)':-2"
    return run_ffmpeg([
        "-i", str(src),
        "-vf", scale,
        "-c:v", "libx264", "-crf", str(CRF), "-preset", "medium",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "96k",
        "-movflags", "+faststart",
        str(dest),
    ])


def make_poster(src: Path, poster: Path) -> bool:
    return run_ffmpeg([
        "-ss", "1",
        "-i", str(src),
        "-frames:v", "1",
        "-vf", f"scale='min({MAX_WIDTH},iw)':-2",
        "-q:v", "3",
        str(poster),
    ])


def main():
    OUT_ROOT.mkdir(parents=True, exist_ok=True)
    POSTER_ROOT.mkdir(parents=True, exist_ok=True)
    manifest_path = SRC_ROOT / "_manifest.json"
    manifest = json.loads(manifest_path.read_text())
    total_before = 0
    total_after = 0
    count = 0
    updated = []

    for entry in manifest:
        cat = entry["category"]
        vid = str(entry["id"])
        src_cat = SRC_ROOT / cat
        # find file by id
        src_file = None
        for f in src_cat.iterdir():
            if f.is_file() and f.suffix.lower() == ".mp4" and f"-{vid}." in f.name:
                src_file = f
                break
        if not src_file:
            print(f"  ! missing src for id={vid}")
            updated.append(entry)
            continue

        out_cat = OUT_ROOT / cat
        poster_cat = POSTER_ROOT / cat
        out_cat.mkdir(exist_ok=True)
        poster_cat.mkdir(exist_ok=True)
        out_file = out_cat / src_file.name
        poster_file = poster_cat / (src_file.stem + "-poster.jpg")

        print(f"  {cat}/{src_file.name} -> compressing...")
        if not out_file.exists():
            if not optimize_video(src_file, out_file):
                updated.append(entry)
                continue
        if not poster_file.exists():
            make_poster(src_file, poster_file)

        before = src_file.stat().st_size
        after = out_file.stat().st_size
        total_before += before
        total_after += after
        count += 1
        print(f"    {before//1024} KB -> {after//1024} KB ({(before-after)*100//max(before,1)}% smaller)")

        entry["file"] = f"assets/videos/commercial-stock/{cat}/{src_file.name}"
        entry["poster"] = f"images/video-posters/{cat}/{poster_file.name}"
        entry["bytes"] = after
        updated.append(entry)

    # write updated manifest to NEW location, delete old public/videos
    (OUT_ROOT / "_manifest.json").write_text(json.dumps(updated, indent=2))

    print(f"\nDONE. {count} videos optimized.")
    print(f"  Before: {total_before/1024/1024:.1f} MB")
    print(f"  After:  {total_after/1024/1024:.1f} MB")
    print(f"  Saved:  {(total_before-total_after)/1024/1024:.1f} MB")

    # delete the original public/videos/commercial-stock folder
    print(f"\nRemoving {SRC_ROOT} (compressed copies are in assets/)...")
    shutil.rmtree(SRC_ROOT)
    print("Removed.")


if __name__ == "__main__":
    main()
