import Image from "next/image";
import React from "react";
import { copy } from "../../../../public/copy/copy";

export default function Models() {
  return (
    <section className="flex flex-col justify-center items-center text-black relative">
      <article className="flex relative  w-4/5 md:w-3/5 justify-center items-center flex-col gap-12 ">
        <p className="flex relative md:w-4/5 pt-8 md:pt-12 lg-text  md-text sm-text">
          {copy.models_usp}
        </p>
        <p className="flex lg-white-text md-white-text  sm-white-text z-20 text-[#DA7835]">
          {copy.models_white_text}
        </p>
        <p className="md:w-4/5 flex flex-col   lg-text md-text sm-text ">
          {copy.models_split_text}
        </p>
      </article>
      <div className="absolute w-[12vw] -bottom-4 right-24 md:flex hidden -z-40">
        <Image
          src="/5.png"
          alt="dog illustration"
          height={280}
          width={280}
          className="bg-[#EDEAE6]"
        />
      </div>
    </section>
  );
}
