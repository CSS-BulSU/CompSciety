import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import SuggestionBox from "@/components/site/SuggestionBox";
import CopyEmail from "@/components/site/CopyEmail";
import Socials from "@/components/site/Socials";

export const metadata = {
  title: "Contact",
  description: "Email CompSciety, partner with us, or drop a note in the suggestion box.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero crumb="contact" title="Contact & suggestion box">
        Tell us what you think, what we should run next, or what&apos;s broken. Anonymous is fine.
      </PageHero>
      <div className="wrap page-body">
        <div className="suggest">
          <SuggestionBox />
          <div className="side-cards">
            <div className="side-card glass">
              <h3>Email us</h3>
              <CopyEmail />
            </div>
            <div className="side-card glass">
              <h3>Partner with CompSciety</h3>
              <p>Workshops, sponsorships, joint events or member perks for CSters. Email us with what you have in mind and our external team will get back to you.</p>
            </div>
            <div className="side-card glass">
              <h3>Follow along</h3>
              <p>We post events and wins on Facebook first.</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
