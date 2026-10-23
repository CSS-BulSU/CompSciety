import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SOCIALS } from "@/lib/content/site";

const ICONS = { Facebook: FaFacebook, Instagram: FaInstagram, LinkedIn: FaLinkedin };

export default function Socials() {
  return (
    <div className="socials">
      {SOCIALS.map(({ label, href }) => {
        const Icon = ICONS[label];
        return (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}
