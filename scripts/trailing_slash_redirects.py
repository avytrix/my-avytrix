#!/usr/bin/env python3
"""Make /page/ redirect to /page on GitHub Pages, which serves page.html for /page but 404s /page/.

Writes page/index.html (instant meta refresh + canonical) next to every exported page.html.
Run after scripts/seo_check.py: the stubs are not pages and would fail its gates.

Usage: python3 scripts/trailing_slash_redirects.py [out_dir]
"""
import os
import sys
from pathlib import Path

ORIGIN = os.environ.get("NEXT_PUBLIC_SITE_URL") or sys.exit("NEXT_PUBLIC_SITE_URL is not set")
SKIP = {"index.html", "404.html", "_not-found.html"}
STUB = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Redirecting</title>
<link rel="canonical" href="{url}"><meta http-equiv="refresh" content="0; url={path}">
</head><body><a href="{path}">{url}</a></body></html>
"""


def write_stubs(out):
    written = []
    for page in list(out.rglob("*.html")):
        if page.name in SKIP or "_next" in page.parts:
            continue
        stub = page.with_suffix("") / "index.html"
        if stub.exists():
            continue
        path = "/" + page.relative_to(out).with_suffix("").as_posix()
        stub.parent.mkdir(exist_ok=True)
        stub.write_text(STUB.format(url=ORIGIN + path, path=path), encoding="utf-8")
        written.append(path)
    return written


if __name__ == "__main__":
    written = write_stubs(Path(sys.argv[1] if len(sys.argv) > 1 else "out"))
    print(f"{len(written)} trailing-slash redirects")
