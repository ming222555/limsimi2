export default function SectionCover({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Welcome to Snacko!</h1>
      <h2 className="h3 pt-4">Are you a true Malaysian snackkie?</h2>
      <p className="pt-4">Embark on an exciting journey to find out!</p>
      <hr className="py-8 mb-auto invisible" />
      {children}
    </>
  );
}
