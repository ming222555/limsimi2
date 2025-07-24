export default function Cover({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>LimSimi?</h1>
      <h2 className="h3">Discover your Singaporean Drink!</h2>
      <p>Embark on a magical journey to uncover</p>
      <p>perfect Singaporean drink match!</p>
      <hr className="py-8 mb-auto invisible" />
      {children}
    </>
  );
}
