"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { SiteContent } from "@/lib/site";

export default function About({ site }: { site: SiteContent }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <section id="about" className="about rv">
        <div className="card about-card" style={{ borderRadius: 28 }}>
          <button
            type="button"
            className="photo"
            onClick={() => setOpen(true)}
            aria-label="View my photo larger"
          >
            <Image src={site.photoUrl} alt={`${site.brandName}, ${site.role}`} width={560} height={700} unoptimized />
          </button>

          <div className="about-text">
            <span className="eyebrow">About</span>
            <h2 className="h2">{site.aboutHeadline}</h2>
            {site.aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="chips">
              {site.aboutTags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="lb" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Photo">
          <Image src={site.photoUrl} alt={`${site.brandName}, ${site.role}`} width={1122} height={1402} priority unoptimized />
          <button type="button" aria-label="Close photo" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
