"""Separately built sites copied into the export, such as the docs under out/opensource/<slug>/.

A folder below the export root that has its own sitemap.xml is another app: its own repository
builds it, runs its own SEO gate and handles its own URLs, so this site's scripts leave it alone.
"""
from pathlib import Path


def nested_sites(out: Path) -> list[Path]:
    return sorted(s.parent for s in out.rglob("sitemap.xml") if s.parent != out and "_next" not in s.parts)


# <site>.html is the site's index copied next to its folder, so GitHub Pages serves /<site> without a redirect
def in_nested_site(path: Path, sites: list[Path]) -> bool:
    return any(path.is_relative_to(site) or path == site.with_suffix(".html") for site in sites)
