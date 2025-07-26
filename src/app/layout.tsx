import type { Metadata } from "next";

import { inter } from "../assets/fonts/inter/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snacko snackkie",
  description: "Quiz on your knowledge of Malaysian snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta property="og:title" content="Snacko snackkie" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://forfbshare.s3-website-ap-southeast-1.amazonaws.com/4_question-Three.jpg"
        />
        <meta property="og:url" content="https://limsimi2.vercel.app/" />
        <title>Snacko snackkie</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body
        className="h-full"
        style={{
          fontFamily: `${inter.style.fontFamily}`,
        }}
      >
        <div className="h-full bg-blue-200">{children}</div>
      </body>
    </html>
  );
}
