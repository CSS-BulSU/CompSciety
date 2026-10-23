// Member paths, joining steps, perks and FAQ. Rules come from the 2026–27 Constitution and By-Laws.

export const ROLES = [
  {
    id: "coder",
    icon: "code",
    name: "Coder",
    short: "Build, debug, ship",
    description:
      "You like software development, programming and algorithm design. You'll be in the coding workshops, hackathons and team projects that drive the society's tech work.",
    activities: ["Coding workshops and clean-code series", "Hackathons, CTFs and tech sprints", "Building the org's own tools and this site"],
    committees: ["Developer Core"],
  },
  {
    id: "creative",
    icon: "pen",
    name: "Creative",
    short: "Design, film, tell stories",
    description:
      "You're into graphic design, multimedia and content. You'll make the visuals, videos and campaigns that carry CompSciety's identity and reach.",
    activities: ["Event pubs and social posts", "Photo and video coverage", "Branding for campaigns"],
    committees: ["Multimedia"],
  },
  {
    id: "connector",
    icon: "people",
    name: "Connector",
    short: "Organise, welcome, rally",
    description:
      "You like bringing people together. You'll run events, outreach and mentorship, and keep the org welcoming and active.",
    activities: ["Planning and running events", "Outreach drives like HATAG", "Onboarding and mentoring new members"],
    committees: ["Events", "Membership", "Logistics", "Secretariat", "Finance", "Ethics"],
  },
];

export const JOIN_STEPS = [
  { title: "Fill out the sign-up form", detail: "Takes a few minutes. Pick your member path there too." },
  { title: "Watch your inbox", detail: "We'll email you a confirmation with your onboarding schedule. Check your spam folder too." },
  { title: "Attend onboarding", detail: "Meet the officers and your batchmates at the orientation session." },
  { title: "Pay the ₱50 annual fee", detail: "It's voluntary and goes to our events, resources and operations." },
  {
    title: "Join the community channel",
    detail: "The invite link is in your confirmation email. That's where announcements, event sign-ups and memes live.",
  },
];

export const PERKS = [
  { icon: "vote", text: "A vote in society elections and referendums" },
  { icon: "badge", text: "The right to run for office or join any committee" },
  { icon: "calendar", text: "A spot in every event, activity and project we run" },
  { icon: "cap", text: "Mentorship, learning resources and member-only training" },
  { icon: "gift", text: "Member perks and discounts from our partner businesses, firms and startups" },
];

export const OFFICER_PATH = [
  "Be an active member in good standing",
  "Watch for the call, 2+ weeks before election day",
  "Submit your candidacy form",
  "Get validated by the Election Committee",
  "Share your platform",
  "Win a simple-majority vote",
  "Get inducted",
];

// `html` answers are trusted, hand-written content.
export const FAQ = [
  {
    q: "Who can join CompSciety?",
    html: "<p><strong>Every BulSUan</strong>, from any college or department, who wants to learn. You don't need to be a Computer Science student.</p>",
  },
  {
    q: "Do I need to know how to code?",
    html: "<p>Nope. <strong>Creative</strong> members design and make content, and <strong>Connector</strong> members run events and outreach. Every path has equal rights.</p>",
  },
  {
    q: "How much does it cost, and how long does it last?",
    html: "<p><strong>₱50 a year</strong>, collected when you register. It's voluntary and goes to our events, resources and operations. Membership lasts one academic year, and you renew with the renewal form.</p>",
  },
  {
    q: "How do I become an officer?",
    path: true,
    html: "<p>Any <strong>active member in good standing</strong> who meets the university's and the org's academic and disciplinary standards can run. You submit a candidacy form with the position, a short “Why me?” statement and the initiatives you'd run. Terms last one academic year. Here's the path:</p>",
  },
  {
    q: "Can I join a committee without running for office?",
    html: "<p>Yes. Executive officers appoint members to committees based on interest, skills and team needs, with approval from the Executive Board. Check the open positions on the About page and apply there.</p>",
  },
];
