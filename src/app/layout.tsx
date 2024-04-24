import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";

const inter = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dog Life Drawing",
  description:
    "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. ",
  keywords:
    "anomaly, dogs, drawing, art, life drawing, sheffield, nottingham, york, leeds, life, events, Leeds, workshop, ",
  icons: "/siteLogo.png",
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
          <StateProvider>{children}</StateProvider>
        </body>
      </html>
    </>
  );
}
