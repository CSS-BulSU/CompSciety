import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/site/PageHero";
import OrgChart from "@/components/site/OrgChart";
import OpenPositions from "@/components/site/OpenPositions";
import { ABOUT_PARAGRAPH, MISSION_VISION } from "@/lib/aboutContent";
import { ACADEMIC_YEAR } from "@/lib/content/org";
import { VALUES } from "@/lib/content/site";

export const metadata = {
  title: "About",
  description: "The people, purpose and committees behind BulSU's Computer Science Society.",
};

const REPORT_COVER = "https://res.cloudinary.com/wxvwvog9/image/upload/w_900,q_70,f_auto/v1786103670/compsciety-blogs/tgohqkv2hzagyqouwb4y.jpg";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero crumb="about" title="About CompSciety">
        The people, purpose and committees behind BulSU&apos;s Computer Science Society.
      </PageHero>
      <div className="wrap page-body">
        <section className="intro">
          <div className="copy">
            <p>{ABOUT_PARAGRAPH}</p>
            <div className="values">
              {VALUES.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </div>
          <div className="photo glass">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={REPORT_COVER} alt="CompSciety accomplishment report cover, A.Y. 2025–2026" />
          </div>
        </section>

        <section className="mv">
          {MISSION_VISION.map((item, i) => (
            <article key={item.title} className="glass spot">
              <h3>
                <span className="mono">0{i + 1}</span>
                {item.title}
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section>
          <div className="sub-head">
            <div>
              <p className="kicker">organizational chart</p>
              <h2>Officers, A.Y. {ACADEMIC_YEAR}</h2>
              <p>From our adviser and President down to every committee. Tap a committee to see its full roster.</p>
            </div>
          </div>
          <OrgChart />
        </section>

        <OpenPositions />
      </div>
    </SiteShell>
  );
}
