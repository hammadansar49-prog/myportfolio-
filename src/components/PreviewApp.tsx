"use client";

import { useEffect, useRef, useState } from "react";

const DEVICES = [
  { id: "iphone", name: "iPhone 15", w: 393, h: 852, phone: true },
  { id: "small", name: "Small phone", w: 360, h: 740, phone: true },
  { id: "android", name: "Android large", w: 412, h: 915, phone: true },
  { id: "tablet", name: "Tablet", w: 768, h: 1024, phone: false },
  { id: "laptop", name: "Laptop", w: 1280, h: 800, phone: false },
  { id: "desktop", name: "Desktop", w: 1440, h: 900, phone: false },
] as const;

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/privacy", label: "Privacy policy" },
];

export default function PreviewApp() {
  const [deviceId, setDeviceId] = useState<string>("iphone");
  const [landscape, setLandscape] = useState(false);
  const [path, setPath] = useState("/");
  const [nonce, setNonce] = useState(0);
  const [origin, setOrigin] = useState("");
  const stage = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const device = DEVICES.find((d) => d.id === deviceId) ?? DEVICES[0];
  const w = landscape ? device.h : device.w;
  const h = landscape ? device.w : device.h;
  const pad = device.phone ? 14 : 0;
  const frameW = w + pad * 2;
  const frameH = h + pad * 2;
  const scale = box.w
    ? Math.min(1, (box.w - 32) / frameW, (box.h - 32) / frameH)
    : 1;

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setBox({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    // Defer so the first render matches the server.
    const t = setTimeout(() => setOrigin(window.location.origin), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="pv">
      <aside className="pv-side">
        <div className="pv-brand">
          <span className="pv-logo">H</span>
          <div>
            <b>Mobile preview</b>
            <small>See the portfolio on real screen sizes</small>
          </div>
        </div>

        <div className="pv-group">
          <span className="pv-label">Device</span>
          <div className="pv-devices" role="group" aria-label="Device">
            {DEVICES.map((d) => (
              <button
                key={d.id}
                type="button"
                className="pv-dev"
                aria-pressed={d.id === deviceId}
                onClick={() => setDeviceId(d.id)}
              >
                <b>{d.name}</b>
                <span>
                  {d.w} × {d.h}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="pv-group">
          <span className="pv-label">Page</span>
          <div className="pv-pages" role="group" aria-label="Page">
            {PAGES.map((p) => (
              <button
                key={p.path}
                type="button"
                className="pv-chip"
                aria-pressed={p.path === path}
                onClick={() => setPath(p.path)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pv-group">
          <span className="pv-label">Actions</span>
          <div className="pv-actions">
            <button type="button" className="pv-btn" onClick={() => setLandscape((v) => !v)}>
              Rotate
            </button>
            <button type="button" className="pv-btn" onClick={() => setNonce((n) => n + 1)}>
              Reload
            </button>
            <a className="pv-btn" href={path} target="_blank" rel="noopener noreferrer">
              Open in new tab ↗
            </a>
          </div>
        </div>

        <div className="pv-tip">
          <b>Test on your own phone</b>
          <p>
            With your phone on the same Wi-Fi, open your computer&apos;s network address with port 3000 (shown
            when the server starts, like <code>http://192.168.x.x:3000</code>).
          </p>
          {origin && (
            <p className="pv-origin">
              Previewing <code>{origin}</code>
            </p>
          )}
        </div>
      </aside>

      <section className="pv-stage" ref={stage} aria-label="Preview">
        <div className="pv-meta">
          {device.name} · {w} × {h}
          {scale < 1 && ` · fitted to ${Math.round(scale * 100)}%`}
        </div>
        <div style={{ width: frameW * scale, height: frameH * scale }}>
          <div
            className={device.phone ? "pv-frame phone" : "pv-frame"}
            style={{ width: frameW, height: frameH, transform: `scale(${scale})`, padding: pad }}
          >
            {device.phone && <span className="pv-notch" aria-hidden="true" />}
            <iframe
              key={`${path}-${nonce}-${w}-${h}`}
              title={`Preview of ${path} on ${device.name}`}
              src={path}
              style={{ width: w, height: h }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
