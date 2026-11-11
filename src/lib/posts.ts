import { getCollection, type CollectionEntry } from "astro:content";
import { localePath, languageTags, type Lang } from "../i18n";
export type Post = CollectionEntry<"posts">;

/** Entries per archive page; the home page shows the first page. */
export const PAGE_SIZE = 8;

/** Only published, due content may reach HTML, RSS, search or translation links. */
export async function getPosts(lang?: Lang): Promise<Post[]> {
  const now = Date.now();
  const posts = await getCollection(
    "posts",
    ({ data }) => !data.draft && data.pubDatetime.getTime() <= now,
  );
  const slugs = new Set<string>();
  const translations = new Set<string>();
  for (const post of posts) {
    const slug = `${post.data.lang}/${post.data.slug}`;
    const key = `${post.data.lang}/${post.data.translationKey}`;
    if (slugs.has(slug)) throw new Error(`Duplicate published post URL: ${slug}`);
    if (translations.has(key)) throw new Error(`Duplicate translation key in one language: ${key}`);
    slugs.add(slug);
    translations.add(key);
  }
  return posts
    .filter((post) => !lang || post.data.lang === lang)
    .sort(
      (a, b) =>
        b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime() || a.id.localeCompare(b.id),
    );
}

export const postPath = (post: Post) => localePath(post.data.lang, `posts/${post.data.slug}/`);
export const dateLabel = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(languageTags[lang], {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(date);
export const readingMinutes = (post: Post) => {
  const body = (post.body ?? "").trim();
  const lang = post.data.lang;
  if (["zh", "ja", "th"].includes(lang)) {
    const count = [...body.replace(/\s/g, "")].length;
    return Math.max(1, Math.ceil(count / (lang === "th" ? 600 : 500)));
  }
  return Math.max(1, Math.ceil(body.split(/\s+/).length / (lang === "vi" ? 320 : 220)));
};

/**
 * Entry numbers are real: the oldest published post in a language is 1.
 * Shown as a notebook index ("014"); decorative, so templates hide it from
 * assistive technology.
 */
export async function entryNumbers(lang: Lang): Promise<Map<string, string>> {
  const posts = await getPosts(lang);
  const format = new Intl.NumberFormat(languageTags[lang], {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  return new Map(posts.map((post, index) => [post.id, format.format(posts.length - index)]));
}
