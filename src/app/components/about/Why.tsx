import React from "react";
import { copy } from "../../../../public/copy/copy";
import Image from "next/image";
export default function Why() {
  return (
    <article className="flex flex-col relative pt-20 pb-14  ">
     <Image
          src="/4.png"
          alt="dog illustration"
          height={280}
          width={280}
          className="ml-28  h-auto w-[24vw] md:w-[12vw]"
        />

      <div className="flex w-full h-full md:flex-row items-center justify-center md:ml-32 flex-col gap-16  ">
        <p className="flex justify-start w-4/5 h-full md:w-2/3 lg-white-text md-white-text  sm-white-text pb-12 text-[#DA7835]">
          {copy.why_white_text}
        </p>
        <div className=" flex md:w-full w-[90vw] h-full  relative">
          <div className="flex w-full h-full absolute  -top-10 -left-10 bg-[#FFD04D] -z-10 rounded-[20px]" />
          <Image
            src="/HERO.jpg"
            alt="dog illustration"
            height={950}
            width={950}
            className="rounded-[20px] w-full h-full "
          />
        </div>
      </div>
      <div className="flex gap-20 pt-12">
        <div className="md:flex hidden  md:w-auto relative mt-20">
          <div className="bg-[#F7C2BC] flex w-full h-full rounded-[20px] absolute -top-10 -right-10  " />
          <Image
            src="/Dog-Model2Low.jpeg"
            height={480}
            width={480}
            alt="hero-image"
            className="rounded-[10px] z-10 flex w-full"
          />
        </div>
        <div className="flex flex-col gap-12 pt-12 md:pt-24 sm-text md-text lg-text w-4/5 md:w-3/5 mx-auto justify-center items-center md:justify-start md:items-start ">
          <div className="flex md:w-4/5 flex-col gap-4">
            <b className="font-semibold  whitespace-nowrap  text-[#DA7835]">
              Creativity Unleashed
            </b>
            <p>{copy.why_creativity_unleashed}</p>
          </div>
          <div className="flex md:w-4/5 flex-col gap-4">
            <b className="whitespace-nowrap font-semibold  text-[#DA7835]">
              Stress-free Environment
            </b>
            <p>{copy.why_stress_free}</p>
          </div>
          <div className="flex md:w-4/5 flex-col gap-4">
            <b className=" text-[#DA7835] font-semibold ">
              Unique Bonding Experience
            </b>
            <p>{copy.why_bonding}</p>
          </div>
        </div>
      </div>
      <Image
        src="/2.png"
        alt="dog illustration"
        height={280}
        width={280}
        className=" bg-[#EDEAE6] w-[24vw] md:w-[10vw] pt-24 flex mx-auto  z-40"
      />
      
    </article>
  );
}
