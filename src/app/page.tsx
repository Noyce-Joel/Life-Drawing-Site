"use client";

import Image from "next/image";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { AnimatePresence, motion } from "framer-motion";
import Sessions from "./components/about/Sessions";
import Models from "./components/about/Models";
import Why from "./components/about/Why";
import Footer from "./components/footer/Footer";
import EventsList from "./components/events/EventsList";


export default function Home() {
  return (
    <AnimatePresence mode='wait' >
    <motion.div
    
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2}}
      className="relative h-screen w-screen "
    >
      
      
      
        <Nav />
      
      
      <Hero />
      <Sessions />
      <Why />
      <Models />
      <Events />
      
      <Footer />
    </motion.div>
    </AnimatePresence>
  );
}
