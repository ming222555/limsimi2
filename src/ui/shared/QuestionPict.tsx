export default function QuestionPict({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mx-10 mb-6 rounded-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={0}
        height={0}
        loading="eager"
        className="w-full h-auto"
      />
    </div>
  );
}
