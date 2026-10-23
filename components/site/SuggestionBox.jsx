"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/content/site";
import { useSearch } from "@/lib/useToday";

const TOPICS = ["Event idea", "Website", "Org feedback", "Shout-out", "Showcase submission", "Position application", "Other"];
const MAX = 500;

function applicationTemplate(role, committee) {
  return `Applying for: ${role}${committee ? ` (${committee} Committee)` : ""}\n\nWhy me:\n\nRelevant skills and experience:\n\nWhat I'd like to do in the role:\n`;
}

// Submissions aren't stored yet (that needs a backend endpoint). Until then, "Send" copies
// the note and asks the visitor to email it, so nothing pretends to be sent.
// Prefill from links like /contact?topic=Position%20application&role=…&committee=…
function prefill(search) {
  const params = new URLSearchParams(search ?? "");
  const topic = params.get("topic");
  if (!topic || !TOPICS.includes(topic)) return { topic: TOPICS[0], text: "", application: false };
  const role = params.get("role");
  if (topic === "Position application" && role) return { topic, text: applicationTemplate(role, params.get("committee")).slice(0, MAX), application: true };
  return { topic, text: "", application: false };
}

export default function SuggestionBox() {
  const search = useSearch();
  return <Box key={search ?? "prerender"} initial={prefill(search)} focus={!!search} />;
}

function Box({ initial, focus }) {
  const [topic, setTopic] = useState(initial.topic);
  const [text, setText] = useState(initial.text);
  const [anonymous, setAnonymous] = useState(!initial.application);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const textRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (!focus || initial.topic === TOPICS[0]) return;
    (initial.application ? nameRef : textRef).current?.focus();
  }, [focus, initial]);

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setStatus({ kind: "err", msg: "Write something first. Even “more pizza” counts." });
      textRef.current?.focus();
      return;
    }
    const note = `[${topic}]${!anonymous && name.trim() ? ` from ${name.trim()}` : ""}\n\n${text.trim()}`;
    let copied = false;
    try {
      await navigator.clipboard.writeText(note);
      copied = true;
    } catch {}
    setStatus({ kind: "ok", copied });
  };

  return (
    <form className="sbox glass" onSubmit={submit} noValidate>
      <div style={{ display: "grid", gap: 18 }}>
        <div>
          <span className="lbl" style={{ fontWeight: 600, fontSize: ".92rem", display: "block", marginBottom: 8 }}>
            What&apos;s it about?
          </span>
          <div className="filters" role="group" aria-label="Topic">
            {TOPICS.map((t) => (
              <button key={t} type="button" className="chip-filter" aria-pressed={t === topic} onClick={() => setTopic(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="lbl" htmlFor="s-text">
            Your note
          </label>
          <textarea
            id="s-text"
            ref={textRef}
            maxLength={MAX}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="We should run a CTF night… / The blog page loads slowly on my phone… / Shout-out to the Multimedia team for…"
          />
          <div className="count">
            {text.length} / {MAX}
          </div>
        </div>
        <label className="toggle" htmlFor="s-anon">
          <input type="checkbox" id="s-anon" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
          <span className="sw" />
          <span>Stay anonymous</span>
        </label>
        {!anonymous && (
          <div>
            <label className="lbl" htmlFor="s-name">
              Your name
            </label>
            <input type="text" id="s-name" ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="So we can reach you" />
          </div>
        )}
        {status?.kind === "err" && <p className="resend-msg err" role="alert">{status.msg}</p>}
        {status?.kind === "ok" && (
          <p className="coming-soon" role="status">
            <b>Online submissions open soon.</b>{" "}
            {status.copied ? "We copied your note, so paste it" : "For now, send your note"} in an email to <b>{CONTACT_EMAIL}</b> and the officers will read it.
          </p>
        )}
        <div className="s-actions">
          <span className="note">{anonymous ? "Anonymous notes don't include your name." : "We'll only use your name to follow up."}</span>
          <button className="btn btn-primary" type="submit">
            Drop it in the box
          </button>
        </div>
      </div>
    </form>
  );
}
