import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <article className="flex flex-col justify-center items-center h-auto font-extrabold text-[40px] ">
      <div className="flex w-4/5 flex-col font-bold text-[60px] mb-6 text-white">
        {/* <figure className="flex pb-12">
          <Image
            src="/Dog-model.jpg"
            height={700}
            width={700}
            alt="hero-image"
            className="rounded-[20px]"
          />
        </figure> */}
        SESSIONS
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
          className="w-full -z-40 origin-right border-b border-[1.9px]"
        ></motion.div>
      </div>
      <div className="flex w-4/5">
        <div className=" justify-center items-center flex flex-col">
          <div className="flex">
            <p className="text-justify text-[22px] ">
              Our dog life drawing sessions blend the joy of artistic expression
              with the undeniable charm of our favourite furry friends. Whether
              you&#39;re an experienced artist or a complete novice, our
              sessions cater to all skill levels.
            </p>
          </div>
          <span className="h-2"> </span>
          <div className="flex justify-end items-end ">
            <p className="text-justify text-white flex justify-end items-end w-3/4 text-[25px]">
              You&#39;ll be guided by talented instructors who are not only
              passionate about art but also share a deep love for dogs.
            </p>
          </div>
        </div>
        {/* <figure className="flex w-full justify-center items-center">
          <Image
            src="/Dog.jpg"
            height={500}
            width={500}
            alt="photo"
            className="rounded-[20px]"
          />
        </figure> */}
      </div>
    </article>
  );
}
