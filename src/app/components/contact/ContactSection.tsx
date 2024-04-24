import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="w-full flex relative  justify-center p-16 pb-44 md:p-32  ">
      <div className="flex w-full md:w-1/2 flex-col md:m-8 p-12 text-[#EDEAE6] items-start rounded-[20px] relative ">
        <div className="bg-[#334D42]  flex w-full rounded-[20px] h-full absolute -z-20 top-0 left-0 " />
        <motion.div
          initial={{ x: 0, y: 0 }}
          whileInView={{
            x: 30,
            y: 30,

            transition: {
              type: "spring",
              duration: 1,
              delay: 0.6,
              damping: 18,
              stiffness: 80,
              friction: 40,
              mass: 1.6,
            },
          }}
          className="bg-[#F7C2BC]  flex w-full rounded-[20px] h-full absolute -z-30 top-0 left-0 "
        />
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
          whileInView={{
            x: 60,
            y: 60,

            transition: {
              type: "spring",
              duration: 1,
              delay: 0.6,
              damping: 18,
              stiffness: 80,
              friction: 40,
              mass: 1.6,
            },
          }}
          className="bg-[#DA7835]  flex w-full rounded-[20px] h-full absolute -z-40 top-0 left-0 "
        />
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
          whileInView={{
            x: 90,
            y: 90,

            transition: {
              type: "spring",
              duration: 1,
              delay: 0.6,
              damping: 18,
              stiffness: 80,
              friction: 40,
              mass: 1.6,
            },
          }}
          className="bg-[#FFD04D]  flex w-full rounded-[20px] h-full absolute -z-50 top-0 left-0 "
        />
        <motion.div className="w-full h-full gap-12 flex flex-col">
          <div className="flex text-[4vw] md:text-[3vw]">GET IN TOUCH</div>

          <p className="sm-text md-text lg-text w-full  ">
            We would love to hear from you. Please feel free to reach out to us
            about anything from modelling, collaborating, or just to say hi.
          </p>

          <button className="border hover:bg-[#EDEAE6] hover:text-[#DA7835] text-[2.4vw] py-2 px-4 rounded">
            <Link href="/contact">Contact</Link>
          </button>
        </motion.div>
      </div>
      <div className="absolute  bottom-0  left-0 md:left-20  -z-0 w-[14vw] flex">
        <Image src="/1.png" alt="dog illustration" height={380} width={380} />
      </div>
      <div className="absolute hidden md:flex bottom-0  md:right-20  -z-0 w-[14vw] flex">
        <Image src="/3.png" alt="dog illustration" height={380} width={380} />
      </div>
    </div>
  );
}
