import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Hero() {
  return (
    <>
      
      <Title />
      <div className="text-left relative z-10 items-center justify-center flex flex-col gap-7 tracking-wider text-pretty font-bold ">
        <div className="flex items-end justify-end w-4/5 lg:-mt-20">
          <h2 className="text-[40px] md:w-[295px]  md:text-[50px]  text-justify text-white">
            WHERE ART MEETS CANINE CHARM
          </h2>
        </div>

        
      </div>
    </>
  );
}
