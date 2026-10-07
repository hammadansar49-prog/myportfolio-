import "server-only";

import path from "path";
import type { Payload } from "payload";
import {
  defaultSite,
  projects,
  services,
  skillGroups,
  faqs,
} from "./site";

let running: Promise<void> | null = null;

/** Fills an empty CMS with the portfolio content that ships with the project (runs once). */
export function seedIfEmpty(payload: Payload): Promise<void> {
  if (!running) {
    running = doSeed(payload).catch((e) => {
      running = null;
      throw e;
    });
  }
  return running;
}

async function doSeed(payload: Payload) {
  const site = (await payload.findGlobal({ slug: "site", depth: 0 })) as unknown as Record<string, unknown>;
  if (site.seeded) return;

  const pub = (f: string) => path.join(process.cwd(), "public", "images", f);
  const upload = async (file: string, alt: string) => {
    const doc = await payload.create({ collection: "media", data: { alt }, filePath: pub(file) });
    return doc.id;
  };

  const photo = await upload("me.webp", "Hammad Ansar");
  const media: Record<string, number | string> = {
    ott: await upload("theottdeals.jpg", "THEOTTDEALS storefront home page"),
    iptv: await upload("myiptv.jpg", "MY IPTV website home page"),
    yt: await upload("ahmadyttutorial.jpg", "Ahmad YT Tutorial home page"),
  };

  for (const [i, p] of projects.entries()) {
    await payload.create({
      collection: "projects",
      data: {
        name: p.name,
        type: p.type,
        stack: p.stack,
        order: (i + 1) * 10,
        published: true,
        visual: p.visual,
        image: media[p.id] ?? undefined,
        imageLabel: p.image?.url,
        bg: p.bg,
        problem: p.problem,
        role: p.role,
        result: p.result,
        link: p.link,
        linkText: p.linkText,
      } as never,
    });
  }

  for (const [i, s] of services.entries()) {
    await payload.create({
      collection: "services",
      data: { title: s.title, description: s.desc, best: s.best, icon: s.icon, order: (i + 1) * 10 } as never,
    });
  }

  for (const [i, g] of skillGroups.entries()) {
    await payload.create({
      collection: "skill-groups",
      data: {
        title: g.title,
        description: g.desc,
        icon: g.icon,
        order: (i + 1) * 10,
        items: g.items.map((name) => ({ name })),
      } as never,
    });
  }

  for (const [i, f] of faqs.entries()) {
    await payload.create({
      collection: "faqs",
      data: { question: f.q, answer: f.a, order: (i + 1) * 10 } as never,
    });
  }

  const d = defaultSite;
  await payload.updateGlobal({
    slug: "site",
    data: {
      seeded: true,
      brandName: d.brandName,
      role: d.role,
      available: d.available,
      headlinePre: d.headlinePre,
      headlineAccent: d.headlineAccent,
      subline: d.subline,
      founderLine: d.founderLine,
      primaryCta: d.primaryCta,
      secondaryCta: d.secondaryCta,
      photo,
      facts: d.facts,
      profileCta: d.profileCta,
      stats: d.stats,
      trust: d.trust.map((point) => ({ point })),
      marquee: d.marquee.map((name) => ({ name })),
      aboutHeadline: d.aboutHeadline,
      aboutParagraphs: d.aboutParagraphs.map((text) => ({ text })),
      aboutTags: d.aboutTags.map((tag) => ({ tag })),
      processHeading: d.processHeading,
      processSteps: d.processSteps,
      processNote: d.processNote,
      ctaHeading: d.ctaHeading,
      bookHeading: d.bookHeading,
      bookSubtext: d.bookSubtext,
      footerTagline: d.footerTagline,
      phone: d.phone,
      phoneLabel: d.phoneLabel,
      email: d.email,
      github: d.github,
      floatMessage: d.floatMessage,
      ctaMessage: d.ctaMessage,
      seoTitle: d.seoTitle,
      seoDescription: d.seoDescription,
    } as never,
  });
}
