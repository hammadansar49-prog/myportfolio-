export default function Process({
  heading,
  steps,
  note,
}: {
  heading: string;
  steps: { title: string; description: string }[];
  note: string;
}) {
  return (
    <section id="process" className="sec rv">
      <div className="sec-head">
        <span className="eyebrow">Process</span>
        <h2 className="h2">{heading}</h2>
      </div>
      <div className="row">
        {steps.map((p, i) => (
          <div className="card tile" key={p.title}>
            <span className="big">{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
      {note && <p className="note">{note}</p>}
    </section>
  );
}
