/*
 * BEYOND: the "Outreach" section of the Work page (podcast and workshop).
 * Text fields are { en, de, zh }; plain strings are the same in every language.
 */

window.BEYOND = {
  intro: {
    en: "Outside my own projects I helped make a science podcast for a Chinese-speaking audience, and I brought a movement workshop to researchers in Giessen.",
    de: "Neben meinen eigenen Projekten habe ich an einem Wissenschaftspodcast für ein chinesischsprachiges Publikum mitgearbeitet und einen Bewegungsworkshop für Forschende nach Gießen geholt.",
    zh: "在自己的研究项目之外，我参与制作过一档面向中文听众的科普播客，还为吉森的科研人员引进了一场身体律动工作坊。",
  },

  podcast: {
    title: { en: "Beyond Top Journals", de: "Beyond Top Journals", zh: "顶刊背后的故事" },
    zhTitle: "顶刊背后的故事",
    team: "BrainPod 脑锅工作室",
    role: { en: "Science advisor (2024)", de: "Wissenschaftliche Beratung (2024)", zh: "科学顾问（2024）" },
    cover: "images/podcast-cover.jpg",
    summary: {
      en: "A Chinese-language podcast about the people and stories behind top papers in psychology and neuroscience. As science advisor I studied each guest's work before the interview and guided listeners through the papers in plain language.",
      de: "Ein chinesischsprachiger Podcast über die Menschen und Geschichten hinter Spitzenpublikationen aus Psychologie und Neurowissenschaft. In der wissenschaftlichen Beratung habe ich mich vor jedem Interview in die Arbeit der Gäste eingelesen und die Hörerinnen und Hörer in verständlicher Sprache durch die Studien geführt.",
      zh: "一档讲述心理学和神经科学顶刊论文背后的人与故事的中文播客。作为科学顾问，我在每次访谈前研读嘉宾的研究，并用通俗的语言带听众读懂这些论文。",
    },
    points: [
      {
        en: "Fast, deep reading: I can read a paper in my field in 5 to 10 minutes, and for the podcast I turned papers into questions a general audience could follow.",
        de: "Schnelles, gründliches Lesen: Ein Paper aus meinem Fachgebiet lese ich in 5 bis 10 Minuten, und für den Podcast habe ich Studien in Fragen übersetzt, denen ein breites Publikum folgen konnte.",
        zh: "快速而深入的阅读：本领域的一篇论文我 5 到 10 分钟就能读完。做播客时，我把论文转化成普通听众也能跟上的问题。",
      },
      {
        en: "Guest preparation: I researched each guest's work before the interview so the conversation went beyond the abstract.",
        de: "Vorbereitung der Gäste: Vor jedem Interview habe ich mich in die Forschung der Gäste eingearbeitet, damit das Gespräch über das Abstract hinausging.",
        zh: "访前准备：每次访谈前我都会深入了解嘉宾的研究，让对话不止停留在摘要层面。",
      },
      {
        en: "Large public reading sessions: I organised and moderated group readings, keeping a big room focused and lively.",
        de: "Große öffentliche Lesesessions: Ich habe gemeinsame Lektürerunden organisiert und moderiert und dabei eine große Gruppe konzentriert und lebendig gehalten.",
        zh: "大型公开共读：我组织并主持集体阅读活动，能让一大群人既保持专注又气氛活跃。",
      },
    ],
    journals: ["Nature Human Behaviour", "Nature Neuroscience", "PNAS", "The Lancet"],
    teamMembers: [
      { name: "yq", about: { en: "engineer in the Netherlands", de: "Ingenieur:in in den Niederlanden", zh: "荷兰的工程师" } },
      { name: "白博士", about: { en: "autism researcher in the UK", de: "Autismusforscher:in in Großbritannien", zh: "英国的自闭症研究者" } },
      { name: "马儿", about: { en: "university psychology lecturer", de: "Psychologiedozent:in an einer Hochschule", zh: "高校心理学老师" } },
      { name: "Tonghe", about: { en: "science advisor in Germany", de: "wissenschaftliche Beratung, Deutschland", zh: "德国的科学顾问" } },
    ],
    teamNote: {
      en: "A lively, curious team spread around the world. Apart from me, the team members are also the creators of 锵锵脑科学.",
      de: "Ein lebendiges, neugieriges Team, verteilt über die ganze Welt. Außer mir stehen die Teammitglieder auch hinter 锵锵脑科学.",
      zh: "一支活泼有趣、分布在世界各地的团队。除我之外，其他成员也是锵锵脑科学的主创。",
    },
    episodes: [
      { code: "S1E9", guest: "林志成", topic: { en: "Large language models", de: "Große Sprachmodelle", zh: "大语言模型" }, venue: "Nature Human Behaviour", url: "https://naoguo.github.io/beyond-top-journals/s1e9/" },
      { code: "S1E8", guest: "于宏波", topic: { en: "Social emotion", de: "Soziale Emotion", zh: "社会情绪" }, venue: "UC Santa Barbara", url: "https://naoguo.github.io/beyond-top-journals/s1e8/" },
      { code: "S1E7", guest: "刘烯琴", topic: { en: "Anxiety disorders", de: "Angststörungen", zh: "焦虑障碍" }, url: "https://naoguo.github.io/beyond-top-journals/s1e7/" },
      { code: "S1E6", guest: "周雨青", topic: { en: "The malleability of empathy", de: "Die Formbarkeit von Empathie", zh: "共情的可塑性" }, venue: "PNAS", url: "https://naoguo.github.io/beyond-top-journals/s1e6/" },
      { code: "S1E5", guest: "高晓雪", topic: { en: "Social emotions", de: "Soziale Emotionen", zh: "社会情绪" }, url: "https://naoguo.github.io/beyond-top-journals/s1e5/" },
      { code: "S1E4", guest: "林枭雄", topic: { en: "Systems neuroscience", de: "Systemische Neurowissenschaft", zh: "系统神经科学" }, url: "https://naoguo.github.io/beyond-top-journals/s1e4/" },
      { code: "S1E3", guest: "李远宁", topic: { en: "AI and human cognition", de: "KI und menschliche Kognition", zh: "人工智能与人类认知" }, venue: "Nature Neuroscience", url: "https://naoguo.github.io/beyond-top-journals/s1e3/" },
      { code: "S1E2", guest: "盖瑞洋", topic: { en: "Predicting brain development", de: "Vorhersage der Gehirnentwicklung", zh: "预测大脑发育" }, venue: "The Lancet", url: "https://naoguo.github.io/beyond-top-journals/s1e2/" },
      { code: "S1E1", guest: "高梦霞", topic: { en: "Predicting late-life depression from brain imaging", de: "Altersdepression mit Bildgebung vorhersagen", zh: "用脑影像预测老年抑郁" }, url: "https://naoguo.github.io/beyond-top-journals/page/2/" },
    ],
    links: [
      { label: { en: "Website", de: "Website", zh: "网站" }, url: "https://naoguo.github.io/beyond-top-journals/" },
      { label: "YouTube", url: "https://www.youtube.com/@brainpod-naoguo" },
      { label: "小宇宙", url: "https://www.xiaoyuzhoufm.com/podcast/65beb6580847349e0ce782c1" },
      { label: "Apple Podcasts", url: "https://podcasts.apple.com/cn/podcast/%E9%A1%B6%E5%88%8A%E8%83%8C%E5%90%8E%E7%9A%84%E6%95%85%E4%BA%8B/id1729028477" },
      { label: "Spotify", url: "https://open.spotify.com/show/5SzIqOMQfveOSjsjZA7J2I" },
      { label: "Bilibili", url: "https://space.bilibili.com/3546775136766592" },
      { label: "小红书", url: "https://www.xiaohongshu.com/user/profile/617cf8ba0000000002021c19" },
      { label: "网易云音乐", url: "https://music.163.com/#/djradio?id=1213369535" },
      { label: "喜马拉雅", url: "https://www.ximalaya.com/album/79394708" },
    ],
  },

  workshop: {
    title: {
      en: "Beyond the Researcher Desk: Creative Movement and Somatic Reflection for Researchers",
      de: "Beyond the Researcher Desk: Creative Movement and Somatic Reflection for Researchers",
      zh: "Beyond the Researcher Desk: Creative Movement and Somatic Reflection for Researchers",
    },
    role: { en: "Initiator and organiser", de: "Initiierung und Organisation", zh: "发起人和组织者" },
    where: {
      en: "Justus Liebig University Giessen, Graduate Centre GGN",
      de: "Justus-Liebig-Universität Gießen, Graduiertenzentrum GGN",
      zh: "吉森大学研究生中心 GGN",
    },
    when: { en: "16 – 18 October 2026", de: "16.–18. Oktober 2026", zh: "2026年10月16日至18日" },
    summary: {
      en: "A university-wide workshop that I initiated and organised on my own. I invited Marcia Plevin to Giessen to lead researchers through creative movement and somatic reflection: a few days away from the desk to notice how thinking, stress and habits live in the body.",
      de: "Ein universitätsweiter Workshop, den ich selbst initiiert und allein organisiert habe. Ich habe Marcia Plevin nach Gießen eingeladen, um Forschende durch kreative Bewegung und somatische Reflexion zu führen: ein paar Tage abseits des Schreibtischs, um wahrzunehmen, wie Denken, Stress und Gewohnheiten im Körper wohnen.",
      zh: "一场由我发起并独立组织的校级工作坊。我邀请 Marcia Plevin 来到吉森，带领科研人员进行创意律动和身体觉察：离开书桌几天，去感受思考、压力和习惯如何存在于身体之中。",
    },
    facilitator: {
      en: "Marcia Plevin, BC-DMT, is a dance movement therapist and supervisor, co-creator of the Creative Movement Garcia-Plevin® Method and a teacher of the Discipline of Authentic Movement. Based in Italy since 1986, she has trained groups in Italy, Spain, Finland, Turkey and China.",
      de: "Marcia Plevin, BC-DMT, ist Tanz- und Bewegungstherapeutin und Supervisorin, Mitbegründerin der Creative Movement Garcia-Plevin®-Methode und Lehrerin der Discipline of Authentic Movement. Sie lebt seit 1986 in Italien und hat Gruppen in Italien, Spanien, Finnland, der Türkei und China ausgebildet.",
      zh: "Marcia Plevin（BC-DMT）是舞动治疗师和督导，Creative Movement Garcia-Plevin® 方法的共同创始人，也是 Discipline of Authentic Movement（真实动作）的教师。她自 1986 年起定居意大利，曾在意大利、西班牙、芬兰、土耳其和中国带领培训。",
    },
  },

};
