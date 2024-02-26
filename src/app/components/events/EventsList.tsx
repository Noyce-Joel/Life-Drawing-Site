import { motion } from 'framer-motion'
import React from 'react'

export default function EventsList() {
  return (
    <article className="flex flex-col pt-40 justify-end items-end h-auto font-extrabold text-[90px] ">
    <div className="flex w-1/2 md:w-4/5 relative flex-col font-bold text-[30px] md:text-[70px] mb-6 text-white">
      UPCOMING EVENTS
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: {
            duration: 1.4,

            type: "tween",

            ease: "anticipate",
          },
        }}
        className="w-full -z-40 origin-right md:-mt-5 border-b border-[1.9px]"
      ></motion.div>
    </div>
     
        <div className="flex justify-center relative w-4/5 items-center md:justify-start md:items-start pt-6 md:pt-16">
          <p className="text-justify text-white flex  w-4/5 text-[27px] md:text-[37px]">
            Ready to embark on a journey of artistic discovery, BOOK HERE and
            join Dog Life Drawing, where every stroke of your pencil is a
            celebration of the beautiful bond between humans and their furry
            friends. 
          </p>
        </div>
      
    </article>
  )
}
