import { useState, useEffect } from "react";

import BigButton from "../shared/BigButton";
import QuestionText from "../shared/QuestionText";
import QuestionPict from "../shared/QuestionPict";

export type TQuestion = {
  id: number;
  title: string;
  question: string;
  img: string;
  alt: string;
  options: string[];
  answer: string;
  score: number;
};

const list: TQuestion[] = [
  {
    id: 1,
    title: "Eyeglass Candy",
    question: 'How many candies are there in one "lens" of eyeglass candy?',
    img: "/mystical_shop.webp",
    alt: "Question Scene",
    options: ["3", "5", "7", "10"],
    answer: "7",
    score: 1,
  },
  {
    id: 2,
    title: "Ding Dang (Choco-Coated Biscuit Balls)",
    question:
      "What comes inside a box of Ding Dang besides the chocolate balls?",
    img: "/mahjong_aunties.webp",
    alt: "Question Scene",
    options: ["Free toy", "Fruit gummies", "Joke slip", "Mini spoon"],
    answer: "Free toy",
    score: 1,
  },
  {
    id: 3,
    title: "Super Ring",
    question: "What's the most iconic trait of Super Ring snacks?",
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "It's shaped like a ring",
      "It leaves your fingers bright orange",
      "It's blue packaging",
      "It melts in hot water",
    ],
    answer: "It leaves your fingers bright orange",
    score: 1,
  },
];

export default function QuestionSheet() {
  const [idx, setIdx] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  function onCompleted() {
    setIsCompleted(true);
  }

  useEffect(() => {
    if (list.length > 0 && idx === list.length) {
      onCompleted();
    }
  }, [idx]);

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
                    onClick={() => setIdx((prev) => prev + 1)}
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
        "Show score card"
      )}
    </>
  );
}

// <button
//   onClick={() => setIdx((prev) => prev + 1)}
//   className="button font-semibold text-xl text-black bg-white rounded-2xl text-wrap"
// ></button>
