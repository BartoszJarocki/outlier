import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const fontData = await fetch(
    new URL("../../../assets/SpaceGrotesk-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "black",
          height: "100%",
          width: "100%",
          fontFamily: '"Space Grotesk"',
          padding: 32,
        }}
      >
        <h1
          style={{
            fontSize: 100,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
          }}
        >
          <span
            style={{
              width: 50,
              height: 50,
              backgroundColor: "white",
              marginRight: 24,
            }}
          ></span>
          Outlier
        </h1>
        <p
          style={{
            fontSize: 20,
            maxWidth: 580,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          A tiny development studio focused on helping startups build and
          improve their products based on Next.js framework.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
