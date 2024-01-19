import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import { cn } from "../lib/utils";

const spaceGroteskFont = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Outlier - different kind of Next.js development studio",
  description:
    "We specialize in creating and maintaining high quality Next.js apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={cn("dark", spaceGroteskFont.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
