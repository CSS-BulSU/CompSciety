import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <SiteShell>
      <section className="nf">
        <div className="wrap" style={{ width: "100%" }}>
          <div className="nf-card glass spot">
            <div className="nf-code grad-text" aria-hidden="true">
              404
            </div>
            <h1>This page wandered off the grid</h1>
            <p>The link might be old, or the page moved when we updated the site. Here&apos;s how to get back.</p>
            <div className="nf-shell" aria-hidden="true">
              <p>
                <b>cster@compsciety:~$</b> cd /this-page
              </p>
              <p className="e">bash: cd: /this-page: No such file or directory</p>
              <p>
                <b>cster@compsciety:~$</b> cd ~ <span style={{ color: "var(--faint)" }}># try one of these instead</span>
              </p>
            </div>
            <div className="nf-actions">
              <Link className="btn btn-primary" href="/">
                Back to home
              </Link>
              <Link className="btn btn-glass" href="/blog">
                Read the blog
              </Link>
              <Link className="btn btn-glass" href="/contact?topic=Website">
                Report a broken link
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
