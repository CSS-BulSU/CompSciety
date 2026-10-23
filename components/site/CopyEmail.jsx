"use client";

import { useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/content/site";

export default function CopyEmail() {
  const [label, setLabel] = useState("Copy");
  const codeRef = useRef(null);
  const selectIt = () => {
    const range = document.createRange();
    range.selectNodeContents(codeRef.current);
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    setLabel("Press Ctrl/⌘ C");
  };
  const copy = () => {
    const done = () => {
      setLabel("Copied");
      setTimeout(() => setLabel("Copy"), 1800);
    };
    navigator.clipboard?.writeText(CONTACT_EMAIL).then(done, selectIt) ?? selectIt();
  };
  return (
    <div className="mail">
      <code ref={codeRef}>{CONTACT_EMAIL}</code>
      <button type="button" onClick={copy}>
        {label}
      </button>
    </div>
  );
}
