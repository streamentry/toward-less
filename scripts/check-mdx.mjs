// Render a temporary MDX article into isolated output, never the deployable dist.
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import assert from "node:assert/strict";

const fixture = "src/content/posts/en/qa-mdx-smoke.mdx";
assert(!existsSync(fixture), `Refusing to overwrite ${fixture}`);
const output = mkdtempSync(join(tmpdir(), "toward-less-mdx-"));
let created = false;
try {
  writeFileSync(fixture, `---
title: "MDX smoke check"
description: "Temporary integration-test content."
lang: en
slug: qa-mdx-smoke
translationKey: qa-mdx-smoke
pubDatetime: 2020-01-01T00:00:00+07:00
draft: false
tags: [technology]
---

import Mark from "../../../components/Mark.astro";

export const answer = 6 * 7;

## Markdown heading

<div id="mdx-probe">{"MDX-" + answer}</div>

<Mark />

\`\`\`js
const value = 42;
\`\`\`
`, { flag: "wx" });
  created = true;
  const build = spawnSync("pnpm", ["exec", "astro", "build", "--outDir", output], { stdio: "inherit" });
  if (build.error) throw build.error;
  assert.equal(build.status, 0, "MDX fixture build failed");
  const html = readFileSync(join(output, "en/posts/qa-mdx-smoke/index.html"), "utf8");
  assert(html.includes("MDX-42"), "MDX expression did not render");
  assert(html.includes('id="markdown-heading"'), "Markdown heading missing");
  assert(html.includes("<pre") && html.includes("<code"), "Code block missing");
  console.log("PASS: MDX expressions, an imported Astro component, Markdown headings and code rendering.");
} finally {
  if (created) rmSync(fixture);
  rmSync(output, { recursive: true, force: true });
}
