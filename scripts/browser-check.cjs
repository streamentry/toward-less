/* CI-only browser checks. Dependencies live in RUNNER_TEMP, not the site's bundle. */
const { chromium } = require(process.env.QA_MODULES + '/playwright');
const AxeBuilder = require(process.env.QA_MODULES + '/@axe-core/playwright').default;
const fs = require('node:fs');
const assert = require('node:assert/strict');
const origin = 'http://127.0.0.1:4321';
const base = (process.env.BASE_PATH || '/toward-less').replace(/\/$/, '');
fs.mkdirSync('test-results', { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ colorScheme: 'light', reducedMotion: 'reduce' });
  const page = await context.newPage();
  const failures = [];
  const routes = ['/en/', '/vi/', '/en/posts/a-direction-not-an-arrival/', '/vi/posts/mot-huong-di/', '/vi/style-guide/', '/en/about/'];
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: width > 700 ? 1000 : 844 });
    for (const route of routes) {
      const response = await page.goto(origin + base + route);
      assert.equal(response.status(), 200, route);
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (overflow) failures.push(`Horizontal overflow at ${width}: ${route}`);
      if (width === 390 || width === 1440) {
        const report = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        for (const violation of report.violations) failures.push(`${width} ${route}: ${violation.id} (${violation.nodes.length} nodes)`);
      }
      if ((route === '/en/' || route === '/vi/' || route === '/vi/posts/mot-huong-di/') && width !== 320) {
        await page.screenshot({ path: `test-results/${route.split('/').filter(Boolean).join('-')}-${width}.png`, fullPage: true });
      }
    }
  }
  await page.goto(origin + base + '/en/posts/a-direction-not-an-arrival/');
  assert.equal(await page.locator('[data-language-switch]').getAttribute('href'), base + '/vi/posts/mot-huong-di/');
  await page.locator('[data-language-switch]').click();
  assert.equal(await page.locator('html').getAttribute('lang'), 'vi');
  await page.locator('#theme-toggle').click(); // System -> Light.
  await page.locator('#theme-toggle').click(); // Light -> Dark.
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  const darkReport = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  for (const violation of darkReport.violations) failures.push(`Dark article: ${violation.id}`);
  await page.screenshot({ path: 'test-results/vietnamese-article-dark.png', fullPage: true });
  for (const [lang, query] of [['en', 'clinging'], ['vi', 'hướng']]) {
    await page.goto(origin + base + `/${lang}/search/`);
    await page.locator('.pagefind-ui__search-input').fill(query);
    await page.locator('.pagefind-ui__result-link').first().waitFor({ state: 'visible', timeout: 15000 });
    const links = await page.locator('.pagefind-ui__result-link').evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
    assert(links.length > 0, `No ${lang} search results`);
    for (const href of links) assert(href.includes(`/${lang}/posts/`), `Wrong-language search result: ${href}`);
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const simple = await noJS.newPage();
  await simple.goto(origin + base + '/vi/posts/mot-huong-di/');
  assert(await simple.locator('h1').isVisible(), 'Article must work without JavaScript');
  await noJS.close();
  fs.writeFileSync('test-results/report.json', JSON.stringify({ testedWidths: [320, 390, 1440], routes, checks: ['overflow', 'axe WCAG A/AA', 'translation routing', 'theme persistence', 'bilingual search', 'no-JavaScript reading'], failures }, null, 2));
  await browser.close();
  if (failures.length) throw new Error(failures.join('\n'));
  console.log('PASS: browser layout, accessibility, translation, themes, multilingual search and no-JavaScript reading.');
})().catch(error => { console.error(error); process.exit(1); });
