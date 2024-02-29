import Image from "next/image";
import React from "react";
import Line from "../line/Line";

export default function Models() {
  return (
    <article className="flex text-justify flex-col pt-32 border-b border-gray-900 pb-12 md:pt-32 relative justify-end items-end font-extrabold  ">
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[45px] md:text-[70px] mb-6 text-white">
        MODELS
        <Line title={false} />
      </div>

      <div className="flex flex-col justify-center items-center relative">
        <p className=" text-black text-justify md:w-3/5 w-4/5 pt-12 lg-text md-text sm-text">
          What sets us apart? Well, our models have wagging tails, wet noses,
          and a penchant for striking the most adorable poses.
        </p>

        <div className="flex w-5/6 justify-start items-start pt-16 lg:ml-7 ">
          <div className="flex flex-col gap-12 justify-center items-center md:items-end ">
            <p className=" text-white flex items-end md:-mr-56 lg:-mr-36 md:w-auto lg-white-text md-white-text sm-white-text">
              Forget traditional still life – our furry friends bring a dynamic
              and lively element to your sketches, making each session a
              delightful and unforgettable experience.
            </p>
            <p className="md:pr-12 lg:w-4/5 lg-text md-text sm-text ">
              <span className="session-text-hide-two">
                From the arc of a tail to the tilt of an ear, each moment
                presents an opportunity to explore.
              </span>
              <span className="session-text-hide">
                
                We have a diverse array of dog breeds to inspire your creations
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
        <p className="text-justify session-text-show-two hidden w-3/5 sm-text md-text lg-text pt-12  ">
          {" "}
          From the arc of a tail to the tilt of an ear, each moment presents an
          opportunity to explore. We have a diverse array of dog breeds to
          inspire your creations.
        </p>
      </div>
    </article>
  );
}
