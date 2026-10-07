"use client";

import { useState } from "react";

export default function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">Questions people ask.</h2>
      </div>
      <div className="faq">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className="card faq-item" key={f.q}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <i aria-hidden="true">+</i>
              </button>
              {isOpen && <p className="faq-a">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
