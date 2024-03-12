import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import { copy } from "../../../../public/copy/copy";

export default function Models() {
  return (
    <article className="flex flex-col pt-12 border-b border-gray-900 pb-12 md:pt-32 relative justify-end items-end font-extrabold  ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[45px] md:text-[59px] mb-6 text-white">
        MODELS
        <Line color='white' title={false} />
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <p className=" text-black  md:w-3/5 w-5/6 pt-12 lg-text md-text sm-text">
          {copy.models_usp}
        </p>

        <div className="flex w-5/6 justify-start items-start pt-16 lg:ml-7 ">
          <div className="flex flex-col gap-12 justify-center items-center md:items-end ">
            <p className=" text-white flex items-end md:-mr-56 lg:-mr-36 md:w-auto lg-white-text md-white-text sm-white-text">
              {copy.models_white_text}
            </p>
            <p className="md:pr-12 lg:w-4/5 lg-text md-text sm-text ">
              <span className="session-text-hide-two">
                {copy.models_split_text}
              </span>
              <span className="session-text-hide">
                {copy.models_split_text_two}
              </span>
            </p>
          </div>
          <Image
            src="/Dog-model2.jpg"
            height={500}
            width={500}
            alt="hero-image"
            className="rounded-[10px] lg:-mt-12 -z-10 md:flex hidden"
          />
        </div>
        <p className="session-text-show-two hidden w-3/5 sm-text md-text lg-text pt-12  ">
          {" "}
          {copy.models_sm_screen}
        </p>
      </div>
    </article>
  );
}
