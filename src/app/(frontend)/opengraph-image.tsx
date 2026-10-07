import { ImageResponse } from "next/og";

export const alt = "Hammad Ansar | Full-Stack Web and Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c0c10",
          color: "#f2f2ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: "#a3a3ad" }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#f2f2ee" }} />
          Available for new projects
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            Hammad Ansar
          </div>
          <div style={{ fontSize: 44, color: "#d4d4d8", lineHeight: 1.25 }}>
            Full-Stack Web and Software Developer
          </div>
          <div style={{ fontSize: 30, color: "#a3a3ad" }}>
            Websites, web apps and software that businesses run on.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a3a3ad" }}>Founder of TheOttDeals</div>
      </div>
    ),
    { ...size },
  );
}
