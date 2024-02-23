import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>

        
      <div className=" flex mt-20 relative h-screen md:h-screen m-0 p-0 gap-12 w-full justify-evenly md:px-24 px-0">
      <Loading />
        <motion.div className="absolute -left-[100%] md:relative md:-left-0 md:flex justify-center items-center h-auto">
          <Image
            src="/HERO.jpg"
            height={800}
            width={800}
            alt="hero-image"
            className="rounded-[20px]"
          />
        </motion.div>
        <div className="flex flex-col gap-6 tracking-widest h-full w-1/2 justify-center items-start text-pretty font-extrabold ">
          <div>
            <div className="md:text-[70px] flex-col flex justify-start items-start border-b">
              <motion.div className="h-24 overflow-y-hidden">
                <motion.div initial={{y: 200}} animate={{y:0}} transition={{duration: 2, type: "spring", damping: 20, }} className="">DOG</motion.div>
              </motion.div>
              <motion.div className="h-24 overflow-hidden">
                <motion.div initial={{y: 200}} animate={{y:0}} transition={{duration: 2, type: "spring", damping: 20, delay: 0.1}}>LIFE</motion.div>
              </motion.div>
              <motion.div className="h-24 overflow-hidden">
                <motion.div initial={{y: 200}} animate={{y:0}} transition={{duration: 2, type: "spring", damping: 20, delay: 0.2}}>DRAWING</motion.div>
              </motion.div>
            </div>
            <h2 className="text-2xl flex flex-wrap pt-6">
              WHERE ART MEETS CANINE CHARM
            </h2>
          </div>
          <p className="w-[80%]">
            Unleash your creativity and embark on a paw-some artistic adventure
            with our unique Dog Drawing sessions. We believe that art should be
            as diverse and playful as our four-legged friends, and what better
            way to celebrate that bond than by capturing the essence of canine
            companionship on paper?
          </p>
        </div>
      </div>
    </>
  );
}
