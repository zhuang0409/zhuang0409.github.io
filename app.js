/*
 * Renders the Work page from data/profile.js, data/projects.js and data/beyond.js.
 * You normally never need to edit this file — edit the data files instead.
 */
(function () {
  const P = window.PROFILE;
  const PROJECTS = window.PROJECTS;
  const { LANG, t, esc, paras } = window.SITE;

  // Interface text per language.
  const UI = {
    en: {
      types: { article: "Article", preprint: "Preprint", report: "Report", manuscript: "Manuscript", poster: "Poster", talk: "Talk" },
      pubGroups: { article: "Journal articles", preprint: "Preprints", report: "Reports", manuscript: "Manuscripts in preparation", poster: "Posters & talks" },
      more: "More details",
      featured: "Featured project",
      citedIn: "Cited in",
      scicomm: "Science communication",
      workshop: "Workshop",
      guests: "Guests' work published in",
      team: "Team",
      episodes: "Episodes",
      book: "Book",
      with: "with",
      solo: "Independent project",
      footer: "Last updated",
      project: "project",
      links: {},
    },
    de: {
      types: { article: "Artikel", preprint: "Preprint", report: "Bericht", manuscript: "Manuskript", poster: "Poster", talk: "Vortrag" },
      pubGroups: { article: "Zeitschriftenartikel", preprint: "Preprints", report: "Berichte", manuscript: "Manuskripte in Vorbereitung", poster: "Poster und Vorträge" },
      more: "Mehr Details",
      featured: "Schwerpunktprojekt",
      citedIn: "Zitiert in",
      scicomm: "Wissenschaftskommunikation",
      workshop: "Workshop",
      guests: "Die Arbeiten der Gäste erschienen in",
      team: "Team",
      episodes: "Folgen",
      book: "Buch",
      with: "mit",
      solo: "Eigenständiges Projekt",
      footer: "Zuletzt aktualisiert",
      project: "Projekt",
      links: { slides: "Folien", video: "Video", manuscript: "Manuskript" },
    },
    zh: {
      types: { article: "期刊论文", preprint: "预印本", report: "技术报告", manuscript: "手稿", poster: "海报", talk: "演讲" },
      pubGroups: { article: "期刊论文", preprint: "预印本", report: "技术报告", manuscript: "撰写中的手稿", poster: "海报与演讲" },
      more: "更多细节",
      featured: "重点项目",
      citedIn: "被引用于",
      scicomm: "科学传播",
      workshop: "工作坊",
      guests: "嘉宾的研究发表于",
      team: "团队",
      episodes: "节目列表",
      book: "书籍",
      with: "合作：",
      solo: "独立完成",
      footer: "最后更新",
      project: "项目",
      links: { slides: "幻灯片", video: "视频", manuscript: "手稿" },
    },
  };
  const ui = UI[LANG] || UI.en;

  const $ = (sel) => document.querySelector(sel);
  const boldMe = (authors) => esc(authors).replace(/Zhuang, T\.(\*)?/g, '<span class="me">Zhuang, T.$1</span>');

  const linkList = (links = {}) =>
    Object.entries(links)
      .map(([label, url]) => `<a href="${esc(url)}"${/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""}>${esc(ui.links[label] || label)}</a>`)
      .join("");

  const cite = (o) =>
    [boldMe(o.authors), o.venue && `<em>${esc(t(o.venue))}</em>`, o.year, o.note && esc(t(o.note))].filter(Boolean).join(" · ");

  /* ---------- Hero ---------- */
  $("#about").innerHTML = `
    <div>
      <h1>${esc(t(P.name))}${t(P.name) !== P.name.en ? ` <span class="name-alt">${esc(P.name.en)}</span>` : ""}</h1>
      <p class="role">${esc(t(P.role))} · ${esc(t(P.location))}</p>
      ${P.tagline ? `<p class="tagline">${esc(t(P.tagline))}</p>` : ""}
      ${P.intro.map((p) => `<p>${esc(t(p)).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</p>`).join("")}
      <div class="links">${P.links.map((l) => `<a href="${esc(l.url)}"${/^https?:/.test(l.url) ? ' target="_blank" rel="noopener"' : ""}>${esc(t(l.label))}</a>`).join("")}</div>
    </div>
    <img class="portrait" src="${esc(P.photo)}" alt="Portrait of ${esc(P.name.en)}">`;

  /* ---------- Projects ---------- */
  PROJECTS.forEach((p) => (window.SITE.groups[p.id] = p.images || []));
  $(".projects").innerHTML = PROJECTS.map((p) => {
    const types = [...new Set(p.outputs.map((o) => o.type))].join(" ");
    const meta = [t(p.period), t(p.where), p.with && `${ui.with} ${t(p.with)}`, p.solo && ui.solo].filter(Boolean).map(esc).join(" · ");
    const details = [].concat(t(p.details) || []);
    return `
      <article class="project${p.featured ? " featured" : ""}" id="${esc(p.id)}" data-types="${esc(types)}">
        <div>
          ${p.featured ? `<div class="flag">${esc(ui.featured)}</div>` : ""}
          <h3>${esc(t(p.title))}</h3>
          <div class="meta">${meta}</div>
        </div>
        <p class="summary">${esc(t(p.summary))}</p>
        ${p.stats?.length ? `<dl class="stats">${p.stats.map((x) => `<div><dt>${esc(x.value)}</dt><dd>${esc(t(x.label))}</dd></div>`).join("")}</dl>` : ""}
        ${p.tags?.length ? `<div class="tags">${p.tags.map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div>` : ""}
        ${p.images?.length ? `<div class="gallery">${p.images
          .map((im, i) => `<button type="button" data-lb="${esc(p.id)}" data-i="${i}" aria-label="Enlarge: ${esc(t(im.caption))}"><img src="${esc(im.src)}" alt="${esc(t(im.caption))}" loading="lazy"></button>`)
          .join("")}</div>` : ""}
        <ul class="outputs">${p.outputs
          .map((o) => `
            <li class="output">
              <span class="badge">${esc(ui.types[o.type] || o.type)}</span>
              <span><span class="title">${esc(t(o.title))}</span><br><span class="cite">${cite(o)}</span><span class="olinks">${linkList(o.links)}</span></span>
            </li>`)
          .join("")}</ul>
        ${p.links?.length ? `<div class="pill-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))}</a>`).join("")}</div>` : ""}
        ${p.citedBy?.length ? `<div class="cited"><h4>${esc(ui.citedIn)}</h4><ul class="outputs">${p.citedBy
          .map((c) => `<li class="output"><span class="badge">${esc(c.kind === "book" ? ui.book : ui.types.article)}</span><span><span class="title">${esc(t(c.title))}</span><br><span class="cite">${esc(c.authors)} · <em>${esc(t(c.venue))}</em> · ${c.year}${c.note ? ` · ${esc(t(c.note))}` : ""}</span><span class="olinks">${linkList(c.links)}</span></span></li>`)
          .join("")}</ul></div>` : ""}
        ${details.length ? `<details class="more"><summary>${esc(ui.more)}</summary>${details.map((d) => `<p>${esc(t(d))}</p>`).join("")}</details>` : ""}
      </article>`;
  }).join("");

  /* ---------- Publications (generated from project outputs) ---------- */
  const all = PROJECTS.flatMap((p) => p.outputs.map((o) => ({ ...o, project: p.id })));
  const groups = { article: [], preprint: [], report: [], manuscript: [], poster: [] };
  all.forEach((o) => (groups[o.type === "talk" ? "poster" : o.type] || groups.poster).push(o));
  $(".publications").innerHTML = Object.entries(groups)
    .filter(([, list]) => list.length)
    .map(([g, list]) => {
      list.sort((a, b) => (b.year || 9999) - (a.year || 9999));
      return `
        <div class="pub-group">
          <h3>${esc(ui.pubGroups[g])}</h3>
          <ol class="pub-list">${list
            .map((o) => `<li>${o.authors ? `${boldMe(o.authors)}${o.year ? ` (${o.year})` : ""}. ` : ""}${esc(t(o.title))}.${o.venue ? ` <em>${esc(t(o.venue))}</em>.` : ""}${o.note ? ` ${esc(t(o.note))}.` : ""} <a href="#${esc(o.project)}">${esc(ui.project)}</a><span class="olinks"> ${linkList(o.links)}</span></li>`)
            .join("")}</ol>
        </div>`;
    })
    .join("");

  /* ---------- Experience, education, skills ---------- */
  const job = (period, title, org, points = [], link) => `
    <div class="job">
      <div class="period">${esc(t(period))}</div>
      <div>
        <h4>${esc(t(title))}</h4>
        <div class="org">${esc(t(org))}</div>
        ${points.length ? `<ul>${points.map((x) => `<li>${esc(t(x))}</li>`).join("")}</ul>` : ""}
        ${link ? `<a class="job-link" href="${esc(link.url)}">${esc(t(link.label))} →</a>` : ""}
      </div>
    </div>`;
  $(".experience").innerHTML = `<div class="timeline">${P.experience.map((e) => job(e.period, e.title, e.org, e.points, e.link)).join("")}</div>`;
  $(".education").innerHTML = `<div class="timeline">${P.education.map((e) => job(e.period, e.degree, e.org)).join("")}</div>`;
  $(".skills").innerHTML = P.skills
    .map((s) => `<div class="skill-row"><div class="group">${esc(t(s.group))}</div><div class="tags">${s.items.map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div></div>`)
    .join("");
  $(".awards").innerHTML = P.awards.map((a) => `<li>${esc(t(a))}</li>`).join("");
  $(".spoken").textContent = t(P.spokenLanguages);
  $(".footer-text").textContent = `© ${new Date().getFullYear()} ${t(P.name)} · ${ui.footer} ${document.lastModified.split(" ")[0]}`;

  /* ---------- Outreach: podcast & workshop ---------- */
  const B = window.BEYOND;
  const extLinks = (links) =>
    !links?.length ? "" : `<div class="pill-links">${links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))}</a>`).join("")}</div>`;
  const statRow = (stats) =>
    `<dl class="stats">${stats.map((x) => `<div><dt>${esc(x.value)}</dt><dd>${esc(t(x.label))}</dd></div>`).join("")}</dl>`;
  if (B) {
    $(".beyond-intro").textContent = t(B.intro);
    const pc = B.podcast, ws = B.workshop;
    $(".beyond").innerHTML = `
      <article class="card podcast">
        <img class="cover" src="${esc(pc.cover)}" alt="${esc(pc.zhTitle)} podcast cover">
        <div class="card-body">
          <div class="flag">${esc(ui.scicomm)}</div>
          <h3>${esc(t(pc.title))} <span class="zh">${esc(pc.zhTitle)}</span></h3>
          <div class="meta">${esc(t(pc.role))} · ${esc(pc.team)}</div>
          ${paras(t(pc.summary))}
          ${pc.points?.length ? `<ul class="points">${pc.points.map((x) => `<li>${esc(t(x))}</li>`).join("")}</ul>` : ""}
          ${pc.stats?.length ? statRow(pc.stats) : ""}
          <p class="small">${esc(ui.guests)}: ${pc.journals.map((j) => `<em>${esc(j)}</em>`).join(", ")}</p>
          <p class="small"><strong>${esc(ui.team)}:</strong> ${pc.teamMembers.map((m) => `${esc(m.name)}, ${esc(t(m.about))}`).join(" · ")}. ${esc(t(pc.teamNote))}</p>
          <details class="more"><summary>${esc(ui.episodes)}</summary>
            <ol class="episodes">${pc.episodes.map((e) => `<li><a href="${esc(e.url)}" target="_blank" rel="noopener"><span class="code">${esc(e.code)}</span> ${esc(e.guest)}</a> · ${esc(t(e.topic))}${e.venue ? ` · <em>${esc(e.venue)}</em>` : ""}</li>`).join("")}</ol>
          </details>
          ${extLinks(pc.links)}
        </div>
      </article>

      <article class="card">
        <div class="card-body">
          <div class="flag">${esc(ui.workshop)}</div>
          <h3>${esc(t(ws.title))}</h3>
          <div class="meta">${esc(t(ws.role))} · ${esc(t(ws.where))} · ${esc(t(ws.when))}</div>
          <p>${esc(t(ws.summary))}</p>
          <p class="small">${esc(t(ws.facilitator))}</p>
          ${ws.stats?.length ? statRow(ws.stats) : ""}
          ${extLinks(ws.links)}
        </div>
      </article>`;
  }

  window.SITE.init();
})();
