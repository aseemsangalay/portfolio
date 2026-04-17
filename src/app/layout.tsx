import type { Metadata } from "next";
import { Inter, Newsreader, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/layout/Navigation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f2ee",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aseemsangalay.vercel.app"),
  title: "Aseem Sangalay | Engineer · Builder · Systems Thinker",
  description:
    "Personal portfolio showcasing engineering projects and systems thinking approach to building digital solutions.",
  keywords: [
    "engineer",
    "developer",
    "systems thinking",
    "portfolio",
    "full stack",
    "AI",
    "machine learning",
  ],
  authors: [{ name: "Aseem Sangalay" }],
  creator: "Aseem Sangalay",
  openGraph: {
    title: "Aseem Sangalay | Engineer · Builder · Systems Thinker",
    description:
      "Personal portfolio showcasing engineering projects and systems thinking approach to building digital solutions.",
    type: "website",
    locale: "en_US",
    url: "https://aseemsangalay.com",
    siteName: "Aseem Sangalay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aseem Sangalay | Engineer · Builder · Systems Thinker",
    description:
      "Personal portfolio showcasing engineering projects and systems thinking approach to building digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
