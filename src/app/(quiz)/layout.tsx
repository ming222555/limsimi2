import BackgroundSection from "../../ui/layout/BackgroundSection";
import { BackgroundProvider } from "../../context/BackgroundContext";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav style={{ outline: "1px solid black" }} className="mt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Logo_NJM@3x.png"
          alt="ninjamart"
          width={100}
          height={70}
          loading="eager"
          className="mx-auto"
          style={{ outline: "1px solid green" }}
        />
      </nav>
      <BackgroundProvider>
        <BackgroundSection />
        <main className="h-full" style={{ outline: "3px solid yellow" }}>
          {children}
        </main>
      </BackgroundProvider>
      {/* <Footer /> */}
    </>
  );
}
