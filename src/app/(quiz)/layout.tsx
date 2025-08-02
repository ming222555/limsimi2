import BackgroundSection from "../../ui/layout/BackgroundSection";
import { BackgroundProvider } from "../../context/BackgroundContext";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav style={{ outline: "1px solid black" }} className="pt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Logo_NJM@3x.png"
          alt="ninjamart logo"
          width={100}
          height={70}
          loading="eager"
          className="mx-auto"
          /* style={{ outline: "1px solid green" }} */
        />
      </nav>
      {/* <BackgroundProvider> */}
      {/* <BackgroundSection /> */}
      <main
        className=""
        style={
          {
            /* outline: "3px solid yellow", */
            /* background: "rgba(0,0,255, 0.1)", */
          }
        }
      >
        {children}
      </main>
      {/* main h-full */}
      {/* </BackgroundProvider> */}
      {/* <Footer /> */}
    </>
  );
}
