import type { CSSProperties } from "react";

const dots = (
  <>
    <i style={{ background: "#ff5f57" }} />
    <i style={{ background: "#febc2e" }} />
    <i style={{ background: "#28c840" }} />
  </>
);

const row: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 10,
  padding: "8px 0",
  fontSize: 12,
};

export function KarobarMock() {
  const line = (a: string, b: string, c: string, last = false, head = false) => (
    <div
      style={{
        ...row,
        borderBottom: last ? "none" : "1px solid #e3e8f8",
        color: head ? "#14213d" : "#5b6480",
        fontWeight: head ? 700 : 400,
      }}
    >
      <span>{a}</span>
      <span>{b}</span>
      <span>{c}</span>
    </div>
  );
  return (
    <div className="shot" style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}>
      <div className="shot-bar">
        {dots}
        <span>KAROBAR · desktop app (illustrative)</span>
      </div>
      <div style={{ aspectRatio: "800 / 504", background: "#f0f4ff", display: "flex" }}>
        <div
          style={{
            width: "22%",
            background: "#2f4bc4",
            padding: "14px 10px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            color: "#dbe4ff",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, color: "#fff" }}>
            KAROBAR
          </span>
          <span style={{ color: "#fff" }}>Billing</span>
          <span>Stock</span>
          <span>Customers</span>
          <span>Reports</span>
          <span>Branches</span>
        </div>
        <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: "#14213d" }}>New sale · Branch 1</span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                padding: "3px 8px",
                borderRadius: 6,
                background: "#fff",
                color: "#2f4bc4",
              }}
            >
              Barcode ready
            </span>
          </div>
          <div style={{ background: "#fff", borderRadius: 8, padding: "4px 12px" }}>
            {line("Item", "Qty × Price", "Total", false, true)}
            {line("[Item]", "2 × [Rs.]", "[Rs.]")}
            {line("[Item]", "1 × [Rs.]", "[Rs.]")}
            {line("[Item]", "3 × [Rs.]", "[Rs.]", true)}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginTop: "auto" }}>
            <span style={{ fontSize: 12, color: "#5b6480" }}>Cash · Bank · QR · Card</span>
            <span
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                background: "#2f4bc4",
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              Print invoice
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotesMock() {
  const note = (t: string, d: string) => (
    <div
      key={t}
      style={{
        padding: "10px 12px",
        borderRadius: 12,
        background: "#164656",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{t}</span>
      <span style={{ fontSize: 10, color: "#8fd3e6" }}>{d}</span>
    </div>
  );
  return (
    <div
      className="shot"
      style={{
        width: "min(260px, 100%)",
        borderRadius: 30,
        background: "#0b2530",
        border: "6px solid #05161d",
        padding: "18px 14px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 16, color: "#fff" }}>Notes</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#8fd3e6" }}>AI ready</span>
      </div>
      <div style={{ padding: "8px 12px", borderRadius: 10, background: "#123846", fontSize: 11, color: "#8fb8c4" }}>
        Search notes…
      </div>
      {note("Text note", "Bold, italic, colours, tags")}
      {note("Audio note", "Record and play back")}
      {note("Sketch note", "Draw and attach images")}
      <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
        <span style={{ flex: 1, textAlign: "center", padding: "8px 4px", borderRadius: 10, background: "#8fd3e6", color: "#05161d", fontSize: 10, fontWeight: 700 }}>
          Summarize
        </span>
        <span style={{ flex: 1, textAlign: "center", padding: "8px 4px", borderRadius: 10, background: "#123846", color: "#8fd3e6", fontSize: 10, fontWeight: 700 }}>
          Translate
        </span>
      </div>
    </div>
  );
}
