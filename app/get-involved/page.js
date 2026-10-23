import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import RoleTabs from "@/components/site/RoleTabs";
import JoinSteps from "@/components/site/JoinSteps";
import RoleIcon from "@/components/site/RoleIcon";
import JoinCta from "@/components/site/JoinCta";
import { PERKS } from "@/lib/content/membership";

export const metadata = {
  title: "Get involved",
  description: "Pick a member path, see how joining works, and what you get as a CompSciety member.",
};

export default function GetInvolvedPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">home</Link>/<span>get involved</span>
          </p>
          <h1>Get involved</h1>
          <p>
            Open to every BulSUan, from any college or department. Pick a path, sign up, then apply for an{" "}
            <Link href="/about#openings" style={{ color: "var(--green-soft)" }}>
              open committee role
            </Link>
            .
          </p>
        </div>
      </section>
      <div className="wrap page-body">
        <section>
          <div className="sub-head">
            <div>
              <p className="kicker">member paths</p>
              <h2>Pick how you want to contribute</h2>
            </div>
          </div>
          <RoleTabs />
        </section>

        <section id="joining" style={{ scrollMarginTop: 100 }}>
          <div className="sub-head">
            <div>
              <p className="kicker">joining</p>
              <h2>Becoming a CSter in five steps</h2>
              <p>Membership lasts one academic year and renews each year.</p>
            </div>
          </div>
          <div className="join-grid">
            <JoinSteps />
            <div className="perks glass">
              <h3>What you get as a member</h3>
              <ul>
                {PERKS.map((p) => (
                  <li key={p.text} className="tile">
                    <i>
                      <RoleIcon name={p.icon} size={20} />
                    </i>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <JoinCta withSteps={false} />
      </div>
    </SiteShell>
  );
}
