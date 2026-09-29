/*
 * PROFILE — everything on the page that is not a project:
 * intro, links, skills, experience, education, awards.
 * Edit the text here; the page updates automatically.
 * Text fields are { en, de, zh }; plain strings are the same in every language.
 */

window.PROFILE = {
  name: { en: "Tonghe Zhuang", de: "Tonghe Zhuang", zh: "庄童贺" },
  role: {
    en: "Computational cognitive neuroscientist · Data scientist",
    de: "Computational Cognitive Neuroscientist · Data Scientist",
    zh: "计算认知神经科学家 · 数据科学家",
  },
  tagline: "Psychology → Brain → AI",
  location: { en: "Giessen, Germany", de: "Gießen, Deutschland", zh: "德国吉森" },
  photo: "images/portrait.jpg",

  intro: [
    {
      en: "I am a computational cognitive neuroscientist and data scientist. Over eleven years my research has moved from psychology, where I became curious about people, to cognitive neuroscience, where I wanted to understand the mechanisms in the brain, to large-scale computational work with big data and AI. Each step asked a harder version of the same question.",
      de: "Ich bin Computational Cognitive Neuroscientist und Data Scientist. In elf Jahren führte mich meine Forschung von der Psychologie, wo mich Menschen neugierig gemacht haben, über die kognitive Neurowissenschaft, wo ich die Mechanismen im Gehirn verstehen wollte, bis zu groß angelegter computergestützter Forschung mit Big Data und KI. Mit jedem Schritt wurde dieselbe Frage etwas schwieriger.",
      zh: "我是一名计算认知神经科学家和数据科学家。十一年来，我的研究从心理学走到认知神经科学，再到今天基于大数据和 AI 的大规模计算认知神经科学：从对人的好奇，到想弄懂大脑里的机制，再到借助海量数据和模型去检验它。每往前一步，都是把同一个问题问得更难一点。",
    },
    {
      en: "My work brings together large behavioural datasets (over a million human judgements), EEG and fMRI with deep learning models. One question runs through all of it: what has a model actually learned, and how close is that to the human mind?",
      de: "In meiner Arbeit verbinde ich große Verhaltensdatensätze (über eine Million menschlicher Urteile), EEG und fMRT mit Deep-Learning-Modellen. Eine Frage zieht sich durch alles: Was hat ein Modell tatsächlich gelernt, und wie nah ist das am menschlichen Denken?",
      zh: "我的工作把大规模行为数据（超过一百万条人类判断）、EEG 和 fMRI 与深度学习模型结合在一起。贯穿其中的始终是一个问题：模型究竟学到了什么？它与人类心智又有多接近？",
    },
    {
      en: "I did my PhD at the University of Regensburg and my postdoc at the Max Planck Institute for Human Cognitive and Brain Sciences and the University of Giessen. I like to own a problem end to end, from experimental design and data collection to modelling and a result other people can use.",
      de: "Promoviert habe ich an der Universität Regensburg, als Postdoc habe ich am Max-Planck-Institut für Kognitions- und Neurowissenschaften und an der Universität Gießen geforscht. Ich übernehme ein Problem gern von Anfang bis Ende: vom Versuchsdesign und der Datenerhebung über die Modellierung bis zu einem Ergebnis, mit dem andere weiterarbeiten können.",
      zh: "我在雷根斯堡大学获得博士学位，之后在马克斯·普朗克人类认知与脑科学研究所和吉森大学做博士后。我喜欢把一个问题从头到尾做完：从实验设计、数据采集到建模，最后得到别人可以直接使用的结果。",
    },
  ],

  links: [
    { label: { en: "Email", de: "E-Mail", zh: "邮箱" }, url: "mailto:tonghezhuang@gmail.com" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=Sojbah0AAAAJ&hl=en" },
    { label: "GitHub", url: "https://github.com/zhuang0409" },
    { label: { en: "CV (PDF)", de: "Lebenslauf (PDF)", zh: "简历（PDF）" }, url: "files/Tonghe_Zhuang_CV.pdf" },
  ],

  skills: [
    {
      group: { en: "Languages & tools", de: "Sprachen & Tools", zh: "编程语言与工具" },
      items: ["Python", "Git", "AWS", "Jupyter", "MATLAB", { en: "R (basic)", de: "R (Grundkenntnisse)", zh: "R（基础）" }],
    },
    {
      group: { en: "Machine learning", de: "Maschinelles Lernen", zh: "机器学习" },
      items: [
        "PyTorch",
        "CNNs (ResNet, AlexNet, EEGNet)",
        { en: "Multi-modal representation learning", de: "Multimodales Repräsentationslernen", zh: "多模态表征学习" },
        { en: "Encoding & decoding models", de: "Encoding- und Decoding-Modelle", zh: "编码与解码模型" },
        { en: "Transfer learning", de: "Transfer Learning", zh: "迁移学习" },
        { en: "Cross-validated benchmarking", de: "Kreuzvalidiertes Benchmarking", zh: "交叉验证基准测试" },
      ],
    },
    {
      group: { en: "Signal processing", de: "Signalverarbeitung", zh: "信号处理" },
      items: [
        { en: "EEG acquisition & preprocessing", de: "EEG-Erhebung & Vorverarbeitung", zh: "EEG 采集与预处理" },
        { en: "Artefact handling", de: "Artefaktbehandlung", zh: "伪迹处理" },
        { en: "Time-resolved decoding", de: "Zeitaufgelöstes Decoding", zh: "时间分辨解码" },
        { en: "MRI preprocessing pipelines", de: "MRT-Vorverarbeitungspipelines", zh: "MRI 预处理流程" },
      ],
    },
    {
      group: { en: "Data & statistics", de: "Daten & Statistik", zh: "数据与统计" },
      items: [
        "pandas",
        "NumPy",
        "SciPy",
        "scikit-learn",
        { en: "Large-scale QC (1M+ records)", de: "Qualitätskontrolle im großen Maßstab (1 Mio.+ Datensätze)", zh: "大规模质量控制（100 万+ 条记录）" },
        { en: "Experimental design", de: "Versuchsplanung", zh: "实验设计" },
        { en: "Statistical inference", de: "Statistische Inferenz", zh: "统计推断" },
      ],
    },
    {
      group: { en: "Methods", de: "Methoden", zh: "方法" },
      items: ["MVPA", "RSA", { en: "Health & clinical research data", de: "Gesundheits- und klinische Forschungsdaten", zh: "健康与临床研究数据" }],
    },
  ],

  experience: [
    {
      title: {
        en: "Postdoctoral Researcher, Computational Cognitive Neuroscience",
        de: "Postdoc, Computational Cognitive Neuroscience",
        zh: "博士后研究员，计算认知神经科学",
      },
      org: {
        en: "Max Planck Institute for Human Cognitive and Brain Sciences & Justus Liebig University Giessen",
        de: "Max-Planck-Institut für Kognitions- und Neurowissenschaften & Justus-Liebig-Universität Gießen",
        zh: "马克斯·普朗克人类认知与脑科学研究所 & 吉森大学",
      },
      period: "Nov 2023 – Sep 2026",
      points: [
        {
          en: "Built multi-modal models of how the same concept is represented as text versus image; benchmarked deep networks in PyTorch against over one million human judgements.",
          de: "Multimodale Modelle dazu entwickelt, wie derselbe Begriff als Text bzw. als Bild repräsentiert wird; tiefe Netze in PyTorch mit über einer Million menschlicher Urteile verglichen.",
          zh: "构建多模态模型，研究同一个概念以文字和以图像呈现时的表征差异；用 PyTorch 训练深度网络，并以超过一百万条人类判断为基准进行评估。",
        },
        {
          en: "Designed end-to-end Python pipelines across behavioural, fMRI and EEG data: ingestion, QC, feature extraction, model fitting, statistical validation.",
          de: "End-to-End-Pipelines in Python für Verhaltens-, fMRT- und EEG-Daten entworfen: Datenaufnahme, Qualitätskontrolle, Feature-Extraktion, Modellanpassung, statistische Validierung.",
          zh: "为行为、fMRI 和 EEG 数据设计端到端的 Python 流程：数据导入、质量控制、特征提取、模型拟合和统计验证。",
        },
        {
          en: "Built and documented a large-scale imaging dataset for reuse.",
          de: "Einen großen Bildgebungsdatensatz zur Nachnutzung aufgebaut und dokumentiert.",
          zh: "建立并记录了一个可供他人复用的大规模影像数据集。",
        },
        {
          en: "Mentored one MSc thesis student and 12 interns; ran an internal course on representational analysis methods.",
          de: "Eine Masterstudentin bzw. einen Masterstudenten und 12 Praktikant:innen betreut; einen internen Kurs zu Methoden der Repräsentationsanalyse geleitet.",
          zh: "指导了 1 名硕士论文学生和 12 名实习生；在组内开设了表征分析方法课程。",
        },
      ],
    },
    {
      title: {
        en: "Doctoral Researcher, Cognitive Neuroscience",
        de: "Doktorand:in, Kognitive Neurowissenschaft",
        zh: "博士研究生，认知神经科学",
      },
      org: { en: "University of Regensburg", de: "Universität Regensburg", zh: "雷根斯堡大学" },
      period: "Nov 2018 – Oct 2023",
      points: [
        {
          en: "Ran one EEG, two fMRI and eleven behavioural studies end to end with 200 participants.",
          de: "Eine EEG-, zwei fMRT- und elf Verhaltensstudien mit 200 Teilnehmenden von Anfang bis Ende durchgeführt.",
          zh: "从头到尾完成了 1 项 EEG、2 项 fMRI 和 11 项行为研究，共 200 名被试。",
        },
        {
          en: "Developed time-resolved EEG decoding methods recovering hierarchical structure in observed actions.",
          de: "Zeitaufgelöste EEG-Decoding-Methoden entwickelt, die die hierarchische Struktur beobachteter Handlungen sichtbar machen.",
          zh: "开发了时间分辨的 EEG 解码方法，揭示了被观察动作中的层级结构。",
        },
        {
          en: "Two first-author publications and two competitive funding awards.",
          de: "Zwei Erstautorschaften und zwei kompetitive Förderungen.",
          zh: "发表 2 篇第一作者论文，获得 2 项竞争性资助。",
        },
      ],
    },
    {
      title: { en: "International Research Associate", de: "International Research Associate", zh: "国际研究员" },
      org: {
        en: "Joint International Research Unit on Neuroplasticity (Laval University / University of Liège)",
        de: "Joint International Research Unit on Neuroplasticity (Université Laval / Universität Lüttich)",
        zh: "神经可塑性国际联合研究单位（拉瓦尔大学 / 列日大学）",
      },
      period: { en: "Concurrent", de: "Parallel", zh: "同期" },
      points: [
        {
          en: "Clinical research collaboration on disorders of consciousness.",
          de: "Klinische Forschungskooperation zu Bewusstseinsstörungen.",
          zh: "参与意识障碍方向的临床研究合作。",
        },
      ],
    },
    {
      title: { en: "Associate Editor", de: "Associate Editor", zh: "副编辑" },
      org: "Brain Connectivity",
      period: { en: "Concurrent", de: "Parallel", zh: "同期" },
      points: [],
    },
    {
      title: { en: "Research Mentor", de: "Research Mentor", zh: "科研导师" },
      org: "Neuromatch Academy",
      period: "2024",
      points: [
        {
          en: "Mentored an international team of PhD and master's students through an fMRI project in the Impact Scholars programme, ending in a short publication (Zenodo, 2025) and a recorded presentation on YouTube.",
          de: "Ein internationales Team aus Doktorand:innen und Masterstudierenden im Impact-Scholars-Programm durch ein fMRT-Projekt begleitet, das mit einer kurzen Publikation (Zenodo, 2025) und einem aufgezeichneten Vortrag auf YouTube abgeschlossen wurde.",
          zh: "在 Impact Scholars 项目中指导一支由世界各地博士生和硕士生组成的团队完成一个 fMRI 项目，最终产出一篇短文（Zenodo，2025）和一段 YouTube 成果展示视频。",
        },
      ],
    },
  ],

  education: [
    {
      degree: { en: "PhD, Cognitive Neuroscience", de: "Promotion, Kognitive Neurowissenschaft", zh: "博士，认知神经科学" },
      org: { en: "University of Regensburg, Germany", de: "Universität Regensburg, Deutschland", zh: "德国雷根斯堡大学" },
      period: "2018 – 2023",
    },
    {
      degree: { en: "MSc, Cognitive Neuroscience", de: "Master, Kognitive Neurowissenschaft", zh: "硕士，认知神经科学" },
      org: { en: "Beijing Normal University, China", de: "Beijing Normal University, China", zh: "北京师范大学" },
      period: "2015 – 2018",
    },
    {
      degree: { en: "BSc, Psychology", de: "Bachelor, Psychologie", zh: "学士，心理学" },
      org: { en: "Liaoning Normal University, China", de: "Liaoning Normal University, China", zh: "辽宁师范大学" },
      period: "2011 – 2015",
    },
  ],

  awards: [
    {
      en: "Research Scholarship for Female Early Career Researchers (2021 – 2022)",
      de: "Forschungsstipendium für Nachwuchswissenschaftlerinnen (2021 – 2022)",
      zh: "女性青年科研人员研究奖学金（2021 – 2022）",
    },
    {
      en: "China Scholarship Council Scholarship (2018 – 2021)",
      de: "Stipendium des China Scholarship Council (2018 – 2021)",
      zh: "国家留学基金委奖学金（2018 – 2021）",
    },
    {
      en: "Student Abstract Award, CAOs Workshop (2017)",
      de: "Student Abstract Award, CAOs Workshop (2017)",
      zh: "CAOs Workshop 学生摘要奖（2017）",
    },
  ],

  spokenLanguages: {
    en: "Chinese (native) · English (fluent) · German (A2, in progress)",
    de: "Chinesisch (Muttersprache) · Englisch (fließend) · Deutsch (A2, im Aufbau)",
    zh: "中文（母语）· 英语（流利）· 德语（A2，学习中）",
  },
};
