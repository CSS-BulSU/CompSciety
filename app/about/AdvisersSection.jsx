import SectionHeading from "./SectionHeading";

// TODO: replace with real advisers from the backend
const ADVISERS = [
  {
    name: "Name",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSide: "left",
  },
  {
    name: "Name",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSide: "right",
  },
];

export default function AdvisersSection() {
  return (
    <section className="px-4 sm:px-8 mt-16">
      <SectionHeading>Advisers</SectionHeading>
      <div className="mx-auto max-w-5xl grid sm:grid-cols-2 gap-6 mt-8">
        {ADVISERS.map((a, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 bg-[#1a4d2e] flex gap-5 items-start ${
              a.imageSide === "right" ? "flex-row-reverse" : ""
            }`}
          >
            {/* TODO: swap for a real photo */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl bg-gray-200" />
            <div className="flex-1">
              <p className="text-green-100/80 text-sm leading-relaxed">{a.bio}</p>
              <p className="text-white text-sm mt-3 text-right">--{a.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}