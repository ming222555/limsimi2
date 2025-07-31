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
      className="text-center h-full"
      style={{ outline: "11px solid green" }}
    >
      {!isStartQuestion ? (
        <SectionPrelude>
          <button onClick={() => setIsStartQuestion(true)}>Prove it</button>
        </SectionPrelude>
      ) : (
        <SectionQuestionSheet />
      )}
    </article>
  );
}
