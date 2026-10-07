import type { SkillGroup } from "@/lib/site";

const icons: Record<SkillGroup["icon"], React.ReactNode> = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
};

export default function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">Skills</span>
        <h2 className="h2">The tools I work with.</h2>
        <p className="sub">Grouped by what they are used for, so you can see where I fit your project.</p>
      </div>
      <div className="row">
        {groups.map((g) => (
          <div className="card sk" key={g.title}>
            <div className="sk-top">
              <span className="ico">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[g.icon]}
                </svg>
              </span>
              <span className="count">{String(g.items.length).padStart(2, "0")} skills</span>
            </div>
            <div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
            </div>
            <hr />
            <div className="chips">
              {g.items.map((i) => (
                <span className="chip" key={i}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
