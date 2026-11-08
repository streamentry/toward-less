const root = document.documentElement;
const toggle = document.querySelector<HTMLButtonElement>("#theme-toggle");
const media = window.matchMedia("(prefers-color-scheme: dark)");
type Preference = "auto" | "light" | "sepia" | "dark";
const order: Preference[] = ["auto", "light", "sepia", "dark"];
let preference = (root.dataset.preference || "auto") as Preference;
if (!order.includes(preference)) preference = "auto";
function apply() {
  const theme = preference === "auto" ? (media.matches ? "dark" : "light") : preference;
  root.dataset.theme = theme;
  root.dataset.preference = preference;
  if (toggle) {
    const state = toggle.dataset[preference] ?? preference;
    toggle.setAttribute("aria-label", `${toggle.dataset.label}: ${state}`);
    toggle.title = `${toggle.dataset.label}: ${state}`;
    const label = toggle.querySelector("#theme-label");
    if (label) label.textContent = state;
  }
}
if (toggle) {
  toggle.hidden = false;
  toggle.addEventListener("click", () => {
    preference = order[(order.indexOf(preference) + 1) % order.length];
    try {
      localStorage.setItem("toward-less-theme", preference);
    } catch {}
    apply();
  });
}
media.addEventListener("change", apply);
window.addEventListener("storage", (event) => {
  if (event.key !== "toward-less-theme") return;
  preference = (["light", "sepia", "dark"].includes(event.newValue ?? "")
    ? event.newValue
    : "auto") as Preference;
  apply();
});
apply();
