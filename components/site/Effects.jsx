"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { REPO_URL, SIGNUP_FORM } from "@/lib/content/site";

const KONAMI = ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"];

// Page-wide touches: the cursor orb, card spotlights, back-to-top, and a couple of easter eggs.
export default function Effects() {
  const orbRef = useRef(null);
  const [showTop, setShowTop] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const o = { x: innerWidth * 0.72, y: innerHeight * 0.35, tx: innerWidth * 0.72, ty: innerHeight * 0.35, s: 1, ts: 1, last: -1e9 };
    let frame;

    const onMove = (e) => {
      o.tx = e.clientX;
      o.ty = e.clientY;
      o.last = performance.now();
      o.ts = e.target.closest?.("a,button,summary,input,textarea,.spot") ? 1.15 : 1;
      const card = e.target.closest?.(".spot");
      if (card) {
        const b = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - b.left}px`);
        card.style.setProperty("--my", `${e.clientY - b.top}px`);
      }
    };
    const tick = (t) => {
      if (t - o.last > 4000) {
        o.tx = innerWidth * (0.66 + 0.18 * Math.sin(t / 6000));
        o.ty = innerHeight * (0.38 + 0.18 * Math.sin(t / 4200 + 1));
      }
      o.x += (o.tx - o.x) * 0.07;
      o.y += (o.ty - o.y) * 0.07;
      o.s += (o.ts - o.s) * 0.08;
      if (orbRef.current) orbRef.current.style.transform = `translate3d(${o.x}px, ${o.y}px, 0) scale(${o.s})`;
      if (!reduce) frame = requestAnimationFrame(tick);
    };
    const onScroll = () => setShowTop(scrollY > 700);

    let step = 0;
    const onKey = (e) => {
      const key = e.key.toLowerCase();
      step = key === KONAMI[step] ? step + 1 : key === KONAMI[0] ? 1 : 0;
      if (step === KONAMI.length) {
        step = 0;
        const on = document.documentElement.classList.toggle("party");
        setToast(on ? "Dev mode unlocked. You're definitely a Coder." : "Dev mode off. Back to business.");
      }
    };

    addEventListener("pointermove", onMove);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("keydown", onKey);
    frame = requestAnimationFrame(tick);

    console.log("%cHey, you opened DevTools.", "font: 700 16px sans-serif; color: #4ade80");
    console.log(`%cThat makes you one of us. Join CompSciety → ${SIGNUP_FORM}\nOr fix something on this site: ${REPO_URL}`, "font: 13px sans-serif; color: #7aaefc");

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll);
      removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <div id="orb" ref={orbRef} aria-hidden="true" />
      <button
        type="button"
        className={`to-top glass${showTop ? "" : " off"}`}
        aria-label="Back to top"
        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
      <div className={`toast glass${toast ? " on" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}
