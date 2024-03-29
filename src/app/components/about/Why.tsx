import Image from "next/image";
import React from "react";

import Line from "../line/Line";
import { copy } from "../../../../public/copy/copy";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-12 md:pt-32 relative border-b border-gray-500  -z-10 pb-24 md:pb-32 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[11vw] md:text-[59px] mb-6 ">
        WHY US?
        <Line color="white" title={false} />
      </div>
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col ">
          <div className="flex flex-col items-start justify-start w-4/5 pb-12 lg:pb-24 ">
            <b className="   w-4/5 md:w-full lg:w-4/5 font-semibold sm-heading text-[45px]">
              Creativity Unleashed
            </b>
            <p className="sm-text md-text lg-text w-full lg:pt-5">
              {copy.why_creativity_unleashed}
            </p>
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:justify-start relative md:items-start md:pt-4  md:-ml-24 pb-12 lg:pb-0 ">
            {/* <div className="flex w-1/2 h-[500px] absolute -right-44  bg-gray-900/40 rounded-[20px] -z-40" /> */}
            <Image
              src="/sketch2.png"
              height={570}
              width={570}
              alt="hero-image"
              className="rounded-[10px] invert md:flex hidden absolute -top-32 -z-40 md:-right-44 lg:-bottom-60 "
            />
            <p className="sm-white-text md-white-text lg-white-text  md:w-full lg:w-3/4 w-full">
              {copy.why_white_text}
            </p>
          </div>

          <div className="flex flex-col items-start   h-full relative justify-start md:w-4/5 w-4/5 lg:pt-32 ">
            <b className="  w-4/5 md:w-full font-semibold lg:w-3/5 sm-heading text-[45px] ">
              Stress-free Environment
            </b>
            <p className=" sm-text md-text lg-text w-full lg:pt-5 lg:pb-0 pb-12">
              {copy.why_stress_free}
            </p>
          </div>
          {/* <Image
              src="/sketch.png"
              height={290}
              width={290}
              alt="hero-image"
              className="rounded-[10px] invert md:flex hidden absolute -bottom-0 -z-40 md:-left-44 lg:-left-24 lg:-bottom-20  "
            /> */}
          <div className="flex flex-col w-4/5 justify-start items-start md:pt-24">
            <b className="   md:w-9/12 sm-heading text-[45px] font-semibold ">
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
