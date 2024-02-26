import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delay: 0.5,
      },
    },
  };

  const item = {
    initial: { y: 450, x: 150, rotate: 25, delay: 0.5 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 0.7 } },
  };
  return (
    <>
     <div className="absolute top-0 right-0 ">
          <Image
            src="/Logo.png"
            className=""
            height={205}
            width={205}
            alt="logo"
          />
          </div>
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        className="md:text-[100px] lg:text-[150px] lg:pt-12 md:pl-54 z-10 h-full flex overflow-hidden font-extrabold relative justify-start lg:justify-center items-center lg:items-end text-[55px]  flex-col text-white "
      >
        
          
        <motion.figure
          initial={{ scale: 0.9, opacity: 0, y: 1500 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: "2", mass: '1', damping: 34 },
          }}
          className="hidden absolute lg:-left-72 md:-left-44 w-3/4 justify-start items-start rounded-full -z-20"
        >
          <Image
            src="/HERO.jpg"
            height={1000}
            width={1000}
            alt="hero-image"
            className="absolute  object-cover w-full  hidden md:flex  right-0 left-0 -bottom-96"
          />
        </motion.figure>
        {title.map((word, idx) => (
          <motion.h1
            key={idx}
            className="space-y-0 md:h-[169px] flex w-4/5 overflow-y-hidden z-20 justify-start items-start"
          >
            <motion.span variants={item} key="anim" className="block ">
              {word}
            </motion.span>
          </motion.h1>
        ))}
      </motion.section>
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
        className="origin-right flex -z-20 border-b border-2 w-full"
      ></motion.div>
      
    </>
  );
}
