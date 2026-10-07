import Link from "next/link";
import { waLink, type SiteContent } from "@/lib/site";

export default function Footer({ site }: { site: SiteContent }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-name">{site.brandName}</div>
          <p>{site.footerTagline}</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#book">Contact</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={waLink(site.phone)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <Link href="/privacy">Privacy Policy</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {site.brandName} · {site.role}</span>
        <a href="#top" className="nl">Back to top ↑</a>
      </div>
    </footer>
  );
}
