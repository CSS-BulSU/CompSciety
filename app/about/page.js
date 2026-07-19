import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVisionCards from "@/components/about/MissionVisionCards";
import AdvisersSection from "@/components/about/AdvisersSection";
import OfficersSection from "@/components/about/OfficersSection";
import ExecutivesSection from "@/components/about/ExecutivesSection";
import CommitteesSection from "@/components/about/CommitteesSection";

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