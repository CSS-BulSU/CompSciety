"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function Modal({ labelledBy, onClose, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby={labelledBy} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-card glass">
        <button ref={closeRef} type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
