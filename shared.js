/*
 * Helpers shared by all pages (app.js, life.js, post.js):
 * language choice, text helpers, the image lightbox and the dark-mode toggle.
 * You normally never need to edit this file.
 */
window.SITE = (function () {
  /* ---------- Language ----------
   * Order: ?lang=xx in the URL, then the visitor's last choice, then English.
   * The accent colour per language is set in style.css via <html data-lang>.
   */
  const LANGS = ["en", "de", "zh"];
  const pick = () => {
    const q = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(q)) return q;
    try { const s = localStorage.getItem("lang"); if (LANGS.includes(s)) return s; } catch {}
    return "en";
  };
  const LANG = pick();
  document.documentElement.dataset.lang = LANG;
  document.documentElement.lang = { en: "en", de: "de", zh: "zh-CN" }[LANG];
  // Each language version is its own page for search engines: point canonical at ?lang=xx.
  const canon = document.querySelector('link[rel="canonical"]');
  if (canon && LANG !== "en") canon.href = `${canon.href.split("?")[0]}?lang=${LANG}`;
  if (LANG === "zh") {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }

  // Fixed interface text used in the HTML files: <el data-i18n="key">.
  const STATIC = {
    name: { en: "Tonghe Zhuang", de: "Tonghe Zhuang", zh: "庄童贺" },
    work: { en: "Work", de: "Arbeit", zh: "工作" },
    life: { en: "Life", de: "Leben", zh: "生活" },
    projects: { en: "Projects", de: "Projekte", zh: "研究项目" },
    publications: { en: "Publications", de: "Publikationen", zh: "发表" },
    experience: { en: "Experience", de: "Werdegang", zh: "经历" },
    education: { en: "Education", de: "Ausbildung", zh: "教育" },
    skills: { en: "Skills", de: "Kompetenzen", zh: "技能" },
    awards: { en: "Awards", de: "Auszeichnungen", zh: "奖项" },
    outreach: { en: "Outreach", de: "Outreach", zh: "科普与交流" },
    cv: { en: "CV", de: "CV", zh: "简历" },
    lately: { en: "Lately", de: "Gerade", zh: "最近" },
    hobbies: { en: "Hobbies", de: "Hobbys", zh: "爱好" },
    writing: { en: "Writing", de: "Texte", zh: "写作" },
    allWriting: { en: "← All writing", de: "← Alle Texte", zh: "← 全部文章" },
  };

  // A text field may be a plain string or { en, de, zh }.
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[LANG] ?? v.en : v);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Text with blank lines ("\n\n") becomes several <p> paragraphs.
  const paras = (s) => String(s ?? "").split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- Lightbox ----------
   * Any <button data-lb="group" data-i="n"> opens image n of SITE.groups[group].
   */
  const groups = {};
  function initLightbox() {
    const lb = document.querySelector(".lightbox");
    if (!lb) return;
    const img = lb.querySelector("img");
    const cap = lb.querySelector("figcaption");
    let current = { images: [], i: 0 };
    const show = () => {
      const im = current.images[current.i];
      img.src = im.src;
      img.alt = t(im.caption) || "";
      cap.textContent = t(im.caption) || "";
      const many = current.images.length > 1;
      lb.querySelector(".lb-prev").hidden = !many;
      lb.querySelector(".lb-next").hidden = !many;
    };
    const step = (d) => {
      current.i = (current.i + d + current.images.length) % current.images.length;
      show();
    };
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lb]");
      if (!btn || !groups[btn.dataset.lb]) return;
      current = { images: groups[btn.dataset.lb], i: +btn.dataset.i };
      show();
      lb.showModal();
    });
    lb.querySelector(".lb-close").addEventListener("click", () => lb.close());
    lb.querySelector(".lb-prev").addEventListener("click", () => step(-1));
    lb.querySelector(".lb-next").addEventListener("click", () => step(1));
    lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---------- Dark mode toggle (remembered per visitor) ---------- */
  function initTheme() {
    const root = document.documentElement;
    try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch {}
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch {}
    });
  }

  /* ---------- Static text + language switcher ---------- */
  function initLanguage() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = STATIC[el.dataset.i18n];
      if (v) el.textContent = t(v);
    });
    const box = document.querySelector(".lang-switch-top");
    if (!box) return;
    box.innerHTML = LANGS.map((l) => `<button type="button" data-setlang="${l}" aria-pressed="${l === LANG}">${{ en: "EN", de: "DE", zh: "中文" }[l]}</button>`).join("");
    box.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-setlang]");
      if (!b || b.dataset.setlang === LANG) return;
      try { localStorage.setItem("lang", b.dataset.setlang); } catch {}
      const url = new URL(location.href);
      url.searchParams.set("lang", b.dataset.setlang);
      location.href = url.toString();
    });
  }

  function init() {
    initLanguage();
    initLightbox();
    initTheme();
  }

  return { LANG, LANGS, t, esc, paras, groups, init };
})();
