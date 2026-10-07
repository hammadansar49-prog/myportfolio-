function Group({ items, outline, hidden }: { items: string[]; outline?: boolean; hidden?: boolean }) {
  return (
    <div className="marq-group" aria-hidden={hidden || undefined}>
      {items.map((s) => (
        <span className={outline ? "marq-item outline" : "marq-item"} key={s}>
          {s}
          <i />
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: string[] }) {
  const half = Math.floor(items.length / 2);
  const second = [...items.slice(half), ...items.slice(0, half)];
  return (
    <div className="marq" aria-label="Skills">
      <div className="marq-track">
        <Group items={items} />
        <Group items={items} hidden />
      </div>
      <div className="marq-track rev">
        <Group items={second} outline />
        <Group items={second} outline hidden />
      </div>
    </div>
  );
}
