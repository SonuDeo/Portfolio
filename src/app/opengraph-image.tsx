import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08080f",
          backgroundImage:
            "radial-gradient(1000px 500px at 80% -10%, #4f46e5 0%, transparent 60%), radial-gradient(900px 500px at 10% 110%, #06b6d4 0%, transparent 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundImage: "linear-gradient(135deg,#6366f1,#06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            SK
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 920,
              letterSpacing: "-0.02em",
            }}
          >
            Transforming Data Into Intelligent Business Decisions
          </div>
          <div style={{ fontSize: 30, opacity: 0.8 }}>
            Data Analyst · AI Automation Engineer
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 22, opacity: 0.75 }}>
          <span>Power BI</span>
          <span>·</span>
          <span>Python &amp; SQL</span>
          <span>·</span>
          <span>OpenAI · Make.com · n8n</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
