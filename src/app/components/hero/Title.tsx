import { motion } from "framer-motion";
import React from "react";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delay: 0.5
      },
    },
  };

  const item = {
    initial: { y: 150, rotate: 20, delay: 0.5, },
    animate: { y: 0, rotate: 0,  transition: { duration: 0.7}   },
    
  };
  return (
    <motion.section variants={container} initial="initial"
    animate="animate"
 className="md:text-[70px] font-extrabold justify-center items-center text-[60px] flex-col flex  text-white ">
      {title.map((word, idx) => (
        <motion.h1
        
          
          key={idx}
          className="md:h-24  h-full flex overflow-y-hidden w-4/5 justify-start items-start"
        >
        <motion.span
            variants={item}
            key="anim"
            
            className="block "
        >
            {word}
        </motion.span>
        </motion.h1>
      ))}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: {
            duration: 1.4,
            
            type: "tween",
            ease: "anticipate",
          },
        }}
        className="origin-right border-b border-2 w-full"
      ></motion.div>
    </motion.section>
  );
}
