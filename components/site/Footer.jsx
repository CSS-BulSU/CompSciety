import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Socials from "./Socials";
import { REPO_URL, SIGNUP_FORM } from "@/lib/content/site";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Showcase", href: "/showcase" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Get involved", href: "/get-involved" },
      { label: "Sign-up form", href: SIGNUP_FORM, external: true },
      { label: "Open positions", href: "/about#openings" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Suggestion box", href: "/contact" },
      { label: "Partner with us", href: "/contact" },
      { label: "Site source on GitHub", href: REPO_URL, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" href="/">
              <Image src={logo} alt="" width={36} height={36} />
              <div>
                <b>Computer Science Society</b>
                <small>Bulacan State University</small>
              </div>
            </Link>
            <p>The official Computer Science Society of Bulacan State University. Open to every BulSUan who wants to learn.</p>
            <Socials />
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Computer Science Society, BulSU</span>
          <span className="mono">made by CSters, for CSters</span>
        </div>
      </div>
    </footer>
  );
}
