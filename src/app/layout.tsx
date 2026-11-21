import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/providers/SmoothScroll";
import "./globals.css";

// Self-hosted Satoshi (Fontshare, ITF FFL) — one font site-wide; has tabular figures. Fetched by scripts/fetch-fonts.mjs, not committed.
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Omni Pipeline AI — Every call answered. Every job booked.",
  description:
    "AI lead capture for trade businesses: answers calls, texts back missed callers, books jobs and chases reviews. £1,000/month.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={satoshi.variable} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint (see [data-load-reveal] in globals.css). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
