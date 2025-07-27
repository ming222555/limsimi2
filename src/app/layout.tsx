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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Snacko snackkie" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Quiz on your knowledge of Malaysian snacks"
        />
        <meta
          property="og:image"
          content="http://forfbshare.s3-website-ap-southeast-1.amazonaws.com/4_question-Three.jpg"
        />
        <meta property="og:url" content="https://limsimi2.vercel.app/" />
      </head>
      <body
        className="h-full"
        style={{
          fontFamily: `${inter.style.fontFamily}`,
        }}
      >
        {/* <div className="h-full bg-blue-200">{children}</div> */}
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
