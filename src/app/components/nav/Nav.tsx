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

const pages = [
  { name: "Events", href: "/events", icon: CalendarIcon },

  { name: "Contact", href: "/contact" },
];
const DropDown = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div key="drop-menu" className="flex md:hidden relative flex-col items-center gap-4 w-full h-full text-white">
      <button onClick={() => handleClick()}><XMarkIcon className="absolute top-0 right-0 h-10 w-10"/></button>

      {pages.map((page, index) => (
        <div
          key={index}
          className="hover:scale-105 pt-12 flex items-center gap-4 duration-200 hover:cursor-pointer text-[37px]"
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
      <button onClick={() => handleClick()} className="md:hidden absolute z-40 top-0 right-0 p-12">
        <Bars3Icon  className="w-10 h-10 " />
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
            className="fixed rounded-2xl  p-[40px] z-40 bg-gray-900 w-4/5 h-5/6 left-10 top-10"
          >
            <DropDown handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex-col md:flex-row mx-auto items-center px-4 z-40 py-4 pb-10">
        <div className="z-40">
          <ul className=" md:flex  backdrop-blur-md rounded-md items-center justify-center text-white hidden gap-10 px-4 py-1 border-[#0000005f] ">
            {pages.map((page, index) => (
              <li
                key={index}
                className="hover:scale-105 flex z-40 duration-200 hover:cursor-pointer text-[22px] "
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
