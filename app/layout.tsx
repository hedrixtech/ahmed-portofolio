import type { Metadata } from "next";
import { Syne, Newsreader } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Ahmed — Systems Engineer",
  description:
    "Software engineer focused on scalable cross-platform applications, backend systems, and AI-integrated products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${newsreader.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname !== 'localhost') {
                console.log = function() {};
                console.error = function() {};
                console.warn = function() {};
                console.info = function() {};
                console.debug = function() {};
              }
            `,
          }}
        />
      </head>
      <body className="bg-void text-bone antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
