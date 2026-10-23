"use client";

import { useRef, useState } from "react";
import RoleIcon from "./RoleIcon";
import { ROLES } from "@/lib/content/membership";

export default function RoleTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const role = ROLES[active];

  const onKey = (e, i) => {
    const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!d) return;
    e.preventDefault();
    const next = (i + d + ROLES.length) % ROLES.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="roles glass">
      <div className="role-tabs" role="tablist" aria-label="Member paths">
        {ROLES.map((r, i) => (
          <button
            key={r.id}
            ref={(el) => (tabs.current[i] = el)}
            className="role-tab"
            role="tab"
            id={`tab-${r.id}`}
            aria-controls="role-panel"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="ico">
              <RoleIcon name={r.icon} />
            </span>
            <span>
              <b>{r.name}</b>
              <small>{r.short}</small>
            </span>
          </button>
        ))}
      </div>
      <div className="role-panel tile" id="role-panel" role="tabpanel" aria-labelledby={`tab-${role.id}`}>
        <span className="mono">~/members/{role.id}</span>
        <h3>{role.name} members</h3>
        <p>{role.description}</p>
        <div className="role-cols">
          <div>
            <h4>You&apos;ll do</h4>
            <ul>
              {role.activities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Committees to look at</h4>
            <div className="pills">
              {role.committees.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
