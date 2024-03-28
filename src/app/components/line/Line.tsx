import { motion, useInView } from 'framer-motion'
import { title } from 'process'
import React from 'react'

export default function Line({title, color}: {title: boolean, color: string}) {


  return (
    <>
    <motion.div
    initial={{ scale: 0.1 }}
    whileInView={{
      scale: 1,
      
    }}
    transition= {{
      duration: 1.8,
      delay: 0.15,
      type: "tween",
      repeat: 0,
      ease: "anticipate",
    }}
    className={`w-full  origin-right border-b border-${color}-900  ${title ? 'border-[2px] bottom-0' : 'border-[1.2px] bottom-0 md:bottom-0'}`}
  ></motion.div>
</>
  )
}
