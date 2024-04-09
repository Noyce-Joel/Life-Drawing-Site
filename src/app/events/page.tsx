"use client";

import React from "react";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Line from "../components/line/Line";
import Nav from "../components/nav/Nav";
import Dogs2 from "../components/loading/Dogs2";
export default function page() {
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
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }} className=" h-screen relative overflow-y-auto overflow-x-hidden">
      <Nav
        color="text-[#000000]"
        hoverColor="text-[#000000]"
        socials="#000000"
        socialsHover="#000000"
      />
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        className="  pt-40 z-10 mb-12 flex overflow-hidden font-extrabold relative justify-start lg:justify-center items-center lg:items-end text-[9vmin]  flex-col "
      >
        {title.map((word, idx) => (
          <motion.h1
            key={idx}
            className="space-y-0 lg:h-[105px] flex w-4/5 overflow-hidden z-20 justify-start items-start text-[#DA7835] "
          >
            <motion.span variants={item} key="anim" className="block ">
              {word}
            </motion.span>
          </motion.h1>
        ))}

        <Line duration={1.2} color="#DA7835" title={true} />
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
        className="pb-44"
      >
        <Events comp={false} />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
