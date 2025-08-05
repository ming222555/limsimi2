import { useState, useRef, useEffect, useContext, useMemo } from "react";
import Image from "next/image";

import QuestionText from "./QuestionText";

import {
  questionlist as list /* , listBackgrounds */,
} from "../../data/questionlist";
import type { TQuestion } from "../../data/questionlist";
// import BigButton from "./BigButton";
// import QuestionText from "./QuestionText";
// import QuestionPict from "./QuestionPict";
///////////// import BackgroundContext from "../../context/BackgroundContext";

const optionSelectedlist: number[] = Array(list.length).fill(-1);

const MAX_SCORE = list.reduce<number>(
  (accum, question) => accum + question.marks,
  0
);

function computeTotalScore() {
  const totalScore = list.reduce<number>(
    (accum, question, idx) =>
      optionSelectedlist[idx] === question.answerAt
        ? accum + question.marks
        : accum,
    0
  );
  return totalScore;
}

function GradeResult({ score }: { score: number }) {
  return (
    <div
      style={{ display: "block", width: 320, height: 475 }}
      className="mx-auto"
    >
      {score > 8 ? (
        <Image
          src="/images/Rating-7@3x.png"
          alt="grade 9-10"
          width={991}
          height={1471}
          priority
          layout="responsive"
          sizes="(min-width: 1px) 320px"
        />
      ) : score > 5 ? (
        <Image
          src="/images/Rating-8@3x.png"
          alt="grade 6-8"
          width={991}
          height={1471}
          priority
          layout="responsive"
          sizes="(min-width: 1px) 320px"
        />
      ) : score > 2 ? (
        <Image
          src="/images/Rating-9@3x.png"
          alt="grade 3-5"
          width={991}
          height={1471}
          priority
          layout="responsive"
          sizes="(min-width: 1px) 320px"
        />
      ) : (
        <Image
          src="/images/Rating-10@3x.png"
          alt="grade 0-2"
          width={991}
          height={1471}
          priority
          layout="responsive"
          sizes="(min-width: 1px) 320px"
        />
      )}
    </div>
  );
}

function ShareSocial() {
  const [isMobile, setIsMobile] = useState(false);

  function mobileCheck() {
    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substring(0, 5)
      )
    ) {
      return true; // mobile
    }
    return false;
  }

  useEffect(() => {
    if (mobileCheck()) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://limsimi2.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/icons8-facebook-48.png"
          alt="facebook share"
          width={48}
          height={48}
          loading="eager"
          sizes="(min-width: 1px) 48px"
        />
      </a>
      {isMobile ? (
        <a
          href="whatsapp://send?text=https://limsimi2.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icons8-whatsapp-48.png"
            alt="whatsapp share"
            width={48}
            height={48}
            loading="eager"
            sizes="(min-width: 1px) 48px"
          />
        </a>
      ) : (
        <a
          href="https://web.whatsapp.com/send?text=https://limsimi2.vercel.app"
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/icons8-whatsapp-48.png"
            alt="whatsapp share"
            width={48}
            height={48}
            loading="eager"
            sizes="(min-width: 1px) 48px"
          />
        </a>
      )}
    </>
  );
}

function QuestionOptions({
  questionNum,
  question,
  optionSelected,
  onOptionChange,
  gotoNextQuestion,
}: {
  questionNum: number;
  question: TQuestion;
  optionSelected: number;
  onOptionChange: (questionNum: number, newOption: number) => void;
  gotoNextQuestion: () => void;
}) {
  const [myAnswer, setMyAnswer] = useState(optionSelected);

  const questionNumRef = useRef(-999);
  questionNumRef.current = questionNum;

  useEffect(() => {
    setMyAnswer(optionSelected);
  }, [questionNum, optionSelected]);

  useEffect(() => {
    onOptionChange(questionNumRef.current, myAnswer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myAnswer]);

  const hoverQuestionOptionBackground = "hover:bg-[#d8e5d4]";
  const hoverQuestionOptionForeground = "hover:bg-white";

  return (
    <>
      {question.options.map((option, index) => (
        <button
          key={`${list[questionNum].id + index}`}
          className={`text-md flex items-center rounded-full ${
            myAnswer === index ? "bg-[#b6d5c3]" : "bg-white"
          } ${hoverQuestionOptionBackground}`}
          onClick={() => {
            setMyAnswer(index);
            setTimeout(() => {
              gotoNextQuestion();
            }, 0);
          }}
        >
          <div
            className={`flex items-center justify-center w-[1.4rem] h-[1.4rem] m-[4px] rounded-full ${
              myAnswer === index ? "bg-white" : "bg-[#b6d5c3]"
            } ${hoverQuestionOptionForeground}`}
          >
            <div className="flex items-center justify-center w-[0.6rem] h-[0.6rem] font-extrabold rounded-full">
              {index === 0
                ? "A"
                : index === 1
                ? "B"
                : index === 2
                ? "C"
                : index === 3
                ? "D"
                : index === 4
                ? "E"
                : index === 5
                ? "F"
                : "G"}
            </div>
          </div>
          <span
            className="grow text-left font-bold p-1 pr-2 text-wrap"
            dangerouslySetInnerHTML={{
              __html: option,
            }}
          ></span>
        </button>
      ))}
    </>
  );
}

function QuestionOptionsReadonly({
  questionNum,
  question,
  optionSelected,
}: {
  questionNum: number;
  question: TQuestion;
  optionSelected: number;
}) {
  const [myAnswer, setMyAnswer] = useState(optionSelected);

  useEffect(() => {
    setMyAnswer(optionSelected);
  }, [questionNum, optionSelected]);

  return (
    <>
      {question.options.map((option, index) => (
        <button
          key={`${list[questionNum].id + index}`}
          className={`text-md flex items-center rounded-full ${
            myAnswer === index ? "bg-[#b6d5c3]" : "bg-white"
          } cursor-not-allowed relative`}
          disabled
        >
          <div
            className={`flex items-center justify-center w-[1.4rem] h-[1.4rem] m-[4px] rounded-full ${
              myAnswer === index ? "bg-white" : "bg-[#b6d5c3]"
            }`}
          >
            <div className="flex items-center justify-center w-[0.6rem] h-[0.6rem] font-extrabold rounded-full">
              {index === 0
                ? "A"
                : index === 1
                ? "B"
                : index === 2
                ? "C"
                : index === 3
                ? "D"
                : index === 4
                ? "E"
                : index === 5
                ? "F"
                : "G"}
            </div>
          </div>
          <span
            className="grow text-left font-bold p-1 pr-2 text-wrap cursor-not-allowed"
            dangerouslySetInnerHTML={{
              __html: option,
            }}
          ></span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/star.svg"
            alt="this the correct answer"
            width={25}
            height={25}
            loading="eager"
            className={`w-[1rem] h-[1rem] absolute -translate-x-[100%] ${
              index === question.answerAt ? "block" : "hidden"
            }`}
          />
        </button>
      ))}
    </>
  );
}

export default function SectionQuestionSheet() {
  const [idx, setIdx] = useState(0);

  const totalScore = useRef(0);
  const isViewSubmittedAnswers = useRef(false);

  /////////////  const { setBackground } = useContext(BackgroundContext);

  const onOptionSelected = useMemo(() => {
    return function (questionNum: number, option: number) {
      optionSelectedlist[questionNum] = option;
    };
  }, []);

  const gotoNextQuestion = useMemo(() => {
    return function () {
      setIdx((prev) => prev + 1);
    };
  }, []);

  function onViewSubmittedAnswers() {
    isViewSubmittedAnswers.current = true;
    setIdx(0);
  }

  function onRetakeQuiz() {
    for (let i = 0; i < optionSelectedlist.length; i++) {
      optionSelectedlist[i] = -1;
    }
    totalScore.current = 0;
    isViewSubmittedAnswers.current = false;
    setIdx(0);
  }

  // useEffect(() => {
  //   if (list.length) {
  //     if (idx < list.length) {
  //       if (listBackgrounds[idx]) {
  //         setBackground(listBackgrounds[idx]);
  //       }
  //     } else {
  //       setBackground("bg-[url(/exams-over.jpg)]");
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [idx]);

  if (list.length && idx === list.length) {
    // last question has been answered
    totalScore.current = computeTotalScore();
  }

  return (
    <>
      {!!list.length && !!(idx < list.length) ? (
        <>
          {/* <div className="fixed left-0 pl-6 -translate-y-8 text-xl">
          <span className="p-[4px] text-white bg-black">
            Q{idx + 1}/{list.length}
          </span>
        </div> */}
          <span className="absolute top-0 left-0 translate-y-[0%] font-bold text-sm text-white bg-black mt-[3px] p-[2px] rounded-lg">
            q{idx + 1} / {list.length}
          </span>
          <div
            className={`${
              idx <= 0 ? "hidden" : "block"
            } absolute top-0 left-0 translate-y-[140%]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Arrow-5@3x.png"
              alt="left arrow"
              width={25}
              height={25}
              loading="eager"
              role="button"
              // style={{ outline: "1px solid green" }}
              onClick={() => setIdx((prev) => prev - 1)}
            />
          </div>
          <div
            className={`${
              idx >= list.length ? "hidden" : "block"
            } absolute top-0 right-0 translate-y-[140%]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Arrow-4@3x.png"
              alt="right arrow"
              width={25}
              height={30}
              loading="eager"
              role="button"
              // style={{ outline: "1px solid green" }}
              onClick={() => setIdx((prev) => prev + 1)}
            />
          </div>
          <div
            //// className="w-[15rem] mx-auto"
            // className={`${list[idx].imgWidthTailwind} mx-auto`}
            //// style={{ outline: "2px solid yellow" }}
            style={{ display: "block", width: 240, height: 168 }}
            // w-[15rem] 240px
            className="mx-auto"
          >
            {}
            {/* <img
              src={list[idx].img}
              alt={list[idx].alt}
              width={0}
              height={0}
              loading="eager"
              // className="w-full h-auto bg-blue-100"
              className="w-full h-auto"
            /> */}
            <Image
              src={list[idx].img}
              alt={list[idx].alt}
              width={751}
              height={526}
              priority
              layout="responsive"
              sizes="(min-width: 1px) 240px"
            />
          </div>
          {/* <div className="flex flex-col items-center h-full bg-amber-500"> */}
          <QuestionText className="mx-auto box-content w-[15rem] px-6 py-3 my-4">
            <span dangerouslySetInnerHTML={{ __html: list[idx].question }} />
          </QuestionText>
          <div className="flex flex-col gap-3">
            {/* <h1
              className="h2"
              dangerouslySetInnerHTML={{
                __html: list[idx].title,
              }}
            /> */}
            {/* <div
              className="mt-4 mb-8 rounded-lg overflow-hidden"
              style={{ outline: "2px solid yellow" }}
            >
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={list[idx].img}
                alt={list[idx].alt}
                width={0}
                height={0}
                loading="eager"
                className="w-full h-auto bg-blue-100"
              />
            </div> */}
            {/* <QuestionPict src={list[idx].img} alt={list[idx].alt} /> */}
            {/* <QuestionText
              className="py-6"
              dangerouslySetInnerHTML={{
                __html: list[idx].question,
              }}
            /> */}
            {/* <p
              className="bg-green-100"
              dangerouslySetInnerHTML={{
                __html: list[idx].question,
              }}
            /> */}
            {!!list[idx].options.length &&
              (!isViewSubmittedAnswers.current ? (
                <QuestionOptions
                  questionNum={idx}
                  question={list[idx]}
                  optionSelected={optionSelectedlist[idx]}
                  onOptionChange={onOptionSelected}
                  gotoNextQuestion={gotoNextQuestion}
                />
              ) : (
                <QuestionOptionsReadonly
                  questionNum={idx}
                  question={list[idx]}
                  optionSelected={optionSelectedlist[idx]}
                />
              ))}
            {/* {!!list[idx].options.length && (
              <QuestionOptions
                questionNum={idx}
                question={list[idx]}
                optionSelected={optionSelectedlist[idx]}
                onOptionChange={onOptionSelected}
              />
            )} */}
            {/* {!!list[idx].options.length &&
              list[idx].options.map((option, index) =>
                !isViewSubmittedAnswers.current ? (
                  <button
                    key={`${list[idx].id + index}`}
                    className="text-lg bg-white flex items-center rounded-full"
                    onClick={() => onOptionSelected(idx, index)}
                  >
                    <div className="flex items-center justify-center w-[1.5rem] h-[1.5rem] m-[4px] rounded-full bg-[#b6d5c3]">
                      <div className="flex items-center justify-center w-[1rem] h-[1rem] font-extrabold rounded-full bg-[#b6d5c3]">
                        {index === 0
                          ? "A"
                          : index === 1
                          ? "B"
                          : index === 2
                          ? "C"
                          : index === 3
                          ? "D"
                          : index === 4
                          ? "E"
                          : index === 5
                          ? "F"
                          : "G"}
                      </div>
                    </div>
                    <span
                      className="grow text-left font-bold p-1 pr-2 text-wrap"
                      dangerouslySetInnerHTML={{
                        __html: option,
                      }}
                    ></span>
                  </button>
                ) : (
                  <button
                    key={`${list[idx].id + index}`}
                    className="text-lg bg-gray-300 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    <span
                      className={`text-wrap text-3xl ${
                        index === list[idx].answerAt ? "underline" : ""
                      } ${
                        index === optionSelectedlist[idx] ? "bg-blue-400" : ""
                      } cursor-not-allowed`}
                      dangerouslySetInnerHTML={{
                        __html: option,
                      }}
                    ></span>
                  </button>
                )
              )} */}
          </div>
        </>
      ) : list.length === 0 ? null : (
        <>
          {/* <h1>Max Score: {MAX_SCORE}</h1>
          <h2 className="">Your Score: {totalScore.current}</h2> */}
          <GradeResult score={totalScore.current} />
          {/* <button onClick={onViewSubmittedAnswers}>ViewSubmittedAnswers</button> */}
          <div className="flex justify-between mt-3 rounded-full bg-[rgba(0,0,0,.16)]">
            <Image
              src="/images/Button-Semak_1@3x.png"
              alt="Semak Jawapan"
              width={200}
              height={52}
              loading="eager"
              layout="fixed"
              sizes="(min-width: 1px) 200px"
              role="button"
              onClick={onViewSubmittedAnswers}
            />
            {/* {totalScore.current < MAX_SCORE ? (
            <button className="" onClick={onRetakeQuiz}>
              Retake Quiz
            </button>
          ) : null} */}
            {/* <button className="" onClick={onRetakeQuiz}>
            Retake Quiz
          </button> */}
            {/* <button
            className="w-[12rem] text-xl font-bold text-[#f06a69] bg-[#fcf8f5] shadow-[0_8px_8px_rgba(0,0,0,0.25)] self-center px-5 py-3 mt-5 rounded-full"
            onClick={onRetakeQuiz}
          >
            Retake Quiz
          </button> */}
            {/* <div className="flex justify-end"> */}
            <ShareSocial />
            {/* </div> */}
            {/* <div>{optionSelectedlist}</div> */}
          </div>
        </>
      )}
    </>
  );
}
