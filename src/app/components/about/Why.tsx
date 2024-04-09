
import React from "react";
import Dogs2 from "../loading/Dogs2";
import Line from "../line/Line";
import { copy } from "../../../../public/copy/copy";
import Dogs7 from "../loading/Dogs7";
import Image from "next/image";
export default function Sessions() {
  return (
    <article className="flex flex-col pt-12 md:pt-32 relative border-b border-gray-500 bg-[#64D3FA]  pb-24 md:pb-44 justify-end items-end h-auto font-extrabold text-[40px] ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[8vw] md:text-[59px] mb-6 text-[#FA6B60] ">
        WHY US?
        <Line duration={1} color="#000000" title={false} />
      </div>
      <div className="absolute md:flex hidden justify-end right-10 w-2/12 top-10 z-40 ">
      <Image src='/2.png' alt='dog illustration' height={350} width={350} className="bg-[#64D3FA]  "/>
      </div>
      <div className="flex relative md:w-4/5 pt-12 ">
        <div className=" md:justify-start md:items-start justify-center items-center flex flex-col ">
          <div className="flex flex-col items-start justify-start w-4/5 pb-12 lg:pb-24 ">
            <b className="   w-4/5 md:w-full lg:w-4/5 font-semibold sm-heading text-[45px] text-[#FA6B60]">
              Creativity Unleashed
            </b>
            <p className="sm-text md-text lg-text w-full lg:pt-5">
              {copy.why_creativity_unleashed}
            </p>
          </div>
          <div className="flex  w-full relative  md:pt-4  md:-ml-24 pb-12 lg:pb-0 ">
           
           
            <p className="sm-white-text md-white-text lg-white-text  md:w-1/2 w-full text-[#FA6B60]">
              {copy.why_white_text}
            </p>
            <div className="md:flex hidden z-40 w-1/2 px-12">
            <Image src='/HERO.jpg' alt='dog illustration' height={750} width={750} className="bg-[#64D3FA] rounded-[20px]  w-full"/>
            </div>
          </div>

          <div className="flex flex-col items-start   h-full relative justify-start md:w-4/5 w-4/5 lg:pt-32 ">
            <b className="  w-4/5 md:w-full font-semibold lg:w-3/5 sm-heading text-[45px] text-[#FA6B60] ">
              Stress-free Environment
            </b>
            <p className=" sm-text md-text lg-text w-full lg:pt-5 lg:pb-0 pb-12">
              {copy.why_stress_free}
            </p>
          </div>
          <div className="flex flex-col w-4/5 justify-start items-start md:pt-24">
            <b className="   md:w-9/12 sm-heading text-[45px] font-semibold text-[#FA6B60]">
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
