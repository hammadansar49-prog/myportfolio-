import "server-only";

import { getPayload } from "payload";
import config from "@payload-config";
import {
  defaultSite,
  projects as defaultProjects,
  services as defaultServices,
  skillGroups as defaultSkillGroups,
  faqs as defaultFaqs,
  type Project,
  type SiteContent,
  type SkillGroup,
} from "./site";
import { seedIfEmpty } from "./seed";

export type Service = { icon: string; title: string; desc: string; best: string };
export type Faq = { q: string; a: string };

export type Content = {
  site: SiteContent;
  projects: Project[];
  services: Service[];
  skillGroups: SkillGroup[];
  faqs: Faq[];
};

const DEFAULT_PHOTO = "/images/me.webp";

type Doc = Record<string, unknown>;
const str = (v: unknown, fallback: string) => (typeof v === "string" && v.trim() ? v : fallback);
const list = <T>(v: unknown, map: (x: Doc) => T | null, fallback: T[]): T[] => {
  if (!Array.isArray(v) || v.length === 0) return fallback;
  const out = v.map((x) => map(x as Doc)).filter((x): x is T => x !== null);
  return out.length ? out : fallback;
};
const mediaUrl = (m: unknown): string | null =>
  m && typeof m === "object" && typeof (m as Doc).url === "string" ? ((m as Doc).url as string) : null;

export const fallbackContent: Content = {
  site: { ...defaultSite, photoUrl: DEFAULT_PHOTO },
  projects: defaultProjects,
  services: defaultServices.map((s) => ({ icon: s.icon, title: s.title, desc: s.desc, best: s.best })),
  skillGroups: defaultSkillGroups,
  faqs: defaultFaqs,
};

export async function getContent(): Promise<Content> {
  try {
    const payload = await getPayload({ config });
    await seedIfEmpty(payload);

    const [site, projects, services, groups, faqs] = await Promise.all([
      payload.findGlobal({ slug: "site", depth: 1 }),
      payload.find({ collection: "projects", depth: 1, limit: 100, sort: "order", pagination: false }),
      payload.find({ collection: "services", limit: 100, sort: "order", pagination: false }),
      payload.find({ collection: "skill-groups", limit: 100, sort: "order", pagination: false }),
      payload.find({ collection: "faqs", limit: 100, sort: "order", pagination: false }),
    ]);

    const s = site as unknown as Doc;
    const d = defaultSite;

    const content: Content = {
      site: {
        brandName: str(s.brandName, d.brandName),
        role: str(s.role, d.role),
        available: str(s.available, d.available),
        headlinePre: str(s.headlinePre, d.headlinePre),
        headlineAccent: str(s.headlineAccent, d.headlineAccent),
        subline: str(s.subline, d.subline),
        founderLine: str(s.founderLine, d.founderLine),
        primaryCta: str(s.primaryCta, d.primaryCta),
        secondaryCta: str(s.secondaryCta, d.secondaryCta),
        photoUrl: mediaUrl(s.photo) ?? DEFAULT_PHOTO,
        facts: list(s.facts, (x) => (x.label && x.value ? { label: String(x.label), value: String(x.value) } : null), d.facts),
        profileCta: str(s.profileCta, d.profileCta),
        stats: list(s.stats, (x) => (x.value && x.label ? { value: String(x.value), label: String(x.label) } : null), d.stats),
        trust: list(s.trust, (x) => (x.point ? String(x.point) : null), d.trust),
        marquee: list(s.marquee, (x) => (x.name ? String(x.name) : null), d.marquee),
        aboutHeadline: str(s.aboutHeadline, d.aboutHeadline),
        aboutParagraphs: list(s.aboutParagraphs, (x) => (x.text ? String(x.text) : null), d.aboutParagraphs),
        aboutTags: list(s.aboutTags, (x) => (x.tag ? String(x.tag) : null), d.aboutTags),
        processHeading: str(s.processHeading, d.processHeading),
        processSteps: list(
          s.processSteps,
          (x) => (x.title ? { title: String(x.title), description: String(x.description ?? "") } : null),
          d.processSteps,
        ),
        processNote: str(s.processNote, d.processNote),
        ctaHeading: str(s.ctaHeading, d.ctaHeading),
        bookHeading: str(s.bookHeading, d.bookHeading),
        bookSubtext: str(s.bookSubtext, d.bookSubtext),
        footerTagline: str(s.footerTagline, d.footerTagline),
        phone: str(s.phone, d.phone).replace(/\D/g, ""),
        phoneLabel: str(s.phoneLabel, d.phoneLabel),
        email: str(s.email, d.email),
        github: str(s.github, d.github),
        floatMessage: str(s.floatMessage, d.floatMessage),
        ctaMessage: str(s.ctaMessage, d.ctaMessage),
        seoTitle: str(s.seoTitle, d.seoTitle),
        seoDescription: str(s.seoDescription, d.seoDescription),
      },
      projects: list(
        projects.docs.filter((p) => (p as unknown as Doc).published !== false),
        (p): Project | null => {
          if (!p.name) return null;
          const visual = (["image", "karobar", "notes"].includes(String(p.visual)) ? p.visual : "image") as Project["visual"];
          const img = p.image && typeof p.image === "object" ? (p.image as Doc) : null;
          return {
            id: String(p.id),
            name: String(p.name),
            type: String(p.type ?? ""),
            stack: String(p.stack ?? ""),
            visual,
            image:
              visual === "image" && img && typeof img.url === "string"
                ? {
                    src: img.url,
                    width: Number(img.width) || 800,
                    height: Number(img.height) || 500,
                    url: String(p.imageLabel ?? ""),
                  }
                : undefined,
            bg: String(p.bg || "#121212"),
            problem: String(p.problem ?? ""),
            role: String(p.role ?? ""),
            result: String(p.result ?? ""),
            link: String(p.link ?? "#"),
            linkText: String(p.linkText ?? "Open"),
          };
        },
        defaultProjects,
      ),
      services: list(
        services.docs,
        (x) => (x.title ? { icon: String(x.icon ?? "site"), title: String(x.title), desc: String(x.description ?? ""), best: String(x.best ?? "") } : null),
        fallbackContent.services,
      ),
      skillGroups: list(
        groups.docs,
        (g): SkillGroup | null =>
          g.title
            ? {
                icon: (["server", "window", "layers", "shield"].includes(String(g.icon)) ? g.icon : "server") as SkillGroup["icon"],
                title: String(g.title),
                desc: String(g.description ?? ""),
                items: Array.isArray(g.items) ? (g.items as Doc[]).map((i) => String(i.name)).filter(Boolean) : [],
              }
            : null,
        defaultSkillGroups,
      ),
      faqs: list(faqs.docs, (f) => (f.question ? { q: String(f.question), a: String(f.answer ?? "") } : null), defaultFaqs),
    };
    return content;
  } catch (err) {
    console.error("[content] CMS unavailable, using built-in defaults:", err);
    return fallbackContent;
  }
}
