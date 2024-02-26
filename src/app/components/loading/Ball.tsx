import { motion } from 'framer-motion'
import React from 'react'

export default function Ball() {
  return (
    <motion.div

     
      
      className=" mx-auto h-[700px] absolute left-0 w-[700px] bounce bg-gray-900  rotate-12 -top-80 lg:flex hidden -z-40 rounded-full "
    ></motion.div>
  )
}
