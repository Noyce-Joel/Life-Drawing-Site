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
    initial: { y: 250, rotate: 20, delay: 0.5 },
    animate: { y: 0, rotate: 0, transition: { duration: 0.7 } },
  };
  return (
    <>
    <motion.section
      variants={container}
      initial="initial"
      animate="animate"
      className="md:text-[100px] md:pl-54 z-10 flex overflow-hidden font-extrabold relative justify-center items-center text-[55px] flex-col text-white "
    >
        <figure className="absolute w-3/4 justify-end items-end rounded-full overflow-visible flex -z-20">
        <Image
          src="/HERO.jpg"
          height={800}
          width={800}
          alt="hero-image"
          className="rounded-[20px] object-fit object-cover w-full  hidden md:flex right-56 mx-auto bottom-0 left-0 top-0"
        />
      </figure>
      {title.map((word, idx) => (
        <motion.h1
          key={idx}
          className="space-y-0 h-full flex w-4/5 overflow-y-hidden z-20 justify-start items-start"
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
