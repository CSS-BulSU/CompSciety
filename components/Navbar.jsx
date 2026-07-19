"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./ui/Logo";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 sm:px-8 pt-6">
      <nav className="mx-auto max-w-6xl flex items-center justify-between rounded-full bg-black/40 backdrop-blur-md border border-green-800/40 px-4 sm:px-6 py-3">
        <Link href="/">
          <Logo className="w-9 h-9" />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-heading font-semibold text-sm text-white">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-green-400 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-green-300 hover:text-white hover:bg-green-800/40 transition-colors">
            <Sparkles size={18} />
          </button>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl rounded-2xl bg-black/70 backdrop-blur-md border border-green-800/40 p-4 flex flex-col gap-3 font-heading font-semibold text-white">
          {LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-green-400" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}