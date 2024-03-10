import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  Bars3Icon,
  CalendarIcon,
  PhoneArrowDownLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Line from "../line/Line";

const pages = [
  { name: "Events", href: "/events", icon: CalendarIcon },

  { name: "Contact", href: "/contact" },
  
  { name: "Wowzers", href: "/contact" },
  
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
      staggerDirection: -1,
    },
  },
};

const item = {
  initial: { x: -325, skewY: -20 },
  whileInView: {
    x: 0,
    skewY: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    x: -325,
    skewY: -20,
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const DropDown = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="flex md:hidden relative flex-col items-start gap-12 w-full h-full p-4">
      <button onClick={() => handleClick()}>
        <XMarkIcon className="absolute top-0 right-0 h-10 w-10" />
      </button>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        className=" "
      >
        {pages.map((page, index) => (
          <div key={index} className=" -m-4 w-screen mr-24 flex flex-col overflow-y-hidden">
            <motion.div variants={item} className="text-[48px] -mb-2 w-full">
              {page.name}
            </motion.div>

            <motion.div
              initial={{ scale: 0.1 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.4,
                  delay: 0.2,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              exit={{opacity: 0, transition: {duration: 0.45, }}}
              className={`w-[85vw] flex origin-right border-b border-[0.2px] mb-4 border-black
                `}
            ></motion.div>
          </div>
        ))}
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
      <button
        onClick={() => handleClick()}
        className="md:hidden absolute z-40 top-0 right-0 p-12"
      >
        <Bars3Icon className="w-10 h-10 " />
      </button>
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
                delay: 0.35,
                duration: 1,
                type: "spring",
                friction: 90,
                damping: 20,
              },
            }}
            className="fixed p-[40px] z-50 bg-white w-full h-full"
          >
            <DropDown handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex-col md:flex-row mx-auto items-center px-4 z-40 py-4 pb-10">
        <div className="z-40">
          <ul className=" flex  backdrop-blur-md rounded-md md:items-center md:justify-center gap-10 px-4 py-1 border-[#0000005f] ">
            {pages.map((page, index) => (
              <li
                key={index}
                className="md:flex hidden hover:scale-105 hover:text-white z-40 duration-200 hover:cursor-pointer text-[22px] "
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
                fgColor={hover ? "white" : "black"}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              />
              <SocialIcon
                style={{ width: "40px", height: "40px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={hoverTwo ? "white" : "black"}
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

// {page.icon === CalendarIcon ? (
//   <CalendarIcon className="w-6 h-6" />
// ) : (
//   <PhoneArrowDownLeftIcon className="w-6 h-6" />
// )}
