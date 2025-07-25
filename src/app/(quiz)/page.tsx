"use client";

import { useState } from "react";

import type { TQuestion } from "../ui/home/QuestionList";
import Cover from "../../ui/home/Cover";
import Prelude from "../../ui/home/Prelude";
import BigButton from "../../ui/shared/BigButton";
/* import { MemoisedQuestionList } from "../ui/home/QuestionList";
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
]; */

export default function Home() {
  const [isCover, setIsCover] = useState(true);
  // const [isStartQuestion, setIsStartQuestion] = useState(false);
  // const [isQuestionsCompleted, setIsQuestionsCompleted] = useState(false);
  // const [isDrinkRevealed, setIsDrinkRevealed] = useState(false);
  //
  // const onQuestionsCompleted = useMemo(() => {
  //   return function () {
  //     setIsQuestionsCompleted(true);
  //   };
  // }, []);

  return (
    <article
      className={`text-center ${isCover ? "h-full flex flex-col" : "h-auto"}`}
      style={{ border: "4px solid blue" }}
    >
      {isCover ? (
        <Cover>
          <BigButton className="self-center" onClick={() => setIsCover(false)}>
            Take the quiz
          </BigButton>
        </Cover>
      ) : (
        <Prelude>
          <BigButton onClick={() => {}}>Begin Journey!</BigButton>
        </Prelude>
      )}
    </article>
  );
}
