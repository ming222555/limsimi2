import QuestionText from "./QuestionText";
import QuestionPict from "./QuestionPict";

export default function SectionPrelude({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Sejauh Mana Anda Kenal Snek Tempatan Anda?</h1>
      <QuestionText className="py-6">
        Daripada stik coklat hinggalah ke snek sotong, hidangan ini mencorakkan
        zaman kanak-kanak kita — dan masih boleh didapati di kedai hingga hari
        ini. Rasa anda seorang penggemar snek Malaysia sejati? Buktikannya
        sekarang
      </QuestionText>
      <QuestionPict
        src="/uncle_wink.webp"
        alt="Uncle winking at mysterious stall"
      />
      {children}
    </>
  );
}
