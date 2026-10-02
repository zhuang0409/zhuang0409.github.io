/*
 * Renders the Life page from data/life.js and data/writing.js.
 * You normally never need to edit this file; edit the data files instead.
 */
(function () {
  const { t, esc, paras, groups } = window.SITE;
  const ui = {
    openingOnly: t({ en: "opening only", de: "nur der Anfang", zh: "仅开头" }),
    enlarge: t({ en: "Enlarge", de: "Vergrößern", zh: "放大" }),
    soon: t({ en: "coming soon", de: "demnächst", zh: "即将发布" }),
    readEssay: t({ en: "Read the essay", de: "Zum Essay", zh: "读这篇随笔" }),
  };
  const L = window.LIFE;
  const W = window.WRITING;
  const $ = (sel) => document.querySelector(sel);

  const chip = (it) =>
    it.post
      ? `<a class="practice" href="post.html?id=${esc(it.post)}">${esc(t(it.name))} <span aria-hidden="true">→</span></a>`
      : `<span class="practice">${esc(t(it.name))}</span>`;

  const photos = (group, images, columns) => {
    groups[group] = images;
    return `<div class="photo-grid${columns ? ` cols-${columns}` : ""}">${images
      .map((im, i) => {
        const alt = t(im.alt) || t(im.caption) || "";
        return `<figure><button type="button" data-lb="${esc(group)}" data-i="${i}" aria-label="${esc(ui.enlarge)}: ${esc(alt)}"><img src="${esc(im.src)}" alt="${esc(alt)}" loading="lazy"></button>${im.caption ? `<figcaption>${esc(t(im.caption))}</figcaption>` : ""}</figure>`;
      })
      .join("")}</div>`;
  };

  /* ---------- Intro & lately ---------- */
  $(".life-intro").textContent = t(L.intro);
  $(".lately-title").textContent = t(L.lately.title);
  $(".lately").innerHTML = `
    <p class="lead">${esc(t(L.lately.text))}</p>
    <div class="lately-grid">${L.lately.items
      .map((it, i) => {
        if (it.image) groups[`lately-${i}`] = [it.image];
        return `
        <article class="card lately-card">
          ${it.image ? `<button type="button" class="lately-img" data-lb="lately-${i}" data-i="0" aria-label="${esc(ui.enlarge)}: ${esc(t(it.image.caption))}"><img src="${esc(it.image.src)}" alt="${esc(t(it.image.caption))}"></button>` : ""}
          <div class="card-body">
            <h3>${esc(t(it.name))}</h3>
            ${paras(t(it.text))}
            ${it.post ? `<div class="practices"><a class="practice" href="post.html?id=${esc(it.post)}">${esc(ui.readEssay)} <span aria-hidden="true">→</span></a></div>` : ""}
          </div>
        </article>`;
      })
      .join("")}</div>`;

  /* ---------- Hobby groups ---------- */
  $(".life-groups").innerHTML = L.groups
    .map((g) => `
      <article class="card life-group" id="${esc(g.id)}">
        <div class="card-body">
          <h3>${esc(t(g.title))}</h3>
          ${paras(t(g.text))}
          ${g.items?.length ? `<div class="practices">${g.items.map(chip).join("")}</div>` : ""}
          ${g.books?.length ? `<div class="books"><h4>${esc(t(g.booksLabel))}</h4><ul>${g.books.map((b) => `<li><span class="book-title">${esc(t(b.title))}</span> <span class="book-author">${esc(t(b.author))}${b.note ? `, ${esc(t(b.note))}` : ""}</span></li>`).join("")}</ul></div>` : ""}
          ${g.images?.length ? photos(g.id, g.images, g.columns) : ""}
        </div>
      </article>`)
    .join("");

  /* ---------- Writing ---------- */
  $(".writing").innerHTML = W.series
    .map((se) => {
      const posts = W.posts.filter((p) => p.series === se.id);
      return `
        <div class="series">
          <div class="series-head">
            <h3>${esc(t(se.title))} <span class="zh">${esc(se.zhTitle || "")}</span></h3>
            <div class="meta">${se.subtitle ? `${esc(t(se.subtitle))} · ` : ""}${esc(t(se.status))}</div>
            <p>${esc(t(se.summary))}</p>
          </div>
          <ul class="post-list">${posts
            .map((p) => p.status === "planned"
              ? `<li class="planned">${esc(t(p.title))} · ${esc(ui.soon)}</li>`
              : `<li><a href="post.html?id=${esc(p.id)}">${esc(t(p.title))}</a> <span class="zh">${esc(p.zhTitle || "")}</span>
                   <span class="langs">${p.langs.map((l) => (l === "zh" ? "中文" : l.toUpperCase())).join(" / ")}${p.status === "excerpt" ? ` · ${esc(ui.openingOnly)}` : ""}</span></li>`)
            .join("")}</ul>
        </div>`;
    })
    .join("");

  window.SITE.init();
})();
