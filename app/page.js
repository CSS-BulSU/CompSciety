import Link from "next/link";
import SiteShell from "@/components/site/SiteShell";
import SectionHead from "@/components/site/SectionHead";
import Terminal from "@/components/site/Terminal";
import LatestPosts from "@/components/site/LatestPosts";
import HomeEvents from "@/components/site/HomeEvents";
import ProjectCard from "@/components/site/ProjectCard";
import RoleIcon from "@/components/site/RoleIcon";
import FaqList from "@/components/site/FaqList";
import PartnersReel from "@/components/site/PartnersReel";
import Avatar from "@/components/site/Avatar";
import JoinCta from "@/components/site/JoinCta";
import { ROLES } from "@/lib/content/membership";
import { PROJECTS } from "@/lib/content/showcase";
import { ACADEMIC_YEAR, EXECUTIVES } from "@/lib/content/org";
import { SIGNUP_FORM, VALUES } from "@/lib/content/site";

export default function Home() {
  return (
    <SiteShell>
      <section className="hero band t1">
        <div className="wrap">
          <div>
            <p className="hero-tag">CompSciety</p>
            <h1>
              Where BulSUans learn, <span className="grad-text">build</span> and belong.
            </h1>
            <p className="lede">
              We&apos;re the Computer Science Society of Bulacan State University, open to every BulSUan from any college or department who wants to learn. Come for
              the workshops and competitions, and stay for the people.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={SIGNUP_FORM} target="_blank" rel="noopener noreferrer">
                Connect with us <span aria-hidden="true">→</span>
              </a>
              <Link className="btn btn-glass" href="/get-involved">
                Find your path
              </Link>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <section className="band t2">
        <div className="wrap">
          <SectionHead kicker="blog" title="Latest from CompSciety" sub="Wins, explainers and announcements from the org." href="/blog" cta="Read the blog" />
          <LatestPosts />
        </div>
      </section>

      <section className="band t1">
        <div className="wrap">
          <SectionHead kicker="events" title="What we've been up to" sub="What's next, and what we've done lately." href="/events" cta="All events" />
          <HomeEvents />
        </div>
      </section>

      <section className="band t2">
        <div className="wrap">
          <SectionHead kicker="showcase" title="Made by CSters" sub="Projects, builds and creative work from our members." href="/showcase" cta="See the showcase" />
          <div className="projects">
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="band t1">
        <div className="wrap">
          <SectionHead
            kicker="get involved"
            title="Code, create or connect"
            sub="Every member picks a path. All three carry the same rights and the same say."
            href="/get-involved"
            cta="Explore paths"
          />
          <div className="role-cards">
            {ROLES.map((r) => (
              <Link key={r.id} className="role-card glass spot" href="/get-involved">
                <span className="ico">
                  <RoleIcon name={r.icon} />
                </span>
                <h3>{r.name}</h3>
                <p>{r.description.split(". ")[0]}.</p>
                <span className="mono">
                  → {r.committees.slice(0, 2).join(", ")}
                  {r.committees.length > 2 ? "…" : ""}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band t2">
        <div className="wrap">
          <SectionHead kicker="about" title="Not just keeping up with the times" href="/about" cta="About us" />
          <div className="about-prev">
            <div className="copy glass">
              <h3>
                We&apos;re here to help <span className="grad-text">define</span> them.
              </h3>
              <p>
                CompSciety builds a strong, united and future-ready generation of students, and helps move Computer Science forward within and beyond the
                university.
              </p>
              <div className="values">
                {VALUES.map((v) => (
                  <span key={v}>{v}</span>
                ))}
              </div>
            </div>
            <Link className="board-prev glass spot" href="/about" style={{ textDecoration: "none" }}>
              <span className="mono" style={{ color: "var(--blue-soft)" }}>
                led by President {EXECUTIVES.president.name} · A.Y. {ACADEMIC_YEAR}
              </span>
              <div className="avatars">
                {Object.values(EXECUTIVES).map((p) => (
                  <Avatar key={p.name} person={p} />
                ))}
              </div>
              <h3>Meet the officers, our adviser and the 8 committees behind every event</h3>
              <span className="link">
                Meet the team <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="band t1">
        <div className="wrap">
          <SectionHead kicker="faq" title="Quick answers" href="/faq" cta="More answers" />
          <div style={{ maxWidth: 820 }}>
            <FaqList limit={3} />
          </div>
        </div>
      </section>

      <section className="band t2">
        <div className="wrap">
          <JoinCta />
        </div>
      </section>

      <section className="band t1" id="partners">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">partners</p>
              <h2>Built with people who back students</h2>
            </div>
            <p className="sub" style={{ margin: 0 }}>
              Hover to pause the reel.
            </p>
          </div>
          <PartnersReel />
          <div className="partners-foot">
            <span>
              Want your logo here? Partner with us to reach CS students across BulSU, co-host workshops and hackathons, mentor future developers, or offer perks to
              our members.
            </span>
            <Link className="link" href="/contact">
              Partner with CompSciety <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="band t2">
        <div className="wrap">
          <div className="suggest-prev glass spot">
            <BoxArt />
            <div>
              <p className="kicker">suggestion box</p>
              <h2 style={{ marginTop: 8 }}>Got an idea? Drop it in the box.</h2>
              <p>Event ideas, website bugs or a shout-out for an officer. You can stay anonymous.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Write a note
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function BoxArt() {
  return (
    <svg className="box-art" viewBox="0 0 120 100" aria-hidden="true">
      <defs>
        <linearGradient id="box-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#4ade80" />
        </linearGradient>
      </defs>
      <rect x="14" y="34" width="92" height="60" rx="10" fill="url(#box-grad)" opacity=".9" />
      <path d="M14 44 30 20h60l16 24z" fill="#0d3320" stroke="url(#box-grad)" strokeWidth="2" />
      <rect x="42" y="27" width="36" height="6" rx="3" fill="#020b07" />
      <rect x="48" y="8" width="24" height="22" rx="3" fill="#eef6f1" transform="rotate(-8 60 19)" />
      <text x="60" y="72" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff">
        ideas.txt
      </text>
    </svg>
  );
}
