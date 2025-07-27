"use client";

import { createContext, useState } from "react";

const BackgroundContext = createContext({
  background: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setBackground: (background: string) => {},
});

export function BackgroundProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = useState("");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export default BackgroundContext;
