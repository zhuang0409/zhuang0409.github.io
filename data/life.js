/*
 * LIFE — everything on the Life page except the essays (those are in data/writing.js).
 *
 * Each group: title, text, optional items (names shown as chips; add `post: "<id>"`
 * to link a chip to an essay), optional books [{ title, author }], and
 * images [{ src, caption }] (files in site/images/life/; caption may be "" with an `alt`),
 * and optional `columns: 3` to force a fixed number of photos per row.
 * Text fields are { en, de, zh }.
 * Order here = order on the page.
 */

window.LIFE = {
  intro: {
    en: "Outside work I dance, climb, run, skate and do archery, and I also love reading, visiting museums, making things by hand and looking after my garden. Some of these interests have been with me for many years; others simply make me happy. Many hobbies that seem small have quietly shaped me and become part of how I grew. So I wrote some of these moments down.",
    de: "Neben der Arbeit tanze ich, klettere, laufe, fahre Inliner und schieße mit Pfeil und Bogen. Ich lese auch gern, gehe in Museen, bastle und kümmere mich um meinen Garten. Manche dieser Interessen begleiten mich seit vielen Jahren, andere machen mich einfach glücklich. Viele scheinbar kleine Hobbys haben mich unbemerkt geprägt und sind Teil meiner Entwicklung geworden. Deshalb habe ich einige dieser Momente aufgeschrieben.",
    zh: "工作之余，我跳舞、攀岩、跑步、轮滑、射箭，也喜欢读书、逛博物馆、做手工和照料花园。有些兴趣陪了我很多年，有些只是单纯让我觉得快乐。很多看似微小的爱好，也在不知不觉中塑造了我，成为我成长的一部分。于是，我把这些片段也写了下来。",
  },

  lately: {
    title: { en: "Lately", de: "Gerade", zh: "最近" },
    text: { en: "What I can't stop doing right now.", de: "Wovon ich gerade nicht genug bekomme.", zh: "最近停不下来的事。" },
    items: [
      {
        name: { en: "Archery", de: "Bogenschießen", zh: "射箭" },
        text: {
          en: "My newest obsession. Archery is the art of consistency.",
          de: "Meine neueste Leidenschaft. Bogenschießen ist die Kunst der Beständigkeit.",
          zh: "最新的沉迷。射箭是一致的艺术。",
        },
        image: { src: "images/life/archery.jpg", caption: { en: "Archery", de: "Bogenschießen", zh: "射箭" } },
      },
      {
        name: { en: "Inline skating", de: "Inlineskaten", zh: "轮滑" },
        text: {
          en: "My goal: a 22 km summer skate through the city.",
          de: "Mein Ziel: eine 22 km lange Sommertour auf Inlinern durch die Stadt.",
          zh: "我的目标：夏天在城市里滑完 22 公里。",
        },
        image: { src: "images/life/inline-skating.jpg", caption: { en: "Inline skating", de: "Inlineskaten", zh: "轮滑" } },
      },
      {
        name: { en: "German", de: "Deutsch", zh: "德语" },
        text: {
          en: "More than a language: my way into German culture. A long-term project.",
          de: "Mehr als eine Sprache: mein Weg in die deutsche Kultur. Ein langes Projekt.",
          zh: "不只是一门语言，也是我走近德国文化的方式。想长期认真做下去。",
        },
        image: { src: "images/life/german.jpg", caption: "Deutsch ist für mich mehr als eine Sprache." },
      },
    ],
  },

  groups: [
    {
      id: "dance",
      title: { en: "Dance & acroyoga", de: "Tanz & Acroyoga", zh: "舞蹈与双人瑜伽" },
      text: {
        en: "Ballet taught me to feel my toes again, pole dance taught me to like my body, and flamenco I simply love.",
        de: "Ballett hat mich gelehrt, meine Zehen wieder zu spüren, Poledance hat mich gelehrt, meinen Körper zu mögen, und Flamenco liebe ich einfach.",
        zh: "芭蕾让我重新感受到自己的脚趾，钢管舞让我喜欢上自己的身体，弗朗明戈我就是单纯地喜欢。",
      },
      items: [
        { name: { en: "Ballet", de: "Ballett", zh: "芭蕾" }, post: "ballet-1" },
        { name: { en: "Pole dance", de: "Poledance", zh: "钢管舞" }, post: "pole-1" },
        { name: { en: "Flamenco", de: "Flamenco", zh: "弗朗明戈" } },
        { name: { en: "Acroyoga", de: "Acroyoga", zh: "双人瑜伽" } },
      ],
      images: [
        { src: "images/life/pole-dance.jpg", caption: { en: "Pole dance", de: "Poledance", zh: "钢管舞" } },
        { src: "images/life/flamenco.jpg", caption: { en: "Flamenco", de: "Flamenco", zh: "弗朗明戈" } },
        { src: "images/life/acroyoga.jpg", caption: { en: "Acroyoga", de: "Acroyoga", zh: "双人瑜伽" } },
      ],
    },
    {
      id: "climbing",
      title: { en: "Bouldering & climbing", de: "Bouldern & Klettern", zh: "抱石与攀岩" },
      text: {
        en: "What I thought was far was within reach.",
        de: "Was ich für weit weg hielt, war in Reichweite.",
        zh: "以为遥不可及的，其实触手可及。",
      },
      items: [
        { name: { en: "Bouldering", de: "Bouldern", zh: "抱石" } },
        { name: { en: "Climbing", de: "Klettern", zh: "攀岩" } },
      ],
      images: [
        { src: "images/life/bouldering-level-3.jpg", caption: { en: "First day at bouldering level 3", de: "Erster Tag auf Boulder-Level 3", zh: "抱石三级的第一天" } },
        { src: "images/life/climbing.jpg", caption: { en: "Climbing", de: "Klettern", zh: "攀岩" } },
        { src: "images/life/bouldering.jpg", caption: { en: "Bouldering", de: "Bouldern", zh: "抱石" } },
      ],
    },
    {
      id: "running",
      title: { en: "Running & martial arts", de: "Laufen & Kampfsport", zh: "跑步与武术" },
      text: {
        en: "Every Saturday I run parkrun, and I have kept it up for two years. Running taught me to accept my own pace. Taekwondo showed me the difference between discipline and control.",
        de: "Jeden Samstag laufe ich beim parkrun mit, seit zwei Jahren schon. Das Laufen hat mich gelehrt, mein eigenes Tempo anzunehmen. Taekwondo hat mir den Unterschied zwischen Disziplin und Kontrolle gezeigt.",
        zh: "每个周六我都去跑 parkrun，已经坚持了两年。跑步让我学会接受自己的节奏。跆拳道让我看清了自律和控制的区别。",
      },
      items: [
        { name: { en: "Running", de: "Laufen", zh: "跑步" }, post: "running" },
        { name: "parkrun" },
        { name: { en: "Taekwondo", de: "Taekwondo", zh: "跆拳道" }, post: "taekwondo" },
      ],
      images: [
        { src: "images/life/parkrun.jpg", caption: "parkrun" },
        { src: "images/life/running-kassel-marathon.jpg", caption: { en: "Kassel Marathon, September 2025", de: "Kassel-Marathon, September 2025", zh: "卡塞尔马拉松，2025 年 9 月" } },
        {
          src: "images/life/company-run-2020.jpg",
          caption: {
            en: "REWAG company run with my lab, Regensburg, September 2020",
            de: "REWAG-Firmenlauf mit meinem Lehrstuhl, Regensburg, September 2020",
            zh: "和实验室一起参加 REWAG 公司跑，雷根斯堡，2020 年 9 月",
          },
        },
      ],
    },
    {
      id: "outdoors",
      title: { en: "Water & outdoors", de: "Wasser & draußen", zh: "水上与户外" },
      text: {
        en: "Kayaking, swimming, hiking and travelling.",
        de: "Kajakfahren, Schwimmen, Wandern und Reisen.",
        zh: "皮划艇、游泳、徒步和旅行。",
      },
      items: [
        { name: { en: "Kayaking", de: "Kajak", zh: "皮划艇" } },
        { name: { en: "Swimming", de: "Schwimmen", zh: "游泳" } },
        { name: { en: "Hiking", de: "Wandern", zh: "徒步" } },
        { name: { en: "Travel", de: "Reisen", zh: "旅行" } },
      ],
      images: [
        { src: "images/life/kayaking.jpg", caption: { en: "Kayaking", de: "Kajakfahren", zh: "皮划艇" } },
        { src: "images/life/hiking-mountains.jpg", caption: { en: "Hiking in the mountains", de: "Wandern in den Bergen", zh: "山间徒步" } },
        { src: "images/life/travel-dunes.jpg", caption: { en: "Travelling: sand dunes by the sea", de: "Unterwegs: Sanddünen am Meer", zh: "旅行：海边的沙丘" } },
      ],
    },
    {
      id: "reading",
      title: { en: "Reading", de: "Lesen", zh: "读书" },
      text: {
        en: "I read fast, and often in bursts. As a child I once read a huge number of books in one concentrated stretch. Since then, reading has always come in waves for me: sometimes I am completely absorbed, reading one book after another; sometimes I don't touch a book for a long time. The last of these reading peaks came in the second year of my PhD.\n\nI have always felt that reading largely helps me make sense of things. In the past I learned about human nature, relationships and the complex ways people interact mostly from books. Now I increasingly like to bring that understanding back into real relationships: reflecting after I have lived through something, and continuing to get to know people, and myself, through those relationships.\n\nLately I have a feeling that the next reading peak is coming. AI has made me think again about many more basic questions, so I have started reading more philosophy. Questions about intelligence, consciousness, what a human being is, and how we actually understand the world have brought me back to books.",
        de: "Ich lese schnell, und oft in Schüben. Als Kind habe ich in einer intensiven Phase sehr viele Bücher gelesen. Seitdem kommt das Lesen bei mir in Wellen: Manchmal tauche ich ganz ein und lese ein Buch nach dem anderen, manchmal rühre ich lange kein Buch an. Die letzte dieser Lesephasen war im zweiten Jahr meiner Promotion.\n\nIch hatte immer das Gefühl, dass Lesen mir vor allem hilft, Dinge zu verstehen. Früher habe ich aus Büchern viel über die menschliche Natur, über Beziehungen und über das komplizierte Miteinander von Menschen gelernt. Heute nehme ich dieses Verständnis immer lieber mit in echte Begegnungen: Ich denke über das Erlebte nach und lerne in Beziehungen weiter Menschen kennen, und auch mich selbst.\n\nIn letzter Zeit spüre ich, dass die nächste Lesephase kommt. Durch KI denke ich wieder über viele grundlegende Fragen nach, deshalb lese ich jetzt mehr Philosophie. Fragen über Intelligenz, Bewusstsein, darüber, was ein Mensch ist und wie wir die Welt eigentlich verstehen, haben mich zurück zu den Büchern gebracht.",
        zh: "我读书很快，而且常常是爆发式地读。小时候，我曾在一段时间里集中读过大量的书。从那以后，阅读对我来说一直是一阵一阵的：有时会完全沉浸进去，一本接一本地读；有时又会很久不碰书。最近一次这样的阅读高峰，是在博士第二年。\n\n我一直觉得，读书很大程度上是在帮我解惑。以前，我更多从书里理解人性、关系和人与人之间复杂的互动；现在，我越来越喜欢把这些理解带回真实的人际交往中，在经历之后反思，在关系里继续认识人，也认识自己。\n\n最近，我隐约觉得下一次阅读高峰又要来了。AI 的出现让我重新开始思考很多更基础的问题，所以我开始读更多哲学。关于智能、意识、人是什么，以及我们究竟如何理解世界，这些问题又把我带回了书里。",
      },
      booksLabel: { en: "Books that stayed with me", de: "Bücher, die mich begleitet haben", zh: "影响我的书" },
      books: [
        {
          title: "恶意 (Malice)",
          author: "东野圭吾 Keigo Higashino",
          note: { en: "and many of his other novels", de: "und viele seiner anderen Romane", zh: "以及他的许多其他小说" },
        },
        { title: "飘 (Gone with the Wind)", author: "Margaret Mitchell" },
        { title: "晨雨初听", author: "余秋雨 Yu Qiuyu" },
      ],
      items: [],
      images: [
        { src: "images/life/book-higashino.jpg", caption: { en: "東野圭吾 Keigo Higashino, 恶意 Malice", de: "東野圭吾 Keigo Higashino, 恶意 Malice", zh: "东野圭吾《恶意》" } },
        {
          src: "images/life/book-gone-with-the-wind.jpg",
          caption: {
            en: "Gone with the Wind, 1939 film poster (public domain)",
            de: "Vom Winde verweht, Filmplakat von 1939 (gemeinfrei)",
            zh: "《飘》（乱世佳人），1939 年电影海报（公有领域）",
          },
        },
        { src: "images/life/bookshelf.jpg", caption: { en: "Among the bookshelves", de: "Zwischen den Bücherregalen", zh: "书架之间" } },
      ],
    },
    {
      id: "art",
      title: { en: "Art & museums", de: "Kunst & Museen", zh: "艺术与博物馆" },
      text: { en: "I love art and visiting museums.", de: "Ich liebe Kunst und gehe gern ins Museum.", zh: "我喜欢艺术，也喜欢逛博物馆。" },
      columns: 3,
      items: [],
      images: [
        { src: "images/life/museum-1.jpg", caption: "", alt: { en: "In a museum, in front of a large abstract painting", de: "Im Museum, vor einem großen abstrakten Gemälde", zh: "在博物馆里，站在一幅巨大的抽象画前" } },
        { src: "images/life/museum-2.jpg", caption: "", alt: { en: "In a museum, next to a portrait", de: "Im Museum, neben einem Porträt", zh: "在博物馆里，站在一幅肖像画旁" } },
        { src: "images/life/museum-3.jpg", caption: "", alt: { en: "A blue sculpture in a museum", de: "Eine blaue Skulptur im Museum", zh: "博物馆里的一座蓝色雕塑" } },
        { src: "images/life/museum-4.jpg", caption: "", alt: { en: "Walking through a gallery of old master paintings", de: "Durch eine Galerie Alter Meister gehen", zh: "走过一间陈列古典大师画作的展厅" } },
        { src: "images/life/museum-5.jpg", caption: "", alt: { en: "Looking at a large contemporary painting", de: "Vor einem großen zeitgenössischen Gemälde", zh: "欣赏一幅巨大的当代画作" } },
        { src: "images/life/museum-6.jpg", caption: "", alt: { en: "Between two portraits in a museum", de: "Zwischen zwei Porträts im Museum", zh: "在博物馆里，站在两幅肖像画之间" } },
      ],
    },
    {
      id: "making",
      title: { en: "Making gifts", de: "Geschenke basteln", zh: "亲手做礼物" },
      text: {
        en: "I paint and make small things by hand, most often as gifts for people I care about.",
        de: "Ich male und bastle kleine Dinge von Hand, meistens als Geschenke für Menschen, die mir am Herzen liegen.",
        zh: "我画画，也亲手做一些小东西，大多是送给我在乎的人的礼物。",
      },
      items: [
        { name: { en: "Watercolour", de: "Aquarell", zh: "水彩" } },
        { name: { en: "Handcraft", de: "Handarbeit", zh: "手工" } },
      ],
      images: [
        {
          src: "images/life/painting-leap-2020.jpg",
          caption: {
            en: "Watercolour 飞跃 (Leap), my fourth painting, 2020",
            de: "Aquarell 飞跃 (Sprung), mein viertes Bild, 2020",
            zh: "水彩《飞跃》，我的第四幅画，2020 年",
          },
        },
        { src: "images/life/leaf-rose-origami.jpg", caption: { en: "A rose folded from autumn maple leaves", de: "Eine Rose, gefaltet aus herbstlichen Ahornblättern", zh: "用秋天的枫叶折成的玫瑰" } },
        {
          src: "images/life/craft-flower-mobile.jpg",
          caption: {
            en: "A hanging decoration of dried flowers and a pine cone",
            de: "Eine Hängedekoration aus Trockenblumen und einem Tannenzapfen",
            zh: "干花和松果做的挂饰",
          },
        },
        { src: "images/life/craft-origami-lily.jpg", caption: { en: "An origami lily", de: "Eine Origami-Lilie", zh: "折纸百合" } },
      ],
    },
    {
      id: "garden",
      title: { en: "My garden", de: "Mein Garten", zh: "我的花园" },
      text: { en: "I love spending time in my garden.", de: "Ich verbringe sehr gern Zeit in meinem Garten.", zh: "我很喜欢待在自己的花园里。" },
      items: [],
      images: [
        { src: "images/life/garden-roses.jpg", caption: { en: "Roses under the pergola", de: "Rosen unter der Pergola", zh: "花架下的玫瑰" } },
        { src: "images/life/garden-rhododendron.jpg", caption: { en: "Rhododendron in bloom", de: "Blühender Rhododendron", zh: "盛开的杜鹃" } },
        { src: "images/life/garden.jpg", caption: { en: "An afternoon in my garden", de: "Ein Nachmittag in meinem Garten", zh: "花园里的一个下午" } },
      ],
    },
  ],
};
