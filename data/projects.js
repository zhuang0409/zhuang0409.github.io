/*
 * PROJECTS — the single source of truth for the Projects and Publications sections.
 *
 * To add a project: copy one { ... } block, paste it where you want it to appear
 * (order here = order on the page), and fill in the fields.
 *
 * Fields
 *   id        short unique name, lowercase-with-dashes (used in the page URL: #death-memorability)
 *   featured  true = highlighted card with larger key numbers (optional)
 *   title     project title
 *   period    e.g. "2023 – present"
 *   where     lab / institution
 *   with      collaborators (optional)
 *   summary   1–2 sentences, always visible
 *   stats     key numbers: [{ value: "1.3 M", label: { en: "similarity judgements", de: "Ähnlichkeitsurteile", zh: "次相似性判断" } }] (optional)
 *   details   longer text, shown when "More" is clicked (optional). Paragraphs = array of strings.
 *   tags      methods / tools
 *   images    [{ src, caption }]  (put image files in site/images/)
 *   outputs   papers, preprints, posters, talks belonging to this project:
 *     type      one of: "article" | "preprint" | "report" | "manuscript" | "poster" | "talk"
 *     title, authors, venue, year
 *     links     { pdf, doi, slides, code, data, scholar, ... } — any label works, value = URL or file path
 *     note      optional short note, e.g. "co-first author", "in preparation"
 *   citedBy   notable work citing this project (same fields as outputs, no type) (optional)
 *
 * Text fields are { en: "...", de: "...", zh: "..." } (English, German, Chinese).
 * Paper titles, authors, venues and tags stay in English.
 */

window.PROJECTS = [
  {
    id: "object-words-images",
    featured: true,
    title: { en: "Object words and object images in mind and brain", de: "Objektwörter und Objektbilder in Geist und Gehirn", zh: "心智与大脑中的物体词语和物体图像" },
    period: { en: "2023 – present", de: "2023 – heute", zh: "2023年至今" },
    where: { en: "Max Planck Institute CBS & Justus Liebig University Giessen", de: "Max-Planck-Institut für Kognitions- und Neurowissenschaften & Justus-Liebig-Universität Gießen", zh: "马克斯·普朗克人类认知与脑科学研究所 & 吉森大学" },
    with: "Laura M. Stoinski, Martin N. Hebart",
    summary:
      {
        en: "Is the concept “dog” represented the same way when we read the word as when we see a picture? From 1.3 million crowdsourced odd-one-out judgements on 1,388 THINGS object nouns, we derived 50 interpretable word dimensions, compared them with image-derived dimensions, and mapped both onto a dedicated fMRI dataset.",
        de: "Wird das Konzept „Hund“ gleich repräsentiert, wenn wir das Wort lesen und wenn wir ein Bild sehen? Aus 1,3 Millionen per Crowdsourcing erhobenen Odd-one-out-Urteilen zu 1.388 THINGS-Objektnomen haben wir 50 interpretierbare Wortdimensionen abgeleitet, sie mit bildbasierten Dimensionen verglichen und beide auf einen eigens erhobenen fMRT-Datensatz abgebildet.",
        zh: "当我们读到“狗”这个词和看到一张狗的图片时，大脑对这个概念的表征是否相同？我们基于对 1,388 个 THINGS 物体名词的 130 万次众包“找不同”判断，提炼出 50 个可解释的词语维度，将其与图像维度进行比较，并把两者映射到专门采集的 fMRI 数据集上。",
      },
    stats: [
      { value: "1.3 M", label: { en: "similarity judgements", de: "Ähnlichkeitsurteile", zh: "次相似性判断" } },
      { value: "5,015", label: { en: "online participants", de: "Online-Teilnehmende", zh: "名在线被试" } },
      { value: "1,388", label: { en: "object words", de: "Objektwörter", zh: "个物体词语" } },
      { value: "50", label: { en: "word-derived dimensions", de: "wortbasierte Dimensionen", zh: "个词语维度" } },
      { value: "r = 0.83", label: { en: "word ↔ image dimensions", de: "Wort- ↔ Bilddimensionen", zh: "词语维度 ↔ 图像维度" } },
      { value: "5 × 15", label: { en: "fMRI participants × sessions", de: "fMRT-Teilnehmende × Sitzungen", zh: "fMRI 被试 × 扫描次数" } },
    ],
    details: [
      {
        en: "Behaviour: a SPoSE embedding model trained on the triplet choices predicts similarity with high accuracy (r = 0.93 against measured similarity). Word dimensions capture higher-level categories and known semantic relationships better than existing semantic norms. Word and image representations are very similar but not the same: colour and texture dimensions are unique to images.",
        de: "Verhalten: Ein auf den Triplet-Entscheidungen trainiertes SPoSE-Embedding-Modell sagt Ähnlichkeit mit hoher Genauigkeit vorher (r = 0,93 gegenüber gemessener Ähnlichkeit). Wortdimensionen erfassen übergeordnete Kategorien und bekannte semantische Beziehungen besser als bestehende semantische Normen. Wort- und Bildrepräsentationen sind sehr ähnlich, aber nicht identisch: Farb- und Texturdimensionen gibt es nur bei Bildern.",
        zh: "行为：基于三元组选择训练的 SPoSE 嵌入模型能高精度地预测相似性（与实测相似性的相关 r = 0.93）。与现有语义常模相比，词语维度能更好地捕捉上位类别和已知的语义关系。词语表征与图像表征非常相似，但并不相同：颜色和纹理维度只存在于图像中。",
      },
      {
        en: "fMRI: 5 participants × 15 sessions, 480 words (×8 repetitions) and 960 image pairs (×4). Both word- and image-derived embeddings predict responses to images; shared representations concentrate in ventral temporal cortex, word-only effects extend into right frontal regions, and image-only effects stay in visual areas.",
        de: "fMRT: 5 Teilnehmende × 15 Sitzungen, 480 Wörter (×8 Wiederholungen) und 960 Bildpaare (×4). Sowohl wort- als auch bildbasierte Embeddings sagen Antworten auf Bilder vorher; gemeinsame Repräsentationen konzentrieren sich im ventralen Temporalkortex, rein wortbezogene Effekte reichen in rechte frontale Regionen, und rein bildbezogene Effekte bleiben auf visuelle Areale beschränkt.",
        zh: "fMRI：5 名被试 × 15 次扫描，480 个词语（×8 次重复）和 960 对图像（×4）。基于词语和基于图像的嵌入都能预测对图像的反应；共享表征集中在腹侧颞叶皮层，仅与词语相关的效应延伸到右侧额叶区域，仅与图像相关的效应则局限于视觉区。",
      },
      {
        en: "Three papers are in preparation: a data paper describing the fMRI dataset, a behavioural paper on the word embedding, and an fMRI paper on shared and distinct neural representations.",
        de: "Drei Artikel sind in Vorbereitung: ein Datenartikel zum fMRT-Datensatz, ein Verhaltensartikel zum Wort-Embedding und ein fMRT-Artikel zu gemeinsamen und unterschiedlichen neuronalen Repräsentationen.",
        zh: "三篇文章正在撰写中：一篇介绍 fMRI 数据集的数据论文，一篇关于词语嵌入的行为论文，以及一篇关于共享与独特神经表征的 fMRI 论文。",
      },
    ],
    tags: ["Python", "PyTorch", "SPoSE embedding", "Triplet odd-one-out", "Large-scale crowdsourcing", "Multi-modal representations", "fMRI", "Voxel-wise encoding", "RSA", "THINGS"],
    images: [
      { src: "images/object-words-SFB-poster.jpg", caption: { en: "Words vs. images: behaviour and fMRI (SFB poster)", de: "Wörter vs. Bilder: Verhalten und fMRT (SFB-Poster)", zh: "词语 vs. 图像：行为与 fMRI（SFB 海报）" } },
      { src: "images/object-words-CNS2025-poster.jpg", caption: { en: "Multidimensional representations of object nouns (CNS 2025)", de: "Multidimensionale Repräsentationen von Objektnomen (CNS 2025)", zh: "物体名词的多维表征（CNS 2025）" } },
    ],
    outputs: [
      {
        type: "manuscript",
        title: "Data paper: an fMRI dataset of object words and object images", // TODO: working title
        note: { en: "in preparation", de: "in Vorbereitung", zh: "撰写中" },
      },
      {
        type: "manuscript",
        title: "Behavioural paper: the multidimensional representations of object words", // TODO: working title
        note: { en: "in preparation", de: "in Vorbereitung", zh: "撰写中" },
      },
      {
        type: "manuscript",
        title: "fMRI paper: shared and distinct neural representations of object words and images", // TODO: working title
        note: { en: "in preparation", de: "in Vorbereitung", zh: "撰写中" },
      },
      {
        type: "poster",
        title: "Revealing the mental and neural representations of object words and object images",
        authors: "Zhuang, T.*, Stoinski, L. M.*, Zhou, M., St-Laurent, M., Satzger, R., & Hebart, M. N.",
        venue: "CAOs 2025",
        year: 2025,
        note: { en: "* equal contribution", de: "* gleicher Beitrag", zh: "* 同等贡献" },
        links: { pdf: "files/object-words-images-SFB-poster.pdf" },
      },
      {
        type: "poster",
        title: "Comparing the multidimensional mental representations of object images and object nouns",
        authors: "Stoinski, L. M., Zhuang, T., Baker, C. I., & Hebart, M. N.",
        venue: "CNS 2025",
        year: 2025,
        links: { pdf: "files/object-words-images-CNS2025-poster.pdf" },
      },
    ],
  },

  {
    id: "representational-relevance",
    featured: true,
    title: { en: "Representational relevance of object concepts", de: "Repräsentationale Relevanz von Objektkonzepten", zh: "物体概念的表征相关性" },
    period: { en: "2024 – present", de: "2024 – heute", zh: "2024年至今" }, // TODO: confirm
    where: { en: "Max Planck Institute CBS & Justus Liebig University Giessen", de: "Max-Planck-Institut für Kognitions- und Neurowissenschaften & Justus-Liebig-Universität Gießen", zh: "马克斯·普朗克人类认知与脑科学研究所 & 吉森大学" },
    with: "Selma Akarsu, Malin Styrnal, Martin N. Hebart",
    summary:
      {
        en: "What is most frequent in the world is not necessarily what is most central in our minds. We introduce Representational Relevance (RR), how likely an object concept is to come to mind across people. We measure it with two large online tasks, and show it predicts neural responses in high-level occipitotemporal cortex.",
        de: "Was in der Welt am häufigsten vorkommt, ist nicht unbedingt das, was in unserem Denken am zentralsten ist. Wir führen Representational Relevance (RR) ein: wie wahrscheinlich es ist, dass Menschen ein Objektkonzept in den Sinn kommt. Wir messen RR mit zwei großen Online-Aufgaben und zeigen, dass sie neuronale Antworten im höheren okzipitotemporalen Kortex vorhersagt.",
        zh: "世界上最常见的东西，未必是我们心中最核心的东西。我们提出“表征相关性”（Representational Relevance，RR），即一个物体概念在不同人心中被想到的可能性。我们通过两项大规模在线任务测量 RR，并发现它能预测高级枕颞皮层的神经反应。",
      },
    stats: [
      { value: "55,520", label: { en: "rating trials", de: "Bewertungsdurchgänge", zh: "次评分试次" } },
      { value: "6,000", label: { en: "ranking trials", de: "Rangordnungsdurchgänge", zh: "次排序试次" } },
      { value: "1,388", label: { en: "object concepts", de: "Objektkonzepte", zh: "个物体概念" } },
      { value: ".994", label: { en: "split-half reliability", de: "Split-Half-Reliabilität", zh: "分半信度" } },
      { value: "ρ = .75", label: { en: "with age of acquisition", de: "mit dem Erwerbsalter", zh: "与习得年龄的相关" } },
    ],
    details: [
      {
        en: "Step 1, word ranking: 200 THINGS nouns ranked by how often 1,000 people would name them (6,000 trials, ~240 rankings per word). Spearman–Brown corrected reliability .994.",
        de: "Schritt 1, Wortrangordnung: 200 THINGS-Nomen, geordnet danach, wie oft 1.000 Menschen sie nennen würden (6.000 Durchgänge, ~240 Rangordnungen pro Wort). Spearman-Brown-korrigierte Reliabilität .994.",
        zh: "第一步，词语排序：按 1,000 个人会多频繁地说出这些词，对 200 个 THINGS 名词排序（6,000 个试次，每个词约 240 次排序）。经 Spearman-Brown 校正的信度为 .994。",
      },
      {
        en: "Step 2, anchored rating: all 1,388 THINGS nouns placed on a two-level zoomable scale (55,520 trials, ~40 ratings per word). Reliability .957.",
        de: "Schritt 2, verankerte Bewertung: alle 1.388 THINGS-Nomen auf einer zweistufigen, zoombaren Skala platziert (55.520 Durchgänge, ~40 Bewertungen pro Wort). Reliabilität .957.",
        zh: "第二步，锚定评分：将全部 1,388 个 THINGS 名词放在一个可缩放的两级量表上（55,520 个试次，每个词约 40 次评分）。信度为 .957。",
      },
      {
        en: "RR correlates with age of acquisition (ρ = .73–.75), lexical decision time (ρ = .71–.73) and word frequency (ρ = −.66 to −.69) while remaining distinct from them. Voxel-wise encoding models show RR reliably predicts responses in high-level occipitotemporal cortex.",
        de: "RR korreliert mit dem Erwerbsalter (ρ = .73–.75), der lexikalischen Entscheidungszeit (ρ = .71–.73) und der Worthäufigkeit (ρ = −.66 bis −.69), bleibt aber von diesen Maßen unterscheidbar. Voxelweise Encoding-Modelle zeigen, dass RR Antworten im höheren okzipitotemporalen Kortex zuverlässig vorhersagt.",
        zh: "RR 与习得年龄（ρ = .73–.75）、词汇判断时间（ρ = .71–.73）和词频（ρ = −.66 至 −.69）相关，但又与它们相互区别。体素水平的编码模型显示，RR 能可靠地预测高级枕颞皮层的反应。",
      },
    ],
    tags: ["Online experiment design", "Drag-and-drop ranking", "Anchored rating scales", "Psychometrics", "Split-half reliability", "Psycholinguistic norms", "fMRI", "Voxel-wise encoding", "Cross-validation", "Python"],
    images: [{ src: "images/rr-VSS2026-poster.jpg", caption: { en: "Behavioral and neural signatures of representational relevance (VSS 2026)", de: "Verhaltens- und neuronale Signaturen repräsentationaler Relevanz (VSS 2026)", zh: "表征相关性的行为与神经特征（VSS 2026）" } }],
    outputs: [
      {
        type: "poster",
        title: "Behavioral and neural signatures of representational relevance for object concepts",
        authors: "Zhuang, T., Akarsu, S., Styrnal, M., & Hebart, M. N.",
        venue: "VSS 2026",
        year: 2026,
        links: { pdf: "files/representational-relevance-VSS2026-poster.pdf" },
      },
    ],
  },

  {
    id: "model-uncertainty",
    title: { en: "When models hesitate, humans also struggle", de: "Wenn Modelle zögern, tun sich auch Menschen schwer", zh: "模型犹豫时，人也会吃力" },
    period: "2025", // TODO: confirm
    where: { en: "Max Planck Institute CBS & Justus Liebig University Giessen", de: "Max-Planck-Institut für Kognitions- und Neurowissenschaften & Justus-Liebig-Universität Gießen", zh: "马克斯·普朗克人类认知与脑科学研究所 & 吉森大学" },
    solo: true, // independent project, no collaborators
    summary:
      {
        en: "Why are deep networks uncertain about some images? Across all 26,107 THINGS images, prediction entropy is driven more by semantic ambiguity than by low-level visual features. Images that make models hesitate also demand more processing in the human brain, seen in EEG from ~130 ms and in higher-level cortex with fMRI.",
        de: "Warum sind tiefe Netze bei manchen Bildern unsicher? Über alle 26.107 THINGS-Bilder hinweg wird die Vorhersageentropie stärker von semantischer Mehrdeutigkeit bestimmt als von einfachen visuellen Merkmalen. Bilder, bei denen Modelle zögern, erfordern auch im menschlichen Gehirn mehr Verarbeitung: im EEG ab ~130 ms und im fMRT in höheren kortikalen Arealen.",
        zh: "为什么深度网络对某些图像不确定？在全部 26,107 张 THINGS 图像中，预测熵更多由语义模糊性而非低层视觉特征驱动。让模型犹豫的图像，在人脑中同样需要更多加工：EEG 中约 130 ms 起即可观察到，fMRI 中则体现在高级皮层。",
      },
    stats: [
      { value: "26,107", label: { en: "images", de: "Bilder", zh: "张图像" } },
      { value: "1,854", label: { en: "object concepts", de: "Objektkonzepte", zh: "个物体概念" } },
      { value: "27", label: { en: "categories", de: "Kategorien", zh: "个类别" } },
      { value: "2", label: { en: "CNN training diets", de: "CNN-Trainingsdatensätze", zh: "种 CNN 训练数据集" } },
      { value: "~130 ms", label: { en: "EEG decoding peak", de: "EEG-Dekodierungsgipfel", zh: "EEG 解码峰值" } },
    ],
    details: [
      {
        en: "Q1, why models hesitate: entropy of CNN predictions was computed for every image, ranked across concepts and categories, and related to interpretable semantic and visual dimensions. Semantic dimensions explain more of it.",
        de: "Q1, warum Modelle zögern: Die Entropie der CNN-Vorhersagen wurde für jedes Bild berechnet, über Konzepte und Kategorien hinweg geordnet und mit interpretierbaren semantischen und visuellen Dimensionen in Beziehung gesetzt. Semantische Dimensionen erklären mehr davon.",
        zh: "Q1，模型为何犹豫：我们计算了每张图像的 CNN 预测熵，在概念和类别层面排序，并与可解释的语义维度和视觉维度相关联。语义维度解释得更多。",
      },
      {
        en: "Q2, uncertainty as a diagnostic: comparing ImageNet- and Ecoset-pretrained networks, and probing image morph sequences (cat → clothing), shows how networks differ in their decisions without needing access to their weights.",
        de: "Q2, Unsicherheit als Diagnosewerkzeug: Der Vergleich von auf ImageNet und Ecoset vortrainierten Netzen sowie Bild-Morphing-Sequenzen (Katze → Kleidung) zeigt, wie sich Netze in ihren Entscheidungen unterscheiden, ohne Zugriff auf ihre Gewichte zu benötigen.",
        zh: "Q2，把不确定性当作诊断工具：比较在 ImageNet 和 Ecoset 上预训练的网络，并考察图像渐变序列（猫 → 衣物），可以在无需访问网络权重的情况下，看出不同网络在决策上的差异。",
      },
      {
        en: "Q3, humans: EEG responses to the 25% highest- vs. 25% lowest-entropy images differ in parieto-occipital ERPs and are decodable with cross-validated classifiers (leave-images-out), peaking ~130 ms.",
        de: "Q3, Menschen: EEG-Antworten auf die 25% Bilder mit der höchsten und die 25% mit der niedrigsten Entropie unterscheiden sich in parieto-okzipitalen EKPs und lassen sich mit kreuzvalidierten Klassifikatoren (leave-images-out) dekodieren, mit einem Gipfel bei ~130 ms.",
        zh: "Q3，人类：对熵最高的 25% 与最低的 25% 图像，EEG 反应在顶枕区 ERP 上存在差异，并可用交叉验证分类器（留出图像）解码，峰值约在 130 ms。",
      },
      {
        en: "Q4, brain: fMRI encoding shows sensitivity to model uncertainty in higher-level occipitotemporal cortex rather than early visual cortex.",
        de: "Q4, Gehirn: fMRT-Encoding zeigt Sensitivität für Modellunsicherheit im höheren okzipitotemporalen Kortex statt im frühen visuellen Kortex.",
        zh: "Q4，大脑：fMRI 编码分析显示，对模型不确定性的敏感性出现在高级枕颞皮层，而非早期视觉皮层。",
      },
    ],
    tags: ["PyTorch", "CNNs (ImageNet vs. Ecoset)", "Predictive entropy", "Model interpretability", "Image morphing", "EEG / ERP", "Time-resolved decoding", "Cross-validation", "fMRI encoding", "THINGS"],
    images: [{ src: "images/uncertainty-overview.jpg", caption: { en: "Project overview: uncertainty in models, EEG and fMRI", de: "Projektüberblick: Unsicherheit in Modellen, EEG und fMRT", zh: "项目概览：模型、EEG 与 fMRI 中的不确定性" } }],
    outputs: [
      {
        type: "talk",
        title: "When model hesitates, humans also struggle",
        authors: "Zhuang, T.",
        venue: "Hebart Lab talk", // TODO: confirm venue
        year: 2025,
        links: { slides: "files/uncertainty-talk.pdf" },
      },
    ],
  },

  {
    id: "death-memorability",
    title: { en: "Death is not a visual kind. It is a family.", de: "Der Tod ist keine visuelle Kategorie. Er ist eine Familie.", zh: "死亡不是一种视觉类别，而是一个家族。" },
    period: { en: "2025 – present", de: "2025 – heute", zh: "2025年至今" }, // TODO: confirm
    where: { en: "Laureys Lab", de: "Laureys Lab", zh: "Laureys 实验室" },
    with: "Steven Laureys",
    summary:
      {
        en: "Do vision-based memorability models capture everything that makes an image memorable? Across 4,345 paintings from the Art Institute of Chicago, mortality-related paintings are predicted to be more memorable, and the advantage runs through emotional arousal, not a shared visual template.",
        de: "Erfassen bildbasierte Memorierbarkeitsmodelle alles, was ein Bild einprägsam macht? Bei 4.345 Gemälden des Art Institute of Chicago werden Gemälde mit Todesbezug als einprägsamer vorhergesagt, und dieser Vorteil läuft über emotionale Erregung, nicht über eine gemeinsame visuelle Vorlage.",
        zh: "基于视觉的记忆度模型，能否捕捉到让一幅图像令人难忘的全部因素？在芝加哥艺术博物馆的 4,345 幅画作中，与死亡相关的画作被预测为更令人难忘，而这一优势来自情绪唤醒，而非共同的视觉模板。",
      },
    stats: [
      { value: "4,345", label: { en: "paintings", de: "Gemälde", zh: "幅画作" } },
      { value: "488", label: { en: "mortality-related", de: "mit Todesbezug", zh: "幅与死亡相关" } },
      { value: "7", label: { en: "CNN layers compared", de: "verglichene CNN-Schichten", zh: "个 CNN 层对比" } },
      { value: "0.92", label: { en: "peak decoding accuracy (fc7)", de: "maximale Dekodiergenauigkeit (fc7)", zh: "最高解码准确率（fc7）" } },
      { value: "r .82 → .62", label: { en: "prediction gap in death paintings", de: "Vorhersagelücke bei Todesgemälden", zh: "死亡主题画作中的预测落差" } },
    ],
    details: [
      {
        en: "Predicted memorability (ResMem), hierarchical visual features (ImageNet-pretrained AlexNet, conv1 → fc7, PCA to 100 components per layer) and CLIP zero-shot valence and arousal estimates were computed for every painting.",
        de: "Für jedes Gemälde wurden die vorhergesagte Memorierbarkeit (ResMem), hierarchische visuelle Merkmale (auf ImageNet vortrainiertes AlexNet, conv1 → fc7, PCA auf 100 Komponenten pro Schicht) sowie CLIP-Zero-Shot-Schätzungen von Valenz und Erregung berechnet.",
        zh: "我们为每幅画作计算了预测记忆度（ResMem）、层级视觉特征（ImageNet 预训练的 AlexNet，conv1 → fc7，每层经 PCA 降至 100 个成分），以及 CLIP 零样本估计的效价和唤醒度。",
      },
      {
        en: "Death paintings scored higher in predicted memorability (M = 0.756 vs. 0.731, d = 0.22, p < .001) and were increasingly separable from non-death paintings along the network hierarchy (linear SVM, 5-fold CV). Yet the same features predicted memorability less well within death paintings (r = 0.62 vs. 0.82), and different death subcategories peaked at different depths.",
        de: "Todesgemälde erzielten eine höhere vorhergesagte Memorierbarkeit (M = 0,756 vs. 0,731, d = 0,22, p < .001) und ließen sich entlang der Netzwerkhierarchie zunehmend von anderen Gemälden trennen (lineare SVM, 5-fache CV). Dieselben Merkmale sagten die Memorierbarkeit innerhalb der Todesgemälde jedoch schlechter vorher (r = 0,62 vs. 0,82), und verschiedene Unterkategorien erreichten ihr Maximum in unterschiedlichen Tiefen.",
        zh: "死亡主题画作的预测记忆度更高（M = 0.756 vs. 0.731，d = 0.22，p < .001），并且沿网络层级与非死亡画作越来越容易区分（线性 SVM，5 折交叉验证）。然而，同样的特征对死亡画作内部记忆度的预测更弱（r = 0.62 vs. 0.82），而且不同的死亡子类别在不同深度达到峰值。",
      },
      {
        en: "Mediation: mortality → arousal (a = 0.25) → memorability (b = 0.08); indirect effect 0.021, 95% CI [0.013, 0.028], direct effect n.s. Memorability models capture substantial but incomplete structure in affectively charged images.",
        de: "Mediation: Todesbezug → Erregung (a = 0,25) → Memorierbarkeit (b = 0,08); indirekter Effekt 0,021 (95-%-KI [0,013; 0,028]), direkter Effekt n. s. Memorierbarkeitsmodelle erfassen in emotional aufgeladenen Bildern viel, aber nicht die ganze Struktur.",
        zh: "中介分析：死亡相关 → 唤醒（a = 0.25）→ 记忆度（b = 0.08）；间接效应 0.021，95% CI [0.013, 0.028]，直接效应不显著。记忆度模型捕捉到了情绪性图像中的大部分结构，但并不完整。",
      },
    ],
    tags: ["PyTorch", "AlexNet feature extraction", "PCA", "CLIP zero-shot", "ResMem", "Linear SVM", "5-fold cross-validation", "Mediation analysis"],
    images: [
      { src: "images/death-poster.jpg", caption: { en: "Study overview (ASSC 2026)", de: "Studienüberblick (ASSC 2026)", zh: "研究概览（ASSC 2026）" } },
    ],
    outputs: [
      {
        type: "manuscript",
        title: "Mortality-related meaning enhances predicted memorability in paintings beyond hierarchical visual features",
        authors: "Zhuang, T., & Laureys, S.",
        year: 2026,
        links: { pdf: "files/death-memorability-manuscript.pdf" },
      },
      {
        type: "talk",
        title: "Death is not a visual kind. It is a family.",
        authors: "Zhuang, T., & Laureys, S.",
        venue: "ASSC 2026",
        year: 2026,
        links: { slides: "files/death-memorability-ASSC2026-talk.pptx" },
      },
    ],
  },

  {
    id: "action-hierarchy",
    title: { en: "How the brain organises observed actions", de: "Wie das Gehirn beobachtete Handlungen organisiert", zh: "大脑如何组织所观察到的动作" },
    period: "2018 – 2024",
    where: { en: "University of Regensburg", de: "Universität Regensburg", zh: "雷根斯堡大学" },
    with: "Angelika Lingnau, Zuzanna Kabulska, Gregor Volberg",
    summary:
      {
        en: "Actions can be described at different levels: locomotion, swimming, breaststroke. Across behaviour, fMRI and EEG, my PhD work shows that information about observed actions is maximised at the basic level, with the lateral occipitotemporal cortex (LOTC) playing a central role. The work is discussed in the book Action Understanding (Lingnau & Downing, Cambridge University Press, 2024) and has been taken up by studies of expert table tennis players.",
        de: "Handlungen lassen sich auf verschiedenen Ebenen beschreiben: Fortbewegung, Schwimmen, Brustschwimmen. Über Verhalten, fMRT und EEG hinweg zeigt meine Doktorarbeit, dass die Information über beobachtete Handlungen auf der Basisebene am größten ist, wobei der laterale okzipitotemporale Kortex (LOTC) eine zentrale Rolle spielt. Die Arbeit wird im Buch Action Understanding (Lingnau & Downing, Cambridge University Press, 2024) diskutiert und wurde von Studien mit Tischtennis-Expertinnen und -Experten aufgegriffen.",
        zh: "动作可以在不同层级上描述：位移运动、游泳、蛙泳。我的博士研究结合行为、fMRI 和 EEG，发现关于所观察动作的信息在基本层级最为丰富，其中外侧枕颞皮层（LOTC）起着核心作用。这项工作在《Action Understanding》一书（Lingnau & Downing，剑桥大学出版社，2024）中被讨论，并被针对乒乓球专业运动员的研究所采用。",
      },
    stats: [
      { value: "62", label: { en: "citations of 3 papers (Google Scholar)", de: "Zitationen von 3 Artikeln (Google Scholar)", zh: "次引用（3 篇文章，Google Scholar）" } },
      { value: "14", label: { en: "studies (1 EEG, 2 fMRI, 11 behavioural)", de: "Studien (1 EEG, 2 fMRT, 11 Verhalten)", zh: "项研究（1 项 EEG，2 项 fMRI，11 项行为）" } },
      { value: "200", label: { en: "participants", de: "Teilnehmende", zh: "名被试" } },
      { value: "12 × 3", label: { en: "actions × taxonomic levels", de: "Handlungen × taxonomische Ebenen", zh: "个动作 × 分类层级" } },
      { value: "~170 ms", label: { en: "parallel emergence of all levels", de: "parallele Entstehung aller Ebenen", zh: "各层级并行出现" } },
    ],
    citedBy: [
      {
        title: "Action Understanding",
        authors: "Lingnau, A., & Downing, P. E.",
        kind: "book",
        venue: "Cambridge University Press",
        year: 2024,
        note: { en: "cites our Psychological Research and Journal of Neuroscience papers", de: "zitiert unsere Artikel in Psychological Research und Journal of Neuroscience", zh: "引用了我们发表在 Psychological Research 和 Journal of Neuroscience 上的文章" },
        links: { doi: "https://doi.org/10.1017/9781009386630" },
      },
      {
        title: "Neural representations of different features in the observation of table tennis actions",
        authors: "Liu, L., Mou, H., Zhou, T., Yan, Z., et al.",
        venue: "Psychology of Sport and Exercise",
        year: 2025,
        note: { en: "table tennis athletes", de: "Tischtennis-Athletinnen und -Athleten", zh: "乒乓球运动员" },
        links: { doi: "https://doi.org/10.1016/j.psychsport.2025.103005" },
      },
      {
        title: "Motor expertise shapes crossmodal and modality-specific action representations in table tennis players",
        authors: "Mou, H., Liu, L., Wang, Y., et al.",
        venue: "Behavioral and Brain Functions",
        year: 2025,
        note: { en: "table tennis athletes", de: "Tischtennis-Athletinnen und -Athleten", zh: "乒乓球运动员" },
        links: { doi: "https://doi.org/10.1186/s12993-025-00296-9" },
      },
      {
        title: "Investigating action topography in visual cortex and deep artificial neural networks",
        authors: "Cortinovis, D., Truong, N., Op de Beeck, H., Bracci, S., et al.",
        venue: "Nature Communications",
        year: 2025,
        links: { doi: "https://doi.org/10.1038/s41467-025-67855-6" },
      },
    ],
    details: [
      {
        en: "Behaviour: participants described and verified actions at superordinate, basic and subordinate levels. Basic-level actions carried the most common features and were verified efficiently (Psychological Research).",
        de: "Verhalten: Teilnehmende beschrieben und verifizierten Handlungen auf übergeordneter, Basis- und untergeordneter Ebene. Handlungen auf Basisebene wiesen die meisten gemeinsamen Merkmale auf und wurden effizient verifiziert (Psychological Research).",
        zh: "行为：被试在上位、基本和下位层级描述并验证动作。基本层级的动作具有最多的共同特征，验证也更高效（Psychological Research）。",
      },
      {
        en: "fMRI: ROI-based and whole-brain representational similarity analysis showed that bilateral LOTC captures action representations across levels, with a preference for the basic level (Journal of Neuroscience).",
        de: "fMRT: ROI-basierte und Ganzhirn-Repräsentationsähnlichkeitsanalysen zeigten, dass der bilaterale LOTC Handlungsrepräsentationen über alle Ebenen hinweg erfasst, mit einer Präferenz für die Basisebene (Journal of Neuroscience).",
        zh: "fMRI：基于 ROI 和全脑的表征相似性分析表明，双侧 LOTC 表征了各个层级的动作，并偏向基本层级（Journal of Neuroscience）。",
      },
      {
        en: "EEG: time-resolved RSA (standard and multiple-regression), temporal generalisation and EEG–fMRI fusion revealed that representations at all three levels emerge in parallel, peaking around 170 ms, with LOTC aligning most strongly with EEG around 230 ms.",
        de: "EEG: Zeitaufgelöste RSA (Standard und multiple Regression), temporale Generalisierung und EEG-fMRT-Fusion zeigten, dass Repräsentationen auf allen drei Ebenen parallel entstehen, mit einem Gipfel um 170 ms, und dass der LOTC um 230 ms am stärksten mit dem EEG übereinstimmt.",
        zh: "EEG：时间分辨 RSA（标准与多元回归）、时间泛化和 EEG-fMRI 融合分析显示，三个层级的表征并行出现，峰值约在 170 ms，而 LOTC 与 EEG 的对应在约 230 ms 时最强。",
      },
    ],
    tags: ["EEG", "fMRI", "RSA", "Multiple-regression RSA", "MVPA", "ROI & whole-brain analysis", "Time-resolved decoding", "Temporal generalisation", "EEG–fMRI fusion", "Hierarchical clustering"],
    images: [
      { src: "images/action-behavior.jpg", caption: { en: "Behaviour: the characterization of actions across levels", de: "Verhalten: die Charakterisierung von Handlungen über Ebenen hinweg", zh: "行为：不同层级动作的特征" } },
      { src: "images/action-fmri.jpg", caption: { en: "fMRI: representation of observed actions across levels", de: "fMRT: Repräsentation beobachteter Handlungen über Ebenen hinweg", zh: "fMRI：不同层级所观察动作的表征" } },
      { src: "images/action-eeg.jpg", caption: { en: "EEG: neural dynamics of observed actions", de: "EEG: neuronale Dynamik beobachteter Handlungen", zh: "EEG：所观察动作的神经动态" } },
    ],
    outputs: [
      {
        type: "article",
        title: "The representation of observed actions at the subordinate, basic and superordinate level",
        authors: "Zhuang, T., Kabulska, Z., & Lingnau, A.",
        venue: "Journal of Neuroscience",
        year: 2023,
        links: { doi: "https://doi.org/10.1523/JNEUROSCI.0700-22.2023" },
      },
      {
        type: "article",
        title: "Overlapping representations of observed actions and action-related features",
        authors: "Kabulska, Z., Zhuang, T., & Lingnau, A.",
        venue: "Human Brain Mapping, 45(3)",
        year: 2024,
        links: { doi: "https://doi.org/10.1002/hbm.26605" },
      },
      {
        type: "article",
        title: "The characterization of actions at the superordinate, basic and subordinate level",
        authors: "Zhuang, T., & Lingnau, A.",
        venue: "Psychological Research",
        year: 2022, // online first 2021, issue 2022 (Google Scholar lists 2022)
        links: { doi: "https://doi.org/10.1007/s00426-021-01624-0" },
      },
      {
        type: "manuscript",
        title: "Neural dynamics of observed actions at different taxonomic levels",
        authors: "Zhuang, T., Volberg, G., & Lingnau, A.",
        links: { manuscript: "files/action-eeg-manuscript.docx" },
      },
    ],
  },

  {
    id: "neuromatch-semantic-encoding",
    title: { en: "Semantic categories in early visual cortex", de: "Semantische Kategorien im frühen visuellen Kortex", zh: "早期视觉皮层中的语义类别" },
    period: "2024 – 2025",
    where: { en: "Neuromatch Academy, Impact Scholars programme", de: "Neuromatch Academy, Programm Impact Scholars", zh: "Neuromatch Academy，Impact Scholars 项目" },
    with: { en: "Umur Yildiz, Anna Kelbakh, Berk Yüce (mentees)", de: "Umur Yildiz, Anna Kelbakh, Berk Yüce (Mentees)", zh: "Umur Yildiz、Anna Kelbakh、Berk Yüce（学员）" },
    summary:
      {
        en: "As research mentor I guided an international team of PhD and master's students through a full fMRI project, from question to publication. Using the Kay Natural Images dataset, the team showed that animacy and faces are encoded in V2, V3, V4 and LOC even after controlling for low-level visual features.",
        de: "Als Research Mentor habe ich ein internationales Team aus Promovierenden und Masterstudierenden durch ein vollständiges fMRT-Projekt begleitet, von der Fragestellung bis zur Veröffentlichung. Anhand des Kay-Natural-Images-Datensatzes zeigte das Team, dass Belebtheit und Gesichter in V2, V3, V4 und LOC kodiert sind, auch nach Kontrolle einfacher visueller Merkmale.",
        zh: "作为研究导师，我带领一支由博士生和硕士生组成的国际团队完成了一个完整的 fMRI 项目，从提出问题到发表成果。团队利用 Kay Natural Images 数据集发现，即使控制了低层视觉特征，生命性和面孔信息仍在 V2、V3、V4 和 LOC 中得到编码。",
      },
    stats: [
      { value: "3", label: { en: "mentees (Bilkent University, UCL)", de: "Mentees (Bilkent University, UCL)", zh: "名学员（毕尔肯大学、伦敦大学学院）" } },
      { value: "5", label: { en: "visual regions (V1 to V4, LOC)", de: "visuelle Areale (V1 bis V4, LOC)", zh: "个视觉脑区（V1 至 V4、LOC）" } },
      { value: "3", label: { en: "semantic distinctions tested", de: "getestete semantische Unterscheidungen", zh: "项语义区分检验" } },
      { value: "1", label: { en: "publication + recorded talk", de: "Publikation + aufgezeichneter Vortrag", zh: "篇发表 + 录制报告" } },
    ],
    details: [
      {
        en: "Question: do early visual areas encode semantic category information independently of low-level visual features?",
        de: "Frage: Kodieren frühe visuelle Areale semantische Kategorieinformation unabhängig von einfachen visuellen Merkmalen?",
        zh: "问题：早期视觉区是否独立于低层视觉特征编码语义类别信息？",
      },
      {
        en: "Approach: representational similarity analysis on fMRI responses in V1 to V4 and LOC for three distinctions (animate vs. inanimate, natural vs. human-made, face present vs. absent, plus an extended face category including partial and animal faces), controlling for low-level structure with AlexNet conv2 features.",
        de: "Vorgehen: Repräsentationsähnlichkeitsanalyse der fMRT-Antworten in V1 bis V4 und LOC für drei Unterscheidungen (belebt vs. unbelebt, natürlich vs. menschengemacht, Gesicht vorhanden vs. nicht vorhanden, plus eine erweiterte Gesichtskategorie mit Teil- und Tiergesichtern), wobei einfache Bildstruktur mit AlexNet-conv2-Merkmalen kontrolliert wurde.",
        zh: "方法：对 V1 至 V4 和 LOC 的 fMRI 反应进行表征相似性分析，检验三种区分（有生命 vs. 无生命、自然 vs. 人造、有面孔 vs. 无面孔，另加包含局部面孔和动物面孔的扩展面孔类别），并用 AlexNet conv2 特征控制低层结构。",
      },
      {
        en: "Result: animacy and the extended face category were represented across early, intermediate and higher visual areas independent of low-level features, with significant encoding from V2 onwards.",
        de: "Ergebnis: Belebtheit und die erweiterte Gesichtskategorie waren unabhängig von einfachen Merkmalen in frühen, mittleren und höheren visuellen Arealen repräsentiert, mit signifikanter Kodierung ab V2.",
        zh: "结果：生命性和扩展面孔类别在早期、中级和高级视觉区均有表征，且独立于低层特征，从 V2 开始即出现显著编码。",
      },
    ],
    tags: ["Mentoring", "fMRI", "RSA", "MDMR", "AlexNet features", "Kay Natural Images dataset", "Python"],
    images: [{ src: "images/neuromatch-talk.jpg", caption: { en: "Team presentation, Neuromatch Impact Scholars (YouTube)", de: "Teampräsentation, Neuromatch Impact Scholars (YouTube)", zh: "团队成果展示，Neuromatch Impact Scholars（YouTube）" } }],
    outputs: [
      {
        type: "report",
        title: "Representation of Semantic Encoding in Low and Intermediate Level Visual Regions",
        authors: "Yildiz, U., Kelbakh, A., Yuce, B., & Zhuang, T.",
        venue: "Zenodo (Neuromatch community)",
        year: 2025,
        note: { en: "mentor, last author", de: "Mentoring, Letztautorschaft", zh: "导师，末位作者" },
        links: { doi: "https://doi.org/10.5281/zenodo.15315748" },
      },
      {
        type: "talk",
        title: "Representation of Semantic Encoding in Low and Intermediate Level Visual Regions",
        authors: "Kelbakh, A., Yüce, B., & Yildiz, U.",
        venue: "Neuromatch Impact Scholars presentation",
        year: 2025,
        links: { video: "https://www.youtube.com/watch?v=3DyoGHaCn8M" },
      },
    ],
    links: [{ label: { en: "Neuromatch mentor profile", de: "Neuromatch-Profil", zh: "Neuromatch 导师主页" }, url: "https://airtable.com/app1mUa5gS8l9sSw8/shrfjWXSeWgc4qM1Y/tbl1KM34kH2Xurm75" }],
  },

  {
    id: "consciousness-framework",
    title: { en: "A framework for clarifying questions in consciousness research", de: "Ein Rahmenmodell zur Klärung von Fragen in der Bewusstseinsforschung", zh: "厘清意识研究问题的分析框架" },
    period: { en: "2025 – present", de: "2025 – heute", zh: "2025年至今" }, // TODO: confirm
    where: "",
    with: "",
    summary:
      {
        en: "Many disagreements in consciousness research reflect conceptual misalignment rather than empirical conflict. A two-dimensional framework, level of analysis (internal mechanisms vs. external indicators) × system type (biological vs. artificial), makes explicit which question each research programme is asking.",
        de: "Viele Kontroversen in der Bewusstseinsforschung beruhen eher auf begrifflichen Missverständnissen als auf empirischen Widersprüchen. Ein zweidimensionales Rahmenmodell, Analyseebene (interne Mechanismen vs. externe Indikatoren) × Systemtyp (biologisch vs. künstlich), macht explizit, welche Frage ein Forschungsprogramm jeweils stellt.",
        zh: "意识研究中的许多分歧，源于概念上的错位，而非实证上的冲突。一个二维框架，即分析层面（内部机制 vs. 外部指标）× 系统类型（生物 vs. 人工），能明确每个研究方向真正在回答哪个问题。",
      },
    details: [
      {
        en: "The framework places major theories in distinct quadrants: Global Workspace Theory primarily addresses how conscious content enables report and behavioural control, while Integrated Information Theory targets internal integration structures.",
        de: "Das Rahmenmodell ordnet die großen Theorien unterschiedlichen Quadranten zu: Die Global Workspace Theory befasst sich vor allem damit, wie bewusste Inhalte Bericht und Verhaltenssteuerung ermöglichen, während die Integrated Information Theory auf interne Integrationsstrukturen zielt.",
        zh: "该框架把主要理论放在不同的象限中：全局工作空间理论主要关注意识内容如何支持报告和行为控制，而整合信息理论针对的是内部的整合结构。",
      },
      {
        en: "Clinical evidence on disconnected consciousness (patients with neural markers of awareness despite behavioural unresponsiveness) illustrates the perils of conflating these levels. The framework has implications for debates about AI and animal consciousness.",
        de: "Klinische Befunde zu entkoppeltem Bewusstsein (Patientinnen und Patienten mit neuronalen Anzeichen von Bewusstsein trotz fehlender Verhaltensreaktion) zeigen, wie riskant es ist, diese Ebenen zu vermischen. Das Rahmenmodell hat Folgen für Debatten über KI- und Tierbewusstsein.",
        zh: "关于“脱联意识”的临床证据（患者虽无行为反应，却表现出意识的神经标志）说明了混淆这些层面的风险。该框架对人工智能意识和动物意识的讨论也有启示。",
      },
    ],
    tags: ["Conceptual analysis", "Theory comparison (GWT, IIT)", "AI consciousness", "Animal consciousness", "Disorders of consciousness"],
    images: [{ src: "images/consciousness-framework.jpg", caption: { en: "The two-dimensional framework", de: "Das zweidimensionale Rahmenmodell", zh: "二维分析框架" } }],
    outputs: [
      {
        type: "manuscript",
        title: "A framework for clarifying questions in consciousness research",
        authors: "Zhuang, T.", // TODO: confirm co-authors
        abstract: "Consciousness research encompasses diverse theoretical approaches that often appear contradictory. We propose that many apparent disagreements reflect conceptual misalignment rather than empirical conflict: researchers address different explanatory targets without making these differences explicit. We present a two-dimensional framework with two key distinctions. First, level of analysis: internal mechanisms that may support or constitute consciousness versus external observable indicators used to infer or detect consciousness. Second, system type: biological organisms versus artificial systems. This creates four analytical quadrants that clarify what different research programs investigate. We demonstrate how major theories occupy distinct quadrants. Global Workspace Theory primarily addresses how conscious content enables external report and behavioral control, while Integrated Information Theory targets internal integration structures. Clinical evidence on disconnected consciousness provides compelling support: patients can show neural markers of awareness despite complete behavioral unresponsiveness, illustrating the perils of conflating these levels. The framework helps resolve debates about AI consciousness, animal consciousness, and theoretical integration by making explicit which questions are being addressed. We discuss implications for research practice, funding priorities, and theoretical development, arguing that progress depends partly on clarity about what is being compared.", // full manuscript not published (user's choice)
      },
    ],
  },

  {
    id: "ai-coding",
    title: { en: "AI-assisted coding in scientific research", de: "KI-gestütztes Programmieren in der Forschung", zh: "科学研究中的 AI 辅助编程" },
    period: "2024",
    where: "",
    with: "Z. Lin",
    summary:
      {
        en: "A practical guide to why, what and how researchers can use AI-based coding tools, and where they need to stay careful.",
        de: "Ein praktischer Leitfaden dazu, warum, wofür und wie Forschende KI-basierte Programmierwerkzeuge nutzen können, und wo sie vorsichtig bleiben sollten.",
        zh: "一份实用指南：研究者为什么、用来做什么、以及如何使用基于 AI 的编程工具，又在哪些地方需要保持谨慎。",
      },
    tags: ["LLMs", "AI coding assistants", "Research software", "Reproducibility"],
    images: [],
    outputs: [
      {
        type: "preprint",
        title: "The why, what, and how of AI-based coding in scientific research",
        authors: "Zhuang, T., & Lin, Z.",
        year: 2024,
        links: { scholar: "https://scholar.google.com/scholar?q=The+why%2C+what%2C+and+how+of+AI-based+coding+in+scientific+research" },
      },
    ],
  },

  {
    id: "tool-network",
    title: { en: "Shape and action in the tool network", de: "Form und Handlung im Werkzeugnetzwerk", zh: "工具网络中的形状与动作" },
    period: "2015 – 2018",
    where: { en: "Beijing Normal University", de: "Pädagogische Universität Peking", zh: "北京师范大学" },
    with: "X. Wang, J. Shen, Y. Bi",
    summary:
      {
        en: "Master's work disentangling how object shape and action components are represented across the brain's tool-processing network.",
        de: "Masterarbeit dazu, wie Form- und Handlungskomponenten von Objekten im werkzeugverarbeitenden Netzwerk des Gehirns getrennt repräsentiert werden.",
        zh: "硕士期间的研究：拆解物体的形状成分和动作成分在大脑工具加工网络中如何被表征。",
      },
    tags: ["fMRI", "RSA", "Tool network"],
    images: [],
    outputs: [
      {
        type: "article",
        title: "Disentangling representations of shape and action components in the tool network",
        authors: "Wang, X.*, Zhuang, T.*, Shen, J., & Bi, Y.",
        venue: "Neuropsychologia, 117",
        year: 2018,
        note: { en: "* co-first author", de: "* geteilte Erstautorschaft", zh: "* 共同第一作者" },
        links: { doi: "https://doi.org/10.1016/j.neuropsychologia.2018.05.026" },
      },
    ],
  },
];
