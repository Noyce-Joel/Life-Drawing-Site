import React from "react";
import Title from "./Title";
import Stickman from "../loading/Stickman";
export default function Hero() {
  return (
    <div className="border-b border-gray-500 pb-7 md:pb-24 pt-24 z-10">
      <Title />
      
      <h2 className="pt-7 md:pt-24 flex h-full justify-end w-full lg:px-44 px-6 text-[40px] md:text-[50px] lg:text-[55px]">
        Welcome to Dog Life Drawing
      </h2>
    </div>
  );
}
