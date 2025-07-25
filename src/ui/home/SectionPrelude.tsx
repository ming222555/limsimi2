import QuestionText from "./QuestionText";
import QuestionPict from "./QuestionPict";

export default function SectionPrelude({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>How Well Do You Know Your Local Snacks?</h1>
      <QuestionText className="py-6">
        From eyeball candies and choco biscuit balls to crunchy keropok warna
        warni, these snacks shaped our childhoods and there&lsquo;re still
        stocked in stores today. Think you&lsquo;re a true Malaysian snackkie?
      </QuestionText>
      <QuestionPict
        src="/uncle_wink.webp"
        alt="Uncle winking at mysterious stall"
      />
      {children}
    </>
  );
}
