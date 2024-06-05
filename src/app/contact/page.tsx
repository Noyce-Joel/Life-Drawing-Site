"use client";

import React from "react";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/footer/Footer";

export default function page() {
  return (
    <AnimatePresence mode="wait">
      <div className="flex  h-auto absolute top-4 left-0 right-0 z-40 justify-center md:justify-start mx-auto">
        <Image src="/Logo.png" alt="logo" height={150} width={150} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative h-[100vh] w-full  overflow-y-scroll"
      >
        <div className="absolute mx-auto w-full">
          <Nav
            color="text-[#000000]"
            hoverColor="text-[#DA7835]"
            socials="#000000"
            socialsHover="#DA7835"
          />
        </div>

        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
