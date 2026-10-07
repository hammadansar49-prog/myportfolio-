"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/site";
import { KarobarMock, NotesMock } from "./Mocks";

export default function Work({ projects }: { projects: Project[] }) {
  const [id, setId] = useState(projects[0]?.id);
  const cur = projects.find((p) => p.id === id) ?? projects[0];
  if (!cur) return null;

  return (
    <section id="work" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">Selected work</span>
        <h2 className="h2">What I built, and what came of it.</h2>
        <p className="sub">Pick a project to read the problem, my role and the result.</p>
      </div>

      <div className="work">
        <div className="tabs" role="tablist" aria-label="Projects">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              className="tab"
              aria-selected={p.id === cur.id}
              onClick={() => setId(p.id)}
            >
              <b>{p.name}</b>
              <span>{p.type}</span>
            </button>
          ))}
        </div>

        <div className="detail">
          {/* key remounts the panels so the swap animation replays */}
          <div className="detail-visual" key={`v-${cur.id}`} style={{ background: cur.bg }}>
            {cur.visual === "image" && cur.image && (
              <div className="shot">
                <div className="shot-bar">
                  <i style={{ background: "#ff5f57" }} />
                  <i style={{ background: "#febc2e" }} />
                  <i style={{ background: "#28c840" }} />
                  <span>{cur.image.url}</span>
                </div>
                <Image
                  src={cur.image.src}
                  alt={`${cur.name} home page`}
                  width={cur.image.width}
                  height={cur.image.height}
                  unoptimized
                />
              </div>
            )}
            {cur.visual === "karobar" && <KarobarMock />}
            {cur.visual === "notes" && <NotesMock />}
          </div>

          <div className="detail-copy" key={`c-${cur.id}`}>
            <div className="field">
              <h3>{cur.name}</h3>
              <span className="mono-dim">{cur.stack}</span>
            </div>
            <div className="field">
              <small>Problem</small>
              <p>{cur.problem}</p>
            </div>
            <div className="field">
              <small>My role</small>
              <p>{cur.role}</p>
            </div>
            <div className="field">
              <small>Result</small>
              <p className="strong">{cur.result}</p>
            </div>
            <a href={cur.link} className="link-out" target="_blank" rel="noopener noreferrer">
              {cur.linkText} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
