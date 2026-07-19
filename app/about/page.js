import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/app/about/AboutIntro";
import MissionVisionCards from "@/app/about/MissionVisionCards";
import AdvisersSection from "@/app/about/AdvisersSection";
import OfficersSection from "@/app/about/OfficersSection";
import ExecutivesSection from "@/app/about/ExecutivesSection";
import CommitteesSection from "@/app/about/CommitteesSection";

export const metadata = {
  title: "About | CompSciety",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020806] via-[#0a2818] to-[#0d3320]">
      <Navbar />
      <AboutIntro />
      <section className="px-4 sm:px-8 mt-10">
        <div className="mx-auto max-w-5xl">
          <MissionVisionCards />
        </div>
      </section>
      <AdvisersSection />
      <OfficersSection />
      <ExecutivesSection />
      <CommitteesSection />
      <Footer />
    </div>
  );
}