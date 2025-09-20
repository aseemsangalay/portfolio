import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aseem Sangalay | Engineer · Builder · Systems Thinker";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F7F5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            maxWidth: "800px",
            padding: "0 40px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#0A0A0A",
              margin: "0 0 16px 0",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Aseem Sangalay
          </h1>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "500",
              color: "#6B7280",
              margin: "0",
              lineHeight: "1.4",
            }}
          >
            Engineer · Builder · Systems Thinker
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
