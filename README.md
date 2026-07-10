# The Verified Plug

Landing site for The Verified Plug, a China-to-Ghana vehicle and general goods sourcing business. Built with Next.js (App Router, TypeScript).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` reads any previously uploaded slot images and renders `components/LandingPage.tsx`.
- `components/` holds the page sections (`Header`, `Hero`, `TrustStrip`, `CarsSection`, `HowItWorks`, `RequestForm`, `Footer`) plus two shared pieces: `Reveal` (scroll-in animation) and `ImageSlot` (the photo upload widget used for the hero, the 8 "what we source" cards, and the request section).
- `lib/content.ts` holds the car/goods list, process steps, and the WhatsApp deep-link builder.
- `lib/uploads.ts` + `app/api/upload/route.ts` + `app/api/uploads/[filename]/route.ts` implement the image upload flow.

## Image uploads

Photos are dropped or clicked onto an `ImageSlot`, uploaded to `/api/upload`, and written to `uploads-data/` at the project root (deliberately outside `public/`, and tracked in `uploads-data/manifest.json`). They're served back through `app/api/uploads/[filename]/route.ts`, which reads from disk on every request.

This keeps uploads working immediately in both `next dev` and a production `next build && next start`, with no restart required. It assumes a server with a persistent local filesystem (e.g. a VPS, `next start` on a long-lived container). It will **not** persist uploads on serverless platforms with an ephemeral filesystem (e.g. Vercel) — swap in object storage (S3, R2, etc.) if deploying there.

Every slot ships with a default photo (`public/images/`, credited in `public/images/CREDITS.md`) so the page looks finished before any upload happens. Dropping a new photo onto a slot replaces the default for that slot.

## Editorial notes

No em dashes anywhere in this project's copy. Keep copy concise, short direct sentences over long descriptive ones.
