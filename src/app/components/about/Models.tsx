import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";

export default function Models() {
  return (
    <article className="flex flex-col pt-56 relative justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-1/2 md:w-4/5 relative flex-col font-bold text-[50px] md:text-[90px] mb-6 text-white">
        MODELS
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
          className="w-full -z-40 origin-right -mt-5 border-b border-[1.9px]"
        ></motion.div>
      </div>
      <div className="flex relative md:w-4/5 pt-4 ">
        <div className=" md:justify-start md:items-start justify-center items-center gap-4 flex flex-col">
          <div className="flex items-start justify-start w-4/5">
            <p className="text-[27px] md:text-[40px] text-justify md:pt-12 ">
              What sets us apart? Well, our models have a wagging tail, wet
              noses, and a penchant for striking the most adorable poses.
            </p>
          </div>
          <div className="flex w-full justify-center items-center md:justify-start relative md:tems-start pt-6 md:pt-16">
            <p className="text-justify text-white flex md:-ml-20 w-3/4 text-[32px] md:text-[55px] pr-4">
              Forget traditional still life – our furry friends bring a dynamic
              and lively element to your sketches, making each session a
              delightful and unforgettable experience.
            </p>
            <Image
              src="/Dog-model2.jpg"
              height={500}
              width={500}
              alt="hero-image"
              className="rounded-[10px] md:flex hidden absolute -z-40 md:right-24 top-0"
            />
          </div>
          <span className="h-2"> </span>

          <div className="flex items-end h-full relative justify-center md:justify-start overflow-hidden md:w-4/5 md:pt-12">
            <p className="text-justify text-[27px] md:text-[40px] md:w-3/5 w-4/5 lg:w-4/6">
              Our dog life drawing sessions blend the joy of artistic expression
              with the undeniable charm of our favourite furry friends. Whether
              you&#39;re an experienced artist or a complete novice, our
              sessions cater to all skill levels.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
