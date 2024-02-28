import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";
import Title from "./Title";
import Nav from "../nav/Nav";
import Line from "../line/Line";

export default function Hero() {
  return (
    <div className="border-b border-gray-900 pb-24 lg:pb-28">
      <Title />
      
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
