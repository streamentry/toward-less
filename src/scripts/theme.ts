const root = document.documentElement;
const toggle = document.querySelector<HTMLButtonElement>("#theme-toggle");
const media = window.matchMedia("(prefers-color-scheme: dark)");
type Preference = "auto" | "light" | "dark";
let preference = (root.dataset.preference || "auto") as Preference;
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
    preference = preference === "auto" ? "light" : preference === "light" ? "dark" : "auto";
    try {
      localStorage.setItem("toward-less-theme", preference);
    } catch {}
    apply();
  });
}
media.addEventListener("change", apply);
window.addEventListener("storage", (event) => {
  if (event.key !== "toward-less-theme") return;
  preference = ["light", "dark"].includes(event.newValue ?? "")
    ? (event.newValue as Preference)
    : "auto";
  apply();
});
apply();
