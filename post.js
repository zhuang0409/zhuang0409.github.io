/*
 * Renders one essay: post.html?id=<post id>.
 * Loads the text from writing/<id>.js. You normally never need to edit this file.
 *
 * The site language (EN / DE / 中文) sets the interface. The essay itself is shown
 * in the site language when it exists (essays are written in English and/or Chinese;
 * German visitors see the English text), and the buttons above the text switch it.
 */
(function () {
  const { LANG, t, esc } = window.SITE;
  const W = window.WRITING;
  const id = new URLSearchParams(location.search).get("id");
  const meta = W.posts.find((p) => p.id === id);
  const $ = (s) => document.querySelector(s);

  const ui = {
    notFound: t({ en: "Not found", de: "Nicht gefunden", zh: "未找到" }),
    previous: t({ en: "← Previous", de: "← Vorheriger Text", zh: "← 上一篇" }),
    next: t({ en: "Next →", de: "Nächster Text →", zh: "下一篇 →" }),
    openingOnly: t({ en: "Opening only", de: "Nur der Anfang", zh: "仅开头" }),
    excerpt: t({
      en: "This is the opening of a section from my book draft, My Body, My Habits, which is still being written.",
      de: "Dies ist der Anfang eines Abschnitts aus meinem Buchentwurf My Body, My Habits, an dem ich noch schreibe.",
      zh: "这是书稿《我的身体，我的习惯》中一节的开头，书稿还在撰写中。",
    }),
    germanNote: "Diesen Text gibt es auf Englisch und Chinesisch.",
    machine: t({
      en: "I wrote this in Chinese. The English version is a machine translation.",
      de: "Ich habe diesen Text auf Chinesisch geschrieben. Die englische Fassung ist eine maschinelle Übersetzung.",
      zh: "本文原文为中文，英文版为机器翻译。",
    }),
  };

  window.SITE.init();

  if (!meta || meta.status === "planned") {
    $(".article-title").textContent = ui.notFound;
    return;
  }
  const series = W.series.find((s) => s.id === meta.series);
  const enTitle = (p) => (typeof p.title === "object" ? p.title.en : p.title);
  const titleIn = (p, lang) => (lang === "zh" ? p.zhTitle || t(p.title) : lang === "de" ? t(p.title) : enTitle(p));

  // Very small text format: one line = one paragraph, "## " = heading, "---" = divider, "> " = quote, **bold**.
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const render = (text) =>
    text.split("\n").filter((l) => l.trim()).map((l) => {
      if (l.trim() === "---") return "<hr>";
      if (l.startsWith("## ")) return `<h2>${fmt(l.slice(3))}</h2>`;
      if (l.startsWith("> ")) return `<blockquote>${fmt(l.slice(2))}</blockquote>`;
      if (/^(Affirmation:|收尾语：)/.test(l)) return `<p class="affirmation">${fmt(l)}</p>`;
      return `<p>${fmt(l)}</p>`;
    }).join("");

  const script = document.createElement("script");
  script.src = `writing/${encodeURIComponent(id)}.js`;
  script.onload = () => {
    const post = window.POST;
    const langs = Object.keys(post.body);
    let lang = langs.includes(LANG) ? LANG : langs.includes("en") ? "en" : langs[0];

    const draw = () => {
      const title = titleIn(meta, lang === "en" && LANG === "de" ? "de" : lang);
      document.title = `${title} · Tonghe Zhuang`;
      $(".article-title").textContent = title;
      $(".article-subtitle").textContent = lang === "zh" ? enTitle(meta) : meta.zhTitle || "";
      const notes = [
        post.note ? `<p class="note">${esc(post.note)}</p>` : "",
        LANG === "de" && !langs.includes("de") ? `<p class="note">${esc(ui.germanNote)}</p>` : "",
        post.machineTranslated?.includes(lang) ? `<p class="note">${esc(ui.machine)}</p>` : "",
      ].join("");
      const more = post.excerpt ? `<p class="excerpt-note">${esc(ui.excerpt)}</p>` : "";
      $(".article-body").innerHTML = notes + render(post.body[lang]) + more;
      $(".article-body").lang = lang === "zh" ? "zh-CN" : "en";
      $(".article-body").classList.toggle("zh-text", lang === "zh");
      $(".lang-switch").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
    };
    $(".article-meta").innerHTML = `${esc(t(series.title))}${meta.status === "excerpt" ? ` · <span class="draft">${esc(ui.openingOnly)}</span>` : ""}`;
    if (langs.length > 1) {
      $(".lang-switch").innerHTML = langs.map((l) => `<button type="button" data-lang="${l}">${l === "zh" ? "中文" : "English"}</button>`).join("");
      $(".lang-switch").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        lang = b.dataset.lang;
        draw();
      });
    }
    // previous / next within the same series
    const list = W.posts.filter((p) => p.series === meta.series && p.status !== "planned");
    const i = list.indexOf(meta);
    const link = (p, label) => (p ? `<a href="post.html?id=${esc(p.id)}"><span>${esc(label)}</span>${esc(titleIn(p, LANG))}</a>` : "<span></span>");
    $(".article-nav").innerHTML = link(list[i - 1], ui.previous) + link(list[i + 1], ui.next);
    draw();
  };
  document.body.appendChild(script);
})();
