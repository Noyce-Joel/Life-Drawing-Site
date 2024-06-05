"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Gallery({ results }: { results: any }) {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const container = {
    whileInView: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="relative z-20 flex h-[60rem] -mt-16  w-full "
      >
        <motion.div
          variants={container}
          whileInView="whileInView"
          initial="initial"
          onWheel={(e) => { setTimeout(() => {
            setScrolled(true)
          }, 4000)
            }}
          className="flex flex-row md:gap-6 overflow-x-scroll scrollbar-hide items-center md:px-12  w-full h-full"
        >
          {results.resources.map(
            (result: { public_id: any }, idx: React.Key | null | undefined) => (
              <motion.div
                key={idx}
                variants={item}
                whileInView="whileInView"
                initial="initial"
                className={`flex-none md:p-0 p-4 transition-all duration-500 ease-in-out z-50 hover:cursor-pointer hover:scale-105 ${
                  selectedImage === idx
                    ? " md:h-[80vh] h-[70vh] w-auto z-50 "
                    : "h-[27rem] w-auto"
                }`}
                onClick={() =>
                  setSelectedImage(
                    selectedImage === idx ? null : (idx as number)
                  )
                }
              >
                <CldImage
                  src={result.public_id}
                  alt="img"
                  height={700}
                  width={700}
                  className="rounded-[20px] relative h-full w-auto flex hover-scale-105 transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            )
          )}
        </motion.div>
        
          <motion.div
          animate={{opacity: scrolled ? 0 : 1, transition: {duration: 1}  }}
            className={`flex absolute top-[10rem] gap-8  w-full justify-center items-center transition-all duration-1000 ease-in-out `}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Scroll
            <ArrowRightIcon className="h-4 w-4" />
          </motion.div>
       
        <div className="md:flex hidden absolute inset-y-0 left-0 md:w-14 w-8 bg-gradient-to-r from-[#EDEAE6] via-[#EDEAE6] to-transparent"></div>
        <div className="md:flex hidden absolute inset-y-0 right-0 md:w-14 w-8 bg-gradient-to-l from-[#EDEAE6] via-[#EDEAE6] to-transparent"></div>
      </motion.div>
    </>
  );
}
