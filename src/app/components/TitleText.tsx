"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TitleText() {
  const title = ["WHERE ART MEETS", "CANINE CHARM"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.7,
      },
    },
  };

  const item = {
    initial: { y: 250, x: 150, rotate: 7 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 1.5 } },
  };
  return (
    <motion.section
      variants={container}
      initial="initial"
      animate="animate"
      className=" z-10  flex flex-col pr-24 font-semibold overflow-hidden text-[3.5vw] "
    >
      {title.map((word, idx) => (
        <motion.h1
          key={idx}
          className="flex w-full overflow-hidden z-20 "
        >
          <motion.span variants={item} key="anim" className="block ">
            {word}
          </motion.span>
        </motion.h1>
      ))}

     
    </motion.section>
  );
}
