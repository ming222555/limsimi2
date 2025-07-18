"use client";

import { useState } from "react";

import Cover from "../ui/home/Cover";
import Prelude from "../ui/home/Prelude";
import Question from "../ui/home/Question";

export default function Home() {
  const [isCover, setIsCover] = useState(true);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: "linear-gradient(to right, red , yellow)",
        opacity: `${isCover ? null : 0.7}`,
      }}
    >
      <div
        className="w-full max-w-[36rem] h-full m-auto text-center"
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
        ) : !questionNum ? (
          <Prelude>
            <button
              onClick={() => setQuestionNum(1)}
              className="button text-black bg-[#f8da61]"
            >
              Begin Journey!
            </button>
          </Prelude>
        ) : (
          <Question num={questionNum} />
        )}
      </div>
    </div>
  );
}
