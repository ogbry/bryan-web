import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bryan Alfuente — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #0b1220 0%, #05070f 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2563eb, #22d3ee)",
              color: "white",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            BA
          </div>
          <div
            style={{
              color: "#38bdf8",
              fontSize: "24px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "104px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
          }}
        >
          Bryan Alfuente
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "32px",
            color: "#94a3b8",
            maxWidth: "900px",
          }}
        >
          6+ years building scalable web apps with React, Node.js & AWS.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "48px",
            fontSize: "26px",
            color: "#38bdf8",
          }}
        >
          bryan.dxlabs.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
