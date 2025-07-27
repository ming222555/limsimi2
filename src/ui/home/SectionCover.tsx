export default function SectionCover({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-gray-400">Welcome to Snacko!</h1>
      <h2 className="text-gray-400 h3 pt-4 ">
        Are you a true Malaysian snackkie?
      </h2>
      <p className="text-gray-400 h4 pt-4 italic">
        Embark on an exciting journey to find out!
      </p>
      <hr className="py-8 mb-auto invisible" />
      {children}
    </>
  );
}
