export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Nav /> */}
      <main
        className="w-[30rem] max-w-[30rem] h-full mx-auto"
        style={{ border: "6px solid yellow" }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
