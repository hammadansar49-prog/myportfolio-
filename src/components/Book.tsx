"use client";

import { useState } from "react";
import { days, times, topics, waLink, type SiteContent } from "@/lib/site";

function Group({
  id,
  label,
  items,
  value,
  onPick,
}: {
  id: string;
  label: string;
  items: string[];
  value: string;
  onPick: (v: string) => void;
}) {
  return (
    <div className="book-group">
      <span id={id}>{label}</span>
      <div className="pills" role="group" aria-labelledby={id}>
        {items.map((it) => (
          <button
            key={it}
            type="button"
            className="pill"
            aria-pressed={value === it}
            onClick={() => onPick(it)}
          >
            {it}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Book({ site }: { site: SiteContent }) {
  const [day, setDay] = useState(days[0]);
  const [time, setTime] = useState(times[0]);
  const [topic, setTopic] = useState(topics[0]);

  const message = `Hi ${site.brandName.split(" ")[0]}, I would like to book a meeting on ${day} at ${time} about: ${topic}.`;
  const hasEmail = site.email && !site.email.includes("[");

  return (
    <section id="book" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">Contact</span>
        <h2 className="h2" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>{site.bookHeading}</h2>
        <p className="sub">{site.bookSubtext}</p>
      </div>

      <div className="book">
        <div className="card book-form" style={{ borderRadius: 28 }}>
          <Group id="lbl-day" label="1. Choose a day" items={days} value={day} onPick={setDay} />
          <Group id="lbl-time" label="2. Choose a time" items={times} value={time} onPick={setTime} />
          <Group id="lbl-topic" label="3. What is it about?" items={topics} value={topic} onPick={setTopic} />
          <div className="book-go">
            <a
              href={waLink(site.phone, message)}
              className="btn btn-lime btn-lg"
              style={{ minHeight: 52 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request this slot on WhatsApp
            </a>
            <span>
              {day} at {time} · {topic}
            </span>
          </div>
        </div>

        <div className="book-side">
          <h3>Prefer to message?</h3>
          <p>WhatsApp is the fastest way to reach me.</p>
          <div>
            <a href={waLink(site.phone)} target="_blank" rel="noopener noreferrer">WhatsApp: {site.phoneLabel}</a>
            {hasEmail && <a href={`mailto:${site.email}`}>Email: {site.email}</a>}
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub: {site.github.replace(/\/+$/, "").split("/").pop()}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
