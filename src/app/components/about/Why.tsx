import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import Ball from "../loading/Ball";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-24 md:pt-32 relative border-b border-gray-900 pb-24 md:pb-32 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-1/2 md:w-4/5 relative flex-col font-bold text-[30px] md:text-[70px] mb-6 text-white">
        WHY US?
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
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col">
          <div className="flex flex-col items-start justify-start w-4/5">
          <b className=" text-justify text-white w-4/5 md:w-full lg:w-4/5 font-semibold text-[32px] md:text-[50px]">
              CREATIVITY UNLEASHED
            </b>
            <p className="text-[27px] md:text-[37px] text-justify w-full ">
              Break free from conventional art and let your creativity run wild
              as you sketch the canine form in all its charming glory.
            </p>
            
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:justify-start relative md:items-start pt-6 md:pt-12  md:-ml-24 ">
            <Image
              src="/Dog-model.jpg"
              height={850}
              width={850}
              alt="hero-image"
              className="rounded-[10px] md:flex hidden absolute -z-40 md:-right-44 lg:-right-64 lg:-bottom-56"
            />
            {/* <b className="text-justify text-white  md:w-3/5 text-[32px] md:text-[55px]">
              FUN FOR ALL AGES
            </b> */}
            <p className="text-[32px] md:text-[45px] text-white text-justify p-6 md:w-full lg:w-4/5 w-full">
              Whether you&#39;re a seasoned artist or just picking up a pencil
              for the first time, our sessions are designed to be inclusive and
              enjoyable for everyone.
            </p>
          </div>
          {/* <div className="absolute -bottom-80 md:-left-96  w-full">
          <Ball />
      </div> */}
          <div className="flex flex-col items-start  md:mr-12 h-full relative justify-start md:w-4/5 w-4/5 pt-7 md:pt-24">
            
            <b className=" text-justify text-white w-4/5 md:w-full font-semibold lg:w-4/5 text-[32px] md:text-[55px]">
              STRESS-FREE ENVIRONMENT
            </b>
            <p className=" text-justify text-[27px] md:text-[32px] w-full">
              Our furry models create a relaxed and friendly atmosphere, making
              the drawing process not only artistic but also therapeutic.
            </p>
          </div>

          <div className="flex flex-col w-11/12 justify-start items-start md:justify-end relative md:items-center pt-6 md:pt-24">
            <b className="  text-white  md:w-9/12 text-[32px] font-semibold md:text-[55px]">
              UNIQUE BONDING EXPERIENCE
            </b>
            <p className=" text-[27px] md:text-[37px] text-justify md:w-9/12 w-full">
              Share the joy of art with fellow dog enthusiasts, creating a sense
              of community and camaraderie around the love for our canine
              companions.
            </p>
          </div>
        </div>
      </div>
      
    </article>
  );
}
