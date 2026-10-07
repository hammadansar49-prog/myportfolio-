import Image from "next/image";
import { waLink, type SiteContent } from "@/lib/site";

export default function Hero({ site }: { site: SiteContent }) {
  return (
    <section id="top" className="hero">
      <div className="card hero-main enter d1">
        <span className="status">
          <span className="dot" />
          {site.available}
        </span>
        <div className="hero-copy">
          <h1 className="h1">
            {site.headlinePre} <span className="accent">{site.headlineAccent}</span>
          </h1>
          <p className="hero-sub">{site.subline}</p>
        </div>
        <div className="cta-row">
          <a href="#book" className="btn btn-lime btn-lg">{site.primaryCta}</a>
          <a href="#work" className="btn btn-ghost btn-lg">{site.secondaryCta}</a>
        </div>
        <p className="hero-line">{site.founderLine}</p>
      </div>

      <div className="hero-side">
        <div className="profile enter d2">
          <div className="profile-top">
            <Image
              className="profile-photo"
              src={site.photoUrl}
              alt={site.brandName}
              width={168}
              height={168}
              priority
              unoptimized
            />
            <div>
              <div className="profile-name">{site.brandName}</div>
              <div className="profile-role">{site.role}</div>
            </div>
          </div>
          <dl className="facts">
            {site.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={waLink(site.phone, site.ctaMessage)}
            className="btn btn-dark profile-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.profileCta}
          </a>
        </div>
        <div className="stats">
          {site.stats.map((s, i) => (
            <div className={`card stat enter d${i + 3}`} key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
