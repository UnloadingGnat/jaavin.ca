import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jaavin - Software Developer",
  description:
    "I'm a multi-disciplinary engineering student with a passion for life-long learning. Driven by the desire to solve complex engineering problems.",
  twitter: {
    card: "summary_large_image",
    title: "Jaavin - Software Developer",
    description:
      "I'm a multi-disciplinary engineering student with a passion for life-long learning. Driven by the desire to solve complex engineering problems.",
  },
  metadataBase: new URL("https://jaavin.ca"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
