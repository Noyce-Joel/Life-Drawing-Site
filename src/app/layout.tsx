import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { StateProvider } from "./context/State";
import "./globals.css";

const inter = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dog, Life, Drawing, Art, Life Drawing, Sheffield, York, Nottingham, Leeds - Dog Life Drawing",
  description:
    "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. You'll be guided by talented instructors who are not only passionate about art but also share a deep love for dogs.",
  keywords:
    "anomaly, dogs, drawing, art, life drawing, sheffield, nottingham, york, leeds, life",
  icons: "/siteLogo.png",
  openGraph: {
    title: "Dog Life Drawing",
    description:
      "Our dog life drawing sessions blend the joy of artistic expression with the undeniable charm of our favourite furry friends. Whether you're an experienced artist or a complete novice, our sessions cater to all skill levels. You'll be guided by talented instructors who are not only passionate about art but also share a deep love for dogs.",
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
