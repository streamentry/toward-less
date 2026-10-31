export const languages = ["en", "vi"] as const;
export type Lang = (typeof languages)[number];
export const otherLanguage = (lang: Lang): Lang => lang === "en" ? "vi" : "en";
export const withBase = (path = "") => `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\/+/, "")}`;
export const localePath = (lang: Lang, path = "") => withBase(`${lang}/${path}`);

export const ui = {
  en: {
    language: "English", other: "Tiếng Việt", skip: "Skip to content", nav: "Main navigation",
    articles: "Articles", about: "About", search: "Search", topicsTitle: "Topics",
    notebook: "A personal notebook", lineOne: "Less clinging.", lineTwo: "Clearer seeing.",
    intro: "Notes on technology, family, and Buddhist practice.", by: "By", latest: "Recent writing",
    allArticles: "All articles", read: "Read article", minute: "min read", updated: "Updated",
    archiveDescription: "Ideas, observations, and things worth returning to.",
    empty: "Nothing published here yet. There is no need to fill the space.",
    previous: "Previous", next: "Next", page: "Page", of: "of", toc: "On this page",
    translated: "Also available in", back: "Back to articles", rss: "RSS feed", source: "Source",
    footer: "Less unnecessary complexity. Not less care.", theme: "Change colour theme",
    themeAuto: "System", themeLight: "Light", themeDark: "Dark", home: "Home",
    searchDescription: "Search the English articles. Switch languages to search Vietnamese.",
    searchPlaceholder: "Search articles…", searchUnavailable: "Search is available in the production build. You can still browse all articles.",
    noScript: "Search needs JavaScript. The article archive does not.",
    aboutTitle: "A direction, not an arrival.", aboutDescription: "About Chánh Niệm and Toward Less.",
    notFound: "This page is not here.", notFoundText: "The address may have changed. Return to the notebook and start again.",
    styleGuide: "Design reference", styleDescription: "Typography and components for this notebook.",
    topics: { technology: "Technology", life: "Life", practice: "Practice" },
  },
  vi: {
    language: "Tiếng Việt", other: "English", skip: "Đến nội dung chính", nav: "Điều hướng chính",
    articles: "Bài viết", about: "Giới thiệu", search: "Tìm kiếm", topicsTitle: "Chủ đề",
    notebook: "Ghi chép cá nhân", lineOne: "Bớt chấp thủ.", lineTwo: "Thấy rõ hơn.",
    intro: "Ghi chép về công nghệ, gia đình và thực hành Phật pháp.", by: "Tác giả", latest: "Bài viết gần đây",
    allArticles: "Tất cả bài viết", read: "Đọc bài viết", minute: "phút đọc", updated: "Cập nhật",
    archiveDescription: "Những ý tưởng, quan sát và điều đáng đọc lại.",
    empty: "Chưa có bài viết ở đây. Không cần vội lấp đầy khoảng trống.",
    previous: "Trước", next: "Tiếp", page: "Trang", of: "trên", toc: "Trong bài viết này",
    translated: "Bản dịch", back: "Về danh sách bài viết", rss: "Nguồn RSS", source: "Mã nguồn",
    footer: "Bớt phức tạp không cần thiết. Không bớt quan tâm.", theme: "Đổi giao diện màu",
    themeAuto: "Hệ thống", themeLight: "Sáng", themeDark: "Tối", home: "Trang chủ",
    searchDescription: "Tìm trong các bài tiếng Việt. Chuyển ngôn ngữ để tìm bài tiếng Anh.",
    searchPlaceholder: "Tìm bài viết…", searchUnavailable: "Tìm kiếm hoạt động trong bản dựng chính thức. Bạn vẫn có thể xem danh sách bài viết.",
    noScript: "Tìm kiếm cần JavaScript. Danh sách bài viết thì không.",
    aboutTitle: "Một hướng đi, không phải đích đến.", aboutDescription: "Về Chánh Niệm và Toward Less.",
    notFound: "Không tìm thấy trang này.", notFoundText: "Địa chỉ có thể đã thay đổi. Hãy trở về trang chủ và bắt đầu lại.",
    styleGuide: "Hệ thống thiết kế", styleDescription: "Kiểu chữ và các thành phần của trang viết này.",
    topics: { technology: "Công nghệ", life: "Đời sống", practice: "Tu tập" },
  },
} as const;

export function tagLabel(tag: string, lang: Lang): string {
  const labels: Record<string, string> = ui[lang].topics;
  return labels[tag] ?? tag;
}
