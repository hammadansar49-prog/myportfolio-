export const PHONE = "923137666309";
export const PHONE_LABEL = "+92 313 7666309";
export const GITHUB = "https://github.com/hammadansar49-prog";
export const EMAIL = "hammadansar49@gmail.com";
export const EMAIL_LINK = "mailto:hammadansar49@gmail.com";

export const waLink = (phone: string, text?: string) =>
  `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type Visual = "image" | "karobar" | "notes";

export type Project = {
  id: string;
  name: string;
  type: string;
  stack: string;
  visual: Visual;
  image?: { src: string; width: number; height: number; url: string };
  bg: string;
  problem: string;
  role: string;
  result: string;
  link: string;
  linkText: string;
};

export const projects: Project[] = [
  {
    id: "ott",
    name: "THEOTTDEALS",
    type: "Online store",
    stack: "Online store · SEO · WhatsApp ordering",
    visual: "image",
    image: { src: "/images/theottdeals.jpg", width: 800, height: 504, url: "theottdeals.com" },
    bg: "#121212",
    problem:
      "Selling streaming, AI, design and VPN subscriptions online needs trust, easy contact, and a store people can find for each brand name they search.",
    role: "Founder and sole developer: design, build, search setup and day-to-day running.",
    result:
      "Live at theottdeals.com and serving customers worldwide through WhatsApp. [ADD: orders or visitors per month]",
    link: "https://theottdeals.com",
    linkText: "Visit theottdeals.com",
  },
  {
    id: "iptv",
    name: "MY IPTV",
    type: "App + website",
    stack: "Android · Android TV · Windows · Web",
    visual: "image",
    image: { src: "/images/myiptv.jpg", width: 800, height: 506, url: "myiptv.theottdeals.com" },
    bg: "#08090c",
    problem:
      "Customers wanted one simple IPTV player for phone, TV box and PC, with a way to try it before paying.",
    role: "Built the app for Android 7+, Android TV and Windows 10/11 with a guide and catch-up, a licence-key system with a 24-hour trial, and its website with pricing, FAQ and downloads.",
    result:
      "Released on three platforms; version 2.0.1 released in October 2026. [ADD: active users or sales]",
    link: "https://myiptv.theottdeals.com",
    linkText: "Visit myiptv.theottdeals.com",
  },
  {
    id: "kar",
    name: "KAROBAR POS",
    type: "Desktop software",
    stack: "Electron · Firebase · Windows 7–11",
    visual: "karobar",
    bg: "#dbe4ff",
    problem:
      "Shops with one or many branches need fast billing, stock control and honest profit numbers, and must keep working when the internet drops.",
    role: "Designed and built the full desktop POS: barcode scanning, multi-branch real-time sync, ledgers, inventory, invoices with logo, barcode and QR, thermal printing, profit reports, offline mode.",
    result: "One-click Windows installer that runs from Windows 7 to 11. [ADD: shops using it]",
    link: "https://github.com/hammadansar49-prog/Blue-Berry-studios",
    linkText: "View on GitHub",
  },
  {
    id: "yt",
    name: "Ahmad YT Tutorial (PapaWeb)",
    type: "Channel website",
    stack: "Next.js · Firebase · Cloudinary · Web Push",
    visual: "image",
    image: {
      src: "/images/ahmadyttutorial.jpg",
      width: 800,
      height: 598,
      url: "ahmadyttutorial.com",
    },
    bg: "#0b1630",
    problem:
      "A YouTube channel teaching people to make videos with AI needed a home where every tutorial carries the exact prompt behind it, free to copy, and where the owner can publish without touching code.",
    role: "Built the whole site: tutorial pages with the YouTube video and a one-click Copy Code prompt box, search and categories, comments with moderation, articles, legal pages and social links, plus a private admin panel, push notifications and visitor analytics.",
    result:
      "Live at ahmadyttutorial.com with tutorials, articles and the channel social links published. The owner adds new videos himself through the admin panel. [ADD: monthly visitors]",
    link: "https://ahmadyttutorial.com",
    linkText: "Visit ahmadyttutorial.com",
  },
  {
    id: "notes",
    name: "Modern AI Notes",
    type: "Mobile app",
    stack: "Flutter · Riverpod · Drift · Firebase · Groq",
    visual: "notes",
    bg: "#0e3a47",
    problem:
      "Notes apps rarely combine text, audio, sketches and images with AI help, offline use and privacy.",
    role: "Built the Flutter app: AI summaries, grammar fix, translation and chat, offline-first storage with cloud sync, reminders and biometric lock.",
    result: "A complete cross-platform app, rebuilt from native Android into Flutter.",
    link: "https://github.com/hammadansar49-prog/Modern-Ai-Notes-",
    linkText: "View on GitHub",
  },
];

export const marqueeSkills = [
  "Backend", "Frontend", "PHP", "Laravel", "JavaScript", "React.js", "Node.js", "MySQL",
  "REST APIs", "WordPress", "Payment Gateways", "Admin Panels", "Subscriptions", "SaaS",
  "IPTV", "OTT Platforms", "Debugging", "Web Security", "Linux", "cPanel",
];

export type SkillGroup = {
  icon: "server" | "window" | "layers" | "shield";
  title: string;
  desc: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    icon: "server",
    title: "Backend",
    desc: "The server side: logic, data and integrations.",
    items: ["PHP", "Laravel", "Node.js", "MySQL", "REST APIs", "API Integration"],
  },
  {
    icon: "window",
    title: "Frontend",
    desc: "What visitors see and use, on every screen size.",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: "layers",
    title: "Platforms and business systems",
    desc: "Where I solve real business problems.",
    items: [
      "WordPress",
      "SaaS",
      "IPTV",
      "OTT Platforms",
      "Subscription Management",
      "Payment Gateways",
      "Admin Panels",
    ],
  },
  {
    icon: "shield",
    title: "Quality and operations",
    desc: "Keeping sites fast, safe and running.",
    items: [
      "Debugging",
      "Troubleshooting",
      "Website Optimization",
      "Web Security",
      "Automation",
      "Git",
      "GitHub",
      "Linux",
      "cPanel",
    ],
  },
];

export const process = [
  { n: "1", t: "We talk", d: "Book a meeting and tell me what you need or what is broken." },
  { n: "2", t: "Scope and price", d: "You get a written scope, a timeline and a price before any work starts." },
  { n: "3", t: "Build in steps", d: "You see working progress along the way and can change direction early." },
  { n: "4", t: "Launch and support", d: "Deployed, handed over, and fixed if something breaks after." },
];

export const faqs = [
  {
    q: "How long does a project take?",
    a: "It depends on the project. I give you a timeline in writing before I start.",
  },
  {
    q: "How does payment work?",
    a: "Payment is milestone-based. We agree the milestones and amounts before any work starts.",
  },
  {
    q: "Do you support the project after launch?",
    a: "Yes. I support what I build after launch and fix bugs. The details are agreed in the scope.",
  },
  {
    q: "Do I get the source code?",
    a: "Yes. You get the source code after the final payment.",
  },
  {
    q: "Can you fix my half-built or old project?",
    a: "Yes. I audit it first, tell you what is wrong and what it will take, then repair or continue it.",
  },
  {
    q: "Who do you work with?",
    a: "Individuals, startups and companies, remotely.",
  },
];

export const services = [
  {
    icon: "site",
    title: "Custom Website Development",
    desc: "Business sites, landing pages and portfolios that load fast and look right on every screen.",
    best: "Shop owners, agencies, new businesses",
  },
  {
    icon: "app",
    title: "Web App and Dashboard Development",
    desc: "Admin panels, CRMs and internal tools that replace spreadsheets and manual work.",
    best: "Startups, teams, growing companies",
  },
  {
    icon: "billing",
    title: "Subscription and Billing Platforms",
    desc: "Plans, renewals, customer accounts and payment flows for subscription businesses.",
    best: "Subscription sellers, resellers, OTT and IPTV businesses",
  },
  {
    icon: "fix",
    title: "Bug Fixing and Project Rescue",
    desc: "A slow site, a broken feature or an unfinished project. I find the cause and fix it.",
    best: "Anyone stuck with code that does not work",
  },
  {
    icon: "plug",
    title: "API, Payment and Third-party Integrations",
    desc: "Payment gateways, WhatsApp, email and external APIs connected to your system.",
    best: "Businesses that need systems to talk to each other",
  },
  {
    icon: "auto",
    title: "Automation",
    desc: "Repetitive manual work replaced by software that runs on its own.",
    best: "Owners and teams losing hours to routine tasks",
  },
];

export const trust = [
  "Built and run my own live platform",
  "Direct communication, no middlemen",
  "Clear scope and timeline before I start",
  "Post-launch support included",
];

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
export const times = ["11:00", "13:00", "15:00", "17:00", "20:00"];
export const topics = ["New website", "Fix my project", "Mobile app", "Just a chat"];


/** Default text for everything the CMS "Site settings" controls. Used as fallback and as the first seed. */
export const defaultSite = {
  brandName: "Hammad Ansar",
  role: "Web and software developer",
  available: "Available for new projects",
  headlinePre: "I build websites, web apps and software that",
  headlineAccent: "businesses run on.",
  subline:
    "Got a bug, a half-built system or a new idea? I design, build and fix it, then support it after launch.",
  founderLine: "Founder of TheOttDeals · Full-Stack Developer",
  primaryCta: "Start a Project",
  secondaryCta: "See My Work",
  facts: [
    { label: "Based in", value: "Pakistan, working remotely worldwide" },
    { label: "Languages", value: "English, Urdu" },
    { label: "Role", value: "Founder of TheOttDeals" },
    { label: "Replies", value: "Within 24 hours" },
    { label: "Focus", value: "Websites, web apps, billing platforms" },
  ],
  profileCta: "Chat on WhatsApp",
  stats: [
    { value: "5", label: "projects built" },
    { value: "4", label: "platforms: web, Android, Windows, TV" },
  ],
  trust,
  marquee: marqueeSkills,
  aboutHeadline: "One developer, start to finish.",
  aboutParagraphs: [
    "I'm Hammad Ansar, a web and software developer. I also own THEOTTDEALS, so I build with the same pressure my clients have: real customers, real support, real deadlines.",
    "Most of my work is for businesses that sell online: stores, subscription services and streaming platforms. I build the part customers see, the admin panel the owner runs, and the payment and renewal logic in between.",
    "I work backend to frontend: PHP, Laravel, Node.js, MySQL and REST APIs on the server; JavaScript, React, Tailwind and WordPress on the front; payment gateways, admin panels and subscription management in between. Debugging, speeding up and securing existing sites is a big part of my work.",
  ],
  aboutTags: [
    "Next.js", "React", "TypeScript", "PHP", "Laravel", "Node.js", "MySQL", "WordPress",
    "Tailwind", "REST APIs", "Payment Gateways", "IPTV", "OTT",
  ],
  processHeading: "How we work together.",
  processSteps: process.map((p) => ({ title: p.t, description: p.d })),
  processNote: "No hidden charges. Everything is agreed in writing first.",
  ctaHeading: "Have a project in mind? Let's talk.",
  bookHeading: "Start a project or book a meeting.",
  bookSubtext:
    "Pick a day, a time and a topic. WhatsApp opens with your request ready to send. I reply within 24 hours.",
  footerTagline: "Websites, web apps and software that businesses run on.",
  phone: PHONE,
  phoneLabel: PHONE_LABEL,
  email: EMAIL,
  github: GITHUB,
  floatMessage: "Hi Hammad, I found your portfolio.",
  ctaMessage: "Hi Hammad, I would like to talk about a project.",
  seoTitle: "Hammad Ansar | Full-Stack Web & Software Developer",
  seoDescription:
    "Full-stack web and software developer. I build websites, web apps, admin panels, subscription and billing platforms, and fix stuck projects. Founder of TheOttDeals.",
};

export type SiteContent = typeof defaultSite & { photoUrl: string };
