import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";

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
      <div className="justify-center items-center overflow-hidden relative object-cover flex flex-col w-full h-full top-0 left-0">
        <div className="flex w-full h-full justify-end items-end">
          <div className=" w-full h-full -mb-32 -mt-60 md:-mb-16 md:-mt-36 flex justify-center items-center">
            <Loading inView={true} />
          </div>
        </div>
        <Line color='white' title={true} />
        <Image
          src="/dog3.png"
          height={150}
          width={150}
          alt="brush-strokes"
          className="flex invert pl-12 z-20 absolute -bottom-3 md:right-16 right-5  "
        />
      </div>
    </>
  );
}
