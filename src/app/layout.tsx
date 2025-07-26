import type { Metadata } from "next";

import { inter } from "../assets/fonts/inter/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Which Drink Quiz",
  description: "Quiz on your favourite drink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>My Page Title</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className="h-full"
        style={{
          fontFamily: `${inter.style.fontFamily}`,
        }}
      >
        <div className="h-full bg-blue-300">{children}</div>
      </body>
    </html>
  );
}
