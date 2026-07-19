import Link from "next/link";
import { Mail } from "lucide-react";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Announcements", href: "/#announcements" },
  { label: "Blog", href: "/blog" },
];

// Updated to include hrefs
const SOCIALS = [
  { icon: FaYoutube, href: "https://youtube.com/@yourhandle" },
  { icon: FaInstagram, href: "https://instagram.com/yourhandle" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/yourhandle" },
  { icon: FaFacebook, href: "https://facebook.com/yourhandle" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-black px-4 sm:px-8 pt-14 pb-8">
      <div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="CompSciety Logo" width={60} height={60} />
            <div>
              <p className="font-heading font-bold text-white">CompSciety</p>
              <p className="text-green-400/70 text-xs">EST 2025</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-950 flex items-center justify-center text-white hover:bg-green-800 transition-colors"
              >
                <social.icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* ... rest of your code remains the same ... */}
        
        <div>
          <h5 className="font-heading font-bold text-white mb-4">Navigation</h5>
          <ul className="space-y-2 text-sm text-green-200/70">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-heading font-bold text-white mb-4">Contact Us</h5>
          <p className="text-sm text-green-200/70 flex items-center gap-2">
            <Mail size={14} /> compscietybulsu2025@gmail.com
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl border-t border-green-900/50 mt-10 pt-6 text-center text-xs text-green-200/40">
        © 2026 CompSciety. All rights reserved.
      </div>
    </footer>
  );
}