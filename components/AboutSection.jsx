import GradientPillButton from "./ui/GradientPillButton";

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
              CompSciety exists to build a strong, united, and future-ready generation of Computer
              Science students, not merely to keep up with the times, but to define them. Guided by
              the values of excellence, innovation, integrity, collaboration, and inclusivity, we
              strive to turn knowledge into action, elevate the role of Computer Science in society,
              and contribute to the advancement of the field within and beyond the university.
            </p>
            {/* TODO: swap for a real photo */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-gray-200" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="rounded-2xl p-6 bg-[#1a4d2e]">
              <h4 className="font-heading font-bold text-white text-center text-lg mb-3">Mission</h4>
              <p className="text-green-200/70 text-sm text-center leading-relaxed">
                To cultivate a united community of socially responsible, future-ready scholars and
                innovators committed to excellence, ethical reasoning, and technological advancement
                in the service of the people and society.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-[#1a4d2e]">
              <h4 className="font-heading font-bold text-white text-center text-lg mb-3">Vision</h4>
              <p className="text-green-200/70 text-sm text-center leading-relaxed">
                To empower students through inclusive education, collaborative innovation, and
                ethical leadership, fostering a culture of service that responds to the evolving
                needs of the Filipino nation and the global community.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <GradientPillButton>Learn More</GradientPillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
