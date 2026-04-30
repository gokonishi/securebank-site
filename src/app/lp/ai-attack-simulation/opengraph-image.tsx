import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "AI攻撃シミュレーション｜年1回の診断では、もう守れません";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadNotoSansJP(weight: 700 | 800): Promise<ArrayBuffer> {
  const cssRes = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    },
  );
  const css = await cssRes.text();
  const match = css.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\('truetype'\)/);
  if (!match) throw new Error("Noto Sans JP font URL not found");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const [bold, extrabold] = await Promise.all([
    loadNotoSansJP(700),
    loadNotoSansJP(800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000",
          position: "relative",
          padding: "80px",
          fontFamily: "NotoSansJP",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 65%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#f87171",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#ef4444",
            }}
          />
          警告：AI時代のサイバー攻撃
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            letterSpacing: "-0.02em",
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>年1回の診断では、</span>
          <span style={{ color: "#ef4444" }}>もう守れません。</span>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#cbd5e1",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          攻撃者視点で「本当に侵入できるか」を再現する
          <br />
          AI攻撃シミュレーション
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          <span>SECUREBANK</span>
          <span style={{ color: "#ef4444" }}>RedTeam AI</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "NotoSansJP", data: bold, weight: 700 },
        { name: "NotoSansJP", data: extrabold, weight: 800 },
      ],
    },
  );
}
