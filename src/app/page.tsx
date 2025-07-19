"use client";

import { useState, useMemo } from "react";

import type { TQuestion } from "../ui/home/QuestionList";
import Cover from "../ui/home/Cover";
import Prelude from "../ui/home/Prelude";
import { MemoisedQuestionList } from "../ui/home/QuestionList";
import RevealDrink from "../ui/home/RevealDrink";
import DrinkRevealed from "../ui/home/DrinkRevealed";

const questions: TQuestion[] = [
  {
    id: 1,
    question:
      'The uncle grins and says, "Young one! Before I serve you, you must choose a door to start your journey. Remember: follow your heart!"',
    img: "/mystical_shop.webp",
    alt: "Question Scene",
    options: [
      "I'll go through the busy door where I can hear voices and laughter!",
      "I prefer the quiet door - let me explore at my own pace.",
    ],
  },
  {
    id: 2,
    question:
      "You emerge in a magical void deck where aunties are playing mahjong with floating tiles, and walls show visions of Singapore's past and future.",
    img: "/mahjong_aunties.webp",
    alt: "Question Scene",
    options: [
      "I'll sit with the aunties and learn from their stories of old Singapore.",
      "Those visions of future Singapore fascinate me, Let's check it out!",
    ],
  },
  {
    id: 3,
    question:
      'Following the aunties\' directions, you reach Marina Bay where the Merlion statue glows and speaks: "solve this riddle: A kopitiam uncle has 100 thirsty customers but only 80 cups. How does he handle this?"',
    img: "/merlion_quiz.webp",
    alt: "Question Scene",
    options: [
      "Calculate and plan a fair, efficient way to distribute or find alternatives.",
      "Talk to the customers, some may be ok to wait or share if they feel heard.",
    ],
  },
];

export default function Home() {
  const [isCover, setIsCover] = useState(true);
  const [isStartQuestion, setIsStartQuestion] = useState(false);
  const [isQuestionsCompleted, setIsQuestionsCompleted] = useState(false);
  const [isDrinkRevealed, setIsDrinkRevealed] = useState(false);

  const onQuestionsCompleted = useMemo(() => {
    return function () {
      setIsQuestionsCompleted(true);
    };
  }, []);

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `${
          isCover
            ? "linear-gradient(to right, rgba(255,0,0,1) , rgba(255,255,0,1))"
            : "linear-gradient(to right, rgba(255,0,0,.7) , rgba(255,255,0,.7))"
        }`,
      }}
    >
      <div
        className={`w-full ${
          isCover ? "max-w-[36rem]" : "max-w-[28rem]"
        } h-full m-auto text-center`}
        style={{
          backgroundImage: `${isCover ? "url(/landing-page.webp)" : ""}`,
        }}
      >
        {isCover ? (
          <Cover>
            <button
              onClick={() => setIsCover(false)}
              className="button text-black bg-[#f9dc66]"
            >
              Take the quiz
            </button>
          </Cover>
        ) : !isStartQuestion ? (
          <Prelude>
            <button
              onClick={() => setIsStartQuestion(true)}
              className="button text-black bg-[#f8da61]"
            >
              Begin Journey!
            </button>
          </Prelude>
        ) : !isQuestionsCompleted ? (
          <MemoisedQuestionList
            list={questions}
            onCompleted={onQuestionsCompleted}
          />
        ) : !isDrinkRevealed ? (
          <RevealDrink>
            <button
              onClick={() => setIsDrinkRevealed(true)}
              className="button text-black bg-[#f8da61]"
            >
              Reveal My Drink!
            </button>
          </RevealDrink>
        ) : (
          <DrinkRevealed />
        )}
      </div>
    </div>
  );
}
