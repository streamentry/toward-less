/* CI-only checks. Dependencies live in RUNNER_TEMP, not the site's bundle. */
const { chromium } = require(process.env.QA_MODULES + "/playwright");
const AxeBuilder = require(process.env.QA_MODULES + "/@axe-core/playwright").default;
const fs = require("node:fs");
const assert = require("node:assert/strict");
const origin = "http://127.0.0.1:4321";
const base = (process.env.BASE_PATH || "/toward-less").replace(/\/$/, "");
const languages = ["en", "vi"];
fs.mkdirSync("test-results", { recursive: true });

// Discover real published posts; tests must not require publishing starter copy.
const published = Object.fromEntries(languages.map((lang) => {
  const directory = `dist/${lang}/posts`;
  const routes = fs.existsSync(directory)
    ? fs.readdirSync(directory, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && /^[a-z]/.test(entry.name))
        .filter((entry) => fs.existsSync(`${directory}/${entry.name}/index.html`))
        .map((entry) => `/${lang}/posts/${entry.name}/`)
    : [];
  return [lang, routes];
}));
const sampleArticles = languages.flatMap((lang) => published[lang].slice(0, 1));
const routes = [
  "/en/", "/vi/",
  "/en/about/", "/vi/about/",
  "/en/posts/", "/vi/posts/",
  "/en/search/", "/vi/search/",
  "/vi/style-guide/",
  ...sampleArticles,
];

(async () => {
  const browser = await chromium.launch();
  try {
    // Root chooses the first supported browser language, unless the reader explicitly chose one before.
    for (const [locale, expected] of [["vi-VN", "vi"], ["en-US", "en"]]) {
      const rootContext = await browser.newContext({ locale });
      const rootPage = await rootContext.newPage();
      await rootPage.goto(origin + base + "/");
      await rootPage.waitForURL(origin + base + `/${expected}/`);
      await rootContext.close();
    }

    const orderedContext = await browser.newContext({ locale: "en-US" });
    const orderedPage = await orderedContext.newPage();
    await orderedPage.goto(origin + base + "/");
    await orderedPage.waitForURL(origin + base + "/en/");
    await orderedContext.close();

    const overrideContext = await browser.newContext({ locale: "en-US" });
    await overrideContext.addInitScript(() => localStorage.setItem("toward-less-language", "vi"));
    const overridePage = await overrideContext.newPage();
    await overridePage.goto(origin + base + "/");
    await overridePage.waitForURL(origin + base + "/vi/");
    await overrideContext.close();

    const explicitContext = await browser.newContext({ locale: "vi-VN" });
    const explicitPage = await explicitContext.newPage();
    await explicitPage.goto(origin + base + "/en/");
    assert.equal(new URL(explicitPage.url()).pathname, base + "/en/");
    await explicitContext.close();

    const context = await browser.newContext({ colorScheme: "light", reducedMotion: "reduce" });
    const page = await context.newPage();
    const failures = [];
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: width > 700 ? 1000 : 844 });
      for (const route of routes) {
        const response = await page.goto(origin + base + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        if (route.includes("/search/"))
          await page.locator(".pagefind-ui__search-input").waitFor({ state: "visible" });
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth + 1,
        );
        if (overflow) failures.push(`Horizontal overflow at ${width}: ${route}`);
        if (width === 390 || width === 1440) {
          const report = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze();
          for (const violation of report.violations)
            failures.push(`${width} ${route}: ${violation.id} (${violation.nodes.length} nodes)`);
        }
        if (["/en/", "/vi/", "/vi/about/"].includes(route) && width !== 320) {
          await page.screenshot({
            path: `test-results/${route.split("/").filter(Boolean).join("-")}-${width}.png`,
            fullPage: true,
          });
        }
      }
    }

    // Empty archives are a supported publishing state, not a reason to publish filler.
    const emptyLanguages = languages.filter((lang) => published[lang].length === 0);
    for (const lang of emptyLanguages) {
      for (const suffix of ["", "posts/"]) {
        await page.goto(origin + base + `/${lang}/${suffix}`);
        assert.equal(
          (await page.locator(".empty").innerText()).trim(),
          lang === "vi" ? "Chưa có bài viết." : "No articles yet.",
        );
        assert.equal(await page.locator(".post-list").count(), 0);
      }
    }

    // About is always published; verify language switching even with no articles.
    await page.goto(origin + base + "/en/about/");
    assert.equal(
      await page.locator("[data-language-switch]").getAttribute("href"),
      base + "/vi/about/",
    );
    await page.locator("[data-language-switch]").click();
    assert.equal(await page.locator("html").getAttribute("lang"), "vi");
    assert.equal(
      await page.evaluate(() => localStorage.getItem("toward-less-language")),
      "vi",
      "Explicit language switch should persist the reader's choice",
    );
    await page.goto(origin + base + "/");
    await page.waitForURL(origin + base + "/vi/");
    await page.locator("#theme-toggle").click(); // System -> Light.
    await page.locator("#theme-toggle").click(); // Light -> Dark.
    assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
    const darkReport = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    for (const violation of darkReport.violations) failures.push(`Dark About: ${violation.id}`);
    await page.screenshot({ path: "test-results/vietnamese-about-dark.png", fullPage: true });

    // Exercise article language links when articles exist, without hard-coded titles or slugs.
    const articleChecks = [];
    for (const route of sampleArticles) {
      await page.goto(origin + base + route);
      const lang = route.split("/")[1];
      const other = lang === "en" ? "vi" : "en";
      const href = await page.locator("[data-language-switch]").getAttribute("href");
      assert(href.startsWith(`${base}/${other}/`), `Incorrect language link on ${route}`);
      const response = await page.goto(new URL(href, origin).href);
      assert.equal(response.status(), 200, `Broken translation link on ${route}`);
      assert.equal(await page.locator("html").getAttribute("lang"), other);
      articleChecks.push({ route, alternate: href });
    }

    // Search includes the About page, so it also works before the first article.
    for (const [lang, query] of [["en", "software"], ["vi", "phần mềm"]]) {
      await page.goto(origin + base + `/${lang}/search/`);
      await page.locator(".pagefind-ui__search-input").fill(query);
      await page.locator(".pagefind-ui__result-link").first()
        .waitFor({ state: "visible", timeout: 15000 });
      const links = await page.locator(".pagefind-ui__result-link")
        .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")));
      assert(links.length > 0, `No ${lang} search results`);
      for (const href of links)
        assert(new URL(href, origin).pathname.startsWith(`${base}/${lang}/`),
          `Wrong-language search result: ${href}`);
      assert(links.some((href) => new URL(href, origin).pathname === `${base}/${lang}/about/`),
        `About page missing from ${lang} search`);
    }

    const noJS = await browser.newContext({ javaScriptEnabled: false });
    const simple = await noJS.newPage();
    const rootResponse = await simple.goto(origin + base + "/");
    assert.equal(rootResponse.status(), 200);
    assert.equal(await simple.locator('a[href="' + base + '/en/"]').count(), 1);
    assert.equal(await simple.locator('a[href="' + base + '/vi/"]').count(), 1);
    for (const route of ["/vi/about/", ...sampleArticles]) {
      const response = await simple.goto(origin + base + route);
      assert.equal(response.status(), 200, route);
      assert(await simple.locator("h1").isVisible(), `${route} must work without JavaScript`);
      assert(await simple.locator(".prose").isVisible(), `${route} must render its content`);
    }
    await noJS.close();
    fs.writeFileSync("test-results/report.json", JSON.stringify({
      testedWidths: [320, 390, 1440],
      routes,
      publishedArticleCounts: Object.fromEntries(languages.map((lang) => [lang, published[lang].length])),
      emptyLanguages,
      articleChecks,
      checks: ["overflow", "axe WCAG A/AA", "root language detection", "empty archives", "language switching",
        "theme persistence", "bilingual search", "no-JavaScript reading"],
      failures,
    }, null, 2));
    if (failures.length) throw new Error(failures.join("\n"));
    console.log(`PASS: layout, accessibility, languages, themes, search and no-JavaScript reading. ${sampleArticles.length} published article routes checked; ${emptyLanguages.length} empty archives checked.`);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
