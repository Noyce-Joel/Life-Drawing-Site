import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";

export default function About() {
  return (
    <article className="flex flex-col pt-24 relative overflow-hidden justify-center items-center h-auto font-extrabold text-[40px] ">
      {/* <div className="grid grid-cols-2">
      <Image src="/HERO.jpg" height={800} width={800} alt="hero-image" className="rounded-[20px]" />  
      <Image src="/HERO.jpg" height={800} width={800} alt="hero-image" className="rounded-[20px]" />
      <Image src="/HERO.jpg" height={800} width={800} alt="hero-image" className="rounded-[20px]" />

        <Image src="/HERO.jpg" height={800} width={800} alt="hero-image" className="rounded-[20px]" />  
      </div> */}

      <div className="flex w-4/5 relative flex-col font-bold text-[50px] md:text-[50px] mb-6 text-white">
        SESSIONS
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1.4,
              delay: 0.4,
              type: "tween",

              ease: "anticipate",
            },
          }}
          className="w-full -z-40 origin-right border-b border-[1.9px]"
        ></motion.div>
      </div>
      <div className="flex relative md:w-4/5 pt-4 ">
        <div className=" justify-center items-center gap-4 flex flex-col">
          <div className="flex items-start justify-start w-4/5">
            <p className="text-[27px] md:text-[35px] text-justify md:pt-12 ">
              Unleash your creativity and embark on a paw-some artistic
              adventure with our unique Dog Drawing sessions.
            </p>
          </div>
          <div className="flex justify-end relative items-end md:pt-20">
            <Loading />
            <p className="text-justify text-white flex justify-end items-end w-3/4 text-[32px] md:text-[45px] pr-4">
              You&#39;ll be guided by talented instructors who are not only
              passionate about art but also share a deep love for dogs.
            </p>
          </div>
          <span className="h-2"> </span>
          <div className="flex items-end justify-end w-4/5 md:pt-16">
            <p className="text-justify text-[27px] md:text-[35px] ">
              Our dog life drawing sessions blend the joy of artistic expression
              with the undeniable charm of our favourite furry friends. Whether
              you&#39;re an experienced artist or a complete novice, our
              sessions cater to all skill levels.
            </p>
          </div>
        </div>
        <figure className="md:hidden absolute -z-20 bottom-0 -left-36 flex w-full justify-center items-center">
          <Image
            src="/Dog.jpg"
            height={220}
            width={220}
            alt="photo"
            className="rounded-[20px]"
          />
        </figure>
      </div>
    </article>
  );
}
