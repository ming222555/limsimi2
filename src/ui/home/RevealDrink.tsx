export default function RevealDrink({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center h-full">
      <p className="text-2xl font-bold pt-12">
        You find yourself back at the original hawker stall, but now the
        mysterious uncle is holding a steaming cup of your perfectly crafted
        drink. &ldquo;Wah, you completed the whole quest! Your journey through
        magical Singapore has revealed exactly which drink matches your
        personality.&ldquo;
      </p>
      <div className="mx-10 my-6 rounded-lg overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ending_uncle.webp"
          alt="Uncle preparing your destined drink"
          width={0}
          height={0}
          loading="eager"
          className="w-full h-auto"
        />
      </div>
      {children}
    </div>
  );
}
