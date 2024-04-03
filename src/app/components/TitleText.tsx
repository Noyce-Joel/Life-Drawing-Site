"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TitleText({title, col}:{title:string[], col: string}) {
const column = col;
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 3,
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
      className={` z-10   ${col} pr-24 font-semibold overflow-hidden text-[4vw]`}
    >
      {title.map((word, idx) => (
        <motion.h1
          key={idx}
          className='flex  gap-12 w-full overflow-hidden z-20'
        >
          <motion.span variants={item} key="anim" className="block ">
            {word}
          </motion.span>
        </motion.h1>
      ))}

     
    </motion.section>
  );
}
