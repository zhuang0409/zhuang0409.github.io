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
    en: "Outside work I dance, climb, run, skate, shoot arrows, read, visit museums, make things and look after my garden. These are simply things I love. Some of them also helped me grow, and I wrote about them.",
    de: "Neben der Arbeit tanze ich, klettere, laufe, fahre Inliner, schieße mit Pfeil und Bogen, lese, gehe in Museen, bastle und kümmere mich um meinen Garten. Das sind einfach Dinge, die ich liebe. Manche davon haben mir auch geholfen zu wachsen, und darüber habe ich geschrieben.",
    zh: "工作之外，我跳舞、攀岩、跑步、轮滑、射箭、读书、逛博物馆、做手工，也照料我的花园。这些只是我单纯喜欢的事。其中有一些也让我成长了，我把它们写了下来。",
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
          en: "Learning German. Still learning German.",
          de: "Ich lerne Deutsch. Immer noch Deutsch.",
          zh: "学德语。还在学德语。",
        },
        image: { src: "images/life/german.jpg", caption: "Ich lerne immer noch Deutsch" },
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
        en: "I read fast, and I read in bursts. As a child I read an enormous amount in one concentrated stretch. Since then, reading comes in waves: a period of complete immersion, book after book, and then suddenly nothing for a while. The last wave came in the second year of my PhD. Now I can feel the next one coming: lately I have started reading a lot of philosophy.",
        de: "Ich lese schnell, und ich lese in Schüben. Als Kind habe ich in einer einzigen intensiven Phase unglaublich viel gelesen. Seitdem kommt das Lesen in Wellen: eine Zeit völligen Eintauchens, Buch um Buch, und dann plötzlich eine Weile gar nichts. Die letzte Welle kam im zweiten Jahr meiner Promotion. Jetzt spüre ich, dass die nächste kommt: In letzter Zeit lese ich viel Philosophie.",
        zh: "我读书很快，而且是爆发式地读。小时候我曾在一段时间里集中读了大量的书。从那以后，读书总是一阵一阵的：一段时间完全沉浸其中，一本接一本，然后突然很久不读。最近一次爆发是在博士第二年。最近我预感下一次爆发要来了：开始读很多哲学书。",
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
