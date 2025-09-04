import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aseem Sangalay - Engineer · Builder · Systems Thinker";
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
          background: "white",
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
            fontSize: 72,
            fontWeight: 700,
            color: "black",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          Aseem Sangalay
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#666",
            textAlign: "center",
            fontWeight: 300,
          }}
        >
          Engineer · Builder · Systems Thinker
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

