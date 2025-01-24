export default function HeadingSubheading({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-bold">{heading}</h2>
      <p className="text-xl pt-4 max-w-4xl mx-auto">{subheading}</p>
    </div>
  );
}
