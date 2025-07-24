import type { ComponentPropsWithRef } from "react";

export default function BigButton(props: ComponentPropsWithRef<"button">) {
  const { className, children, ...rest } = { ...props };
  const propsClassName = className === undefined ? "" : className;

  return (
    <button className={"text-3xl " + propsClassName} {...rest}>
      {children}
    </button>
  );
}
