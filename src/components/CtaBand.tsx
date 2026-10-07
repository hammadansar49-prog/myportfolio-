import { waLink } from "@/lib/site";

export default function CtaBand({
  heading,
  phone,
  message,
  primary,
}: {
  heading: string;
  phone: string;
  message: string;
  primary: string;
}) {
  return (
    <section className="cta-band rv" aria-label="Start a project">
      <h2>{heading}</h2>
      <div className="cta-row">
        <a href="#book" className="btn btn-dark btn-lg">{primary}</a>
        <a
          href={waLink(phone, message)}
          className="btn btn-outline-dark btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Me
        </a>
      </div>
    </section>
  );
}
