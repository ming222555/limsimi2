export default function Cover({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="h2 pt-3 text-white">Discover your Singaporean Drink!</h1>
      <h2 className="h1 text-5xl pt-10 order-first text-white">LimSimi?</h2>
      <p className="pt-5">Embark on a magical journey to uncover</p>
      <p className="pt-3 pb-6 mb-auto">your perfect Singaporean drink match!</p>
      {children}
      <footer className="text-xs text-blue-300 pt-6 pb-[4px]">
        <p>Crafted with a passion for kopitiam drinks.</p>
        <p>&#64; 2025 LimSimi by &#64;tyeckh & ky. All rights reserved.</p>
      </footer>
    </div>
  );
}
