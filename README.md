# Beau & Co. Marketing website

Marketing site for **Beau & Co. Marketing** (Hamilton, ON) and its community
initiative, **Bloom Bus**. Built with Next.js (App Router), TypeScript and
Tailwind CSS v4, recreated from a high-fidelity design handoff.

## Pages

- `/` — Beau & Co. homepage
- `/bloom` — Bloom Bus page

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Notes

- Design tokens (colors, type scale, spacing) live in `app/globals.css`.
- Photography and logos are in `assets/images/` and statically imported so
  Next.js can optimize them.
- A few sections are missing final photography (Kerri's portrait, two
  polaroid shots, and the bus interior shot). These render as a labelled
  placeholder box (`components/ImagePlaceholder.tsx`) until real photos are
  supplied.
- The Bloom page embeds a [Behold](https://behold.so) Instagram widget. It
  only renders posts once the production domain is added to the feed's
  allowed-domains list in the Behold dashboard; expect it to be empty on
  localhost and preview deployments.
- Facebook/LinkedIn footer links are still `#` placeholders pending real
  URLs.
