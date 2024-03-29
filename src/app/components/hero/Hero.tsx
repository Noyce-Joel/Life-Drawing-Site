import React from "react";
import Title from "./Title";

export default function Hero() {
  return (
    <div className="border-b  border-gray-500 pb-7 md:pb-24 pt-24 lg:pb-28 -z-50">
      
      <Title />
      <div className="text-left pt-7 md:pt-24 bg-[#222831] relative h-full items-center justify-center flex flex-col gap-7 tracking-wider text-pretty ">
        <div className="flex h-full items-center justify-end w-4/5 ">
          <h2 className="text-[40px]  md:text-[50px]  text-left ">
            Welcome to Dog Life Drawing
          </h2>
        </div>
      </div>
    </div>
  );
}
