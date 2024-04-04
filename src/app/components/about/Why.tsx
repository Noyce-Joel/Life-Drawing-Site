import Image from "next/image";
import React from "react";
import Dogs2 from "../loading/Dogs2";
import Line from "../line/Line";
import { copy } from "../../../../public/copy/copy";
import Dogs7 from "../loading/Dogs7";
export default function Sessions() {
  return (
    <article className="flex flex-col pt-12 md:pt-32 relative border-b border-gray-500  pb-24 md:pb-44 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[8vw] md:text-[59px] mb-6 text-[#f4b923] ">
        WHY US?
        <Line duration={1} color="white" title={false} />
      </div>
      <div className="absolute md:flex hidden justify-end right-0 w-2/12 bg-[#092a0f] -top-[7rem] z-40 ">
        <Dogs2 duration={7} delay={0.5} size="150pt" />
      </div>
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col ">
          <div className="flex flex-col items-start justify-start w-4/5 pb-12 lg:pb-24 ">
            <b className="   w-4/5 md:w-full lg:w-4/5 font-semibold sm-heading text-[45px] text-[#f4b923]">
              Creativity Unleashed
            </b>
            <p className="sm-text md-text lg-text w-full lg:pt-5">
              {copy.why_creativity_unleashed}
            </p>
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:justify-start relative md:items-start md:pt-4  md:-ml-24 pb-12 lg:pb-0 ">
            {/* <div className="flex w-1/2 h-[500px] absolute -right-44  bg-gray-900/40 rounded-[20px] -z-40" /> */}
            <Image
              src="/dog2.svg"
              height={570}
              width={570}
              alt="hero-image"
              className="rounded-[10px] invert reverse md:flex hidden absolute -top-56 -z-40 md:-right-60 "
            />
            
            <p className="sm-white-text md-white-text lg-white-text  md:w-full lg:w-3/4 w-full">
              {copy.why_white_text}
            </p>
          </div>

          <div className="flex flex-col items-start   h-full relative justify-start md:w-4/5 w-4/5 lg:pt-32 ">
            <b className="  w-4/5 md:w-full font-semibold lg:w-3/5 sm-heading text-[45px] text-[#f4b923] ">
              Stress-free Environment
            </b>
            <p className=" sm-text md-text lg-text w-full lg:pt-5 lg:pb-0 pb-12">
              {copy.why_stress_free}
            </p>
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:pt-24">
            <b className="   md:w-9/12 sm-heading text-[45px] font-semibold text-[#f4b923]">
              Unique Bonding Experience
            </b>
            <p className=" sm-text md-text lg-text w-full lg:pt-5">
              {copy.why_bonding}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
