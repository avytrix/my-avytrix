#!/usr/bin/env python3
"""SEO/AEO gates (seo_and_aeo_engineering_standard.md, section 8) over the static export.

Usage: python3 scripts/seo_check.py [out_dir]   (exits 1 on any failure)
"""
import json
import os
import re
import sys
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ORIGIN = os.environ.get("NEXT_PUBLIC_SITE_URL") or sys.exit("NEXT_PUBLIC_SITE_URL is not set")
GENERIC_ANCHORS = {"click here", "here", "read more", "link", "more", "learn more"}
ROBOTS_INDEX = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.meta = {}
        self.canonical = None
        self.lang = None
        self.ld = []
        self.headings = []
        self.imgs = []
        self.anchors = []
        self.text = []
        self._stack = []  # tags whose text we're collecting
        self._buf = defaultdict(str)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        elif tag == "meta":
            key = a.get("name") or a.get("property")
            if key:
                self.meta[key] = a.get("content", "")
        elif tag == "link" and a.get("rel") == "canonical":
            self.canonical = a.get("href")
        elif tag == "img":
            self.imgs.append(a)
        elif tag == "script" and a.get("type") == "application/ld+json":
            self._stack.append("ld")
        elif tag in ("script", "style", "title") or re.fullmatch(r"h[1-6]|a", tag):
            self._stack.append(tag)
            if tag == "a":
                self._buf["a_label"] = a.get("aria-label", "")

    def handle_endtag(self, tag):
        if not self._stack:
            return
        top = self._stack[-1]
        if top == "ld" and tag == "script":
            self.ld.append(self._buf.pop("ld", ""))
        elif top != tag:
            return
        elif tag == "title":
            self.title = self._buf.pop("title", "").strip()
        elif tag == "a":
            self.anchors.append((self._buf.pop("a", "").strip() or self._buf.get("a_label", "")).strip())
        elif tag.startswith("h"):
            self.headings.append(int(tag[1]))
        self._buf.pop(tag, None)
        self._stack.pop()

    def handle_data(self, data):
        top = self._stack[-1] if self._stack else None
        if top in ("script", "style"):
            return
        if top:
            self._buf[top] += data
        if top != "ld" and top != "title":
            self.text.append(data)



# Arial 14px advance widths: how Google and SEO tools truncate snippets (~1000px). Unknown chars count as 'M'.
ARIAL14 = {' ': 3.89, '!': 3.89, '"': 4.97, '#': 7.78, '$': 7.78, '%': 12.45, '&': 9.34, "'": 2.67, '(': 4.66, ')': 4.66, '*': 5.45, '+': 8.17, ',': 3.89, '-': 4.66, '.': 3.89, '/': 3.89, '0': 7.78, '1': 7.78, '2': 7.78, '3': 7.78, '4': 7.78, '5': 7.78, '6': 7.78, '7': 7.78, '8': 7.78, '9': 7.78, ':': 3.89, ';': 3.89, '<': 8.17, '=': 8.17, '>': 8.17, '?': 7.78, '@': 14.22, 'A': 9.34, 'B': 9.34, 'C': 10.11, 'D': 10.11, 'E': 9.34, 'F': 8.55, 'G': 10.89, 'H': 10.11, 'I': 3.89, 'J': 7.0, 'K': 9.34, 'L': 7.78, 'M': 11.66, 'N': 10.11, 'O': 10.89, 'P': 9.34, 'Q': 10.89, 'R': 10.11, 'S': 9.34, 'T': 8.55, 'U': 10.11, 'V': 9.34, 'W': 13.22, 'X': 9.34, 'Y': 9.34, 'Z': 8.55, '[': 3.89, '\\': 3.89, ']': 3.89, '^': 6.56, '_': 7.78, '`': 4.66, 'a': 7.78, 'b': 7.78, 'c': 7.0, 'd': 7.78, 'e': 7.78, 'f': 3.89, 'g': 7.78, 'h': 7.78, 'i': 3.11, 'j': 3.11, 'k': 7.0, 'l': 3.11, 'm': 11.66, 'n': 7.78, 'o': 7.78, 'p': 7.78, 'q': 7.78, 'r': 4.66, 's': 7.0, 't': 3.89, 'u': 7.78, 'v': 7.0, 'w': 10.11, 'x': 7.0, 'y': 7.0, 'z': 7.0, '{': 4.67, '|': 3.64, '}': 4.67, '~': 8.17}


def desc_px(text):
    return sum(ARIAL14.get(c, ARIAL14['M']) for c in text)

def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def url_for(out, path):
    rel = path.relative_to(out).with_suffix("").as_posix()
    rel = "" if rel == "index" else rel
    return f"{ORIGIN}/{rel}".rstrip("/") or ORIGIN


def check(out):
    errors = []
    pages = {}
    for f in sorted(out.rglob("*.html")):
        if f.name in ("404.html", "_not-found.html") or "_next" in f.parts:
            continue
        p = Page()
        p.feed(f.read_text(encoding="utf-8"))
        pages[url_for(out, f)] = p

    seen = defaultdict(lambda: defaultdict(list))
    for url, p in pages.items():
        e = lambda msg: errors.append(f"{url}: {msg}")
        robots = p.meta.get("robots", "")
        indexable = "noindex" not in robots

        # Title / description
        if not p.title or len(p.title) > 60:
            e(f"title length {len(p.title)} (max 60): {p.title!r}")
        desc = p.meta.get("description", "")
        if not 120 <= len(desc) <= 160:
            e(f"description length {len(desc)} (120-160)")
        if (px := desc_px(desc)) > 990:
            e(f"description too wide for search results: {px:.0f}px (max 990, Arial 14px)")
        # Canonical
        c = p.canonical or ""
        if not c.startswith(ORIGIN):
            e(f"canonical {c!r} not on {ORIGIN}")
        elif c.rstrip("/") != url:
            e(f"canonical {c!r} is not self-referential")
        if p.meta.get("og:url") and p.meta["og:url"].rstrip("/") != c.rstrip("/"):
            e(f"og:url {p.meta['og:url']!r} != canonical")
        if indexable and set(robots.replace(' ', '').split(',')) != set(ROBOTS_INDEX.replace(' ', '').split(',')):
            e(f"robots {robots!r}")
        for key, val in (("title", p.title), ("description", desc), ("canonical", c)):
            if indexable and val:
                seen[key][val].append(url)
        # Locale
        if p.lang != "en" or p.meta.get("og:locale") != "en_US":
            e(f"locale: html lang={p.lang!r} og:locale={p.meta.get('og:locale')!r}")
        # OG image
        for k in ("og:image", "og:image:width", "og:image:height", "twitter:image"):
            if not p.meta.get(k):
                e(f"missing {k}")
        # Headings
        if p.headings.count(1) != 1:
            e(f"{p.headings.count(1)} <h1>")
        for prev, cur in zip(p.headings, p.headings[1:]):
            if cur > prev + 1:
                e(f"heading skips h{prev} -> h{cur}")
                break
        # Images
        for img in p.imgs:
            if not img.get("alt", "").strip() and img.get("aria-hidden") != "true":
                e(f"img without alt: {img.get('src', '')[:80]}")
            if not (img.get("width") and img.get("height")):
                e(f"img without width/height: {img.get('src', '')[:80]}")
        # Anchors
        for label in p.anchors:
            if norm(label).lower() in GENERIC_ANCHORS:
                e(f"generic anchor text {label!r}")
        # JSON-LD
        if len(p.ld) != 1:
            e(f"{len(p.ld)} ld+json blocks (expected 1)")
        visible = norm(" ".join(p.text))
        for raw in p.ld:
            try:
                data = json.loads(raw)
            except json.JSONDecodeError as err:
                e(f"invalid JSON-LD: {err}")
                continue
            nodes = data.get("@graph", [data])
            ids = [n["@id"] for n in nodes if "@id" in n]
            if len(ids) != len(set(ids)):
                e(f"duplicate @id in graph: {ids}")
            for n in nodes:
                if n.get("@type") == "FAQPage":
                    for q in n.get("mainEntity", []):
                        for txt in (q["name"], q["acceptedAnswer"]["text"]):
                            if norm(txt) not in visible:
                                e(f"FAQ text not visible on page: {txt[:60]!r}")
                if n.get("@type") == "BreadcrumbList" and url == ORIGIN:
                    e("home page carries a BreadcrumbList")

    for key, vals in seen.items():
        for val, urls in vals.items():
            if len(urls) > 1:
                errors.append(f"duplicate {key} {val[:60]!r} on {urls}")

    # Crawl files
    for name in ("robots.txt", "sitemap.xml", "llms.txt"):
        if not (out / name).exists():
            errors.append(f"missing /{name}")
    sm = out / "sitemap.xml"
    if sm.exists():
        locs = re.findall(r"<loc>(.*?)</loc>", sm.read_text())
        for loc in locs:
            p = pages.get(loc.rstrip("/"))
            if not p:
                errors.append(f"sitemap: {loc} has no page")
            elif "noindex" in p.meta.get("robots", ""):
                errors.append(f"sitemap: {loc} is noindex")
        missing = set(pages) - {l.rstrip("/") for l in locs}
        for url in sorted(missing):
            if "noindex" not in pages[url].meta.get("robots", ""):
                errors.append(f"sitemap: indexable {url} missing")
    robots = out / "robots.txt"
    if robots.exists() and f"Sitemap: {ORIGIN}/sitemap.xml" not in robots.read_text():
        errors.append("robots.txt does not name the absolute sitemap URL")
    llms = out / "llms.txt"
    if llms.exists():
        for link in re.findall(r"\]\((.*?)\)", llms.read_text()):
            if link.rstrip("/") not in pages:
                errors.append(f"llms.txt links to non-page {link}")

    return pages, errors


if __name__ == "__main__":
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "out")
    pages, errors = check(out)
    for err in errors:
        print("FAIL", err)
    print(f"{len(pages)} pages, {len(errors)} failures")
    sys.exit(1 if errors else 0)
