# Hammad Ansar | Full-Stack Web & Software Developer

> I build the systems behind online businesses: websites, web apps, admin panels, payment and subscription platforms, and IPTV / OTT platforms. Backend to frontend, one person, start to finish. I also run my own online store, **THEOTTDEALS**.

This repository is my **portfolio website** with a built-in **CMS** (admin panel), so every part of it can be edited without touching code.

---

## Contact

| | |
|---|---|
| **WhatsApp** | [+92 313 7666309](https://wa.me/923137666309) |
| **Email** | [hammadansar49@gmail.com](mailto:hammadansar49@gmail.com) |
| **GitHub** | [hammadansar49-prog](https://github.com/hammadansar49-prog) |
| **Replies** | within 24 hours |
| **Languages** | English, Urdu |
| **Based in** | Pakistan, working remotely worldwide |

**Available for new projects.** Message me on WhatsApp or email with what you need or what is broken.

---

## What I do

| Service | What it covers | Best for |
|---|---|---|
| **Custom website development** | Business sites, landing pages and portfolios that load fast and look right on every screen | Shop owners, agencies, new businesses |
| **Web app and dashboard development** | Admin panels, CRMs and internal tools that replace spreadsheets and manual work | Startups, teams, growing companies |
| **Subscription and billing platforms** | Plans, renewals, customer accounts and payment flows | Subscription sellers, resellers, OTT and IPTV businesses |
| **Bug fixing and project rescue** | A slow site, a broken feature or an unfinished project: I find the cause and fix it | Anyone stuck with code that does not work |
| **API, payment and third-party integrations** | Payment gateways, WhatsApp, email and external APIs connected to your system | Businesses that need systems to talk to each other |
| **Automation** | Repetitive manual work replaced by software that runs on its own | Owners and teams losing hours to routine tasks |

### How I work

1. **We talk.** You tell me what you need or what is broken.
2. **Scope and price.** A written scope, a timeline and a price before any work starts.
3. **Build in steps.** You see working progress along the way and can change direction early.
4. **Launch and support.** Deployed, handed over, and fixed if something breaks after.

No hidden charges. Everything is agreed in writing first.

---

## Skills

**Backend**
PHP · Laravel · Node.js · MySQL · REST APIs · API Integration

**Frontend**
HTML5 · CSS3 · JavaScript · React.js · Tailwind CSS · Responsive Web Design

**Platforms and business systems**
WordPress · SaaS · IPTV · OTT Platforms · Subscription Management · Payment Gateway Integration · Admin Panel Development

**Quality and operations**
Debugging · Troubleshooting · Problem Solving · Automation · Website Optimization · Web Security · Git · GitHub · Linux · cPanel

**Also used in my projects**
Next.js · TypeScript · Firebase · Supabase · Cloudinary · Electron · Flutter · AI APIs (Groq / Llama)

---

## Selected work

### THEOTTDEALS | online subscriptions store
**[theottdeals.com](https://theottdeals.com)** · Online store · SEO · WhatsApp ordering

- **Problem:** selling streaming, AI, design and VPN subscriptions online needs trust, easy contact, and a store people can find for each brand name they search.
- **My role:** founder and sole developer. Design, build, search setup and day-to-day running.
- **Result:** live and serving customers worldwide through WhatsApp.

### MY IPTV | IPTV app and website
**[myiptv.theottdeals.com](https://myiptv.theottdeals.com)** · Android · Android TV · Windows · Web

- **Problem:** customers wanted one simple IPTV player for phone, TV box and PC, with a way to try it before paying.
- **My role:** built the app for Android 7+, Android TV and Windows 10/11 with a guide and catch-up, a licence-key system with a 24-hour free trial, and its website with pricing, FAQ and downloads.
- **Result:** released on three platforms. Version 2.0.1 shipped in October 2026.

### KAROBAR | desktop POS and billing system
**[GitHub](https://github.com/hammadansar49-prog/Blue-Berry-studios)** · Electron · Firebase · Windows 7 to 11

- **Problem:** shops with one or many branches need fast billing, stock control and honest profit numbers, and must keep working when the internet drops.
- **My role:** designed and built the full desktop POS. Barcode scanning, multi-branch real-time sync, ledgers, inventory with sizes and units, invoices with logo, barcode and QR, thermal and standard printing, profit reports, offline mode.
- **Result:** a one-click Windows installer that runs from Windows 7 to 11.

### Ahmad YT Tutorial | channel website
**[ahmadyttutorial.com](https://ahmadyttutorial.com)** · Next.js · Firebase · Cloudinary · Web Push

- **Problem:** a YouTube channel teaching people to make videos with AI needed a home where every tutorial carries the exact prompt behind it, free to copy, and where the owner can publish without touching code.
- **My role:** built the whole site. Tutorial pages with the YouTube video and a one-click Copy Code prompt box, search and categories, comments with moderation, articles, legal pages and social links, plus a private admin panel, push notifications and visitor analytics.
- **Result:** live, with tutorials, articles and the channel's social links published. The owner adds new videos himself through the admin panel.
- Source: [ahmad-yt-tutorials](https://github.com/hammadansar49-prog/ahmad-yt-tutorials)

### Modern AI Notes | cross-platform notes app
**[GitHub](https://github.com/hammadansar49-prog/Modern-Ai-Notes-)** · Flutter · Riverpod · Drift · Firebase · Groq

- **Problem:** notes apps rarely combine text, audio, sketches and images with AI help, offline use and privacy.
- **My role:** built the Flutter app. AI summaries, grammar fix, translation and chat, offline-first storage with cloud sync, reminders and biometric lock.
- **Result:** a complete cross-platform app, rebuilt from native Android into Flutter.

---

## About this repository

### What is in it

- **The website:** hero, trust points, services, selected work with case studies, process, skills, about, FAQ, a final call-to-action, and a contact section with WhatsApp booking (pick a day, a time and a topic, and WhatsApp opens with the message ready). Floating WhatsApp button, sticky navigation, mobile menu, animations that respect "reduce motion", scroll progress bar, and a skills ticker.
- **The admin panel (`/admin`):** edit projects, services, skill groups, FAQs, images and every site text. Branded dark skin, a "finish your portfolio" checklist on the dashboard, version history (restore older versions), live preview in mobile, tablet and desktop sizes, field validation (phone digits, email, links, colours), login lockout after 5 wrong passwords, 5 MB image limit with thumbnails.
- **The mobile preview app (`/preview`):** shows the site on iPhone, small phone, large Android, tablet, laptop and desktop sizes with rotate, reload and page switch.
- **SEO and sharing:** page title and description, social share image, favicon, and a privacy policy page.

### Tech

Next.js 16 (App Router) · React 19 · TypeScript · Payload CMS 3 · SQLite (libSQL) · plain CSS (no UI framework) · Space Grotesk, Figtree and JetBrains Mono fonts.

### Run it locally

```bash
npm install
cp .env.example .env     # then set PAYLOAD_SECRET to a long random string
npm run dev
```

| | |
|---|---|
| Website | http://localhost:3000 |
| Admin | http://localhost:3000/admin (the first visit asks you to create your admin account) |
| Mobile preview | http://localhost:3000/preview |

On first run the CMS fills itself with the portfolio content that ships with the project (`src/lib/site.ts`) and uploads the images from `public/images`.

### Editing content

Log in at `/admin`:

| Where | What you change |
|---|---|
| Content → Projects | case studies, screenshots, results, order, hide or show |
| Content → Services / Skill groups / FAQs | the matching sections |
| Library → Media | images |
| Settings → Site settings | hero text, photo, About, process, WhatsApp number, email, GitHub, SEO |

Saved changes show on the website straight away.

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | development server |
| `npm run build` / `npm start` | production build and server |
| `npm run lint` | lint |
| `npm run backup` | copies `data.db` and `media/` into `backups/` |

### Environment variables

See `.env.example`.

| Variable | Purpose |
|---|---|
| `PAYLOAD_SECRET` | signs admin sessions. Keep it private. |
| `DATABASE_URL` | database location (`file:./data.db` for local SQLite) |
| `NEXT_PUBLIC_SITE_URL` | the public URL of the site (used for SEO and CORS) |

### What is not in this repository

- `.env` (secrets), `data.db` (your content and admin account) and `media/` (uploaded files) are kept out on purpose. Use `npm run backup` to back them up.
- A fresh clone rebuilds its content from the defaults on first run.

### Deploying

SQLite and local file uploads do not persist on serverless hosts such as Vercel. For production, switch Payload to a hosted database (Postgres) and store uploads in cloud storage, then set the environment variables above on the host.

### Project record

- [docs/PROJECT_NOTES.md](docs/PROJECT_NOTES.md): every decision, the deploy setup, build fixes, content and open items.
- [docs/cover-photo/](docs/cover-photo/): LinkedIn banners and cover photo text.
- [design/](design/): design sources for portfolio V1, V2 and the admin panel.

### Project layout

```
src/app/(frontend)   the website, /preview, /privacy
src/app/(payload)    the admin panel and API routes
src/collections      CMS collections (projects, services, skills, FAQs, media, users)
src/globals          the Site settings global
src/components       website components (and src/components/admin for admin branding)
src/lib              default content, CMS data loader, validators, seed
design/              design sources: portfolio versions 1 and 2, and the admin panel design
docs/                project notes and LinkedIn cover photos
```

---

## Let's work together

Got a project, a bug or an idea? **[Message me on WhatsApp](https://wa.me/923137666309)** or email **[hammadansar49@gmail.com](mailto:hammadansar49@gmail.com)**.
