import QuestionText from "./QuestionText";
import QuestionPict from "./QuestionPict";

export default function SectionPrelude({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Tittle@3x.png"
        alt="prelude_question.png"
        width={0}
        height={0}
        loading="eager"
        className="w-full h-auto mx-auto -mt-5"
        // style={{ outline: "1px solid blue" }}
      />
      {/* <QuestionText className="self-center box-content w-[15rem] px-6 py-3 mt-3 mb-6"> */}
      <QuestionText className="self-center box-content w-[15rem] px-6 py-3">
        SEJAUH MANA ANDA KENAL SNEK TEMPATAN ANDA?
      </QuestionText>
      {/* <h1>Sejauh Mana Anda Kenal Snek Tempatan Anda?</h1> */}
      {/* <QuestionText className="">
        Daripada stik coklat hinggalah ke snek sotong, hidangan ini mencorakkan
        zaman kanak-kanak kita — dan masih boleh didapati di kedai hingga hari
        ini. Rasa anda seorang penggemar snek Malaysia sejati? Buktikannya
        sekarang
      </QuestionText> */}
      {children}
    </>
  );
}
