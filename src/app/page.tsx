"use client";

import Image from "next/image";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { motion } from "framer-motion";
import Sessions from "./components/about/Sessions";
import Models from "./components/about/Models";
import Why from "./components/about/Why";
import Footer from "./components/footer/Footer";
import EventsList from "./components/events/EventsList";


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1}}
    >
      <Image src='/dog3.png' height={350} width={350} alt="brush-strokes" className="hidden md:flex -z-50 absolute stroke-white fill-white z md:right-0 md:top-80 lg:right-36 lg:top-[40.5vh] "/>
      
      
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
