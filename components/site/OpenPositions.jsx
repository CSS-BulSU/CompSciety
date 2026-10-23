import Link from "next/link";
import { OPEN_POSITIONS, applyHref } from "@/lib/content/org";

export default function OpenPositions() {
  return (
    <section id="openings" style={{ scrollMarginTop: 100 }}>
      <div className="sub-head">
        <div>
          <p className="kicker">join the team</p>
          <h2>{OPEN_POSITIONS.length} open positions</h2>
          <p>These associate roles are still vacant. Any active member can apply.</p>
        </div>
        <Link className="btn btn-primary btn-sm" href={applyHref("Any open position")}>
          Apply for a position
        </Link>
      </div>
      <div className="openings">
        {OPEN_POSITIONS.map(({ role, committee }) => (
          <div key={role} className="opening">
            <span className="code">{committee.code}</span>
            <b>{role}</b>
            <p>
              {committee.name} Committee · reports to the {committee.head.role}
            </p>
            <Link className="btn btn-glass btn-sm" href={applyHref(role, committee.name)}>
              Apply
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
