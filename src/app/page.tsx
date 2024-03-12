"use client";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import { AnimatePresence, motion } from "framer-motion";
import Sessions from "./components/about/Sessions";
import Models from "./components/about/Models";
import Why from "./components/about/Why";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import { useEffect, useState } from "react";
import fetchImages from "./services/fetchImages";

export default function Home() {
  const [results, setResults] = useState<any>({ resources: [] });

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchImages();
      setResults(res);
    };
    fetch();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="relative h-screen w-screen"
      >
        <Nav />
        <Hero />
        <Sessions />
        <Why />
        <Models />
        <Events comp={true}/>
        <Gallery results={results} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
