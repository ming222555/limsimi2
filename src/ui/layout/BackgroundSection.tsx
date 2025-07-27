"use client";

import { useContext } from "react";

import BackgroundContext from "../../context/BackgroundContext";

export default function BackgroundSection() {
  const { background } = useContext(BackgroundContext);

  return (
    <section
      className={`fixed top-0 right-0 bottom-0 left-0 -z-1 ${background}`}
    ></section>
  );
}
