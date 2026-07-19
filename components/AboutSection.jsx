import GradientPillButton from "./ui/GradientPillButton";
import MissionVisionCards from "../app/about/MissionVisionCards";
import { ABOUT_PARAGRAPH } from "@/lib/aboutContent";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-8 mt-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mb-8">
          About Compsciety
        </h2>

        <div className="rounded-3xl p-6 sm:p-10 bg-[#0d2818]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-green-200/80 text-sm sm:text-base leading-relaxed">
              {ABOUT_PARAGRAPH}
            </p>
            {/* TODO: swap for a real photo */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200" />
          </div>

          <div className="mt-8">
            <MissionVisionCards />
          </div>

          <div className="flex justify-center mt-8">
            <GradientPillButton href="/about">Learn More</GradientPillButton>
          </div>
        </div>
      </div>
    </section>
  );
}