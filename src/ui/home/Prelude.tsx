import QuestionText from "../shared/QuestionText";

export default function Prelude({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QuestionText>
        You&lsquo;re walking past your favorite hawker center when you notice an
        uncle at a mysterious stall you&lsquo;ve never seen before. His sign
        reads &ldquo;Mystical Drinks - Find Your True Taste&ldquo;. As you
        approach closer, he winks and the world shimmers...
      </QuestionText>
      <div className="mx-10 my-6 rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/uncle_wink.webp"
          alt="Uncle winking at mysterious stall"
          width={0}
          height={0}
          loading="eager"
          className="w-full h-auto"
        />
      </div>
      {children}
    </>
  );
}
