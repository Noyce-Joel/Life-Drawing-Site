import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Sessions() {
  return (
    <article className="flex flex-col pt-32 border-b border-gray-900 pb-24 md:pb-32 md:pt-32 relative justify-end items-end h-auto font-extrabold text-[40px] ">
      
      <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[30px] md:text-[70px] mb-6 text-white">
        SESSIONS
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 1.4,
              delay: 0.4,
              type: "tween",

              ease: "anticipate",
            },
          }}
          className=" -z-40 origin-right md:-mt-5 border-b border-[1.2px]"
        ></motion.div>
      </div>

      <div className="flex flex-col justify-center items-center relative md:w-full">
        <p className=" text-black text-justify md:w-3/5 w-4/5 md:pt-12 lg-text md-text sm-text">
          Unleash your creativity and embark on a paw-some artistic adventure
          with our unique Dog Drawing sessions.
        </p>

        <div className="flex w-5/6 justify-start items-start pt-12">
          <Image
            src="/dog.jpg"
            height={500}
            width={500}
            alt="hero-image"
            className="rounded-[10px]  md:flex hidden -z-40"
          />
          <div className="flex flex-col relative justify-center items-center md:justify-start md:items-start pt-6 md:pt-12">
            <p className="text-justify text-white flex md:-ml-56 lg:-ml-36 w-3/4 md:w-auto lg-white-text md-white-text sm-white-text">
              You&#39;ll be guided by talented instructors who are not only
              passionate about art but also share a deep love for dogs.
            </p>
            <p className=" text-justify md:pl-12 md-width lg-width pt-12  lg-text md-text sm-text ">
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
        <p className="text-justify session-text-show-two hidden w-3/5 sm-text md-text lg-text pt-12  ">
          {" "}
          Our dog life drawing sessions blend the joy of artistic expression
          with the undeniable charm of our favourite furry friends.
        </p>

        <p className="w-full text-justify  justify-center border-top border-gray-900 hidden session-text-show  sm-text md-white-text lg-text pt-24   ">
          <span className=" flex w-3/5">
            Whether you&#39;re an experienced artist or a complete novice, our
            sessions cater to all skill levels.
          </span>
        </p>
      </div>
    </article>
  );
}
