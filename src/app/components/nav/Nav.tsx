import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import {
  CalendarIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const pages = [
  { name: "Events", href: "/events", icon: CalendarIcon },

  { name: "Contact", href: "/contact" },
];
const DropDown = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div key="drop-menu" className="flex md:hidden flex-col gap-4">
      <button onClick={() => handleClick()}>Close</button>

      {pages.map((page, index) => (
        <div
          key={index}
          className="hover:scale-105 duration-200 hover:cursor-pointer text-2xl"
        >
          {page.name}
          {page.icon === CalendarIcon ? (
            <CalendarIcon className="w-6 h-6" />
          ) : (
            <PhoneArrowDownLeftIcon className="w-6 h-6" />
          )}
        </div>
      ))}
    </div>
  );
};

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      <button onClick={() => handleClick()} className="md:hidden">
        Open
      </button>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ scale: 0, x: 400 }}
            animate={{
              scale: 1,
              x: 0,
              transition: {
                duration: 1,
                type: "spring",
                friction: 10,
                damping: 20,
              },
            }}
            exit={{
              scale: 0,
              x: -400,

              transition: {
                duration: 5,
                type: "spring",
                friction: 400,
                damping: 20,
              },
            }}
            className="absolute rounded-2xl flex p-[40px] z-40 bg-gray-500 w-4/5 h-4/5 left-10 top-10"
          >
            <DropDown handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex flex-col z-40 md:flex-row mx-auto items-center px-4 mb-12 py-4 ">
        <div className=" z-40">
          <ul className="z-40 md:flex  backdrop-blur-md rounded-md items-center justify-center text-white hidden gap-10 px-4 py-1 border-[#0000005f] ">
            {pages.map((page, index) => (
              <li
                key={index}
                className="hover:scale-105 flex z-40 duration-200 hover:cursor-pointer text-md pr-2"
              >
                <Link href={page.href}>{page.name}</Link>
              </li>
            ))}
            <div className="flex z-40 gap-2">
              <SocialIcon
                style={{ width: "27px", height: "27px" }}
                url="https://www.instagram.com/dog.lifedrawing/"
                className="hover:scale-110 duration-200"
              />
              <SocialIcon
                style={{ width: "27px", height: "27px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-110 duration-200"
              />
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
