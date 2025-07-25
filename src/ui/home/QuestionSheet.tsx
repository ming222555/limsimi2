import Image from "next/image";
import { useState, useRef } from "react";

import BigButton from "./BigButton";
import QuestionText from "./QuestionText";
import QuestionPict from "./QuestionPict";

export type TQuestion = {
  id: number;
  title: string;
  question: string;
  img: string;
  alt: string;
  options: string[];
  answerAt: number;
  marks: number;
};

const list: TQuestion[] = [
  {
    id: 1,
    title: "Eyeglass Candy",
    question: "Berapa biji gula-gula terdapat dalam satu pek ‘Eyeglass Candy’?",
    img: "/mystical_shop.webp",
    alt: "Question Scene",
    options: ["3", "5", "7", "10"],
    answerAt: 2,
    marks: 1,
  },
  {
    id: 2,
    title: "Choki Choki",
    question: "Apa yang benar tentang Choki Choki?",
    img: "/mahjong_aunties.webp",
    alt: "Question Scene",
    options: [
      "Dibuat daripada chokolat & susu",
      "Mempunyai tekstur kenyal",
      "Ia masam",
      "Berasal dari China",
    ],
    answerAt: 0,
    marks: 1,
  },
  {
    id: 3,
    title: "Super Ring",
    question: "Apakah ciri paling ikonik snek Super Ring?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Ia berbentuk seperti cincin",
      "Ia meninggalkan kesan jingga terang pada jari anda",
      "Pembungkusnya berwarna biru",
      "Ia cair dalam air panas",
    ],
    answerAt: 1,
    marks: 1,
  },
  {
    id: 4,
    title: "Julie’s Peanut Butter Sandwich",
    question: "Apa yang menjadikan Julie’s Peanut Butter Sandwich ikonik?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Bentuk segi empat",
      "Lapisan inti berganda",
      "Salut coklat",
      "Tanpa gula",
    ],
    answerAt: 1,
    marks: 1,
  },
  {
    id: 5,
    title: "Yupi Burger",
    question: "Apakah “ramuan” yang membentuk Yupi Burger?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Roti, udang, keju, selada",
      "Roti, patty, cendawan, keju, selada",
      "Roti, patty, tomato, keju, rumpai laut",
      "Roti, patty, keju, selada",
    ],
    answerAt: 3,
    marks: 1,
  },
  {
    id: 6,
    title: "Biskuit Ais Jem",
    question: "Dari mana asal biskut ais jem yang popular?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: ["England", "Indonesia", "Sepanyol", "Thailand"],
    answerAt: 0,
    marks: 1,
  },
  {
    id: 7,
    title: "Haw Flakes",
    question:
      "Apakah kegunaan tradisional hawthorn dalam snek perubatan Cina seperti haw flakes?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Merawat sakit tekak",
      "Membantu pencernaan",
      "Merawat sakit kepala",
      "Meningkatkan pendengaran",
    ],
    answerAt: 1,
    marks: 1,
  },
  {
    id: 8,
    title: "Oreo Vanilla",
    question: "Apakah cara klasik untuk makan Oreo?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Celup, Kunyah, Celup",
      "Hancur, Tabur, Jilat",
      "Putar, Jilat, Celup",
      "Patah, Gigit, Tiup",
    ],
    answerAt: 2,
    marks: 1,
  },
  {
    id: 9,
    title: "BIKA Keropok Berperisa Ayam",
    question: "Apakah tekstur unik keropok BIKA?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Gebu",
      "Ringan & rangup",
      "Lembut dan dibakar",
      "Rata dan bulat",
    ],
    answerAt: 1,
    marks: 1,
  },
  {
    id: 10,
    title: "Miaow Miaow Snek Sotong",
    question: "Apakah rasa khas Miaow Miaow Sotong?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: ["Kari pedas", "Manis dan masin", "Keju", "Mentega bawang putih"],
    answerAt: 1,
    marks: 1,
  },
];

function GradeResultMessage({
  src,
  alt,
  grade,
  message,
}: {
  src: string;
  alt: string;
  grade: string;
  message: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="pt-4 m-auto"
      />
      <p className="h3 pt-4">{grade}</p>
      <p className="pt-4">{message}</p>
    </>
  );
}

export default function QuestionSheet() {
  const [idx, setIdx] = useState(0);

  const maxScore = useRef(0);
  const totalScore = useRef(0);

  function onQuestionAnswered(
    marksAwardedByQuestion: number,
    isCorrectlyAnswered: boolean
  ) {
    maxScore.current += marksAwardedByQuestion;
    totalScore.current += isCorrectlyAnswered ? marksAwardedByQuestion : 0;
    setIdx((prev) => prev + 1);
  }

  function onRetakeQuiz() {
    maxScore.current = 0;
    totalScore.current = 0;
    setIdx(0);
  }

  return (
    <>
      {!!list.length && !!(idx < list.length) ? (
        <>
          <div className="fixed left-0 pl-6 text-xl">
            <span>
              Q{idx + 1}/{list.length}
            </span>
          </div>
          <div className="flex flex-col items-center h-full">
            <h1
              className="h2"
              dangerouslySetInnerHTML={{
                __html: list[idx].title,
              }}
            />
            <QuestionText
              className="py-6"
              dangerouslySetInnerHTML={{
                __html: list[idx].question,
              }}
            />
            <QuestionPict src={list[idx].img} alt={list[idx].alt} />
            <div className="self-stretch flex flex-col px-10 gap-3">
              {!!list[idx].options.length &&
                list[idx].options.map((option, index) => (
                  <BigButton
                    key={`${list[idx].id + index}`}
                    className="bg-white"
                    onClick={() =>
                      onQuestionAnswered(
                        list[idx].marks,
                        index === list[idx].answerAt
                      )
                    }
                  >
                    <span
                      className="text-wrap"
                      dangerouslySetInnerHTML={{
                        __html: option,
                      }}
                    ></span>
                  </BigButton>
                ))}
            </div>
          </div>
        </>
      ) : list.length === 0 ? null : (
        // <div>
        //   <p>Show score card</p>
        //   <p>Max Score: {maxScore.current}</p>
        //   <p>Your Score: {totalScore.current}</p>
        //   {maxScore.current === totalScore.current ? (
        //     "Good! Full Score"
        //   ) : (
        //     <button onClick={onRetakeQuiz}>Retake Quiz</button>
        //   )}
        // </div>
        <>
          <h1>Max Score: {maxScore.current}</h1>
          <h2 className="pt-4">Your Score: {totalScore.current}</h2>
          <div className="pt-4">
            {totalScore.current > 8
              ? GradeResultMessage({
                  src: "/trophy-svgrepo-com.svg",
                  alt: "Trophy for excellent grade",
                  grade: "Snek Legenda",
                  message:
                    "Anda memang kenal keropok dan sotong anda, dan boleh beza antara snek zaman kanak-kanak dengan yang moden. Anda memang pakar snek Malaysia sejati. Restock dengan Ninja Mart sekarang!",
                })
              : totalScore.current > 5
              ? GradeResultMessage({
                  src: "/cookie-svgrepo-com.svg",
                  alt: "Cookie for good grade",
                  grade: "Pakar Snek",
                  message:
                    "Jelas sekali anda membesar dengan snek kegemaran ni. Anda memang tahu mana satu yang padu — tinggal beberapa gigitan lagi untuk capai tahap ‘OG’. Terokai senarai penuh snek dan manisan di Ninja Mart",
                })
              : totalScore.current > 2
              ? GradeResultMessage({
                  src: "/confused-emoji-svgrepo-com.svg",
                  alt: "Puzzled expression for average grade",
                  grade: "Penjelajah Snek",
                  message:
                    "Anda dah rasa beberapa snek klasik, tapi skill snek anda masih boleh diasah. Jom terokai senarai penuh snek dan manisan di Ninja Mart!",
                })
              : GradeResultMessage({
                  src: "/happy-emoji-svgrepo-com.svg",
                  alt: "Happy expression for poor grade",
                  grade: "Noob Snek",
                  message:
                    "Nampaknya dah tiba masa untuk kelas snek! Jangan risau, Ninja Mart ada semua snek ni untuk anda terokai.",
                })}
          </div>
          <BigButton className="m-20" onClick={onRetakeQuiz}>
            Retake Quiz
          </BigButton>
          <div className="mt-15">Social here...</div>
        </>
      )}
    </>
  );
}
