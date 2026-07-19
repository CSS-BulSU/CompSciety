import SectionHeading from "./SectionHeading";

// TODO: replace with real officers + photos from the backend
const OFFICERS = [
  { title: "Internal Vice President" },
  { title: "President", featured: true },
  { title: "External Vice President" },
];

export default function OfficersSection() {
  return (
    <section className="px-4 sm:px-8 mt-16">
      <SectionHeading>Officers</SectionHeading>
      <div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-6 mt-8 items-end">
        {OFFICERS.map((o) => (
          <div
            key={o.title}
            className={`rounded-2xl border border-green-200/10 flex flex-col items-center justify-center gap-4 px-4 ${
              o.featured ? "bg-[#132e1c] py-14" : "bg-transparent py-10"
            }`}
          >
            {/* TODO: swap for a real photo */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-black border-4 border-green-400" />
            <p className="font-heading font-semibold text-green-300 text-xs sm:text-sm tracking-widest uppercase text-center">
              {o.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}