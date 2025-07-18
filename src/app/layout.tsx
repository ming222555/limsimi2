import type { Metadata } from "next";

import { roboto } from "../assets/fonts/roboto/fonts";
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
    <html lang="en">
      <body
        style={{
          fontFamily: `${roboto.style.fontFamily}`,
        }}
      >
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
