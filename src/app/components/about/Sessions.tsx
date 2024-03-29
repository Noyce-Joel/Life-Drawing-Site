import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import { CldImage } from "next-cloudinary";
import { copy } from "../../../../public/copy/copy";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-12 border-b  border-gray-500 pb-12 md:pb-24 md:pt-32 relative justify-end items-end font-extrabold  ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[11vw] md:text-[59px] mb-6 ">
        SESSIONS
        <Line color='white' title={false} />
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <p className=" md:w-3/5 w-5/6 pt-12 lg-text md-text sm-text">
          {copy.sessions_unleash}
        </p>

        <div className="flex flex-col md:flex-row w-5/6 justify-start items-center md:items-start pt-12 lg:mr-7">
          <Image
            src="/Dog.jpg"
            height={500}
            width={500}
            alt="hero-image"
            className="rounded-[10px]  pb-12 md:pb-0 flex"
          />

          <div className="flex flex-col gap-12 justify-center items-center md:items-start md:pt-12">
            <p className="  flex md:-ml-56 lg:-ml-36 md:w-auto lg-white-text md-white-text sm-white-text">
              {copy.sessions_white_text}
            </p>
            <p className="md:pl-12 w-full lg:w-4/5 lg-text md-text sm-text md:pt-12">
              <span className="session-text-hide-two ">
                {copy.sessions_our_dogs}
              </span>{" "}
              <span className="session-text-hide w-full"> {copy.sessions_level}</span>
            </p>
          </div>
        </div>
        <p className="session-text-show-two hidden w-4/5 lg:w-3/5 sm-text md-text lg-text pt-12  ">
          {" "}
          {copy.sessions_our_dogs}
        </p>

        <p className="w-full justify-center border-top border-gray-500 hidden session-text-show  sm-text md-white-text lg-text md:pt-24 pt-12  ">
          <span className=" flex w-3/5">{copy.sessions_level}</span>
        </p>
      </div>
    </article>
  );
}
