# Lisa Stefano — Life & Wellness Consulting

React + Vite + TypeScript + Tailwind CSS build of the approved v2 design.

## Setup (VS Code / terminal)

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## How this project is structured

```
src/
  main.tsx              → entry point
  App.tsx               → composes all sections in order
  components/           → one component per section (Nav, Hero, Agitate, etc.)
  hooks/useReveal.ts     → the scroll-reveal animation, reusable across components
  styles/
    index.css           → Tailwind directives (@tailwind base/components/utilities)
    theme.css           → the full design system (colors, gradients, animations, layout)
```

## Why the design isn't all Tailwind utility classes

Tailwind is set up and ready to use (see `tailwind.config.js` — the brand colors are
already available as utilities like `bg-clay`, `text-oliveLight`, `font-display`, etc.
if you want to build new sections with them).

The existing design system (gradients, pseudo-elements like `::before`/`::after`,
keyframe animations, the symptom-compass radial layout) lives in `src/styles/theme.css`
as regular CSS instead of being force-converted into long Tailwind utility strings.
This is a completely normal, supported pattern in Tailwind projects — global CSS and
Tailwind utilities coexist. Converting things like the ambient background blobs or the
radial compass layout into pure Tailwind classes would make them harder to read and
easier to break, for no real benefit.

Use Tailwind utilities for new one-off sections; extend `theme.css` for anything that's
part of the core visual system (colors, type, the pattern-line motif, etc.) so it stays
consistent site-wide.

## Content that still needs to be swapped before launch

- **Hero portrait & final CTA portrait**: this is now set up as a drop-in system.
  Add `hero-portrait.jpg` and `final-portrait.jpg` to `public/images/` (see the
  README inside that folder for exact specs) and they'll automatically replace
  the gradient placeholders — no code changes needed. Until then, the gradient +
  "Photo — swap for editorial portrait" label keeps showing safely, no broken
  image icons.
- **Testimonials**: the three testimonials (J., K., M.) are placeholder examples from
  the mockup phase — replace with real client testimonials before this goes live.
- **Booking link**: the "Book Your Free Consult" buttons currently point to `#` or
  `#book` (an anchor on the same page). Wire these to the real booking tool
  (Calendly, etc.) once it's decided.
- **Email capture**: the hero email input isn't wired to anything yet — connect it to
  whatever email tool is being used.

## Interactive pieces already working

- Scroll-reveal animations on every section (via `useReveal` hook)
- FAQ accordion (click to expand/collapse, only one open at a time)
- Sticky "Book Your Free Consult" bar that appears after scrolling past the hero
- Hover interactions on all buttons, cards, and the attachment-styles grid
