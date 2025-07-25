import type { ComponentPropsWithRef } from "react";

export default function QuestionText(props: ComponentPropsWithRef<"p">) {
  const { className, children, ...rest } = { ...props };
  const propsClassName = className === undefined ? "" : className;

  return (
    <p className={"text-3xl text-[#ffffff] " + propsClassName} {...rest}>
      {children}
    </p>
  );
}
