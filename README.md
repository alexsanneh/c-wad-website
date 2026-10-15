# C-WAD Consultancy Ltd

Marketing site for C-WAD Consultancy Ltd — an insurance, risk management, business
consulting, digital marketing and professional writing practice operating from
Freetown, Banjul and London.

Built with [TanStack Start](https://tanstack.com/start), React 19, Tailwind CSS 4 and
Vite, and deployed on Netlify.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build into dist/
```

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero, partner marquee, WAICA membership band, approach, service switcher, team, contact form |
| `/team` | Full roster with a click-to-open profile overlay |
| `/services/$slug` | Detail page for each of the four practice areas |
| `/api/chat` | `POST` endpoint backing the on-page AI assistant |

The four service slugs are `insurance-risk-management`, `business-consulting`,
`digital-marketing` and `professional-writing`.

## Netlify features in use

**Forms.** The contact form posts url-encoded data to `/__forms.html`. That file lives
in `public/` and holds a hidden `<form name="contact" data-netlify="true">` skeleton
whose fields mirror the React form — Netlify's build step scans static HTML to discover
forms, and it cannot see a client-rendered one. Submissions land in the site's Forms
tab. `bot-field` is the honeypot.

**AI Gateway.** `src/routes/api.chat.ts` constructs `new Anthropic()` with no
arguments; Netlify injects the credentials at runtime, so no API key is stored in the
repo or in environment config. The endpoint answers `{ available: true, reply }` on
success and `{ available: false }` otherwise, which is what makes the widget fall back
to its "Offline Mode" notice instead of erroring.

**Image CDN.** Every photo and logo is requested through `cdnImage()`
(`src/lib/image.ts`), which builds a `/.netlify/images?url=…&w=…&fm=webp` URL so
source-resolution files never reach the browser.

## Layout

```
public/
  Employees/            Team portraits
  Partners/             Reinsurance partner logos
  __forms.html          Static skeleton for Netlify Forms detection
src/
  components/
    home/               One component per home page section
    ChatWidget.tsx      Floating AI assistant
    SiteNav.tsx         Fixed header
    SiteFooter.tsx      Footer
    TeamModal.tsx       Profile overlay used by /team
    Reveal.tsx          Scroll-reveal component and useReveal hook
    icons.tsx           Every inline SVG used across the site
  data/                 Site, service, service-page and team content
  lib/
    image.ts            Netlify Image CDN URL builder
    view-transition.ts  View Transition helpers for portrait morphing
  routes/               File-based routes
  styles.css            Tailwind entry, brand theme tokens, keyframes
```

## Motion

There is no animation library. Scroll reveals use `IntersectionObserver` through
`Reveal`/`useReveal`, the partner marquee and panel transitions are CSS keyframes in
`styles.css`, and the team portraits morph with the View Transition API where the
browser supports it. Everything is disabled under `prefers-reduced-motion: reduce`.

## Content

Copy, imagery and brand colours belong to C-WAD Consultancy Ltd and were carried over
from the previous build of cwad-consultancy.com.
