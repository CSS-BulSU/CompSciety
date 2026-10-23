import Link from "next/link";

// Header for a home-page band, with an optional link to that section's full page.
export default function SectionHead({ kicker, title, sub, href, cta }) {
  return (
    <div className="head">
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
        {sub && <p className="sub">{sub}</p>}
      </div>
      {href && (
        <Link className="btn btn-glass btn-sm" href={href}>
          {cta} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
