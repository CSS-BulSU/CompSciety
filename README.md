# CompSciety Website

Official website for the Computer Science Society, built with Next.js (App Router) + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project structure

```
app/
  layout.js        Root layout, loads the Poppins font
  page.js           Composes the Home page from the section components
  globals.css       Tailwind import + base theme
components/
  Navbar.jsx
  Hero.jsx
  AnnouncementCarousel.jsx
  PartnersSection.jsx
  AboutSection.jsx
  Footer.jsx
  ui/
    Logo.jsx
    GradientPillButton.jsx
    MatrixRain.jsx
    GridFloor.jsx
```

## Deploying

Push this repo to GitHub, then import it in Vercel (vercel.com/new). No extra config needed — Vercel auto-detects Next.js.
