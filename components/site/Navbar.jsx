"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SIGNUP_FORM } from "@/lib/content/site";

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-bar glass">
          <Link className="brand" href="/" aria-label="CompSciety home">
            <Image src={logo} alt="" width={36} height={36} priority />
            <div>
              <b>Computer Science Society</b>
              <small>Bulacan State University</small>
            </div>
          </Link>
          <nav className="nav-links" aria-label="Main">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(pathname, l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a className="btn btn-primary" href={SIGNUP_FORM} target="_blank" rel="noopener noreferrer">
            Connect
          </a>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="progress" aria-hidden="true">
            <span style={{ "--p": progress }} />
          </div>
        </div>
        {open && (
          <div className="mobile-menu glass" id="mobile-menu" onClick={(e) => e.target.closest("a") && setOpen(false)}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(pathname, l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
            <a className="btn btn-primary" href={SIGNUP_FORM} target="_blank" rel="noopener noreferrer">
              Connect with us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
