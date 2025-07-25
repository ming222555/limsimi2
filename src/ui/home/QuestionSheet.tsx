import { useState, useEffect, useRef } from "react";

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
  answerAt: number;
  marks: number;
};

const list: TQuestion[] = [
  {
    id: 1,
    title: "Eyeglass Candy",
    question: 'How many candies are there in one "lens" of eyeglass candy?',
    img: "/mystical_shop.webp",
    alt: "Question Scene",
    options: ["3", "5", "7", "10"],
    answerAt: 2,
    marks: 1,
  },
  {
    id: 2,
    title: "Ding Dang (Choco-Coated Biscuit Balls)",
    question:
      "What comes inside a box of Ding Dang besides the chocolate balls?",
    img: "/mahjong_aunties.webp",
    alt: "Question Scene",
    options: ["Free toy", "Fruit gummies", "Joke slip", "Mini spoon"],
    answerAt: 0,
    marks: 3,
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
    answerAt: 1,
    marks: 6,
  },
];

export default function QuestionSheet() {
  const [idx, setIdx] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const maxScore = useRef(0);
  const totalScore = useRef(0);

  function onQuestionAnswered(
    marksAwardedByQuestion: number,
    isCorrectAnswer: boolean
  ) {
    maxScore.current += marksAwardedByQuestion;
    totalScore.current += isCorrectAnswer ? marksAwardedByQuestion : 0;
    setIdx((prev) => prev + 1);
  }

  function onCompleted() {
    setIsCompleted(true);
  }

  function onRetakeQuiz() {
    maxScore.current = 0;
    totalScore.current = 0;
    setIdx(0);
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
        <div>
          <p>Show score card</p>
          <p>Max Score: {maxScore.current}</p>
          <p>Your Score: {totalScore.current}</p>
          {maxScore.current === totalScore.current ? (
            "Good! Full Score"
          ) : (
            <button onClick={onRetakeQuiz}>Retake Quiz</button>
          )}
        </div>
      )}
    </>
  );
}

// <button
//   onClick={() => setIdx((prev) => prev + 1)}
//   className="button font-semibold text-xl text-black bg-white rounded-2xl text-wrap"
// ></button>
