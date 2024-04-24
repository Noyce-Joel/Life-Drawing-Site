import React, { Suspense, useState } from "react";

import Image from "next/image";
import Line from "../line/Line";
import { motion } from "framer-motion";


export default function Title({title, tileColor, slogan, image}: {title: string[], tileColor: string, slogan: string, image: string}) {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex mt-20 ">
      <div className="flex w-2/3 h-full flex-col  text-center  gap-10 ">
        <div className=" text-[6vw] flex text-left items-center mx-auto flex-col pt-12 text-[#DA7835]">
          <span>{title[0]}</span>
          <span>{title[1]} {title[2]}</span>
        </div>

        <div className="flex pb-6  -z-40">
          <Line duration={2} color="#000000" title={false} />
        </div>
        <p className="flex justify-center text-[2.4vw] italic ">
          {slogan}
        </p>
      </div>
      <div className="flex w-1/2 md:w-1/3 lg:w-1/4 ">
        <motion.div 
        
        className="  relative ">
          <motion.div
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{opacity: 1, transition: {duration: 0.2, delay: 0.2} }}
            whileInView={{ x: -20, y: -20, transition: {type: 'spring', duration: 1, delay: 0.4, damping: 18, stiffness: 80, friction: 40, mass: 1.2 } }}
            style={{backgroundColor: `${tileColor}`, }}
            className="flex w-full h-full absolute  top-0 left-0 -z-10 rounded-[20px]"
          />
          <motion.div
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: 20, y: 20, transition: {type: 'spring', duration: 1, delay: 0.4, damping: 18, stiffness: 80, friction: 40, mass: 1.2 } }}
            className="w-full h-full flex"
          >
            <Image
              src={image}
              alt="dog illustration"
              height={750}
              width={750}
             priority={true}
              className="rounded-[20px] "
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
    </Suspense>
  );
}
