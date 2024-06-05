import { motion, useInView } from 'framer-motion'
import { title } from 'process'
import React from 'react'

export default function Line({duration, title, color}: {duration: number, title: boolean, color: string}) {


  return (
    <>
    <motion.div
    initial={{ scale: 0.1 }}
    whileInView={{
      scale: 1,
      
    }}
    transition= {{
      duration: duration,
      delay: 0.7,
      type: "tween",
      repeat: 0,
      ease: "anticipate",
    }}
    viewport={{once: true}}
    style={{borderColor: `${color}`}}
    className={`w-full origin-right opacity-75 border-b  ${title ? 'border-[0.8px] bottom-0' : 'border-[0.8px] bottom-0 md:bottom-0'}`}
  ></motion.div>
</>
  )
}
