import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";
import Title from "./Title";

export default function Hero() {
  return (
    <>
      <Loading />
      <Title />
      <div className="text-left items-center justify-center flex flex-col  gap-4 tracking-wider text-pretty font-bold ">
        {/* <figure className="">
          <Image
            src="/HERO.jpg"
            height={800}
            width={800}
            alt="hero-image"
            className="rounded-[20px]"
          />
        </figure> */}
        <div className="flex items-start justify-start w-4/5">
          <h2 className="text-[30px] pt-6 text-justify">WHERE ART MEETS CANINE CHARM</h2>
        </div>
        
          <div className="flex items-start justify-start w-4/5">
            <p className="text-[22px] text-justify text-white">
              Unleash your creativity and embark on a paw-some artistic
              adventure with our unique Dog Drawing sessions.
            </p>
          
        </div>
      </div>
    </>
  );
}
