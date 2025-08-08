import "./globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Jaavin - Computer Engineer",
  description:
    "I'm an engineer specialized in computer architecture and applied AI, with a passion for life-long learning.",
  twitter: {
    card: "summary_large_image",
    title: "Jaavin - Computer Engineer",
    description:
      "I'm an engineer specialized in computer architecture and applied AI, with a passion for life-long learning.",
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
