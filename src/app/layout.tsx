import type { Metadata } from "next";
import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import { cn } from "../lib/utils";

const inter = Space_Grotesk({ subsets: ["latin"] });

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
      <body className={cn("dark", inter.className)}>{children}</body>
    </html>
  );
}
