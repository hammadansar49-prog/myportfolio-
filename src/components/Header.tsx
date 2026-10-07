"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#book", label: "Contact" },
];

export default function Header({
  name,
  photoUrl,
  cta,
}: {
  name: string;
  photoUrl: string;
  cta: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-in">
        <a href="#top" className="brand">
          <span className="avatar">
            <Image src={photoUrl} alt={name} width={60} height={75} priority unoptimized />
          </span>
          <span className="brand-name">{name}</span>
        </a>

        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nl">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a href="#book" className="btn btn-lime btn-nav">{cta}</a>
          <button
            type="button"
            className="burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
