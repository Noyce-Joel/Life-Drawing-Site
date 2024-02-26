import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import Ball from "../loading/Ball";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-40 relative  justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-1/2 md:w-4/5 relative flex-col font-bold text-[40px] md:text-[70px] mb-6 text-white">
        CREATIVITY UNLEASHED
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
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col">
          <div className="flex flex-col items-start justify-start w-4/5">
            
            <p className="text-[27px] md:text-[37px] text-justify w-full ">
              Break free from conventional art and let your creativity run wild
              as you sketch the canine form in all its charming glory.
            </p>
            
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:justify-start relative md:items-start pt-6 md:pt-12 lg:pt-24 md:-ml-24 ">
            <Image
              src="/belly.jpg"
              height={600}
              width={600}
              alt="hero-image"
              className="rounded-[10px] md:flex hidden absolute -z-40 md:-right-48 top-16 lg:-bottom-24"
            />
            {/* <b className="text-justify text-white  md:w-3/5 text-[32px] md:text-[55px]">
              FUN FOR ALL AGES
            </b> */}
            <p className="text-[27px] md:text-[45px] text-white text-justify md:w-4/5 w-full">
              Whether you&#39;re a seasoned artist or just picking up a pencil
              for the first time, our sessions are designed to be inclusive and
              enjoyable for everyone.
            </p>
          </div>

          {/* <div className="flex flex-col items-center md:items-end md:mr-12 h-full relative justify-center md:justify-end lg:w-4/5 pt-7 md:pt-32">
            <Image
              src="/drawing.jpg"
              height={500}
              width={500}
              alt="hero-image"
              className="rounded-[10px] md:flex hidden absolute -z-40 md:-left-64 top-36"
            />
            <b className=" text-justify text-white w-4/5 md:w-6/12 lg:w-9/12 text-[32px] md:text-[55px]">
              STRESS-FREE ENVIRONMENT
            </b>
            <p className=" text-justify text-[32px] md:text-[40px] w-2/5 md:w-6/12 lg:w-9/12">
              Our furry models create a relaxed and friendly atmosphere, making
              the drawing process not only artistic but also therapeutic.
            </p>
          </div>

          <div className="flex flex-col w-4/5 justify-start items-start md:justify-end relative md:items-end pt-6 md:pt-24">
            <b className=" text-justify text-white  md:w-9/12 text-[32px] md:text-[55px]">
              UNIQUE BONDING EXPERIENCE
            </b>
            <p className=" text-[27px] md:text-[40px] text-justify md:w-9/12 w-full">
              Share the joy of art with fellow dog enthusiasts, creating a sense
              of community and camaraderie around the love for our canine
              companions.
            </p>
          </div> */}
        </div>
      </div>
      {/* <div className="relative flex w-full h-full ">
          <Ball />
      </div> */}
    </article>
  );
}
