import Image from "next/image";
import React from "react";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div className=" flex relative h-screen md:h-screen m-0 p-0 gap-12 w-full justify-evenly md:px-24 px-0">
        <Loading />
        <motion.div className="absolute -left-[100%] gap-20 md:relative md:-left-0 md:flex justify-start flex-col -z-10 items-end h-auto">
          <Image
            src="/HERO.jpg"
            height={800}
            width={800}
            alt="hero-image"
            className="rounded-[20px]"
          />
          <Image
            src="/Dog-model.jpg"
            height={600}
            width={600}
            alt="hero-image"
            className="rounded-[20px]  "
          />
        </motion.div>

        <div className="flex flex-col gap-6 tracking-widest h-full w-1/2 justify-start items-start text-pretty font-bold ">
          <div className="flex flex-col justify-end">
            <div className="md:text-[70px] flex-col flex justify-center text-white items-start">
              <motion.div className="h-24 overflow-y-hidden">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 4, type: "spring", damping: 20 }}
                  className=""
                >
                  DOG
                </motion.div>
              </motion.div>
              <motion.div className="h-24 overflow-y-hidden">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 4, delay:0.1, type: "spring", damping: 20 }}
                  className=""
                >
                  LIFE
                </motion.div>
              </motion.div>

              <motion.div className="h-24 overflow-hidden">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 4,
                    type: "spring",
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  DRAWING
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    duration: 0.9,
                    type: "tween",
                    mass: 1,
                    ease: "anticipate",
                  },
                }}
                className="w-full origin-right border-b border-[1.9px]"
              ></motion.div>
            </div>
            <h2 className="text-[35px] w-[90%] flex  pt-6">
              WHERE ART MEETS CANINE CHARM
            </h2>
          </div>
          <p className="w-[90%] text-[30px] text-justify flex-nowrap justify">
            Unleash your creativity and embark on a paw-some artistic adventure
            with our unique Dog Drawing sessions.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col  pt-24 w-[100vw] h-auto pl-20 font-extrabold text-[40px] ">
          <div className="flex flex-col justify-start items-start font-bold text-[60px] mb-6 w-full text-white">
            SESSIONS
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 0.9,
                  type: "tween",
                  mass: 1,
                  ease: "anticipate",
                },
              }}
              className="w-full origin-right border-b border-[1.9px]"
            ></motion.div>
          </div>

          <p className="text-justify text-[40px]">
            Our dog life drawing sessions blend the joy of artistic expression
            with the undeniable charm of our favourite furry friends. Whether
            you&#39;re an experienced artist or a complete novice, our sessions
            cater to all skill levels.
          </p>
          <span className="h-12"> </span>
          <div className="flex justify-end items-end h-full">
            {" "}
            <p className="text-justify text-white flex w-3/4 justify-end items-end text-[50px]">
              You&#39;ll be guided by talented instructors who are not only
              passionate about art but also share a deep love for dogs.
            </p>
          </div>
        </div>
        <div className="w-3/4 pt-[300px] flex items-end justify-end pr-24">
          <Image
            src="/Dog.jpg"
            height={500}
            width={500}
            alt="photo"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </>
  );
}
