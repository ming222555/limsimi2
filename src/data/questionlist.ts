type TQuestion = {
  id: number;
  title: string;
  question: string;
  options: string[];
  answerAt: number;
  marks: number;
  img: string;
  alt: string;
};

export const listBackgrounds: string[] = [
  "bg-[url(/eyeglass-candy.jpg)]",
  "bg-[url(/chokichoki.webp)]",
  "bg-[url(/super-ring.jpg)]",
  "bg-[url(/julie.jpg)]",
  "bg-[url(/burger.svg)]",
  "bg-[url(/biscuit-svgrepo-com.svg)]",
  "bg-[url(/haw-flakes.jpg)]",
  "bg-[url(/oreo-biscuit-svgrepo-com.svg)]",
  "bg-[url(/bika-keropok.jpeg)]",
  "bg-[url(/miaomiaosotong.png)]",
];

export const questionlist: TQuestion[] = [
  {
    id: 1,
    title: "Eyeglass Candy",
    question: "Berapa biji gula-gula terdapat dalam satu pek ‘Eyeglass Candy’?",
    options: ["3", "5", "7", "10"],
    answerAt: 2,
    marks: 1,
    img: "/mystical_shop.webp",
    alt: "Question Scene",
  },
  {
    id: 2,
    title: "Choki Choki",
    question: "Apa yang benar tentang Choki Choki?",
    options: [
      "Dibuat daripada chokolat & susu",
      "Mempunyai tekstur kenyal",
      "Ia masam",
      "Berasal dari China",
    ],
    answerAt: 0,
    marks: 1,
    img: "/mahjong_aunties.webp",
    alt: "Question Scene",
  },
  {
    id: 3,
    title: "Super Ring",
    question: "Apakah ciri paling ikonik snek Super Ring?",
    options: [
      "Ia berbentuk seperti cincin",
      "Ia meninggalkan kesan jingga terang pada jari anda",
      "Pembungkusnya berwarna biru",
      "Ia cair dalam air panas",
    ],
    answerAt: 1,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 4,
    title: "Julie’s Peanut Butter Sandwich",
    question: "Apa yang menjadikan Julie’s Peanut Butter Sandwich ikonik?",
    options: [
      "Bentuk segi empat",
      "Lapisan inti berganda",
      "Salut coklat",
      "Tanpa gula",
    ],
    answerAt: 1,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 5,
    title: "Yupi Burger",
    question: "Apakah “ramuan” yang membentuk Yupi Burger?",
    options: [
      "Roti, udang, keju, selada",
      "Roti, patty, cendawan, keju, selada",
      "Roti, patty, tomato, keju, rumpai laut",
      "Roti, patty, keju, selada",
    ],
    answerAt: 3,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 6,
    title: "Biskuit Ais Jem",
    question: "Dari mana asal biskut ais jem yang popular?",
    options: ["England", "Indonesia", "Sepanyol", "Thailand"],
    answerAt: 0,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 7,
    title: "Haw Flakes",
    question:
      "Apakah kegunaan tradisional hawthorn dalam snek perubatan Cina seperti haw flakes?",
    options: [
      "Merawat sakit tekak",
      "Membantu pencernaan",
      "Merawat sakit kepala",
      "Meningkatkan pendengaran",
    ],
    answerAt: 1,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 8,
    title: "Oreo Vanilla",
    question: "Apakah cara klasik untuk makan Oreo?",
    options: [
      "Celup, Kunyah, Celup",
      "Hancur, Tabur, Jilat",
      "Putar, Jilat, Celup",
      "Patah, Gigit, Tiup",
    ],
    answerAt: 2,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 9,
    title: "BIKA Keropok Berperisa Ayam",
    question: "Apakah tekstur unik keropok BIKA?",
    options: [
      "Gebu",
      "Ringan & rangup",
      "Lembut dan dibakar",
      "Rata dan bulat",
    ],
    answerAt: 1,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
  {
    id: 10,
    title: "Miaow Miaow Snek Sotong",
    question: "Apakah rasa khas Miaow Miaow Sotong?",
    options: ["Kari pedas", "Manis dan masin", "Keju", "Mentega bawang putih"],
    answerAt: 1,
    marks: 1,
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
  },
];
