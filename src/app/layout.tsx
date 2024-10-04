import type { Metadata, MetadataRoute } from "next";
import { Fraunces } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: { default: "Dog Life Drawing", template: "%s - Dog Life Drawing" },
  description:
    "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. ",
  icons: "/favicon.ico",
  twitter: {
    card: "summary_large_image",
    site: "@doglifedrawing",
  },
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
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
