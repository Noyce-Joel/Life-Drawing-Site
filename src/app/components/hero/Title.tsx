import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";
import Paw from "../loading/Paw";
import Bone from "../loading/Bone";
import TitleText from "../TitleText";
import Dogs from "../loading/Dogs";

import Ball from "../loading/Ball";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];
  const hover = (duration: number, rotation: number[]) => ({
    rotate: rotation,
    scale: [0.7, 1.1, 0.5, 1.1, 0.7],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  });
  return (
    <>
      <div className="justify-center items-center  relative object-cover flex flex-col w-full h-full top-0 left-0 -z-50">
        <div className="flex w-full h-full justify-end items-end">
          <div className=" w-full relative h-full -mb-32 -mt-32 md:-mt-24 md:-mb-16 flex justify-center items-center">
            <div className="w-full flex relative ">
              <Loading inView={true} />
              <div className="text-[5vw] md:flex hidden items-center w-1/2">
                <TitleText title={["WHERE ART MEETS", "CANINE CHARM"]} col='flex-col' />
              </div>
              <div className="absolute md:flex hidden -rotate-[15deg] right-[28vw] top-32 ">
                <Paw duration={2.2} delay={3.4} size="140pt" />
              </div>
              <div className="absolute md:flex hidden -rotate-[105deg] justify-center left-[2.5vw] w-full top-40 ">
                <Ball duration={2.2} delay={3} size="200pt" />
              </div>
              {/* <div className="absolute md:flex hidden -rotate-45 -right-[4vw] -top-12 ">
                <Paw duration={4.5} delay={1.4} size="170pt" />
              </div> */}
              <div className="absolute md:flex hidden -rotate-45 top-40 justify-center left-[32vw] w-full mx-auto">
                <Bone duration={2.4} delay={4.1} size="140pt" />
              </div>
              {/* <div className="absolute md:flex hidden rotate-12 md:-bottom-1 bottom-12 right-0">
                <Bone duration={4.5} delay={1.7} size="170pt" />
              </div> */}
             

            </div>
          </div>
        </div>
        <Line duration={2.7} color="white" title={true} />

      </div>
    </>
  );
}
