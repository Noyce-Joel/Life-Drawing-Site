"use client";

import Image from "next/image";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    >
      
       
       
      <Nav />
      <Hero />
      <Events />
    </motion.div>
  );
}
