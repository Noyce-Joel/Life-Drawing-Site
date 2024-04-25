import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="w-full flex relative justify-center  pb-52 md:px-32  ">
      <div  onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false) } className="flex w-full md:w-[54vw] lg:w-1/2 flex-col lg:m-8 p-12 text-[#EDEAE6] items-start rounded-[20px] relative ">
        <div className="bg-[#334D42]  flex w-full rounded-[20px] h-full absolute -z-20 top-0 left-0 " />
        <motion.div
         
          animate={{
            x: hovered ? 30 : 0,
            y: hovered ? -30 : 0,
            scale: hovered ? 1 : 0.9,
            transition: {
              type: "spring",
              duration: 1,
              delay: 0.1,
              damping: 18,
              stiffness: 80,
              friction: 80,
              mass: 1.6,
            },
          }}
          viewport={{  }}
          className=" bg-[#DA7835] flex w-full rounded-[20px] h-full absolute -z-30 top-0 left-0 "
        />
        <motion.div
         
         
          animate={{
            x: hovered ? 60 : 0,
            y: hovered ? -60 : 0,
            scale: hovered ? 1 : 0.9,

            transition: {
              type: "spring",
              duration: 1,
              delay: 0.2,
              damping: 18,
              stiffness: 80,
              friction: 80,
              mass: 1.6,
            },
          }}
          className=" bg-[#F7C2BC] flex w-full rounded-[20px] h-full absolute -z-40 top-0 left-0 "
        />
        <motion.div
        
         
          animate={{
            x: hovered ? 90 : 0,
            y: hovered ? -90 : 0,
            scale: hovered ? 1 : 0.9,

            transition: {
              type: "spring",
              duration: 1,
              delay: 0.3,
              damping: 18,
              stiffness: 80,
              friction: 80,
              mass: 1.6,
            },
          }}
          className="bg-[#FFD04D]  flex w-full rounded-[20px] h-full absolute -z-50 top-0 left-0 "
        />
        <motion.div className="w-full h-full gap-12 flex flex-col">
          <div className="flex text-[4vw] mx-auto md:text-[3vw]">GET IN TOUCH</div>

          <p className="sm-text md-text lg-text w-full  ">
            We would love to hear from you. Please feel free to reach out to us
            about anything from modelling, collaborating, or just to say hi.
          </p>

          <button className="border hover:bg-[#EDEAE6] hover:text-[#DA7835] text-[2.4vw] py-2 px-4 rounded">
            <Link href="/contact">Contact</Link>
          </button>
        </motion.div>
      </div>
      <div className="absolute  bottom-0  left-0 md:left-20  -z-0 w-[24vw] md:w-[14vw] flex">
        <Image src="/1.png" alt="dog illustration" height={380} width={380} />
      </div>
     
    </div>
  );
}
