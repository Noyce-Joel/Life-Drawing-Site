'use client'

import React from "react";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import Line from "../components/line/Line";
import Nav from "../components/nav/Nav";
import Title from "../components/hero/Title";
import { copy } from "../../../public/copy/copy";
import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Events",
// };
export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Dog Life Drawing",
    image: "/images/faviconLogo.png",
    description: `${copy.sessions_white_text}`,
  };
  const title = ["DOG LIFE", "DRAWING", "EVENTS"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    initial: { y: 450, x: 150, rotate: 25 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 0.7 } },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
        className=" h-screen relative overflow-y-auto overflow-x-hidden"
      >
        <Nav
          color="text-[#000000]"
          hoverColor="text-[#DA7835]"
          socials="#000000"
          socialsHover="#DA7835"
        />
        <Title
          slogan="Come along and have some fun"
          image="/drawingLow.jpg"
          image2="/Dog-Model2Low.jpeg"
          title={["OUR", "", "EVENTS"]}
          tileColor="#334D42"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
          className="pb-44"
        >
          <Events comp={false} />
        </motion.div>
        <Footer />
      </motion.div>
    </>
  );
}
