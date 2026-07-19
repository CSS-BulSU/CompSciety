import SectionHeading from "./SectionHeading";

// TODO: replace with real executives from the backend
const EXECUTIVES = [
  "Deputy Secretary External",
  "Deputy Secretary External",
  "Deputy Secretary External",
  "Deputy Secretary External",
];

export default function ExecutivesSection() {
  return (
    <section className="px-4 sm:px-8 mt-16">
      <SectionHeading>Executives</SectionHeading>
      <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4 mt-8">
        {EXECUTIVES.map((title, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#0d2818] py-10 px-4 flex items-center justify-center text-center"
          >
            <p className="font-heading font-semibold text-white text-sm">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}