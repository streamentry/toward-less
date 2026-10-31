const { chromium } = require(process.env.QA_MODULES + "/playwright");
const AxeBuilder = require(process.env.QA_MODULES + "/@axe-core/playwright").default;
const assert = require("node:assert/strict");
const fs = require("node:fs");
const origin = "http://127.0.0.1:4321";
const prefix = (process.env.BASE_PATH || "/toward-less").replace(/\/$/, "");
const base = origin + prefix;
const pairs = [
  { en: "what-is-minimalism", vi: "chu-nghia-toi-gian" },
  { en: "time-with-kids-before-age-12", vi: "thoi-gian-ben-con-truoc-tuoi-12" },
];
const languages = ["en", "vi"];
const routes = pairs.flatMap(pair => languages.map(lang => `/${lang}/posts/${pair[lang]}/`));
(async () => {
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ colorScheme: "light", reducedMotion: "reduce" });
    const page = await context.newPage();
    fs.mkdirSync("test-results", { recursive: true });
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of routes) {
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator("h1").count(), 1, route);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Overflow: ${route} at ${width}`);
        const report = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        assert.equal(report.violations.length, 0, `${route}: ${JSON.stringify(report.violations.map(v => v.id))}`);
        if (width === 390) await page.screenshot({ path: `test-results/archive-${route.split("/").filter(Boolean).join("-")}-390.png`, fullPage: true });
      }
    }

    // Both the header and article-level translation links must open the exact counterpart.
    for (const pair of pairs) {
      for (const lang of languages) {
        const other = lang === "en" ? "vi" : "en";
        const current = `/${lang}/posts/${pair[lang]}/`;
        const expected = `${prefix}/${other}/posts/${pair[other]}/`;
        await page.goto(base + current);
        assert.equal(await page.locator("[data-language-switch]").getAttribute("href"), expected, current);
        assert.equal(await page.locator(".translation-note a").getAttribute("href"), expected, current);
        await page.locator("[data-language-switch]").click();
        assert.equal(new URL(page.url()).pathname, expected, current);
        assert.equal(await page.locator("html").getAttribute("lang"), other, current);
      }
    }

    for (const [lang, query, slug] of [
      ["en", "minimalism", pairs[0].en],
      ["en", "75%", pairs[1].en],
      ["vi", "t\u1ed1i gi\u1ea3n", pairs[0].vi],
      ["vi", "75%", pairs[1].vi],
    ]) {
      await page.goto(`${base}/${lang}/search/`);
      await page.locator(".pagefind-ui__search-input").fill(query);
      await page.locator(`.pagefind-ui__result-link[href*="/${lang}/posts/${slug}"]`).first().waitFor({ state: "visible" });
      const links = await page.locator(".pagefind-ui__result-link").evaluateAll(nodes => nodes.map(node => node.getAttribute("href")));
      for (const href of links) assert(new URL(href, origin).pathname.startsWith(`${prefix}/${lang}/`), `Wrong-language search result: ${href}`);
    }

    const noJS = await browser.newContext({ javaScriptEnabled: false });
    const plain = await noJS.newPage();
    for (const route of routes) {
      const response = await plain.goto(base + route);
      assert.equal(response.status(), 200, route);
      assert(await plain.locator(".prose").isVisible(), `Content requires JavaScript: ${route}`);
      assert(await plain.locator(".translation-note a").isVisible(), `Translation link requires JavaScript: ${route}`);
    }
    await noJS.close();
    fs.writeFileSync("test-results/archive-report.json", JSON.stringify({ pairs, routes, widths: [320, 390, 1440], checks: ["HTTP 200", "single heading", "no overflow", "axe WCAG A/AA", "reciprocal article translations", "bilingual article search", "no-JavaScript reading"], failures: [] }, null, 2));
    console.log("PASS: both archive articles in both languages render accessibly at mobile and desktop widths, switch to the exact translation, and are searchable without cross-language results.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });
