import type { ComponentPropsWithRef } from "react";

export default function QuestionText(props: ComponentPropsWithRef<"p">) {
  const { className, children, ...rest } = { ...props };
  const propsClassName = className === undefined ? "" : className;

  return (
    <p
      className={
        "text-xl font-bold text-[#000000] bg-[#ffffff] relative " +
        propsClassName
      }
      {...rest}
      style={{
        border: "2px solid #7bb0d8",
        boxShadow:
          "1px 1px #97c0b4, 2px 2px #97c0b4, 3px 3px #97c0b4, 4px 4px #97c0b4, 5px 5px #97c0b4",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/question_mark.png"
        alt="question mark"
        width={0}
        height={0}
        loading="eager"
        className="w-[3.6rem] h-auto absolute top-0 left-0 -translate-[50%]"
      />
      {children}
    </p>
  );
}
