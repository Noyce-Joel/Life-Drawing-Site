import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";
import Paw from "../loading/Paw";
import Bone from "../loading/Bone";

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
      <div className="justify-center items-center overflow-hidden relative object-cover flex flex-col w-full h-full top-0 left-0 ">
        <div className="flex w-full h-full justify-end items-end">
          <div className=" w-full relative h-full -mb-32 -mt-32 md:-mt-24 md:-mb-16 flex justify-center items-center">
            <div className="w-full flex relative ">
            <Loading inView={true} />
            <div className="text-[5vw] md:flex hidden items-center w-1/2">Where art meets canine charm</div>
              <div className="absolute rotate-45  right-[5vw] px-24 top-32">
                <Paw inView={true} delay={0.5} size="50pt" />
              </div>
              <div className="absolute -left-[10vw] -rotate-12 bottom-24 px-24">
                <Paw inView={true} delay={0.7} size="100pt" />
              </div>
              {/* <div className="absolute rotate-12 -bottom-96 md:left-[20vw] -left-[5vw] px-24">
                <Paw inView={true} delay={0.9} size="70pt" />
              </div>
              <div className="absolute -rotate-12 md:right-[20vw] -right-[5vw] top-96 px-24">
                <Paw inView={true} delay={1.1} size="80pt" />
              </div>
              <div className="absolute -rotate-12 -right-[7vw] top-60 px-24">
                <Bone delay={1.1} size="80pt" />
              
            </div> */}
            </div>
          </div>
        </div>
        <Line color="white" title={true} />
        <Image
          src="/dog3.png"
          height={150}
          width={150}
          alt="brush-strokes"
          className="pl-12 -z-20 invert absolute -bottom-3 md:right-16 right-5  "
        />
      </div>
    </>
  );
}
