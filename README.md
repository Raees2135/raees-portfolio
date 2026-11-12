# Mohammed Raees — Unity Game Developer Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config in `src/index.css`)
- [Framer Motion](https://motion.dev) for scroll reveals and the hero animation
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and produce a static build in dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, About, Experience, Projects, Skills, Statement, Contact
│   └── ui/         # shared building blocks (buttons, cards, reveal wrapper, icons)
├── data/           # editable content — profile info, projects, experience, skills
├── hooks/          # useMobileNav
└── lib/            # shared Framer Motion variants
public/
├── Mohammed Raees_Resume.pdf   # linked from the hero's "Download Resume" button
└── google68511bb71cad19da.html # Google Search Console site verification — leave in place
```

## Before publishing

All editable content lives in `src/data/`. `src/data/profile.ts` has email, GitHub and LinkedIn
already filled in from the resume. One placeholder remains, marked with a `// TODO:` comment:

1. Replace the placeholder YouTube URL in `src/data/profile.ts` (`socials` array) — or remove
   that entry if there's no channel to link.
2. Swap `public/Mohammed Raees_Resume.pdf` for an up-to-date resume (keep the same filename, or
   update `resumeUrl` in `src/data/profile.ts` to match).

## Deploying

`npm run build` outputs a static site in `dist/`, ready for Vercel, Netlify, or GitHub Pages.

- **Vercel / Netlify**: no configuration needed — both auto-detect Vite.
- **GitHub Pages**: if deploying to a project subpath (`username.github.io/repo-name/`) rather
  than a custom domain or a user/org root site, set `base: "/repo-name/"` in `vite.config.ts`.
