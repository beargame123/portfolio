import { ImageResponse } from "next/og"

export const alt = "Kim Ho-young — Backend Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0f1c",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f59e0b",
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 6,
          }}
        >
          BACKEND DEVELOPER
        </div>
        <div
          style={{
            display: "flex",
            color: "#f8fafc",
            fontSize: 116,
            fontWeight: 800,
            marginTop: 18,
            letterSpacing: -2,
          }}
        >
          Kim Ho-young
        </div>
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 38, marginTop: 28 }}>
          Slowly but accurately.
        </div>
        <div
          style={{
            display: "flex",
            width: 130,
            height: 7,
            background: "#f59e0b",
            marginTop: 44,
            borderRadius: 4,
          }}
        />
        <div style={{ display: "flex", color: "#475569", fontSize: 26, marginTop: 44 }}>
          Kotlin · Spring · Rust · MSA · Ledger
        </div>
      </div>
    ),
    { ...size },
  )
}
