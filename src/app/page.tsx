"use client";

import Image from "next/image";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { motion } from "framer-motion";
import Sessions from "./components/about/Sessions";
import Models from "./components/about/Models";
import Why from "./components/about/Why";
import Title from "./components/hero/Title";
import Footer from "./components/footer/Footer";


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
      <Sessions />
      <Why />
      <Models />
      <Events />
      <Footer />
    </motion.div>
  );
}
