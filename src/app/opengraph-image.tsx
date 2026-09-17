import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

/* Required by `output: "export"` (GitHub Pages): tells Next this route is a
   build-time PNG, not an on-demand one. Harmless in the server build too. */
export const dynamic = "force-static";

export const alt = `${profile.name} — ${profile.role} (${profile.specialty})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Shipped in-repo so the build never depends on a font CDN being reachable. */
const spaceGrotesk = readFileSync(
  join(process.cwd(), "src/assets/SpaceGrotesk-Medium.ttf"),
);

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf9f7",
          padding: "72px 80px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Accent rule — the same one that wipes across rows on the site */}
        <div style={{ display: "flex", width: "100%", height: 6, backgroundColor: "#c0451b" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "#17171a",
            }}
          >
            Salim Maula
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "#9b9a94",
            }}
          >
            Hudzaifah
          </div>

          <div style={{ display: "flex", marginTop: 34, gap: 18, alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 36, color: "#17171a" }}>
              {profile.role}
            </div>
            <div style={{ display: "flex", fontSize: 36, color: "#c0451b" }}>
              {profile.specialty}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e2dfd6",
            paddingTop: 28,
            fontSize: 24,
            color: "#6f6e6a",
          }}
        >
          <div style={{ display: "flex" }}>8+ apps on the App Store &amp; Google Play</div>
          <div style={{ display: "flex" }}>{profile.location}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: spaceGrotesk, style: "normal", weight: 500 }],
    },
  );
}
