import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import FaqList from "@/components/site/FaqList";

export const metadata = {
  title: "FAQ",
  description: "The five things people ask CompSciety most.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero crumb="faq" title="FAQ">
        The five things people ask us most.
      </PageHero>
      <div className="wrap page-body">
        <div className="faq-simple">
          <FaqList openFirst />
          <div className="panel glass">
            <h3>Still have a question?</h3>
            <p className="none">Drop it in the suggestion box and we&apos;ll answer it, and add it here if lots of people ask.</p>
            <Link className="btn btn-glass btn-sm" style={{ justifySelf: "start" }} href="/contact">
              Ask us
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
