import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  Bars3Icon,
  CalendarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


const pages = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events", icon: CalendarIcon },
  { name: "Contact", href: "/contact" },
];

const container = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const item = {
  initial: { x: -325 },
  whileInView: {
    x: 50,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: -325,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const address = {
  initial: { x: -325 },
  whileInView: {
    x: 42,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  exit: {
    x: -325,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const DropDown = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="flex md:hidden relative text-gray-900 flex-col gap-12 w-full h-full p-4">
      <button
        onClick={() => handleClick()}
        className="absolute top-0 right-0 p-12"
      >
        <XMarkIcon className=" h-10 w-10" />
      </button>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        className="flex flex-col gap-12 pt-24 "
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className=" -m-4 w-screen flex flex-col overflow-hidden"
          >
            <motion.div
              variants={item}
              className="text-[5vh] font-bold -mb-2 "
            >
              <Link href={page.href}>
              {page.name}
              </Link>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        className="flex flex-col pt-14 text-[2vh]"
      >
        <motion.b variants={address}>Bloc Studios</motion.b>
        <motion.span variants={address}>Hicks Street,</motion.span>
        <motion.span variants={address}>Neepsend,</motion.span>
        <motion.span variants={address}>Sheffield</motion.span>
        <motion.span variants={address}>S3 8BL</motion.span>
      </motion.div>
    </div>
  );
};

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverTwo, setHoverTwo] = useState<boolean>(false);
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <div
        
        className="md:hidden fixed z-40 top-0 right-0 p-12 "
      >
        <Bars3Icon className="w-10 h-10 backdrop-blur-sm rounded-full hover:cursor-pointer" onClick={() => handleClick()}/>
      </div>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ y: -window.innerHeight }}
            animate={{
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                friction: 90,
                damping: 25,
              },
            }}
            exit={{
              y: -window.innerHeight - 40,

              transition: {
                delay: 0.5,
                duration: 1,
                type: "spring",
                friction: 90,
                damping: 20,
              },
            }}
            className="fixed z-50 bg-white w-screen h-screen"
          >
            <DropDown handleClick={handleClick} />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1.9 },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className="flex absolute justify-between w-full items-center -bottom-4 right-2"
            >
              <div className="pl-14 pt-5">
                <SocialIcon
                  style={{ width: "50px", height: "50px" }}
                  url="https://www.instagram.com/dog.lifedrawing/"
                  className="hover:scale-110 duration-200"
                  bgColor="transparent"
                  fgColor={"black"}
                />
                <SocialIcon
                  style={{ width: "50px", height: "50px" }}
                  url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                  className="hover:scale-110 duration-200"
                  bgColor="transparent"
                  fgColor={"black"}
                />
              </div>

              <Image
                src="/DOGLIFEDRAW2.png"
                alt="logo"
                height={200}
                width={200}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex-col md:flex-row px-4 z-40 py-4 absolute">
        <div className="z-40">
          <ul className=" flex   rounded-md md:items-center md:justify-start gap-7 px-4 py-1 border-[#0000005f] ">
            {pages.map((page, index) => (
              <li
                key={index}
                className="md:flex hidden items-center justify-center hover:scale-105 hover:text-[#f4b923] z-40 duration-200 hover:cursor-pointer text-[22px] "
              >
                <Link href={page.href}>{page.name}</Link>
              </li>
            ))}
            <div className="flex z-40 gap-2 pt-7 md:pt-0">
              <SocialIcon
                style={{ width: "40px", height: "40px" }}
                url="https://www.instagram.com/dog.lifedrawing/"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={hover ? "#f4b923" : "white"}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              />
              <SocialIcon
                style={{ width: "40px", height: "40px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={hoverTwo ? "#f4b923" : "white"}
                onMouseOver={() => setHoverTwo(true)}
                onMouseOut={() => setHoverTwo(false)}
              />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
