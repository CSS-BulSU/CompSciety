"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { api } from "@/lib/api";

// Real partners from the admin panel, padded with "your logo here" slots so the reel always fills.
const MIN_ITEMS = 8;

function Item({ partner, hidden }) {
  const extra = hidden ? { "aria-hidden": true, tabIndex: -1 } : {};
  if (!partner) {
    return (
      <Link className="logo-item" href="/contact" {...extra}>
        <span className="logo-circle">
          <Plus size={36} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <b>Your logo here</b>
        <span>partner with us</span>
      </Link>
    );
  }
  return (
    <div className="logo-item" {...extra}>
      <span className="logo-circle">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={partner.image} alt={hidden ? "" : `${partner.name} logo`} loading="lazy" />
      </span>
      <b>{partner.name}</b>
      {partner.detail && <span>{partner.detail}</span>}
    </div>
  );
}

export default function PartnersReel() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    api.get("/api/partners").then(setPartners).catch(() => setPartners([]));
  }, []);
  const slots = [...partners, ...Array(Math.max(0, MIN_ITEMS - partners.length)).fill(null)];
  return (
    <div className="marquee" tabIndex={0} aria-label="Our partners">
      <div className="track">
        {slots.map((p, i) => (
          <Item key={`a${i}`} partner={p} />
        ))}
        {slots.map((p, i) => (
          <Item key={`b${i}`} partner={p} hidden />
        ))}
      </div>
    </div>
  );
}
