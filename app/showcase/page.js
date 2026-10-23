import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import ShowcaseGrid from "@/components/site/ShowcaseGrid";

export const metadata = {
  title: "Showcase",
  description: "Projects, builds and creative work by CompSciety members.",
};

export default function ShowcasePage() {
  return (
    <SiteShell>
      <PageHero crumb="showcase" title="Showcase">
        Projects, builds and creative work by CSters. Made something you&apos;re proud of? Add it here.
      </PageHero>
      <div className="wrap page-body">
        <ShowcaseGrid />
      </div>
    </SiteShell>
  );
}
