import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hammad Ansar",
  description: "How this portfolio website handles your information.",
};

export default function Privacy() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← Back to portfolio</Link>
      <h1>Privacy Policy</h1>
      <p className="legal-date">Last updated: 2026</p>

      <h2>What this site collects</h2>
      <p>
        This website does not have a form that stores your details. When you use a button such as
        &ldquo;Request this slot on WhatsApp&rdquo; or &ldquo;WhatsApp Me&rdquo;, your device opens
        WhatsApp with a message already written. Nothing is sent until you press send in WhatsApp.
      </p>

      <h2>Messages you send me</h2>
      <p>
        If you message me on WhatsApp or by email, I use what you send only to reply to you and to
        work on your project. I do not sell or share it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site does not set tracking cookies. If I add analytics later, this page will be
        updated to say which tool is used and what it records.
      </p>

      <h2>Third-party links</h2>
      <p>
        Links to WhatsApp, GitHub and my project websites lead to other services with their own
        privacy policies.
      </p>

      <h2>Contact</h2>
      <p>Questions about this policy? Message me on WhatsApp using the button on the home page.</p>
    </main>
  );
}
