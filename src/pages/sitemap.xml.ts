import type { APIRoute } from "astro";
import { getPosts, postPath } from "../lib/posts";

const xmlEscape = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const translations = new Map<string, typeof posts>();
  for (const post of posts) {
    const group = translations.get(post.data.translationKey) ?? [];
    group.push(post);
    translations.set(post.data.translationKey, group);
  }

  const urls = posts.map((post) => {
    const location = new URL(postPath(post), site!).href;
    const lastmod = (post.data.modDatetime ?? post.data.pubDatetime).toISOString();
    const alternates = (translations.get(post.data.translationKey) ?? [])
      .map(
        (translation) =>
          `    <xhtml:link rel="alternate" hreflang="${translation.data.lang}" href="${xmlEscape(new URL(postPath(translation), site!).href)}" />`,
      )
      .join("\n");

    return `  <url>\n    <loc>${xmlEscape(location)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`;
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
