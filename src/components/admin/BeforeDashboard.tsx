import React from "react";
import Link from "next/link";

type Doc = Record<string, unknown>;

type Props = {
  payload?: {
    find: (a: Record<string, unknown>) => Promise<{ docs: Doc[]; totalDocs: number }>;
    findGlobal: (a: Record<string, unknown>) => Promise<Doc>;
  };
};

/** "Finish your portfolio" checklist shown above the dashboard collections. */
export async function BeforeDashboard({ payload }: Props) {
  if (!payload) return null;

  let data;
  try {
    data = await Promise.all([
      payload.find({ collection: "projects", limit: 100, depth: 0, pagination: false }),
      payload.find({ collection: "services", limit: 1, depth: 0 }),
      payload.find({ collection: "faqs", limit: 1, depth: 0 }),
      payload.find({ collection: "media", limit: 1, depth: 0 }),
      payload.findGlobal({ slug: "site", depth: 0 }),
    ]);
  } catch {
    return null; // never block the dashboard if a lookup fails
  }
  const [projects, services, faqs, media, site] = data;

  const needsNumbers = projects.docs.filter((p) => /\[ADD/i.test(String(p.result ?? "")));
  const mockups = projects.docs.filter((p) => p.visual && p.visual !== "image");
  const email = String(site.email ?? "");
  const noEmail = !email || email.includes("[");
  const hasPhone = Boolean(site.phone);

  const todo = [
    needsNumbers.length > 0 && {
      key: "numbers",
      title: "Add result numbers to your projects",
      sub: `${needsNumbers.length} project${needsNumbers.length > 1 ? "s still have" : " still has"} [ADD: ...] text in the Result`,
      href: "/admin/collections/projects",
      cta: "Projects",
    },
    noEmail && {
      key: "email",
      title: "Add your email address",
      sub: "The Contact section shows a placeholder until you add it",
      href: "/admin/globals/site",
      cta: "Site settings",
    },
    mockups.length > 0 && {
      key: "shots",
      title: `Add real screenshots for ${mockups.length} project${mockups.length > 1 ? "s" : ""}`,
      sub: mockups.map((p) => String(p.name)).join(", ") + " use illustrated mockups right now",
      href: "/admin/collections/projects",
      cta: "Projects",
    },
  ].filter(Boolean) as { key: string; title: string; sub: string; href: string; cta: string }[];

  return (
    <div className="pf-dash">
      <div className="pf-dash-head">
        <div>
          <span className="pf-eyebrow">ADMIN / DASHBOARD</span>
          <h1>Welcome back, Hammad</h1>
        </div>
        <div className="pf-actions">
          <Link className="pf-btn" href="/admin/globals/site">Site settings</Link>
          <a className="pf-btn" href="/preview" target="_blank" rel="noopener noreferrer">Mobile preview ↗</a>
          <a className="pf-btn" href="/" target="_blank" rel="noopener noreferrer">View live site ↗</a>
        </div>
      </div>

      <div className="pf-stats">
        {[
          ["Projects", projects.totalDocs],
          ["Services", services.totalDocs],
          ["FAQs", faqs.totalDocs],
          ["Images", media.totalDocs],
        ].map(([label, n]) => (
          <div className="pf-stat" key={String(label)}>
            <span className="pf-eyebrow">{String(label).toUpperCase()}</span>
            <b>{String(n)}</b>
          </div>
        ))}
      </div>

      <section className="pf-todo">
        <div className="pf-todo-head">
          <h2>Finish your portfolio</h2>
          <span className="pf-pill">{todo.length === 0 ? "All done" : `${todo.length} to do`}</span>
        </div>
        {todo.map((t) => (
          <a className="pf-todo-row" href={t.href} key={t.key}>
            <span className="pf-circle" />
            <span className="pf-todo-text">
              <b>{t.title}</b>
              <small>{t.sub}</small>
            </span>
            <span className="pf-todo-cta">{t.cta} →</span>
          </a>
        ))}
        {hasPhone && (
          <div className="pf-todo-row pf-done">
            <span className="pf-circle pf-circle--done">✓</span>
            <span className="pf-todo-text">
              <b>WhatsApp number set</b>
              <small>Used by every WhatsApp button on the site</small>
            </span>
          </div>
        )}
      </section>
    </div>
  );
}

export default BeforeDashboard;
