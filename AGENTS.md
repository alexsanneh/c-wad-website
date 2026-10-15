# AGENTS.md

Orientation for developers and AI agents working on this codebase.

## Project overview

Marketing site for **C-WAD Consultancy Ltd**, a consultancy covering insurance and risk
management, business consulting, digital marketing and professional writing, with
offices in Freetown, Banjul and London.

### Tech stack

| Layer | Technology |
| --- | --- |
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Icons | Hand-inlined SVGs in `src/components/icons.tsx` |
| AI | `@anthropic-ai/sdk` via Netlify AI Gateway |
| Forms | Netlify Forms |
| Images | Netlify Image CDN |
| Language | TypeScript 5.9 (strict) |
| Package manager | pnpm |
| Deployment | Netlify |

## Directory structure

```
├── public
│   ├── Employees/                  # Team portraits referenced from src/data/team.ts
│   ├── Partners/                   # Reinsurance partner logos referenced from src/data/site.ts
│   ├── __forms.html                # Hidden static form skeleton; required for Netlify Forms detection
│   ├── favicon.ico
│   └── pnglogog.png                # Company mark used in the nav, footer and as the favicon
├── src
│   ├── components
│   │   ├── home
│   │   │   ├── Approach.tsx        # #about — values, 21+ stat, three principles, credentials
│   │   │   ├── Contact.tsx         # #contact — office details and the Netlify Forms contact form
│   │   │   ├── Hero.tsx            # Headline, CTAs and the founder portrait collage
│   │   │   ├── PartnerMarquee.tsx  # Looping reinsurance partner logo strip
│   │   │   ├── Services.tsx        # #services — tabbed practice-area switcher
│   │   │   ├── Team.tsx            # #team — founder block plus inline-expanding roster
│   │   │   └── WaicaSection.tsx    # WAICA membership band
│   │   ├── ChatWidget.tsx          # Floating AI assistant; posts to /api/chat
│   │   ├── icons.tsx               # Every inline SVG used site-wide
│   │   ├── Reveal.tsx              # Reveal component and useReveal hook (IntersectionObserver)
│   │   ├── SiteFooter.tsx          # Footer: nav columns, contact list, legal row
│   │   ├── SiteNav.tsx             # Fixed header; transparent until scrolled
│   │   └── TeamModal.tsx           # Full profile overlay opened from /team cards
│   ├── data
│   │   ├── service-pages.ts        # Long-form content for the four /services pages
│   │   ├── services.ts            # The four practice areas plus contact-form service options
│   │   ├── site.ts                 # Company details, nav, offices, partners, footer links
│   │   └── team.ts                 # Founder and roster records
│   ├── lib
│   │   ├── image.ts                # Netlify Image CDN URL builder
│   │   └── view-transition.ts      # View Transition names and startViewTransition wrapper
│   ├── routes
│   │   ├── services
│   │   │   └── $slug.tsx           # Practice-area detail page
│   │   ├── __root.tsx              # Shell: head tags, nav, footer, chat widget
│   │   ├── api.chat.ts             # POST /api/chat — AI assistant endpoint
│   │   ├── index.tsx               # Home page; composes the home/ sections
│   │   └── team.tsx                # /team roster with profile overlay
│   ├── router.tsx                  # Router instance with scroll restoration
│   └── styles.css                  # Tailwind entry, brand theme tokens, keyframes
├── netlify.toml                    # Build command, publish dir, dev server ports
├── package.json
├── tsconfig.json
└── vite.config.ts                  # TanStack Start, React, Tailwind, Netlify plugins
```

## Key concepts

### File-based routing

Routes come from files in `src/routes/`. `routeTree.gen.ts` is generated — never edit it
by hand.

- `__root.tsx` wraps every page and renders `SiteNav`, `SiteFooter` and `ChatWidget`, so
  page components render only their own `<main>`.
- `api.chat.ts` → `POST /api/chat`, declared with `server: { handlers: { POST } }`.
- `services/$slug.tsx` resolves content in its `loader` via `getServicePage()` and
  throws `notFound()` for an unknown slug. Per-page `<title>`/description come from
  `head({ loaderData })`.

### Content lives in `src/data`

Copy, office details, partners, team records and service content are all data, not
markup. Add a practice area by appending to both `services.ts` (home switcher) and
`service-pages.ts` (detail page) using the same `slug`.

### Styling

Brand colours are Tailwind theme tokens declared in the `@theme` block of
`styles.css` — `brand-bg`, `brand-bg-alt`, `brand-dark`, `brand-extra`,
`brand-section`, `brand-primary`, `brand-secondary`, `brand-tertiary`, `brand-base`,
`brand-cta`, `brand-sage`, `brand-sage-bg`. Use `bg-brand-section`, `text-brand-cta`
and so on rather than raw hex values. `--font-sans` declares Inter but no webfont is
shipped, so text renders in the system UI face; that is deliberate and matches the
previous build.

### Motion

No animation library. Three mechanisms, all disabled under
`prefers-reduced-motion: reduce`:

- `Reveal` / `useReveal` add `data-visible="true"` when an element intersects the
  viewport, driving the `.reveal` transition.
- `.partner-carousel-track`, `.service-panel` and `.team-modal` are CSS keyframes.
- Team portraits morph through `withViewTransition()`, which wraps
  `document.startViewTransition` around a `flushSync` state update.

### Images

Never reference a file in `public/` directly from an `<img src>`. Pass it through
`cdnImage(path, { w })` so it is served resized and re-encoded by the Netlify Image CDN.

### Forms

`public/__forms.html` must list every field the React contact form submits. Netlify
discovers forms by parsing static HTML at build time, so adding a field to
`components/home/Contact.tsx` without adding it there means the value is dropped from
submissions. The form posts to `/__forms.html`, not `/`, so the request reaches
Netlify's forms handler instead of the SSR catch-all.

### AI assistant

`api.chat.ts` builds its system prompt from `src/data/site.ts` and
`src/data/services.ts`, so updating service copy updates what the assistant knows. It
uses `claude-haiku-4-5` through the Netlify AI Gateway with a zero-argument
`new Anthropic()` — do not add an API key. Keep the response shape
(`{ available, reply }` / `{ available: false, message? }`); `ChatWidget` depends on it
to switch into offline mode.

## Development commands

```bash
pnpm dev      # dev server on :3000
pnpm build    # production build
```

## Conventions

- Components: PascalCase files. Utilities and hooks: camelCase. Route files follow
  TanStack's conventions (`$slug.tsx`, `api.chat.ts`).
- Type-only imports use the `type` keyword.
- Relative imports throughout; there is no path alias.
- Local state via React hooks; there is no global store.
