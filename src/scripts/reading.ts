/** Reader controls for article pages: text size and line length.
 * Preferences persist in localStorage ("toward-less-reading") and are
 * applied before first paint by the inline script in Layout.astro. */
const textSteps = [0.94, 1, 1.08, 1.16];
const measureSteps = [0.9, 1, 1.1];
type Saved = { t?: number; m?: number };
let saved: Saved = {};
try {
  saved = JSON.parse(localStorage.getItem("toward-less-reading") || "{}");
} catch {
  // Reading must still work when storage is unavailable.
}
let textIndex = typeof saved.t === "number" && textSteps[saved.t] !== undefined ? saved.t : 1;
let measureIndex = typeof saved.m === "number" && measureSteps[saved.m] !== undefined ? saved.m : 1;
const readingRoot = document.documentElement;
function applyReading() {
  readingRoot.style.setProperty("--reader-scale", String(textSteps[textIndex]));
  readingRoot.style.setProperty("--measure-scale", String(measureSteps[measureIndex]));
  const states: [string, boolean][] = [
    ["text-minus", textIndex === 0],
    ["text-plus", textIndex === textSteps.length - 1],
    ["measure-minus", measureIndex === 0],
    ["measure-plus", measureIndex === measureSteps.length - 1],
  ];
  for (const [action, disabled] of states) {
    const button = document.querySelector<HTMLButtonElement>(`[data-reading="${action}"]`);
    if (button) button.disabled = disabled;
  }
  try {
    localStorage.setItem("toward-less-reading", JSON.stringify({ t: textIndex, m: measureIndex }));
  } catch {
    // Reading must still work when storage is unavailable.
  }
}
for (const button of document.querySelectorAll<HTMLButtonElement>("[data-reading]")) {
  button.addEventListener("click", () => {
    const action = button.dataset.reading;
    if (action === "text-minus") textIndex = Math.max(0, textIndex - 1);
    else if (action === "text-plus") textIndex = Math.min(textSteps.length - 1, textIndex + 1);
    else if (action === "measure-minus") measureIndex = Math.max(0, measureIndex - 1);
    else if (action === "measure-plus")
      measureIndex = Math.min(measureSteps.length - 1, measureIndex + 1);
    applyReading();
  });
}
applyReading();
