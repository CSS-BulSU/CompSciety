import SectionHeading from "./SectionHeading";

// TODO: replace with real committees from the backend
const COMMITTEES = [
  "Public Information Committee",
  "Membership Committee",
  "Wellness & Engagement Committee",
  "Financial Committee",
  "Multimedia Committee",
  "Technical Committee",
  "Logistics Committee",
  "Developer Core Committee",
];

export default function CommitteesSection() {
  return (
    <section className="px-4 sm:px-8 mt-16 mb-20">
      <SectionHeading>Committees</SectionHeading>
      <div className="mx-auto max-w-5xl grid sm:grid-cols-4 gap-4 mt-8">
        {COMMITTEES.map((title) => (
          <div
            key={title}
            className="rounded-xl bg-[#1a4d2e] py-8 px-4 flex items-center justify-center text-center"
          >
            <p className="font-heading font-semibold text-white text-sm">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}