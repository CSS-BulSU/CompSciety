"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Avatar from "./Avatar";
import Modal from "./Modal";
import { ADVISER, COMMITTEES, EXECUTIVES, applyHref } from "@/lib/content/org";

function Node({ person, top = false }) {
  return (
    <div className={`node glass${top ? " top" : ""}`}>
      {top ? (
        <div className="av-ring">
          <Avatar person={person} />
        </div>
      ) : (
        <Avatar person={person} />
      )}
      <div>
        <span className="role">{person.role}</span>
        <b>{person.name}</b>
      </div>
    </div>
  );
}

function CommitteeCard({ committee, onOpen }) {
  const open = committee.team.filter((m) => !m.name).length;
  const filled = 1 + committee.team.length - open;
  return (
    <button type="button" className="com-card" aria-haspopup="dialog" onClick={() => onOpen(committee)}>
      <span className="code">{committee.code}</span>
      <h3>{committee.name}</h3>
      <div className="head-row">
        <Avatar person={committee.head} />
        <span>{committee.head.name}</span>
      </div>
      <div className="foot">
        <span className="count">
          {filled} member{filled > 1 ? "s" : ""}
        </span>
        {open > 0 && <span className="open-badge">{open} open</span>}
      </div>
    </button>
  );
}

function Roster({ committee }) {
  return (
    <div className="roster">
      <span className="mono" style={{ color: "var(--blue-soft)" }}>
        {committee.code} · {committee.branch === "internal" ? "Internal" : "External"} Affairs
      </span>
      <h3 id="roster-title">{committee.name} Committee</h3>
      <p>{committee.about}</p>
      <div className="roster-list">
        <div className="person lead">
          <Avatar person={committee.head} />
          <div>
            <b>{committee.head.name}</b>
            <span>{committee.head.role}</span>
          </div>
        </div>
        {committee.team.map((m, i) =>
          m.name ? (
            <div key={i} className="person">
              <Avatar person={m} />
              <div>
                <b>{m.name}</b>
                <span>{m.role}</span>
              </div>
            </div>
          ) : (
            <div key={i} className="person vacant">
              <Avatar vacant />
              <div>
                <b>Open position</b>
                <span>{m.role}</span>
              </div>
              <Link className="btn btn-glass btn-sm" href={applyHref(m.role, committee.name)}>
                Apply
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

const BRANCHES = [
  { id: "internal", label: "Internal Affairs", vp: EXECUTIVES.internalVp },
  { id: "external", label: "External Affairs", vp: EXECUTIVES.externalVp },
];

export default function OrgChart() {
  const [openCommittee, setOpenCommittee] = useState(null);
  const close = useCallback(() => setOpenCommittee(null), []);
  return (
    <>
      <div className="tree">
        <Node person={ADVISER} />
        <div className="vline" />
        <Node person={EXECUTIVES.president} top />
        <div className="vline" />
        <Node person={EXECUTIVES.chiefOfStaff} />
        <div className="vline" />
        <div className="split">
          {BRANCHES.map((b) => (
            <div key={b.id}>
              <div className="vline" />
              <Node person={b.vp} />
            </div>
          ))}
        </div>
      </div>
      <div className="branches">
        {BRANCHES.map((b) => (
          <div key={b.id} className="branch glass">
            <div className="branch-head">
              <b>{b.label}</b>
              <span>under {b.vp.name}</span>
            </div>
            <div className="com-grid">
              {COMMITTEES.filter((c) => c.branch === b.id).map((c) => (
                <CommitteeCard key={c.id} committee={c} onOpen={setOpenCommittee} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {openCommittee && (
        <Modal labelledBy="roster-title" onClose={close}>
          <Roster committee={openCommittee} />
        </Modal>
      )}
    </>
  );
}
