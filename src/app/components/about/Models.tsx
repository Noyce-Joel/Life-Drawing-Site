import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";

export default function Models() {
  return (
    <article className="flex flex-col pt-24 md:pt-32 relative border-b border-gray-900 pb-24 mb:pb-0 lg:pb-40 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-1/2 md:w-4/5 lg:w-9/12 relative flex-col font-bold text-[30px] md:text-[70px] mb-6 text-white">
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
          className="w-full -z-40 origin-right md:-mt-5 border-b border-[1.2px]"
        ></motion.div>
      </div>
      <div className="flex relative md:w-4/5">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col gap-6 lg:gap-0">
          <div className="flex items-start justify-start w-4/5">
            <p className="text-[27px] md:text-[37px] text-justify md:pt-12 ">
              What sets us apart? Well, our models have wagging tails, wet
              noses, and a penchant for striking the most adorable poses.
            </p>
          </div>
          <div className="flex w-full justify-center items-center md:justify-start relative md:tems-start pt-6 md:pt-12">
            <p className="text-justify text-white flex md:-ml-20 w-3/4 text-[32px] md:text-[45px] pr-4">
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
            <p className="text-justify width-dogs text-[27px] md:text-[37px] md:w-full w-4/5 lg:w-4/6">
              From the arc of a tail to the tilt of an ear, each moment presents
              an opportunity to explore. With a diverse array of dog breeds to
              inspire your creations
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
