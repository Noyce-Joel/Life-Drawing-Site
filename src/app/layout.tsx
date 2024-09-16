import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
const inter = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dog Life Drawing",
  description:
    "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. ",
  keywords: [
    "anomaly",
    "dogs",
    "drawing",
    "art",
    "life drawing",
    "Sheffield",
    "Nottingham",
    "York",
    "Leeds",
    "life",
    "events",
    "Leeds",
    "workshop",
  ],
  icons: "/images/faviconLogo.png",
  openGraph: {
    title: "Dog Life Drawing",
    description:
      "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. ",
    url: "https://doglifedrawing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-16703303348" />

        <body className={inter.className}>
          <Analytics />
          <StateProvider>{children}</StateProvider>
        </body>
      </html>
    </>
  );
}
