# Mohammed Raees - Game Developer Portfolio

A single-page portfolio built with React, TypeScript, Vite and Tailwind CSS v4. Framer Motion provides animations, Lenis handles smooth scrolling, and Cobe renders the hero globe.

## Local development

Use a Node.js version supported by the locked Vite release.

```bash
npm ci
npm run dev       # local development server
npm run build     # TypeScript checks and production output in dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint checks
```

## Editing the portfolio

- `src/data/`: profile/contact information, hero copy, About copy, experience, education, projects and skills.
- `src/components/sections/`: page sections, including the About portrait treatment.
- `src/components/layout/`: header and footer.
- `src/components/ui/`: reusable buttons, cards and animation wrappers.
- `src/hooks/useMobileNav.ts`: mobile navigation, outside-click/Escape closing and scroll locking.
- `src/index.css`: colours, fonts, utilities and the custom 850px medium-layout breakpoint. Desktop navigation starts at 1024px (`lg`).
- `public/profile.png`: portrait and social-sharing image.
- `public/favicon.svg`: browser-tab icon.
- `public/Mohammed Raees_Resume.pdf`: downloadable resume; update `resumeUrl` in `src/data/profile.ts` if renaming it.
- `public/google68511bb71cad19da.html`: Google Search Console verification file.
- `index.html`: page title, description, canonical URL and Open Graph/Twitter metadata. These are static so sharing crawlers can read them without running JavaScript.

The contact email uses `mailto:` to open the visitor's configured email handler. There is no contact-form backend. GitHub and LinkedIn links live in `src/data/profile.ts`.

## Netlify deployment

The production site is https://mohammed-raees-portfolio.netlify.app/.

In the portfolio project's **Project configuration > Developer settings > Build settings**, configure:

| Setting | Value |
| --- | --- |
| Base directory | Repository root (leave empty) |
| Build command | `npm run build` |
| Publish directory | `dist` |

Check that the connected repository is `Raees2135/raees-portfolio` and the production branch is `main` under **Branches and deploy contexts**. Save changes and trigger a new deployment.

Publish the generated `dist` directory, not the source repository or `public` directory. A correctly built HTML page references `/assets/*.js`, not `/src/main.tsx`.

Local changes and commits on a fork do not update production until they reach the connected repository's production branch. Update the canonical and sharing URLs in `index.html` if the production domain changes. Social platforms may cache old previews after deployment.

## Before publishing

1. Run `npm run build` and `npm run lint`.
2. Check mobile menu closing using the toggle, a navigation link, an outside click and Escape. Resize to desktop while the menu is open and confirm scrolling is restored.
3. Verify project/social links, the email link and the resume download.
4. Check the layout on narrow mobile, tablet and desktop screens.
5. Confirm the deployed HTML contains sharing metadata and its absolute image URL loads.

For other static hosts, deploy `dist` after building. Hosting under a subdirectory requires configuring Vite's `base` and adapting root-relative public asset URLs; the current setup targets a root domain.
