"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard, { SubmitProjectCard } from "./ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/content/showcase";

export default function ShowcaseGrid() {
  const [category, setCategory] = useState("all");
  const shown = PROJECTS.filter((p) => category === "all" || p.category === category);
  return (
    <section>
      <div className="toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {PROJECT_CATEGORIES.map((c) => (
            <button key={c.id} type="button" className="chip-filter" aria-pressed={c.id === category} onClick={() => setCategory(c.id)}>
              {c.label}
              <span>{PROJECTS.filter((p) => c.id === "all" || p.category === c.id).length}</span>
            </button>
          ))}
        </div>
        <Link className="btn btn-primary btn-sm" href="/contact?topic=Showcase%20submission">
          Submit your project
        </Link>
      </div>
      <div className="projects">
        {shown.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
        <SubmitProjectCard />
      </div>
    </section>
  );
}
