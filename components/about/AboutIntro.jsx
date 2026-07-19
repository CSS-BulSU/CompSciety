import { ABOUT_PARAGRAPH } from "@/lib/aboutContent";

export default function AboutIntro() {
  return (
    <section className="px-4 sm:px-8 pt-14">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mb-8">
          About CompSciety
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-green-200/80 text-sm sm:text-base leading-relaxed">{ABOUT_PARAGRAPH}</p>
          {/* TODO: swap for a real photo */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200" />
        </div>
      </div>
    </section>
  );
}