import { motion } from 'framer-motion'
import { title } from 'process'
import React from 'react'

export default function Line({title}: {title: boolean}) {
  return (
    <>
    <motion.div
    initial={{ scale: 0.1 }}
    whileInView={{
      scale: 1,
      transition: {
        duration: 1.4,
        delay: 0.4,
        type: "tween",

        ease: "anticipate",
      },
    }}
    className={`w-full absolute  right-0 origin-right md:-mt-10 border-b  ${title ? 'border-[2px] bottom-0' : 'border-[1.2px] bottom-0 md:bottom-4'}`}
  ></motion.div>
</>
  )
}
