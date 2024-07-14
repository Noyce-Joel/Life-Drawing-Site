import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dog Life Drawing",
  description:
    "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. ",
  keywords:
    ["anomaly", "dogs", "drawing", "art", "life drawing", "Sheffield", "Nottingham", "York", "Leeds", "life", "events", "Leeds", "workshop"],
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
        <body className={inter.className}>
          <Analytics />
          <StateProvider>{children}</StateProvider>
        </body>
      </html>
    </>
  );
}
