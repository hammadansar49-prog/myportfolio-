import type { Service } from "@/lib/content";

const paths: Record<string, React.ReactNode> = {
  site: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </>
  ),
  billing: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19M6 15h4" />
    </>
  ),
  fix: (
    <path d="M14.5 6.5a4 4 0 0 0-5.2 5.2L3.5 17.5a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.2-5.2l-2.7 2.7-2.3-.5-.5-2.3 2.7-2.7z" />
  ),
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v4" />,
  auto: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
};

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">Services</span>
        <h2 className="h2">What I can do for you.</h2>
        <p className="sub">Six ways I help businesses and individuals. Not sure which fits? Just ask.</p>
      </div>
      <div className="row">
        {services.map((s) => (
          <div className="card svc" key={s.title}>
            <span className="ico">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {paths[s.icon] ?? paths.site}
              </svg>
            </span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            {s.best && <small>Best for: {s.best}</small>}
            <a href="#book" className="svc-link">Get a quote →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
