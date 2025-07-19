export default function DrinkRevealed() {
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="h2 pt-3 text-white">#LimSimiQuiz</h1>
      <h2 className="h3 pt-10 order-first text-white">
        Feel free to share your result at
      </h2>
      <p className="pt-5">psst... long press to save your drink card!</p>
      <div className="mx-10 my-6 rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/coconut_shake.png"
          alt="Drink is revealed"
          width={0}
          height={0}
          loading="eager"
          className="w-full h-auto"
        />
      </div>
      <div className="self-stretch flex justify-center px-10 gap-3">
        <button
          onClick={() => {
            /* Share Quest */
          }}
          className="button font-semibold text-xl text-black bg-[#f8da61] rounded-2xl"
        >
          Share Quest
        </button>
        <button
          onClick={() => {
            /* All Drinks */
          }}
          className="button font-semibold text-xl text-black bg-[#f8da61] rounded-2xl"
        >
          All Drinks
        </button>
      </div>
      <footer className="text-xs text-blue-300 pt-6 pb-[4px]">
        <p>Support with a kopi if you enjoyed the quiz!</p>
        <p>lmk your thoughts here! &#64; 2025 LimSimi.</p>
      </footer>
    </div>
  );
}
