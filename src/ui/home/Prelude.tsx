import QuestionText from "../shared/QuestionText";
import QuestionPict from "../shared/QuestionPict";

export default function Prelude({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QuestionText className="py-6">
        You&lsquo;re walking past your favorite hawker center when you notice an
        uncle at a mysterious stall you&lsquo;ve never seen before. His sign
        reads &ldquo;Mystical Drinks - Find Your True Taste&ldquo;. As you
        approach closer, he winks and the world shimmers...
      </QuestionText>
      <QuestionPict
        src="/uncle_wink.webp"
        alt="Uncle winking at mysterious stall"
      />
      {children}
    </>
  );
}
