# Lisa Stefano — Life & Wellness Consulting

Static marketing site built with React + Vite + Tailwind CSS.

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/` — deploy that folder to Cloudflare Pages, Netlify, etc.

## Brand tokens (tailwind.config.js)
- sage (#7C8371) — primary brand color
- sage-DEEP (#454B3C) — dark contrast sections / footer
- sage-100 (#E4E6DD) — light section backgrounds
- blush (#D2A898) — accent / CTA highlights
- ink (#1C1B17) — text
- cream (#FAF8F3) — base background
- Fonts: Fraunces (display/headings), Jost (body) — loaded via Google Fonts in index.html

## Still needs before launch
1. Real Calendly link -> replace `#` in src/components/FinalCTA.jsx (search TODO)
2. Real support email + social links -> src/components/Footer.jsx (search TODO)
3. Real lifestyle photography -> swap into AbstractArt.jsx usages
   (currently abstract gradient placeholders in brand colors, intentional not broken)
4. Confirm testimonial copy is okay to use, or swap with real client quotes
