import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";
import Paw from "../loading/Paw";
import Bone from "../loading/Bone";
import TitleText from "../TitleText";
import Ball from "../loading/Ball";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];

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
    <>
      <div className="justify-center items-center  relative object-cover flex flex-col w-full h-full top-0 left-0 -z-50">
        <div className="flex w-full h-full justify-end items-end">
          <div className=" w-full relative h-full -mb-32 -mt-32 md:-mt-24 md:-mb-16 flex justify-center items-center">
            <div className="w-full flex relative ">
              <Loading inView={true} />
              <div className="text-[5vw] md:flex hidden items-center w-1/2">
                <TitleText />
              </div>
              <div className="absolute md:flex hidden rotate-[15deg] right-[15vw] bottom-32 ">
                <Paw duration={3} delay={0.8} size="120pt" />
              </div>
              <div className="absolute md:flex hidden -rotate-45 -right-[4vw] -top-12 ">
                <Paw duration={3} delay={1.1} size="170pt" />
              </div>
              <div className="absolute md:flex hidden -rotate-45 top-32 justify-center left-44 w-full mx-auto">
                <Bone delay={1.4} size="120pt" />
              </div>
              <div className="absolute md:flex hidden rotate-12 md:-bottom-1 bottom-12 left-0">
                <Bone delay={1.7} size="170pt" />
              </div>
              <div className="absolute -rotate-45 md:flex hidden md:top-24 top-32 left-12">
                <Paw duration={3} delay={2} size="90pt" />
              </div>
            <div className="absolute -rotate-90 md:flex hidden bottom-56 w-full justify-center">
              <Ball />
            </div>
              
            </div>
          </div>
        </div>
        <Line color="white" title={true} />
        {/* <Image
          src="/dog3.png"
          height={150}
          width={150}
          alt="brush-strokes"
          className="pl-12 -z-20 invert absolute -bottom-3 md:right-16 right-5  "
        /> */}
      </div>
    </>
  );
}
