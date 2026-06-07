import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muzammil Haider | AI Developer and Researcher",
  description:
    "Portfolio of Muzammil Haider, AI developer focused on LLM apps, RAG systems, AI agents, automation, backend APIs, OSINT workflows, and practical machine learning.",
  openGraph: {
    title: "Muzammil Haider | AI Developer and Researcher",
    description:
      "Practical AI developer building real systems with LLMs, retrieval, automation, backend APIs, databases, and workflows.",
    images: ["/hero-technical.png"],
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#F4FBF8",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
