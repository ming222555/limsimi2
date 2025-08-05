import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";

import { inter } from "../assets/fonts/inter/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

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
        <meta property="og:title" content="JOM Quiz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Quiz on your knowledge of Malaysian snacks"
        />
        <meta
          property="og:image"
          content="https://limsimi2.vercel.app/images/bika_keropok.png"
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
          className="w-[24rem] max-w-[24rem] h-full mx-auto relative"
        >
          {children}
          <footer className="fixed bottom-0 w-[24rem] -z-1">
            {/* footer bg-amber-100 */}
            {/* <img
              src="/images/ninjamart-van-on-road.png"
              alt="ninjamart van on road"
              width={0}
              height={0}
              loading="eager"
              className="w-full h-auto"
              // style={{ outline: "1px solid blue" }}
            /> */}
            <div style={{ display: "block", width: 384, height: 194 }}>
              <Image
                src="/images/ninjamart-van-on-road.png"
                alt="ninjamart van on road"
                width={1801}
                height={913}
                priority
                layout="responsive"
                sizes="(min-width: 1px) 384px"
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
