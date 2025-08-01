import { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";

import { questionlist as list, listBackgrounds } from "../../data/questionlist";
import BigButton from "./BigButton";
import QuestionText from "./QuestionText";
import QuestionPict from "./QuestionPict";
import BackgroundContext from "../../context/BackgroundContext";

function GradeResultMessage({
  src,
  alt,
  grade,
  message,
}: {
  src: string;
  alt: string;
  grade: string;
  message: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="pt-4 m-auto"
      />
      <p className="h3 pt-4">{grade}</p>
      <p className="pt-4 px-4">{message}</p>
    </>
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

  return isMobile ? (
    <>
      <a
        href="whatsapp://send?text=https://limsimi2.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons8-whatsapp-48.png"
          alt="whatsapp share"
          width={48}
          height={48}
          loading="eager"
        />
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://limsimi2.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons8-facebook-48.png"
          alt="facebook share"
          width={48}
          height={48}
          loading="eager"
        />
      </a>
    </>
  ) : (
    <>
      <a
        href="https://web.whatsapp.com/send?text=https://limsimi2.vercel.app"
        data-action="share/whatsapp/share"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons8-whatsapp-48.png"
          alt="whatsapp share"
          width={48}
          height={48}
          loading="eager"
        />
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https://limsimi2.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons8-facebook-48.png"
          alt="facebook share"
          width={48}
          height={48}
          loading="eager"
        />
      </a>
    </>
  );
}

export default function SectionQuestionSheet() {
  const [idx, setIdx] = useState(0);

  const maxScore = useRef(0);
  const totalScore = useRef(0);

  const { setBackground } = useContext(BackgroundContext);

  function onQuestionAnswered(
    marksAwardedByQuestion: number,
    isCorrectlyAnswered: boolean
  ) {
    maxScore.current += marksAwardedByQuestion;
    totalScore.current += isCorrectlyAnswered ? marksAwardedByQuestion : 0;
    setIdx((prev) => prev + 1);
  }

  function onRetakeQuiz() {
    maxScore.current = 0;
    totalScore.current = 0;
    setIdx(0);
  }

  useEffect(() => {
    if (list.length) {
      if (idx < list.length) {
        if (listBackgrounds[idx]) {
          setBackground(listBackgrounds[idx]);
        }
      } else {
        setBackground("bg-[url(/exams-over.jpg)]");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <>
      {!!list.length && !!(idx < list.length) ? (
        <>
          <div className="fixed left-0 pl-6 -translate-y-8 text-xl">
            <span className="p-[4px] text-white bg-black">
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
              className="text-[1.6rem] px-4 py-6"
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
                    className="text-lg bg-gray-300 rounded-lg"
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
        <>
          <h1>Max Score: {maxScore.current}</h1>
          <h2 className="pt-4">Your Score: {totalScore.current}</h2>
          <div className="pt-4">
            {totalScore.current > 8
              ? GradeResultMessage({
                  src: "/trophy-svgrepo-com.svg",
                  alt: "Trophy for excellent grade",
                  grade: "Snek Legenda",
                  message:
                    "Anda memang kenal keropok dan sotong anda, dan boleh beza antara snek zaman kanak-kanak dengan yang moden. Anda memang pakar snek Malaysia sejati. Restock dengan Ninja Mart sekarang!",
                })
              : totalScore.current > 5
              ? GradeResultMessage({
                  src: "/cookie-svgrepo-com.svg",
                  alt: "Cookie for good grade",
                  grade: "Pakar Snek",
                  message:
                    "Jelas sekali anda membesar dengan snek kegemaran ni. Anda memang tahu mana satu yang padu — tinggal beberapa gigitan lagi untuk capai tahap ‘OG’. Terokai senarai penuh snek dan manisan di Ninja Mart",
                })
              : totalScore.current > 2
              ? GradeResultMessage({
                  src: "/confused-emoji-svgrepo-com.svg",
                  alt: "Puzzled expression for average grade",
                  grade: "Penjelajah Snek",
                  message:
                    "Anda dah rasa beberapa snek klasik, tapi skill snek anda masih boleh diasah. Jom terokai senarai penuh snek dan manisan di Ninja Mart!",
                })
              : GradeResultMessage({
                  src: "/happy-emoji-svgrepo-com.svg",
                  alt: "Happy expression for poor grade",
                  grade: "Noob Snek",
                  message:
                    "Nampaknya dah tiba masa untuk kelas snek! Jangan risau, Ninja Mart ada semua snek ni untuk anda terokai.",
                })}
          </div>
          {totalScore.current < maxScore.current ? (
            <BigButton className="m-20" onClick={onRetakeQuiz}>
              Retake Quiz
            </BigButton>
          ) : null}
          <div className="flex justify-end mx-4">
            <ShareSocial />
          </div>
        </>
      )}
    </>
  );
}
