export default function Prelude({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center h-full"
      style={{ border: "1px solid blue" }}
    >
      <p className="text-2xl font-bold pt-12">
        You&lsquo;re walking past your favorite hawker center when you notice an
        uncle at a mysterious stall you&lsquo;ve never seen before. His sign
        reads &ldquo;Mystical Drinks - Find Your True Taste&ldquo;. As you
        approach closer, he winks and the world shimmers...
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/uncle_wink.webp"
        alt="Old man winking with cup of coffee"
        width={0}
        height={0}
        loading="eager"
        className="w-full h-auto px-10 py-6"
      />
      {children}
    </div>
  );
}
