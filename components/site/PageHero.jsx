import Link from "next/link";

export default function PageHero({ crumb, title, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">home</Link>/<span>{crumb}</span>
        </p>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
