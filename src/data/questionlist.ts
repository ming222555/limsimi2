export type TQuestion = {
  id: number;
  title: string;
  question: string;
  options: string[];
  answerAt: number;
  marks: number;
  img: string;
  alt: string;
  imgWidthTailwind: string;
};

// SectionQuestionSheet
//
// <div
// className="w-[15rem] mx-auto"
// style={{ outline: "2px solid yellow" }}
// >
// {/* eslint-disable-next-line @next/next/no-img-element */}
// <img
//   src={list[idx].img}
//   alt={list[idx].alt}
//   width={0}
//   height={0}
//   loading="eager"
//   className="w-full h-auto bg-blue-100"
// />
// </div>
//
// w-[14rem] eyeglass candy
// w-[14rem] coki coki
// w-[16rem] super ring
// w-[14rem] julie
// w-[14rem] yupi burger
// w-[13rem] gem biskit
// w-[10rem] hawthorne
// w-[14rem] oreo
// w-[15rem] bika
// w-[15rem] miao miao sotong

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
    img: "/images/Eyeglass_Candy.png",
    alt: "Eyeglass Candy",
    imgWidthTailwind: "w-[14rem]",
  },
  {
    id: 2,
    title: "Choki Choki",
    question: "Apa yang benar tentang Choki Choki?",
    options: [
      "Dibuat daripada chokolat & susu",
      "Mempunyai tekstur kenyal",
      "Berasa masam",
      "Berasal dari China",
    ],
    answerAt: 0,
    marks: 1,
    img: "/images/Choki_Choki.png",
    alt: "Choki Choki",
    imgWidthTailwind: "w-[14rem]",
  },
  {
    id: 3,
    title: "Super Ring",
    question: "Apakah ciri paling ikonik snek Super Ring?",
    options: [
      "Ia berbentuk seperti cincin",
      "Meninggalkan kesan jingga terang pada jari anda",
      "Pembungkusnya berwarna biru",
      "Ia cair dalam air panas",
    ],
    answerAt: 1,
    marks: 1,
    img: "/images/super_ring.png",
    alt: "Super Ring",
    imgWidthTailwind: "w-[16rem]",
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
    img: "/images/julie_peanut_butter.png",
    alt: "Julie’s Peanut Butter Sandwich",
    imgWidthTailwind: "w-[14rem]",
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
    img: "/images/Yupi_Burger.png",
    alt: "Yupi Burger",
    imgWidthTailwind: "w-[14rem]",
  },
  {
    id: 6,
    title: "Biskuit Ais Jem",
    question: "Dari mana asal biskut ais jem yang popular?",
    options: ["England", "Indonesia", "Sepanyol", "Thailand"],
    answerAt: 0,
    marks: 1,
    img: "/images/Ice_Gem_Biscuit.png",
    alt: "Biskuit Ais Jem",
    imgWidthTailwind: "w-[13rem]",
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
    img: "/images/hawthorn.png",
    alt: "Haw Flakes",
    imgWidthTailwind: "w-[10rem]",
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
    img: "/images/Oreo.png",
    alt: "Oreo Vanilla",
    imgWidthTailwind: "w-[14rem]",
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
    img: "/images/bika_keropok.png",
    alt: "BIKA Keropok",
    imgWidthTailwind: "w-[15rem]",
  },
  {
    id: 10,
    title: "Miaow Miaow Snek Sotong",
    question: "Apakah rasa spesial Miaow Miaow Sotong?",
    options: ["Kari pedas", "Manis dan masin", "Keju", "Mentega bawang putih"],
    answerAt: 1,
    marks: 1,
    img: "/images/Miaow_Miaow_Sotong.png",
    alt: "Miaow Miaow Snek Sotong",
    imgWidthTailwind: "w-[15rem]",
  },
];
