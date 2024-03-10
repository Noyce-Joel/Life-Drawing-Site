
import Image from "next/image";
import React from "react";
import Line from "../line/Line";
import { CldImage } from "next-cloudinary";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-12 border-b  border-gray-900 pb-12 md:pb-24 md:pt-32 relative justify-end items-end font-extrabold  ">
      
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[45px] md:text-[59px] mb-6 text-white">
        SESSIONS
        <Line title={false}/>
      </div>
      
      <div className="flex flex-col justify-center items-center relative">
        <p className=" text-black md:w-3/5 w-4/5 pt-12 lg-text md-text sm-text">
          Unleash your creativity and embark on a paw-some artistic adventure
          with our unique Dog Drawing sessions.
        </p>

        <div className="flex w-5/6 justify-start items-start pt-12 lg:mr-7">
          <Image
            src="/Dog.jpg"
            height={500}
            width={500}
            alt="hero-image"
            className="rounded-[10px] md:flex hidden"
          />
         
          <div className="flex flex-col gap-12 justify-center items-center md:items-start md:pt-12">
          <Image
            src="/Dog.jpg"
            height={500}
            width={500}
            alt="hero-image"
            className="rounded-[10px] md:flex hidden"
          />
            <p className=" text-white flex md:-ml-56 lg:-ml-36 md:w-auto lg-white-text md-white-text sm-white-text">
              You&#39;ll be guided by talented instructors who are not only
              passionate about art but also share a deep love for dogs.
            </p>
            <p className="md:pl-12 lg:w-4/5 lg-text md-text sm-text">
              <span className="session-text-hide-two">
                Our dog life drawing sessions blend the joy of artistic
                expression with the undeniable charm of our favourite furry
                friends.
              </span>{" "}
              <span className="session-text-hide">
                {" "}
                Whether you&#39;re an experienced artist or a complete novice,
                our sessions cater to all skill levels.
              </span>
            </p>
          </div>
        </div>
        <p className=" session-text-show-two hidden w-3/5 sm-text md-text lg-text pt-12  ">
          {" "}
          Our dog life drawing sessions blend the joy of artistic expression
          with the undeniable charm of our favourite furry friends.
        </p>

        <p className="w-full justify-center border-top border-gray-900 hidden session-text-show  sm-text md-white-text lg-text pt-24   ">
          <span className=" flex w-3/5">
            Whether you&#39;re an experienced artist or a complete novice, our
            sessions cater to all skill levels.
          </span>
        </p>
      </div>
    </article>
  );
}
