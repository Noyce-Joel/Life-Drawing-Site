"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import Line from "../line/Line";

export default function Gallery({ results }: { results: any }) {
  const columns = (colIdx: number) => {
    return results.resources.filter((_: any, idx: number) => {
      return idx % 3 === colIdx;
    });
  };
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
        duration: 1,
      },
    },
  };
  return (
    <>
      <div className="flex w-full pl-12 lg:pl-72 relative flex-col pt-24 font-bold text-[30px] md:text-[75px]  border-t border-gray-900 mt-44 text-white">
        Gallery
        <Line color="white" title={false} />
      </div>

      <div className="flex h-fit w-full justify-center gap-2 md:gap-7 mt-12 px-2 md:px-7 overflow-y-scroll -z-40">
        {[columns(0), columns(1), columns(2)].map((col, idx) => (
          <motion.div
            variants={container}
            whileInView="whileInView"
            initial="initial"
            key={idx}
            className="flex flex-col gap-2 md:gap-10"
          >
            {col.map(
              (
                result: { public_id: any },
                idx: React.Key | null | undefined
              ) => (
                <div key={idx} className={"flex w-auto h-auto rounded-[25px] "}>
                  <motion.div
                    variants={item}
                    whileInView="whileInView"
                    initial="initial"
                  >
                    <CldImage
                      src={result.public_id}
                      alt="img"
                      height={700}
                      width={700}
                      className="rounded-[20px] w-full h-full "
                    />
                  </motion.div>
                </div>
              )
            )}
           
          </motion.div>
          
        ))}
        
      </div>
     
        <div className="flex flex-col justify-center border-t bg-[#8b6441] border-gray-900 relative md:pb-20  items-center md:pt-24 mt-12">
          <p className="text-center text-white flex w-4/5 md:w-1/2 sm-text md-text lg-text py-12">
            Let&#39;s sketch, share, and wag our way to a gallery of
            heartwarming masterpieces!
          </p>
        </div>

    </>
  );
}
