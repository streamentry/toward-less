"""Check complete language coverage and editorial structure for published posts.

This is a structural check, not a claim of translation quality or native review.
"""
from collections import defaultdict
from pathlib import Path
import re
import sys

ROOT = Path("src/content/posts")
LANGS = {
    "en", "vi", "zh", "hi", "es", "ar", "fr", "bn", "pt", "id",
    "ur", "ja", "ko", "th", "ms", "ru", "mr", "fa",
}
ARCHIVE = {
    "minimalism-2022": ("The Minimalists", "Organization", "https://www.theminimalists.com/minimalism/"),
    "time-with-kids-before-age-12-2022": ("Ginny Yurich", "Person", "https://www.1000hoursoutside.com/blog/time-with-kids-before-age-12"),
}
errors = []
groups = defaultdict(dict)
slugs = {}

for path in sorted(ROOT.rglob("*")):
    if path.suffix not in {".md", ".mdx"}:
        continue
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\n(.*?)\n---(?:\n|$)(.*)", raw, re.S)
    if not match:
        errors.append(f"{path}: invalid or missing frontmatter")
        continue
    fields = {}
    for line in match.group(1).splitlines():
        row = re.match(r"^([A-Za-z][A-Za-z0-9]*):\s*(.*?)\s*$", line)
        if row:
            fields[row[1]] = row[2].strip().strip('"').strip("'")
    body = match.group(2)
    missing_fields = {"title", "description", "lang", "slug", "translationKey", "pubDatetime"} - fields.keys()
    if missing_fields:
        errors.append(f"{path}: missing {sorted(missing_fields)}")
        continue
    lang = fields["lang"]
    key = fields["translationKey"]
    slug = fields["slug"]
    if lang not in LANGS or path.parent.name != lang:
        errors.append(f"{path}: invalid language/directory {lang}")
    if lang in groups[key]:
        errors.append(f"{path}: duplicate translationKey {lang}/{key}")
    published = fields.get("draft", "false").lower() != "true"
    groups[key][lang] = (path, fields, body, published)
    if published:
        if slug in slugs:
            errors.append(f"{path}: global published slug {slug} also in {slugs[slug]}")
        slugs[slug] = path
    if key in ARCHIVE:
        author, author_type, url = ARCHIVE[key]
        if fields.get("author") != author or fields.get("authorType", "Person") != author_type:
            errors.append(f"{path}: archive authorship lost")
        if fields.get("sourceURL") != url or url not in body:
            errors.append(f"{path}: missing archive provenance")
    if published and key == "perfect-days-simple-life-2026":
        if len(re.findall(r"(?m)^##\s+", body)) < 4:
            errors.append(f"{path}: Perfect Days must have all four sections")
    if published and key == "dutch-play-seven-games-2026":
        if len(re.findall(r"(?m)^##\s+", body)) != 8:
            errors.append(f"{path}: seven play activities and the closing argument must all be present")
        if any(link not in body for link in (
            "unicef.org/innocenti/reports/report-card-20",
            "doi.org/10.1542/peds.2018-2058",
            "publications.aap.org/pediatrics",
            "who.int/publications/"
        )):
            errors.append(f"{path}: missing research links for the Dutch-inspired play essay")
    if published and key == "the-dig-what-remains-2026":
        if len(re.findall(r"(?m)^##\s+", body)) != 4:
            errors.append(f"{path}: The Dig must preserve all four sections")
        if any(source not in body for source in (
            "nationaltrust.org.uk/", "britishmuseum.org/", "filmsandfestivals.britishcouncil.org/"
        )):
            errors.append(f"{path}: The Dig must retain its three historical and film sources")
    if published and key == "chatgpt-tabex-90-days-2026":
        if len(re.findall(r"(?m)^##\s+", body)) != 4:
            errors.append(f"{path}: Smoking-cessation account must have four sections")
        if any(source not in body for source in (
            "who.int/news/item/", "cochrane.org/evidence/"
        )):
            errors.append(f"{path}: Missing WHO or Cochrane evidence sources")
        if "Tabex" not in body or "cytisine" not in body.lower():
            errors.append(f"{path}: Missing Tabex/cytisine treatment context")
    if published and key == "wanting-to-read-proust-2026":
        if len(re.split(r"\n\s*\n", body.strip())) < 10:
            errors.append(f"{path}: Proust must retain the full essay, not a short summary")
    if published and key == "minimalism-2022":
        if len(re.findall(r"(?m)^-\s+", body)) < 16:
            errors.append(f"{path}: minimalism archive must retain 12 benefits and 4 references")
    if published and key == "time-with-kids-before-age-12-2022":
        if len(re.findall(r"(?m)^>\s+", body)) < 2:
            errors.append(f"{path}: missing archive and disputed-number disclaimers")

published_groups = 0
for key, entries in sorted(groups.items()):
    if not any(data[3] for data in entries.values()):
        continue
    published_groups += 1
    published_languages = {lang for lang, data in entries.items() if data[3]}
    missing = LANGS - published_languages
    if missing:
        errors.append(f"{key}: published translations missing in {', '.join(sorted(missing))}")

if errors:
    raise SystemExit("Translation validation failed:\n" + "\n".join(errors))
print(
    f"PASS: {published_groups} published translation groups across {len(LANGS)} languages "
    f"({len(slugs)} published post slugs); {sum(len(x) for x in groups.values()) - len(slugs)} drafts. "
    "This verifies coverage and structure, not linguistic quality."
)
