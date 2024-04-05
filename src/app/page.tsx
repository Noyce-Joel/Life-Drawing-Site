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
import Head from "next/head";
import ContactSection from "./components/contact/ContactSection";

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
    <>
      <Head>
        <title>Dog Life Drawing</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-screen w-full overflow-y-scroll overflow-x-hidden"
        >
          <Nav />
          <Hero />
          <Sessions />
          <Why />
          <Models />
          <Events comp={true} />
          <Gallery results={results} />
          <ContactSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
