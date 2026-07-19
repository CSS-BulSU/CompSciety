import Link from "next/link";

export default function GradientPillButton({ children, onClick, href, className = "" }) {
  const inner = (
    <span className="block rounded-full bg-green-950 px-6 py-3 hover:bg-green-900 transition-colors">
      {children}
    </span>
  );
  const wrapperClass = `rounded-full font-heading font-semibold text-white text-sm sm:text-base p-[2px] bg-gradient-to-r from-green-500 to-blue-500 ${className}`;

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={wrapperClass}>
      {inner}
    </button>
  );
}