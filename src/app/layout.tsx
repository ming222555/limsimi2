import type { Metadata } from "next";

import { inter } from "../assets/fonts/inter/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOM Quiz",
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
        <meta property="og:title" content="JOM Quiz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Quiz on your knowledge of Malaysian snacks"
        />
        <meta
          property="og:image"
          content="http://forfbshare.s3-website-ap-southeast-1.amazonaws.com/bika_keropok.png"
        />
        <meta property="og:url" content="https://limsimi2.vercel.app/" />
      </head>
      <body
        className="h-full bg-[url(/images/Background@3x.png)]"
        style={{
          fontFamily: `${inter.style.fontFamily}`,
        }}
      >
        <div
          // style={{ background: "rgba(0,255,0,.25)" }}
          className="w-[30rem] max-w-[30rem] h-full mx-auto relative"
        >
          {children}
          <footer className="fixed bottom-0 w-[30rem] -z-1">
            {/* footer bg-amber-100 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ninjamart-van-on-road.png"
              alt="ninjamart van on road"
              width={0}
              height={0}
              loading="eager"
              className="w-full h-auto"
              /* style={{ outline: "1px solid blue" }} */
            />
          </footer>
        </div>
      </body>
    </html>
  );
}
