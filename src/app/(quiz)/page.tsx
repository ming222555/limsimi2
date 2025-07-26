"use client";

import { useState } from "react";

import SectionCover from "../../ui/home/SectionCover";
import SectionPrelude from "../../ui/home/SectionPrelude";
import SectionQuestionSheet from "../../ui/home/SectionQuestionSheet";
import BigButton from "../../ui/home/BigButton";

export default function Home() {
  const [isCover, setIsCover] = useState(true);
  const [isStartQuestion, setIsStartQuestion] = useState(false);

  return (
    <article
      className={`text-center py-8 ${
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
        <SectionQuestionSheet />
      )}
    </article>
  );
}
