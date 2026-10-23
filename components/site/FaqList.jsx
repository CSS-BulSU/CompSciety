"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQ, OFFICER_PATH } from "@/lib/content/membership";

function Helpful() {
  const [answer, setAnswer] = useState(null);
  if (answer === "yes") return <div className="helpful"><span>Nice, glad that helped. ✓</span></div>;
  if (answer === "no")
    return (
      <div className="helpful">
        <span>
          Sorry about that. <Link href="/contact" style={{ color: "var(--green-soft)" }}>Ask us in the suggestion box</Link> and we&apos;ll answer it properly.
        </span>
      </div>
    );
  return (
    <div className="helpful">
      <span>Did this answer it?</span>
      <button type="button" onClick={() => setAnswer("yes")}>Yes</button>
      <button type="button" onClick={() => setAnswer("no")}>Not quite</button>
    </div>
  );
}

// One question open at a time. `limit` shows only the first few (used on the home page).
export default function FaqList({ limit, openFirst = false }) {
  const [open, setOpen] = useState(openFirst ? 0 : -1);
  const items = limit ? FAQ.slice(0, limit) : FAQ;
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details
          key={f.q}
          className="faq-item"
          open={open === i}
          onToggle={(e) => {
            if (e.currentTarget.open) setOpen(i);
            else if (open === i) setOpen(-1);
          }}
        >
          <summary>
            <span>{f.q}</span>
          </summary>
          <div className="faq-body">
            <div dangerouslySetInnerHTML={{ __html: f.html }} />
            {f.path && (
              <ol className="path">
                {OFFICER_PATH.map((step, n) => (
                  <li key={step}>
                    <b>{String(n + 1).padStart(2, "0")}</b>
                    {step}
                  </li>
                ))}
              </ol>
            )}
            <Helpful />
          </div>
        </details>
      ))}
    </div>
  );
}
