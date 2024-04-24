"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TitleText({title, col}:{title:string[], col: string}) {
const column = col;
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const item = {
    initial: { y: 250, x: 150, rotate: 7 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 1.5 } },
  };
  return (
    <motion.section
     
      className={` z-10   ${col} font-semibold overflow-hidden text-[4vw]`}
    >
      {title.map((word, idx) => (
        <motion.h1
          key={idx}
          className='flex  gap-12 w-full overflow-hidden z-20'
        >
          <motion.span  key="anim" className="block ">
            {word}
          </motion.span>
        </motion.h1>
      ))}

     
    </motion.section>
  );
}
