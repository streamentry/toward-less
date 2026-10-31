/** Identity and deployment settings. Change url + base together for a custom domain. */
export default {
  site: {
    url: process.env.SITE_URL ?? "https://streamentry.github.io",
    title: "Toward Less",
    description:
      "Less clinging. Clearer seeing. Notes on technology, family, and Buddhist practice.",
    author: "Chánh Niệm",
    timezone: "Asia/Ho_Chi_Minh",
  },
  base: process.env.BASE_PATH ?? "/toward-less",
} as const;
