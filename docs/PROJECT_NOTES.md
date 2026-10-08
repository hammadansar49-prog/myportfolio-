# Hammad Ansar Portfolio: poora record

Is file mein ab tak ki har baat aur har faisla likha hai. Poori chat ka record (transcript) owner ke PC par `D:\portfolio\project-record\` mein hai (private, repo mein nahi).

Last update: 8 October 2026

---

## 1. Zaroori links

| Kya | Link |
|---|---|
| Live website | https://hammadansar.theottdeals.com |
| Live admin panel (CMS) | https://hammadansar.theottdeals.com/admin |
| Local website | http://localhost:3000 |
| Local admin | http://localhost:3000/admin |
| Local mobile preview | http://localhost:3000/preview |
| GitHub repo (public) | https://github.com/hammadansar49-prog/myportfolio- |
| Admin panel ka design (artifact) | https://claude.ai/artifact/HUF8u2kDMNP2sSg8KXDEaq |
| LinkedIn banner (Canva, premium) | https://canva.link/t6uxp6csunx0t9h |
| LinkedIn banner (Canva, pehla saada) | https://canva.link/j6tp9whd0y4fx5f |

---

## 2. Folder ka naqsha (`D:\portfolio`)

| Folder / file | Kya hai |
|---|---|
| `portfolio-next/` | **Asli project** (Next.js + Payload CMS). GitHub par yahi jata hai. |
| `portfolio-next/data.db` | CMS ka database (content + admin account). GitHub par nahi jata. |
| `portfolio-next/media/` | CMS mein upload hui images. GitHub par nahi jata. |
| `portfolio-next/.env` | Local secrets (`PAYLOAD_SECRET` waghera). Kabhi share ya commit mat karna. |
| `portfolio-next/design/` | Design ke namoone: portfolio V1, V2 aur admin panel design. |
| `.pf/project/` | Portfolio V1 ka design (canvas). |
| `.pf2/project/` | Portfolio V2 ka design (canvas), jis se website bani. |
| `.cms-design/project/` | Admin panel ka design (8 screens). |
| `.claude/launch.json` | Local dev server chalane ki setting (temp folder D: par). |
| `data.db.manual-backup` | Database ka backup (schema badalne se pehle). |
| `data.db.before-migration` | Database ka backup (migration se pehle). |
| `project-record/` | Ye record: notes, poori chat ka zip, banner previews. |
| `cover photo/` | LinkedIn banners (PNG) aur cover ke words. |

---

## 3. Tech

- **Next.js 16.4** (App Router), **React 19**, **TypeScript**
- **Payload CMS 3.90** (Next.js ke andar hi chalta hai, alag server nahi)
- **SQLite** database (libSQL), file `data.db`
- Plain CSS, koi UI framework nahi
- Fonts (npm se, `@fontsource-variable`): **Space Grotesk** (headings), **Figtree** (body), **JetBrains Mono** (chhote labels)
- Production build: `next build --webpack` (Turbopack nahi)
- Node 22 (Hostinger par)

---

## 4. Brand / design ke faisle

- **Rang lock:** safed (Mono) accent. Background `#0C0C10`, text `#F2F2EE`, grey `#A3A3AD`, cards `#14141A`, lines `#26262E`.
  - Pehle lime `#C8FF3D` tha. 8 rang test kiye (Lime, Violet, Cyan, Gold, Coral, Mint, Orange, Mono). Tumne **safed (Mono)** chuna aur lock karwaya.
  - Code mein rang ka variable naam abhi bhi `--lime` aur button class `btn-lime` hai (purana naam), lekin rang safed hai.
- Dark, premium look: dot grid, halka glow, mouse ke saath roshni (spotlight), glassy cards, button par shine, do qatar ki skills patti, scroll progress bar.
- Animations "reduce motion" walon ke liye kam ho jati hain.
- Header ka chhota "H" icon 18px ka hai (Payload ka slot itna hi hai).

---

## 5. Website ke sections (upar se neeche)

1. Navbar: Services, Work, Process, About, Contact + sticky **Start a Project**. Phone par hamburger menu.
2. Hero: "I build websites, web apps and software that **businesses run on.**" + sub-line + 2 buttons + "Founder of TheOttDeals · Full-Stack Developer". Daayen taraf profile card (photo, 5 facts, Chat on WhatsApp button) aur 2 stat cards (5 projects, 4 platforms).
3. Trust strip (4 points)
4. Skills ki chalti patti (2 qatar)
5. Services (6 cards)
6. Work: 5 projects (Problem / My role / Result)
7. Process (4 steps) + "No hidden charges. Everything is agreed in writing first."
8. Skills (4 groups)
9. About (photo bada hota hai click par)
10. FAQ (6 sawal)
11. Final CTA band: "Have a project in mind? Let's talk."
12. Contact: din, time, topic chuno, WhatsApp khulta hai
13. Footer + Privacy Policy page (`/privacy`)
- Floating WhatsApp button (neeche daayen)
- SEO title, description, favicon, share image (`opengraph-image`)

---

## 6. Content (jo site par hai)

**Contact**
- WhatsApp: `+92 313 7666309` (link `wa.me/923137666309`)
- Email: `hammadansar49@gmail.com`
- GitHub: https://github.com/hammadansar49-prog
- Replies within 24 hours · English, Urdu · Pakistan, remote worldwide

**Services (6):** Custom Website Development · Web App and Dashboard Development · Subscription and Billing Platforms · Bug Fixing and Project Rescue · API, Payment and Third-party Integrations · Automation

**Projects (5):**
1. THEOTTDEALS (theottdeals.com) — online store, SEO, WhatsApp ordering
2. MY IPTV (myiptv.theottdeals.com) — Android, Android TV, Windows, web; licence key + 24 ghante trial
3. KAROBAR POS — Electron + Firebase desktop POS (GitHub: Blue-Berry-studios)
4. Ahmad YT Tutorial / PapaWeb (ahmadyttutorial.com) — Next.js, Firebase, Cloudinary, admin panel
5. Modern AI Notes — Flutter app (GitHub: Modern-Ai-Notes-)

**Skills:** Backend (PHP, Laravel, Node.js, MySQL, REST APIs, API Integration) · Frontend (HTML5, CSS3, JavaScript, React.js, Tailwind, Responsive) · Platforms (WordPress, SaaS, IPTV, OTT, Subscription Management, Payment Gateways, Admin Panels) · Quality/ops (Debugging, Troubleshooting, Optimization, Web Security, Automation, Git, GitHub, Linux, cPanel)

---

## 7. Admin panel (Payload CMS)

- Address: `/admin`. Pehli baar "Create first user" aata hai, apna account khud banana hai.
- **Content:** Projects, Services, Skill groups, FAQs · **Library:** Media · **Settings:** Site settings (hero, photo, facts, stats, trust, About, Process, CTA, WhatsApp, email, GitHub, SEO) · **Admin:** Users
- Dashboard par "Finish your portfolio" checklist, stat cards, aur buttons (Site settings, Mobile preview, View live site).
- Khoobiyan: dark skin, version history (purani halat wapas), live preview (mobile/tablet/desktop), validation (phone sirf digits, email, links, rang), 5 galat password par 10 minute lock, 7 din login, 5MB image limit, thumbnails.
- Pehli baar chalne par CMS khud bhar jata hai (`src/lib/site.ts` ke default content se, images `public/images` se).
- Code mein nahi (CMS mein edit nahi hota): sections ke bade headings, din/time ki list, KAROBAR/Notes ke mockup.

---

## 8. Local par kaise chalana hai

C: drive bhari hai, isliye npm ka temp aur cache D: par rakha hai:

```bash
cd /d/portfolio/portfolio-next
export TEMP='D:\tmp-npm\tmp' TMP='D:\tmp-npm\tmp' npm_config_cache='D:\tmp-npm\cache'
npm run dev
```

Ya Claude ke preview se: `.claude/launch.json` ka "portfolio" server.

Backup: `npm run backup` (data.db + media → `backups/`).

---

## 9. Deploy (Hostinger)

- Plan: Hostinger **Web App** (Node.js), GitHub se connected, branch `main`, Framework Next.js, Node 22, root `./`, build settings Default.
- Domain: `hammadansar.theottdeals.com` (subdomain)
- **Environment variables** (Value mein sirf value, naam nahi):

| Key | Value |
|---|---|
| `PAYLOAD_SECRET` | *(private: Hostinger panel mein set hai, repo mein nahi rakha)* |
| `DATABASE_URL` | `file:./data.db` |
| `NEXT_PUBLIC_SITE_URL` | `https://hammadansar.theottdeals.com` |

> `PAYLOAD_SECRET` production admin ki chaabi hai, isliye is public repo mein nahi rakha. Asal value sirf Hostinger aur owner ke local notes mein hai.

- Optional (Turso hosted database ke liye): `DATABASE_AUTH_TOKEN`
- Dhyan: Hostinger dobara deploy karne par folder naya bana sakta hai, aur `data.db` mit sakti hai. Admin mein content likhne ke baad backup lena aur ek deploy ke baad check karna.

**Build ke masle aur unke hal (history):**
1. `Invalid URL` — `NEXT_PUBLIC_SITE_URL` ki value mein poori line `KEY=...` paste ho gayi thi. Hal: address parser ab galat value par bhi nahi tootta (`src/lib/siteUrl.ts`).
2. Production mein database tables nahi banti thi — Hal: migration file `src/migrations/20261007_000000_initial.ts`, jo server chalte hi (`onInit`) chalti hai.
3. Build 15 minute mein atak jata tha — Hal: pages ab build ke waqt database nahi chhoote (`force-dynamic`), fonts Google se download ki jagah npm se, aur build webpack + kam memory (`cpus: 1`, `webpackMemoryOptimizations`).
- Akhri test (GitHub se naya clone, network band): build pass ~3.5 minute, production mein sab pages 200, CMS bhar gaya.
- Akhri commit: `79fc53e` "Make the production build work on small build servers". Hostinger par iska nateeja abhi pakka nahi hua.

---

## 10. GitHub commits

| Commit | Kya |
|---|---|
| `5712a69` | Website + Payload CMS admin + mobile preview (pehla push) |
| `fd8b479` | README: contact, services, skills, projects |
| `0e1f444` | Production build + database setup fix |
| `56f286e` | Build tez, database se door |
| `79fc53e` | Fonts npm se, webpack build, kam memory |

GitHub par **nahi** jata: `.env`, `data.db`, `media/`, `.claude/`, `backups/`.

---

## 11. LinkedIn banner (Canva)

- Size: 1584 × 396, black background, white text, text daayen taraf (profile photo bayen neeche aati hai).
- **Premium version** (https://canva.link/t6uxp6csunx0t9h): "I build the systems behind" (bold) + "*online businesses.*" (italic serif), "AVAILABLE FOR NEW PROJECTS" chip, services line, domain, bayen taraf halka outline "BUILD", glow aur dot grid.
- Canva ki galtiyan theek ki: double space, "businesss", domain kat raha tha, line toot rahi thi.
- Dono banners Canva mein save ho gaye (galtiyan theek karke) aur PNG (1584 × 396) download ho gaye:
  - [docs/cover-photo/linkedin-banner-premium.png](cover-photo/linkedin-banner-premium.png)
  - [docs/cover-photo/linkedin-banner-simple.png](cover-photo/linkedin-banner-simple.png)
  - Cover ke words: [docs/cover-photo/cover-words.txt](cover-photo/cover-words.txt)
- Chhote previews: `project-record/banner/`.

Cover ke liye likhe gaye words (3 set):
- Set 1: I build systems businesses run on. / Websites. Web apps. Admin panels. / Payments, subscriptions, IPTV and OTT. / Built, launched, and supported.
- Set 2: From idea to live product. / Backend to frontend, one developer. / Clear scope. Honest timelines. / Let's build what you need.
- Set 3: Code that runs real businesses. / Fixing what others left broken. / Fast, secure, built to last. / Hammad Ansar · Full-Stack Developer

---

## 12. Baaki kaam (pending)

- [ ] **WhatsApp number:** WhatsApp ne kaha "+92 313 7666309 isn't on WhatsApp". Phone mein WhatsApp → Settings → profile → Phone dekh kar sahi number admin (Site settings → Contact) aur README mein lagana.
- [ ] Hostinger build ka nateeja dekhna (commit `79fc53e`), phir live `/admin` par fauran admin account banana.
- [x] LinkedIn banner Canva mein save + PNG export (`cover photo/` folder).
- [ ] Projects ke result numbers (`[ADD: ...]`) asli numbers se badalna.
- [ ] KAROBAR aur Modern AI Notes ke asli screenshots.
- [ ] LinkedIn profile ka link (baad mein karna hai).
- [ ] Testimonials (sirf asli reviews), pricing (optional).
- [ ] Analytics (abhi koi nahi; lagane par Privacy page update).
- [ ] Contact form email ke saath (abhi WhatsApp se kaam chal raha hai).
- [ ] Unconfirmed baatein (site par nahi daali): NUML mein Software Engineering, TheOttDeals ke reseller panels.
- [ ] **C: drive bhari hai** (227MB bacha tha). Jagah khali karo.

---

## 13. Kaam ki timeline (mukhtasir)

1. Portfolio V1 aur V2 ka design (canvas), V2 chuna.
2. V2 ko Next.js mein banaya, local par chalaya.
3. Design aur "sexy" kiya (glow, spotlight, shine, marquee, progress bar).
4. 8 rang test kiye, safed lock kiya.
5. Tumhare plan ke mutabiq: trust strip, 6 services, CTA band, floating WhatsApp, hamburger, SEO, privacy page.
6. WhatsApp number `03137666309` lagaya.
7. Hero layout aur profile card theek kiya.
8. Payload CMS jora (sab content admin se edit), content khud seed hota hai.
9. Admin panel ka design (8 screens) banaya, phir asli admin par skin lagai.
10. Mobile preview app (`/preview`).
11. CMS ki hifazat aur validation, version history, live preview, backup script.
12. Email aur GitHub contact mein jode.
13. GitHub par push, poora README.
14. Hostinger deploy: env variables, build ke 3 masle theek kiye.
15. LinkedIn cover ke words, phir Canva mein LinkedIn banner.
