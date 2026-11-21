import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/providers/SmoothScroll";
import "./globals.css";

// Self-hosted General Sans (Fontshare, ITF FFL). Fetched by scripts/fetch-fonts.mjs, not committed.
const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  weight: "200 700",
  display: "swap",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Omni Pipeline AI — Every call answered. Every job booked.",
  description:
    "AI lead capture for trade businesses: answers calls, texts back missed callers, books jobs and chases reviews. £1,000/month.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={generalSans.variable}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
