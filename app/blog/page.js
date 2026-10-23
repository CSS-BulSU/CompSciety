import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import BlogBrowser from "@/components/site/BlogBrowser";

export const metadata = {
  title: "Blog",
  description: "Every CompSciety announcement, explainer and win, all in one place.",
};

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHero crumb="blog" title="Blog">
        Every announcement, explainer and win, all in one place.
      </PageHero>
      <div className="wrap page-body">
        <BlogBrowser />
      </div>
    </SiteShell>
  );
}
