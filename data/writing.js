/*
 * WRITING — essays and book drafts.
 * Each post's text lives in site/writing/<id>.js (one line = one paragraph).
 * To add a post: add an entry to `posts`, then create writing/<id>.js (copy an existing one).
 * status: "excerpt" = only the opening is published (book chapters); "planned" ones have no text yet.
 * Text fields are { en, de, zh }; zhTitle is kept for the essay reader page.
 */

window.WRITING = {
  series: [
    {
      id: "my-body-my-habits",
      title: { en: "My Body, My Habits", de: "Mein Körper, meine Gewohnheiten", zh: "我的身体，我的习惯" },
      zhTitle: "我的身体，我的习惯",
      subtitle: { en: "Training, mindset and self-discovery", de: "Training, Denkweise und Selbstentdeckung", zh: "训练、心态与自我发现" },
      status: { en: "Book in progress", de: "Buch in Arbeit", zh: "书稿撰写中" },
      summary: {
        en: "Bilingual essays, one practice at a time. What ballet, running, taekwondo and pole dance showed me about ambition, control and listening to my body.",
        de: "Zweisprachige Essays, eine Praxis nach der anderen. Was Ballett, Laufen, Taekwondo und Poledance mir über Ehrgeiz, Kontrolle und das Hören auf meinen Körper gezeigt haben.",
        zh: "中英双语随笔，一次写一项运动。芭蕾、跑步、跆拳道和钢管舞让我看到了关于野心、控制和倾听身体的事。",
      },
    },
    {
      id: "low-investment-society",
      title: { en: "The Low-Investment Society", de: "Die Low-Investment-Gesellschaft", zh: "低投入社会" },
      zhTitle: "低投入社会",
      status: {
        en: "Writing now · planned as a blog series, then a book",
        de: "Gerade in Arbeit · geplant als Blogreihe, später als Buch",
        zh: "正在写 · 计划先写成博客系列，再出书",
      },
      summary: { en: "A series in progress.", de: "Eine Reihe im Entstehen.", zh: "系列写作中。" },
    },
    {
      id: "notes",
      title: { en: "Notes on emotion", de: "Notizen über Gefühle", zh: "情绪笔记" },
      zhTitle: "情绪笔记",
      status: { en: "Essays", de: "Essays", zh: "随笔" },
      summary: {
        en: "Talking myself through my own emotions, as a psychologist.",
        de: "Mit psychologischem Blick spreche ich mich durch meine eigenen Gefühle.",
        zh: "作为心理学研究者，和自己一起梳理自己的情绪。",
      },
    },
  ],

  posts: [
    { id: "ballet-1", series: "my-body-my-habits", title: { en: "Ballet I: The Body's Small Sovereignty", de: "Ballett I: Die kleine Souveränität des Körpers", zh: "芭蕾（一）身体的微小主权" }, zhTitle: "芭蕾（一）身体的微小主权", langs: ["en", "zh"], status: "excerpt" },
    { id: "ballet-2", series: "my-body-my-habits", title: { en: "Ballet II: I Heard It, and I Looked Away", de: "Ballett II: Ich habe es gehört und weggeschaut", zh: "芭蕾（二）我听见了，但我选择不听" }, zhTitle: "芭蕾（二）我听见了，但我选择不听", langs: ["en", "zh"], status: "excerpt" },
    { id: "running", series: "my-body-my-habits", title: { en: "What I Talk About When I Talk About Running", de: "Wovon ich rede, wenn ich vom Laufen rede", zh: "当我谈跑步时我在谈什么" }, zhTitle: "当我谈跑步时我在谈什么", langs: ["en", "zh"], status: "excerpt" },
    { id: "taekwondo", series: "my-body-my-habits", title: { en: "Taekwondo: Control Disguised as Discipline", de: "Taekwondo: Kontrolle, als Disziplin getarnt", zh: "跆拳道：伪装成自律的控制" }, zhTitle: "跆拳道：伪装成自律的控制", langs: ["en", "zh"], status: "excerpt" },
    { id: "pole-1", series: "my-body-my-habits", title: { en: "Pole Dance I: Leaving, Saying No to the Frame", de: "Poledance I: Gehen, Nein sagen zum Rahmen", zh: "钢管舞（一）离开：对环境说“不”" }, zhTitle: "钢管舞（一）离开：对环境说“不”", langs: ["en", "zh"], status: "excerpt" },
    { id: "pole-2", series: "my-body-my-habits", title: { en: "Pole Dance II: What It Gave Me", de: "Poledance II: Was es mir gegeben hat", zh: "钢管舞（二）它留给我的" }, zhTitle: "钢管舞（二）它留给我的", langs: ["en", "zh"], status: "excerpt" },
    { id: "emotion-sadness", series: "notes", title: { en: "Unpacking my own sadness, as a psychologist", de: "Meine eigene Traurigkeit entwirren, mit psychologischem Blick", zh: "心理学家分析自己的情绪：难过" }, zhTitle: "心理学家分析自己的情绪：难过", langs: ["zh"] },
    { id: "low-investment-society-1", series: "low-investment-society", title: { en: "Coming soon", de: "Demnächst", zh: "即将发布" }, zhTitle: "即将发布", langs: [], status: "planned" },
  ],
};
