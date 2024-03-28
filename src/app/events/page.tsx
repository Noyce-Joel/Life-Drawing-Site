"use client";

import React from "react";
import Events from "../components/events/Events";
import Footer from "../components/footer/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Line from "../components/line/Line";
import Nav from "../components/nav/Nav";
export default function page() {
  const title = ["DOG LIFE", "DRAWING", "EVENTS"];
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delay: 0.8,
      },
    },
  };

  const item = {
    initial: { y: 450, x: 150, rotate: 25 },
    animate: { y: 0, x: 0, rotate: 0, transition: { duration: 0.7 } },
  };
  return (
    <div className=" h-screen relative overflow-y-auto">
      <Nav />
      <motion.section
        variants={container}
        initial="initial"
        animate="animate"
        className="  pt-40 z-10  flex overflow-hidden font-extrabold relative justify-start lg:justify-center items-center lg:items-end text-[9vmin]  flex-col text-white "
      >
        <motion.figure
          initial={{ scale: 0.9, opacity: 0, y: 1500 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: "2",
              mass: "1",
              damping: 34,
            },
          }}
          className="flex absolute w-3/4 h-3/4 rounded-full -z-20"
        >
          <Image
            src="/HERO.jpg"
            height={1000}
            width={1000}
            alt="hero-image"
            className=" object-cover w-4/6  hidden md:flex rounded-bl-[100px] rounded-tr-[100px] rounded-[20px]"
          />
        </motion.figure>
        <Image
          src="/dog3.png"
          height={150}
          width={150}
          alt="brush-strokes"
          className="hidden md:flex invert pl-12 z-50 absolute -bottom-[14px] right-16  "
        />
        {title.map((word, idx) => (
          <motion.h1
            key={idx}
            className="space-y-0 lg:h-[105px] flex w-4/5 overflow-hidden z-20 justify-start items-start "
          >
            <motion.span variants={item} key="anim" className="block ">
              {word}
            </motion.span>
          </motion.h1>
        ))}

        <Line color='white' title={true} />
      </motion.section>

      <div className="pb-44">
        <Events comp={false} />
      </div>
      <Footer />
    </div>
  );
}
