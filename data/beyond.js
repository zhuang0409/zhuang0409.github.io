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
      en: "As science advisor, I hosted a Chinese-language podcast about the people and stories behind top papers in psychology and neuroscience. The show interviews scientists from around the world. Before each interview I read the guest's research in depth and lay out the core questions, methods and debates in their papers, so the conversation goes beyond the abstract.\n\nI read papers fast: I can usually grasp the main logic of a paper in my field in 5 to 10 minutes. For the podcast I care about something else: how to turn complex research into questions a general audience can follow, so the scientific discussion stays accurate without losing the human story.\n\nBesides the interviews, I also organise and host public reading sessions. I break down the papers in advance and design a reading path and discussion questions, so listeners without a specialist background can enter a paper step by step, and a large group stays focused, engaged and lively through a long reading session.",
      de: "In der wissenschaftlichen Beratung habe ich einen chinesischsprachigen Podcast moderiert, der von den Menschen und Geschichten hinter Spitzenpublikationen aus Psychologie und Neurowissenschaft erzählt. Die Sendung interviewt Forschende aus der ganzen Welt. Vor jedem Interview lese ich mich gründlich in die Forschung der Gäste ein und arbeite die zentralen Fragen, Methoden und Kontroversen ihrer Studien heraus, damit das Gespräch über das Abstract hinausgeht.\n\nIch lese Paper schnell: Die Hauptlogik eines Papers aus meinem Fachgebiet verstehe ich meist in 5 bis 10 Minuten. Beim Podcast geht es mir um etwas anderes: Wie übersetzt man komplexe Forschung in Fragen, denen ein breites Publikum folgen kann? So bleibt die wissenschaftliche Diskussion genau, und die menschliche Geschichte geht nicht verloren.\n\nNeben den Interviews organisiere und moderiere ich auch öffentliche Lesesessions. Ich bereite die Paper vorher auf und plane einen Leseweg und Diskussionsfragen. So können auch Hörerinnen und Hörer ohne Fachhintergrund Schritt für Schritt in eine Studie einsteigen, und eine große Gruppe bleibt über eine lange Lesezeit konzentriert, beteiligt und lebendig.",
      zh: "作为科学顾问，我曾主持一档中文播客，讲述心理学和神经科学顶刊论文背后的人与故事。节目采访来自世界各地的科学家。每次访谈前，我都会深入阅读嘉宾的研究，梳理论文中的核心问题、方法和争议，让对话不只停留在摘要层面。\n\n我读论文很快。本领域的一篇论文，我通常可以在 5 到 10 分钟内抓住主要逻辑；做播客时，我更关心另一件事：怎样把复杂的研究转化成普通听众也能跟上的问题，让科学讨论既准确，又不失去人的故事。\n\n除了访谈，我也组织和主持公开共读。我会提前拆解论文、设计阅读路径和讨论问题，让没有专业背景的听众也能一步步进入论文，同时让一大群人在长时间阅读中保持专注、参与感和讨论的热度。",
    },
    // Paragraphs are separated by a blank line (\n\n). The old bullet points were folded into the summary.
    journals: ["Nature Human Behaviour", "Nature Neuroscience", "PNAS", "The Lancet"],
    teamMembers: [
      { name: "yq", about: { en: "engineer in the Netherlands", de: "Ingenieur:in in den Niederlanden", zh: "在荷兰的工程师" } },
      { name: "白博士", about: { en: "autism researcher in the UK", de: "Autismusforscher:in in Großbritannien", zh: "在英国的自闭症研究者" } },
      { name: "马儿", about: { en: "psychology lecturer at a university", de: "Psychologiedozent:in an einer Hochschule", zh: "在高校的心理学老师" } },
      { name: "Tonghe", about: { en: "science advisor in Germany", de: "wissenschaftliche Beratung, Deutschland", zh: "在德国的科学顾问" } },
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
