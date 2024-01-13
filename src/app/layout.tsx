import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
  display: "swap",
});

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
      <body className={generalSans.className}>{children}</body>
    </html>
  );
}
