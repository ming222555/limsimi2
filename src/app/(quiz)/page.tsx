"use client";

import { useState } from "react";

// import SectionCover from "../../ui/home/SectionCover";
import SectionPrelude from "../../ui/home/SectionPrelude";
import SectionQuestionSheet from "../../ui/home/SectionQuestionSheet";
// import BigButton from "../../ui/home/BigButton";

export default function Home() {
  const [isStartQuestion, setIsStartQuestion] = useState(false);

  return (
    // <article
    //   className={`text-center ${isCover ? "h-full flex flex-col" : "h-auto"}`}
    //   style={{ outline: "11px solid green" }}
    // >
    //   {isCover ? (
    //     <SectionCover>
    //       <BigButton className="self-center" onClick={() => setIsCover(false)}>
    //         Take the quiz
    //       </BigButton>
    //     </SectionCover>
    //   ) : !isStartQuestion ? (
    //     <SectionPrelude>
    //       <BigButton onClick={() => setIsStartQuestion(true)}>
    //         Prove it
    //       </BigButton>
    //     </SectionPrelude>
    //   ) : (
    //     <SectionQuestionSheet />
    //   )}
    // </article>
    <article
      className="flex flex-col text-center p-5"
      style={{ outline: "11px solid green" }}
    >
      {/* article h-full */}
      {!isStartQuestion ? (
        <SectionPrelude>
          <button
            className="text-3xl font-bold text-orange-600 bg-amber-50 self-center px-12 py-3 rounded-full"
            onClick={() => setIsStartQuestion(true)}
          >
            MULA
          </button>
        </SectionPrelude>
      ) : (
        <SectionQuestionSheet />
      )}
    </article>
  );
}
