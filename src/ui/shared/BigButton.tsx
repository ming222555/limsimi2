import type { ComponentPropsWithRef } from "react";

export default function BigButton(props: ComponentPropsWithRef<"button">) {
  const { className, children, ...rest } = { ...props };
  const propsClassName = className === undefined ? "" : className;

  return (
    <button
      className={
        "text-3xl bg-amber-300 py-3 px-6 rounded-full " + propsClassName
      }
      {...rest}
    >
      {children}
    </button>
  );
}
