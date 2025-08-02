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
      /* style={{ outline: "11px solid green" }} */
    >
      {/* article h-full */}
      {!isStartQuestion ? (
        <SectionPrelude>
          {/* <button
            className="text-3xl font-bold text-[#f06a69] bg-[#fcf8f5] shadow-[0_8px_8px_rgba(0,0,0,0.25)] self-center px-12 py-3 mt-5 rounded-full"
            onClick={() => setIsStartQuestion(true)}
          >
            MULA
          </button> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mula.png"
            alt="start"
            width={0}
            height={0}
            loading="eager"
            className="w-[12rem] h-auto mx-auto mt-6"
            role="button"
            onClick={() => setIsStartQuestion(true)}
          />
        </SectionPrelude>
      ) : (
        <SectionQuestionSheet />
      )}
    </article>
  );
}
