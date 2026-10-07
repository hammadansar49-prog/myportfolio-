# Hammad Ansar: portfolio with a built-in CMS

A personal portfolio website (Next.js) with an admin panel (Payload CMS) so every part of it can be edited without touching code.

- **Website:** hero, services, selected work (case studies), process, skills, about, FAQ, contact and a WhatsApp booking flow.
- **Admin panel:** `/admin`. Edit projects, services, skill groups, FAQs, images and all site text, with version history and live preview.
- **Mobile preview app:** `/preview`. See the site on phone, tablet and laptop sizes.

## Tech

Next.js 16 (App Router), React 19, TypeScript, Payload CMS 3, SQLite (via libSQL), plain CSS.

## Run it locally

```bash
npm install
cp .env.example .env     # then set PAYLOAD_SECRET to a long random string
npm run dev
```

- Website: http://localhost:3000
- Admin: http://localhost:3000/admin (the first visit asks you to create your admin account)
- Mobile preview: http://localhost:3000/preview

On first run the CMS fills itself with the portfolio content that ships with the project (`src/lib/site.ts`) and uploads the images from `public/images`.

## Edit your content

Log in at `/admin`:

| Where | What you change |
|---|---|
| Content → Projects | case studies, screenshots, results, order, hide/show |
| Content → Services / Skill groups / FAQs | the matching sections |
| Library → Media | images |
| Settings → Site settings | hero text, photo, About, process, WhatsApp number, email, GitHub, SEO |

Saved changes show on the website straight away.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | development server |
| `npm run build` / `npm start` | production build and server |
| `npm run lint` | lint |
| `npm run backup` | copies `data.db` and `media/` into `backups/` |

## Environment variables

See `.env.example`.

| Variable | Purpose |
|---|---|
| `PAYLOAD_SECRET` | signs admin sessions. Keep it private. |
| `DATABASE_URL` | database location (`file:./data.db` for local SQLite) |
| `NEXT_PUBLIC_SITE_URL` | the public URL of the site (used for SEO and CORS) |

## What is not in this repository

- `.env` (secrets), `data.db` (your content and admin account) and `media/` (uploaded files) are kept out on purpose. Use `npm run backup` to back them up.
- A fresh clone rebuilds its content from the defaults on first run.

## Deploying

SQLite and local file uploads do not persist on serverless hosts such as Vercel. For production, switch Payload to a hosted database (Postgres) and store uploads in cloud storage, then set the environment variables above on the host.

## Project layout

```
src/app/(frontend)   the website, /preview, /privacy
src/app/(payload)    the admin panel and API routes
src/collections      CMS collections (projects, services, skills, FAQs, media, users)
src/globals          the Site settings global
src/components       website components (and src/components/admin for admin branding)
src/lib              default content, CMS data loader, validators, seed
design/              design sources: portfolio versions 1 and 2, and the admin panel design
```
