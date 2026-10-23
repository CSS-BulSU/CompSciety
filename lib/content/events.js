// Event calendar. Dates are YYYY-MM-DD; `end` is optional for one-day events.
// `confirmed: false` means only the announcement date is known — swap in the real
// event date when you have it and set `confirmed: true`.
// `post` links to a blog post id from /api/blogs.

export const EVENTS = [
  {
    id: "techsprint-2026",
    title: "FEU TechSprint 2026",
    kind: "competition",
    start: "2026-06-25",
    end: "2026-06-27",
    confirmed: true,
    post: "6a77f1e41430b4c8837951ac",
    summary: "Team Stack-a-Ton made the top 10 of 40 national teams, building for Accenture Philippines.",
  },
  {
    id: "dict-webdev",
    title: "DICT Web Dev Workshop",
    kind: "workshop",
    start: "2026-08-07",
    confirmed: false,
    post: "6a75c7f040b3b9f96136611e",
    summary: "Web development with an industry expert, with BulSU College of Science.",
  },
  {
    id: "clean-coding-gui",
    title: "Isang Linggong Clean Coding with GUI",
    kind: "series",
    start: "2026-08-09",
    confirmed: false,
    post: "6a77f1281430b4c8837951aa",
    summary: "A week of clean-code fundamentals for every developer.",
  },
  {
    id: "hatag-2026",
    title: "HATAG 2026",
    kind: "outreach",
    start: "2026-09-21",
    confirmed: false,
    post: "6ab0a32fa2bf729eff83f6ad",
    summary: "Donation drive for our elderly and children beneficiaries.",
  },
];

export const FOUNDING_YEAR = 2025;
