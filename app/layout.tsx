import "./globals.css";
import React from "react";

// TODO: add og:image to app
export const metadata = {
  title: "Jaavin - Software Developer",
  description:
    "jaavin",
  twitter: {
    card: "summary_large_image",
    title: "jaavin",
    description:
      "jaavin.",
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
