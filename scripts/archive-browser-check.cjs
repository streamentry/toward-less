const { chromium } = require(process.env.QA_MODULES + "/playwright");
const AxeBuilder = require(process.env.QA_MODULES + "/@axe-core/playwright").default;
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = "http://127.0.0.1:4321" + (process.env.BASE_PATH || "/toward-less").replace(/\/$/, "");
const slugs = ["chu-nghia-toi-gian", "thoi-gian-ben-con-truoc-tuoi-12"];
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ colorScheme: "light", reducedMotion: "reduce" });
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const slug of slugs) {
        const response = await page.goto(`${base}/vi/posts/${slug}/`);
        assert.equal(response.status(), 200);
        await page.evaluate(() => document.fonts.ready);
        assert.equal(await page.locator("h1").count(), 1);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Overflow: ${slug} at ${width}`);
        const report = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        assert.equal(report.violations.length, 0, JSON.stringify(report.violations.map(v => v.id)));
        if (width === 390) await page.screenshot({ path: `test-results/archive-${slug}-390.png`, fullPage: true });
      }
    }
    await page.goto(`${base}/vi/search/`);
    await page.locator(".pagefind-ui__search-input").fill("75%");
    await page.locator('.pagefind-ui__result-link[href*="thoi-gian-ben-con-truoc-tuoi-12"]').first().waitFor({ state: "visible" });
    fs.writeFileSync("test-results/archive-report.json", JSON.stringify({ slugs, widths: [320, 390, 1440], checks: ["HTTP 200", "single heading", "no overflow", "axe WCAG A/AA", "article search"], failures: [] }, null, 2));
    console.log("PASS: both archive articles render accessibly at mobile and desktop widths; imported content is searchable.");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });
