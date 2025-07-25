"use client";

import { useState } from "react";

// import type { TQuestion } from "../ui/home/QuestionSheet";
import SectionCover from "../../ui/home/SectionCover";
import SectionPrelude from "../../ui/home/SectionPrelude";
import BigButton from "../../ui/shared/BigButton";
import QuestionSheet from "../../ui/home/QuestionSheet";
/* import RevealDrink from "../ui/home/RevealDrink";
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
  const [isStartQuestion, setIsStartQuestion] = useState(false);
  const [isQuestionsCompleted, setIsQuestionsCompleted] = useState(false);
  // const [isDrinkRevealed, setIsDrinkRevealed] = useState(false);
  //
  // const onQuestionsCompleted = useMemo(() => {
  //   return function () {
  //     setIsQuestionsCompleted(true);
  //   };
  // }, []);

  return (
    <article
      className={`text-center pt-4 ${
        isCover ? "h-full flex flex-col" : "h-auto"
      }`}
      style={{ border: "4px solid blue" }}
    >
      {isCover ? (
        <SectionCover>
          <BigButton className="self-center" onClick={() => setIsCover(false)}>
            Take the quiz
          </BigButton>
        </SectionCover>
      ) : !isStartQuestion ? (
        <SectionPrelude>
          <BigButton onClick={() => setIsStartQuestion(true)}>
            Prove it
          </BigButton>
        </SectionPrelude>
      ) : (
        <QuestionSheet />
      )}
    </article>
  );
}
