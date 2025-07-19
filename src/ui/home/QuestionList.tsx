import { useState, memo, useEffect } from "react";

export type TQuestion = {
  id: number;
  question: string;
  img: string;
  alt: string;
  options: string[];
};

export const MemoisedQuestionList = memo(function MemoisedQuestionList({
  list,
  onCompleted,
}: {
  list: TQuestion[];
  onCompleted: () => void;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (list.length > 0 && idx === list.length) {
      onCompleted();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <>
      {!!list.length && !!(idx < list.length) ? (
        <>
          <div className="fixed left-0 pl-6 text-xl">
            <span>
              Q{idx + 1}/{list.length}
            </span>
          </div>
          <div className="flex flex-col items-center h-full">
            <p
              className="text-2xl font-bold pt-12"
              dangerouslySetInnerHTML={{
                __html: list[idx].question,
              }}
            ></p>
            <div className="mx-10 my-6 rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={list[idx].img}
                alt={list[idx].alt}
                width={0}
                height={0}
                loading="eager"
                className="w-full h-auto"
              />
            </div>
            <div className="self-stretch flex flex-col px-10 gap-3">
              {!!list[idx].options.length &&
                list[idx].options.map((option, index) => (
                  <button
                    key={`${list[idx].id + index}`}
                    onClick={() => setIdx((prev) => prev + 1)}
                    className="button font-semibold text-xl text-black bg-white rounded-2xl text-wrap"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: option,
                      }}
                    ></span>
                  </button>
                ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
});
