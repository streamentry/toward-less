"""Validate the built site's base path, internal URLs, language metadata and feeds."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import os
import re
import xml.etree.ElementTree as ET

ROOT = Path("dist")
BASE = os.environ.get("BASE_PATH", "/toward-less").rstrip("/")
HOST = urlsplit(os.environ.get("SITE_URL", "https://streamentry.github.io")).netloc
errors = []

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lang = None
        self.links = []
        self.ids = set()
        self.canonical = None
        self.alternates = []
        self.noindex = False
        self.h1s = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html": self.lang = a.get("lang")
        if a.get("id"): self.ids.add(a["id"])
        if tag == "h1": self.h1s += 1
        if tag == "meta" and a.get("name") == "robots": self.noindex = "noindex" in a.get("content", "")
        if tag == "link" and a.get("rel") == "canonical": self.canonical = a.get("href")
        if tag == "link" and a.get("hreflang"): self.alternates.append((a["hreflang"], a.get("href", "")))
        for key in ("href", "src"):
            if a.get(key): self.links.append(a[key])

assert ROOT.is_dir(), "Run pnpm build first"
documents = {}
for file in ROOT.rglob("*.html"):
    doc = Document()
    doc.feed(file.read_text(encoding="utf-8"))
    documents[file] = doc

for file, doc in documents.items():
    relative = file.relative_to(ROOT).as_posix()
    if relative == "index.html": continue  # Static redirect.
    if doc.lang not in ("en", "vi"): errors.append(f"{relative}: missing/invalid html lang")
    if doc.h1s != 1: errors.append(f"{relative}: expected one h1, got {doc.h1s}")
    if not doc.canonical or not doc.canonical.startswith(f"https://{HOST}{BASE}/"):
        errors.append(f"{relative}: incorrect canonical {doc.canonical}")
    for url in doc.links:
        parsed = urlsplit(url)
        if parsed.scheme in ("mailto", "tel", "data", "javascript"): continue
        if parsed.netloc and parsed.netloc != HOST: continue
        if not parsed.path:
            if parsed.fragment and unquote(parsed.fragment) not in doc.ids: errors.append(f"{relative}: missing anchor {url}")
            continue
        if not parsed.path.startswith(BASE + "/"):
            errors.append(f"{relative}: URL escapes base path: {url}")
            continue
        target = ROOT / unquote(parsed.path[len(BASE):].lstrip("/"))
        if target.is_dir(): target = target / "index.html"
        if not target.exists(): errors.append(f"{relative}: broken local URL: {url}")
    for lang, url in doc.alternates:
        path = urlsplit(url).path
        if lang in ("en", "vi") and f"{BASE}/{lang}/" not in path: errors.append(f"{relative}: incorrect hreflang {lang}: {url}")

for lang in ("en", "vi"):
    for route in ("index.html", "about/index.html", "posts/index.html", "search/index.html", "tags/index.html", "rss.xml"):
        if not (ROOT / lang / route).is_file(): errors.append(f"Missing {lang}/{route}")
    feed = ET.parse(ROOT / lang / "rss.xml").getroot()
    if feed.findtext("./channel/language") != lang: errors.append(f"Wrong RSS language: {lang}")
    for item in feed.findall("./channel/item"):
        if f"{BASE}/{lang}/posts/" not in item.findtext("link", ""): errors.append(f"Wrong RSS item language/base: {lang}")
    for route in ("search/index.html", "style-guide/index.html"):
        if not documents[ROOT / lang / route].noindex: errors.append(f"Missing noindex: {lang}/{route}")

for asset in ("favicon.svg", "og.png", "pagefind/pagefind.js", "pagefind/pagefind-ui.js", "pagefind/pagefind-ui.css", "sitemap-index.xml", "robots.txt"):
    if not (ROOT / asset).is_file(): errors.append(f"Missing asset: {asset}")
for sitemap in ROOT.glob("sitemap*.xml"):
    text = sitemap.read_text(encoding="utf-8")
    if "/search/" in text or "/style-guide/" in text: errors.append(f"Non-public reference page in {sitemap.name}")
for html in ROOT.rglob("*.html"):
    if "NEVER_PUBLISH_THIS" in html.read_text(encoding="utf-8"): errors.append(f"Draft/future fixture leaked: {html}")

# Check the current drafts, rather than depending on a permanently published sample.
# These fields use the single-line front matter format documented in WRITING.md.
draft_paths = []
for source in Path("src/content/posts").rglob("*"):
    if source.suffix not in (".md", ".mdx"): continue
    front = re.match(r"\A---\s*\n(.*?)\n---(?:\n|$)", source.read_text(encoding="utf-8"), re.S)
    if not front or not re.search(r"^draft:\s*true\s*(?:#.*)?$", front[1], re.M): continue
    lang = re.search(r"^lang:\s*['\"]?(en|vi)['\"]?\s*$", front[1], re.M)
    slug = re.search(r"^slug:\s*['\"]?([a-z][a-z0-9-]*)['\"]?\s*$", front[1], re.M)
    if not lang or not slug:
        errors.append(f"Draft metadata could not be checked: {source}")
        continue
    route = f"/{lang[1]}/posts/{slug[1]}/"
    draft_paths.append(route)
    if (ROOT / route.lstrip("/") / "index.html").exists():
        errors.append(f"Draft has a public page: {source}")

for output in ROOT.rglob("*"):
    if output.suffix not in (".html", ".xml"): continue
    text = output.read_text(encoding="utf-8")
    for route in draft_paths:
        if route in text: errors.append(f"Draft URL leaked into {output}: {route}")

if errors:
    raise SystemExit("Site validation failed:\n" + "\n".join(errors))
print(f"PASS: {len(documents)} HTML documents; local links, base paths, canonical/hreflang, feeds, assets and noindex verified. {len(draft_paths)} draft URLs excluded from pages, links, feeds and sitemaps.")
