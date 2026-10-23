// Member projects for the Showcase page. Add new entries at the top.

export const PROJECTS = [
  {
    title: "Stack-a-Ton's TechSprint build",
    by: "Team Stack-a-Ton",
    category: "hackathon",
    image: "https://res.cloudinary.com/wxvwvog9/image/upload/w_800,q_70,f_auto/v1786245574/compsciety-blogs/abucjgwdgk40gqb16njq.jpg",
    description:
      "Finalist build at FEU TechSprint 2026, top 10 of 40 national teams, solving a challenge for Accenture Philippines.",
    stack: ["hackathon", "team project"],
    links: [{ label: "Read the story", href: "https://www.facebook.com/share/p/1Bf3RXboTC/" }],
  },
  {
    title: "This website",
    by: "Developer Core",
    category: "web",
    icon: "code",
    description: "The CompSciety site you're on, with an admin panel for posts and partners. Open source, so anyone can contribute.",
    stack: ["Next.js", "Tailwind", "Express", "Cloudinary"],
    links: [{ label: "View the code", href: "https://github.com/CSS-BulSU/CompSciety" }],
  },
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "hackathon", label: "Hackathon" },
  { id: "ai", label: "AI & data" },
  { id: "design", label: "Design" },
  { id: "mobile", label: "Mobile" },
];
