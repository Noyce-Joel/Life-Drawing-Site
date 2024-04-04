"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import Line from "../line/Line";
import Dogs3 from "../loading/Dogs3";
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
      <div className="flex w-full pl-12 lg:pl-72 relative flex-col md:pt-24 pt-12  font-bold text-[8vw] md:text-[75px]  border-t bg-[#092a0f] border-gray-500 mt-44 text-[#f4b923]">
        Gallery
        <Line duration={1} color="white" title={false} />
      </div>

      <div className="flex h-fit w-full justify-center gap-2 md:gap-7 mt-12 px-2 md:px-32 overflow-y-scroll -z-40 border-b border-gray-500 md:pb-24 pb-12">
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

      
    </>
  );
}
