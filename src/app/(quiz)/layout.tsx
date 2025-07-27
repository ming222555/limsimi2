import BackgroundSection from "../../ui/layout/BackgroundSection";
import { BackgroundProvider } from "../../context/BackgroundContext";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Nav /> */}
      <BackgroundProvider>
        <BackgroundSection />
        <main className="w-[25rem] max-w-[25rem] h-full mx-auto bg-[rgba(255,255,255,0.92)]">
          {children}
        </main>
      </BackgroundProvider>
      {/* <Footer /> */}
    </>
  );
}
