"""Check the imported posts' dates, attribution and the public author identity."""
from html.parser import HTMLParser
from pathlib import Path
from datetime import timezone, timedelta
from email.utils import parsedate_to_datetime
from urllib.parse import urlsplit
import json
import xml.etree.ElementTree as ET

ROOT = Path("dist")
OWNER = "C.S Ch\u00e1nh Ni\u1ec7m"

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.author = None
        self.h1s = 0
        self.json_ld = []
        self.capture = False
        self.buffer = []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "h1": self.h1s += 1
        if tag == "meta" and attrs.get("name") == "author": self.author = attrs.get("content")
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
    ("chu-nghia-toi-gian", "2022-07-03", "The Minimalists", "Organization", "https://www.theminimalists.com/minimalism/"),
    ("thoi-gian-ben-con-truoc-tuoi-12", "2022-10-19", "Ginny Yurich", "Person", "https://www.1000hoursoutside.com/blog/time-with-kids-before-age-12"),
]
feed = ET.parse(ROOT / "vi/rss.xml").getroot()
for slug, date, author, author_type, source in expected:
    text = (ROOT / "vi/posts" / slug / "index.html").read_text(encoding="utf-8")
    page = Page(text)
    assert page.h1s == 1, f"Duplicate article heading: {slug}"
    assert page.author == author, f"Wrong source author: {slug}"
    data = next(item for item in page.json_ld if item.get("@type") == "BlogPosting")
    assert data["author"] == {"@type": author_type, "name": author}, slug
    assert data["publisher"]["name"] == OWNER, slug
    assert data["isBasedOn"] == source, slug
    assert source in text, f"Missing source link: {slug}"
    assert not (ROOT / "en/posts" / slug / "index.html").exists(), f"Invented English translation: {slug}"
    matches = [item for item in feed.findall("./channel/item") if urlsplit(item.findtext("link", "")).path.rstrip("/").endswith(f"/vi/posts/{slug}")]
    assert len(matches) == 1, f"Expected exactly one RSS item for {slug}, got {len(matches)}"
    published = parsedate_to_datetime(matches[0].findtext("pubDate")).astimezone(timezone(timedelta(hours=7)))
    assert published.date().isoformat() == date, f"Original date lost: {slug}"

child_post = (ROOT / "vi/posts/thoi-gian-ben-con-truoc-tuoi-12/index.html").read_text(encoding="utf-8")
assert "75%" in child_post and "kh\u00f4ng d\u1eabn nghi\u00ean c\u1ee9u" in child_post, "Missing source-claim qualification"
print("PASS: public author identity, both archived posts, original dates, attribution, source links and claim qualification.")
