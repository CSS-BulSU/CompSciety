import Link from "next/link";
import { Code, Plus } from "lucide-react";

const ICONS = { code: Code };

export default function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] ?? Code;
  return (
    <article className="proj glass">
      <div className="cover">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <Icon size={46} strokeWidth={1.8} aria-hidden="true" />
        )}
      </div>
      <div className="body">
        <span className="by">{project.by}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} →
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function SubmitProjectCard() {
  return (
    <article className="proj glass">
      <div className="cover">
        <Plus size={46} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div className="body">
        <span className="by">You</span>
        <h3>Your project</h3>
        <p>Built something? A game, a tool, a design, a research paper. Send it in and it could be featured here.</p>
        <div className="links">
          <Link href="/contact?topic=Showcase%20submission">Submit yours →</Link>
        </div>
      </div>
    </article>
  );
}
