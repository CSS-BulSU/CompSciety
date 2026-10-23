"use client";

import { useState } from "react";
import { JOIN_STEPS } from "@/lib/content/membership";
import { CONTACT_EMAIL } from "@/lib/content/site";

// Resending the invite needs a backend endpoint; until then this tells people exactly what to do.
function ResendInvite() {
  const [open, setOpen] = useState(false);
  return (
    <div className="resend">
      <button type="button" className="btn btn-glass btn-sm" aria-expanded={open} aria-controls="resend-help" onClick={() => setOpen(!open)}>
        Not in the community channel yet?
      </button>
      {open && (
        <div id="resend-help" className="resend-form">
          <p className="resend-msg" style={{ color: "var(--muted)" }}>
            Check your spam folder for our confirmation email first. Still nothing? Email <b style={{ color: "var(--fg)" }}>{CONTACT_EMAIL}</b> from the address you signed
            up with, and we&apos;ll send you a fresh invite.
          </p>
        </div>
      )}
    </div>
  );
}

export default function JoinSteps() {
  return (
    <div className="steps glass">
      <h3>How to join</h3>
      <ol>
        {JOIN_STEPS.map((s) => (
          <li key={s.title} className="tile">
            <div>
              <b>{s.title}</b>
              <span>{s.detail}</span>
            </div>
          </li>
        ))}
      </ol>
      <ResendInvite />
    </div>
  );
}
