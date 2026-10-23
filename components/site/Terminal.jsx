"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SIGNUP_FORM, SOCIALS } from "@/lib/content/site";

const PAGES = { home: "/", about: "/about", blog: "/blog", events: "/events", showcase: "/showcase", involved: "/get-involved", faq: "/faq", contact: "/contact" };
const PROMPT = "cster@compsciety:~$";

// Each command returns lines of [kind, text] or [kind, text, href] for links.
const COMMANDS = {
  help: () => [["res", "ls · cd <page> · events · officer · join · socials · clear"]],
  ls: () => [["res", Object.keys(PAGES).map((p) => p + "/").join("  ")]],
  events: () => [["res", "2026-09-21  HATAG 2026 donation drive\n2026-08-09  Clean Coding with GUI series\n2026-08-07  DICT Web Dev Workshop\n2026-06-25  FEU TechSprint 2026: top 10 of 40"]],
  officer: () => [["res", "active member → candidacy form → validation → platform → vote → induction\ntype `cd faq` for the details"]],
  join: () => [
    ["res", "open to every BulSUan, any college.\n1. fill the sign-up form\n2. watch your inbox\n3. attend onboarding · pay the ₱50 fee · join the channel"],
    ["link", "open the sign-up form", SIGNUP_FORM],
  ],
  socials: () => SOCIALS.map((s) => ["link", s.label.toLowerCase(), s.href]),
  whoami: () => [["res", "You, a future CSter."]],
  pwd: () => [["res", "/home/cster"]],
  sudo: () => [["res", "Nice try. No root here, but the sign-up form works for everyone. Type `join`."]],
};

const INTRO = [
  ["cmd", "whoami"],
  ["res", "You, a future CSter. Welcome to CompSciety, the Computer Science Society of Bulacan State University."],
  ["cmd", "help"],
  ["res", "Try `ls` to see the pages, `cd about` to open one, or `events`, `officer`, `join`."],
];
const CHIPS = ["ls", "events", "officer", "cd get-involved", "join"];

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState(INTRO);
  const [value, setValue] = useState("");
  const history = useRef([]);
  const cursor = useRef(0);
  const outRef = useRef(null);

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) return;
    history.current.push(cmd);
    cursor.current = history.current.length;
    const [name, arg = "home"] = cmd.toLowerCase().split(/\s+/);
    if (name === "clear") return setLines([]);
    let out;
    if (name === "cd") {
      const target = arg.replace(/[/~.]/g, "").replace(/^get-/, "") || "home";
      if (PAGES[target]) {
        out = [["res", `opening ${PAGES[target]}…`]];
        setTimeout(() => router.push(PAGES[target]), 350);
      } else out = [["err", `cd: ${target}: No such page. Try \`ls\`.`]];
    } else out = COMMANDS[name] ? COMMANDS[name]() : [["err", `command not found: ${name}. Try \`help\`.`]];
    setLines((l) => [...l, ["cmd", cmd], ...out]);
    requestAnimationFrame(() => outRef.current && (outRef.current.scrollTop = outRef.current.scrollHeight));
  };

  const onKey = (e) => {
    const h = history.current;
    if (e.key === "ArrowUp" && cursor.current > 0) {
      e.preventDefault();
      setValue(h[--cursor.current]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      cursor.current = Math.min(h.length, cursor.current + 1);
      setValue(h[cursor.current] ?? "");
    }
  };

  return (
    <div className="term glass" role="region" aria-label="Interactive CompSciety terminal">
      <div className="term-bar">
        <i />
        <i />
        <i />
        <span>cster@compsciety: ~</span>
      </div>
      <div className="term-out" ref={outRef} aria-live="polite">
        {lines.map(([kind, text, href], i) =>
          kind === "cmd" ? (
            <p key={i} className="cmd">
              <b>{PROMPT}</b> {text}
            </p>
          ) : kind === "link" ? (
            <p key={i} className="res">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {text}
              </a>
            </p>
          ) : (
            <p key={i} className={kind}>
              {text}
            </p>
          )
        )}
      </div>
      <form
        className="term-in"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
      >
        <label htmlFor="term-input">{PROMPT}</label>
        <input id="term-input" type="text" spellCheck={false} placeholder="type a command…" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKey} />
      </form>
      <div className="chips">
        {CHIPS.map((c) => (
          <button key={c} type="button" className="chip-btn" onClick={() => run(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
