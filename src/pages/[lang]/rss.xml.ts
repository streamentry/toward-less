import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postPath } from "../../lib/posts";
import { languages, ui, type Lang } from "../../i18n";
export function getStaticPaths() { return languages.map(lang => ({ params: { lang } })); }
export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const posts = await getPosts(lang);
  return rss({ title: `Toward Less · ${ui[lang].language}`, description: ui[lang].intro, site: context.site!, items: posts.map(post => ({ title: post.data.title, pubDate: post.data.pubDatetime, description: post.data.description, link: postPath(post) })), customData: `<language>${lang}</language>`, trailingSlash: false });
}
