export default function SectionHeading({ children }) {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="font-heading font-bold text-white text-3xl text-center mb-4">{children}</h2>
      <div className="border-t border-green-200/20" />
    </div>
  );
}