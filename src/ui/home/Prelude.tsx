export default function Prelude({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>
        You&lsquo;re walking past your favorite hawker center when you notice an
        uncle at a mysterious stall you&lsquo;ve never seen before. His sign
        reads &ldquo;Mystical Drinks - Find Your True Taste&ldquo;. As you
        approach closer, he winks and the world shimmers...
      </p>
      {children}
    </div>
  );
}
