"""Check both archive languages, reciprocal translations, dates and attribution."""
from html.parser import HTMLParser
from pathlib import Path
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from urllib.parse import urlsplit
import json
import os
import xml.etree.ElementTree as ET

ROOT = Path("dist")
BASE = os.environ.get("BASE_PATH", "/toward-less").rstrip("/")
OWNER = "C.S Ch\u00e1nh Ni\u1ec7m"
LOCAL_TIME = timezone(timedelta(hours=7))

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.author = None
        self.h1s = 0
        self.json_ld = []
        self.alternates = {}
        self.language_switch = None
        self.lang = None
        self.capture = False
        self.buffer = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html": self.lang = attrs.get("lang")
        if tag == "h1": self.h1s += 1
        if tag == "meta" and attrs.get("name") == "author":
            self.author = attrs.get("content")
        if tag == "link" and attrs.get("hreflang"):
            self.alternates[attrs["hreflang"]] = attrs.get("href", "")
        if tag == "a" and "data-language-switch" in attrs:
            self.language_switch = attrs.get("href", "")
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.capture = True
            self.buffer = []

    def handle_data(self, data):
        if self.capture: self.buffer.append(data)

    def handle_endtag(self, tag):
        if tag == "script" and self.capture:
            self.json_ld.append(json.loads("".join(self.buffer)))
            self.capture = False

for lang in ("en", "vi"):
    for route in ("index.html", "about/index.html"):
        text = (ROOT / lang / route).read_text(encoding="utf-8")
        assert Page(text).author == OWNER, f"Incorrect owner metadata on {lang}/{route}"
        assert OWNER in text, f"Missing owner identity on {lang}/{route}"

expected = [
    ({"vi": "chu-nghia-toi-gian", "en": "what-is-minimalism"}, "2022-07-03", "The Minimalists", "Organization", "https://www.theminimalists.com/minimalism/"),
    ({"vi": "thoi-gian-ben-con-truoc-tuoi-12", "en": "time-with-kids-before-age-12"}, "2022-10-19", "Ginny Yurich", "Person", "https://www.1000hoursoutside.com/blog/time-with-kids-before-age-12"),
]
feeds = {lang: ET.parse(ROOT / lang / "rss.xml").getroot() for lang in ("en", "vi")}
sitemap_text = "\n".join(path.read_text(encoding="utf-8") for path in ROOT.glob("sitemap*.xml"))
for slugs, date, author, author_type, source in expected:
    for lang, slug in slugs.items():
        route = f"{BASE}/{lang}/posts/{slug}/"
        other = "en" if lang == "vi" else "vi"
        other_route = f"{BASE}/{other}/posts/{slugs[other]}/"
        text = (ROOT / lang / "posts" / slug / "index.html").read_text(encoding="utf-8")
        page = Page(text)
        assert page.lang == lang, f"Wrong document language: {route}"
        assert page.h1s == 1, f"Duplicate article heading: {route}"
        assert page.author == author, f"Wrong source author: {route}"
        data = next(item for item in page.json_ld if item.get("@type") == "BlogPosting")
        assert data["author"] == {"@type": author_type, "name": author}, route
        assert data["publisher"]["name"] == OWNER, route
        assert data["isBasedOn"] == source, route
        assert data["inLanguage"] == lang, route
        published_metadata = datetime.fromisoformat(data["datePublished"].replace("Z", "+00:00"))
        assert published_metadata.astimezone(LOCAL_TIME).date().isoformat() == date, route
        assert source in text, f"Missing source link: {route}"
        assert page.language_switch == other_route, f"Language switch must open the counterpart: {route}"
        for alternate_lang, alternate_slug in slugs.items():
            target = f"{BASE}/{alternate_lang}/posts/{alternate_slug}/"
            assert urlsplit(page.alternates.get(alternate_lang, "")).path == target, f"Wrong hreflang for {route}: {alternate_lang}"
        assert route in sitemap_text, f"Archive missing from sitemap: {route}"
        matches = [item for item in feeds[lang].findall("./channel/item")
                   if urlsplit(item.findtext("link", "")).path.rstrip("/") == route.rstrip("/")]
        assert len(matches) == 1, f"Expected exactly one RSS item for {route}, got {len(matches)}"
        published = parsedate_to_datetime(matches[0].findtext("pubDate")).astimezone(LOCAL_TIME)
        assert published.date().isoformat() == date, f"Original archive date lost: {route}"
        if lang == "en":
            assert "prepared on 31 October 2026" in text, f"Missing English translation date: {route}"
            assert "not a verbatim copy" in text, f"Missing translation provenance: {route}"

for lang, slug, qualification in [
    ("vi", "thoi-gian-ben-con-truoc-tuoi-12", "kh\u00f4ng d\u1eabn nghi\u00ean c\u1ee9u"),
    ("en", "time-with-kids-before-age-12", "does not cite a study"),
]:
    text = (ROOT / lang / "posts" / slug / "index.html").read_text(encoding="utf-8")
    assert "75%" in text and qualification in text, f"Missing source-claim qualification: {lang}"

print("PASS: both articles in English and Vietnamese; reciprocal translations, hreflang, RSS, sitemap, original dates, owner identity, attribution and claim qualifications.")
