import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";
import Title from "./Title";
import Nav from "../nav/Nav";

export default function Hero() {
  return (
    <div className="border-b border-gray-900 pb-24 lg:pb-28">
      <Title />
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
      <div className="text-left pt-24 relative h-full z-10 items-center justify-center flex flex-col gap-7 tracking-wider text-pretty font-bold ">
        <div className="flex h-full items-center justify-end w-4/5 ">
       
          <h2 className="text-[40px]  md:text-[50px]  text-justify ">
            Where art meets canine charm{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
