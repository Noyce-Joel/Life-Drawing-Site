import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import { copy } from "../../../../public/copy/copy";
import Dogs3 from '../loading/Dogs3'
export default function Models() {
  return (
    <article className="flex flex-col pt-12 border-b border-gray-500  pb-12 md:pt-32  md:pb-44 relative justify-end items-end font-extrabold  ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[8vw] md:text-[59px] text-[#f4b923]">
        MODELS
        <Line duration={1} color='white' title={false} />
      </div>
      <div className="absolute md:flex hidden justify-start left-0 w-2/12 bg-[#092a0f] -top-[9.5rem]">
              <Dogs3 duration={7} delay={0.5} size="180pt" />
              </div>
      <div className="flex flex-col justify-center items-center relative">
        <p className="md:w-3/5 w-5/6 pt-12 lg-text md-text sm-text">
          {copy.models_usp}
        </p>

        <div className="flex flex-col md:flex-row w-5/6 justify-start items-center md:items-start pt-16 lg:ml-7 ">
          <div className="flex flex-col gap-12 justify-center items-center md:items-end ">
            <p className="flex items-end md:w-auto lg:pr-12 lg-white-text md-white-text lg:pt-12 sm-white-text z-20">
              {copy.models_white_text}
            </p>
            <p className="md:pr-12 lg:w-4/5 lg-text md-text sm-text md:pt-12 ">
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
            className="rounded-[10px] z-10 flex pt-12 md:pt-0"
          />
        </div>
        <p className="session-text-show-two hidden md:w-3/5 w-5/6 sm-text md-text lg-text pt-24  ">
          {" "}
          {copy.models_sm_screen}
        </p>
      </div>
    </article>
  );
}
