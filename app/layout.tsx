import "./globals.css";
import React from "react";

// TODO: add og:image to app
export const metadata = {
  title: "Jaavin - Software Developer",
  description:
    "I am a multi-disciplinary software developer who enjoys crafting intuitive interfaces. Driven by the desire to solve complex engineering problems.",
  twitter: {
    card: "summary_large_image",
    title: "Jaavin - Software Developer",
    description:
      "I am a multi-disciplinary software developer who enjoys crafting intuitive interfaces. Driven by the desire to solve complex engineering problems..",
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
      <body className="bg-black overflow-x-hidden">{children}</body>
    </html>
  );
}
