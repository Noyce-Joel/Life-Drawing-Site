import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Ball() {
  return (
    <>
       {/* <motion.div className=" mx-auto h-[100px] absolute left-44 w-[100px]  bg-gray-900  rotate-12 -top-56 lg:flex hidden -z-40 rounded-full "></motion.div> */}
      <Image src="/pup.png" alt="puppy" height={590} width={590} className=""/>
    </>
  );
}
