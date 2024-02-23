import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const pages = [
  { name: "Events", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const DropDown = () => {
    return (
      <div key="drop-menu" className="flex md:hidden flex-col gap-4">
        <button onClick={() => setMobileMenu(!mobileMenu)}>Close</button>

        {pages.map((page, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-200 hover:cursor-pointer text-2xl"
          >
            {page.name}
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
        Open
      </button>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: -700, y: -700 }}
            animate={{
              x: 0,
              y: 0,
              transition: {
                duration: 1,
                type: "spring",
                friction: 10,
                damping: 20,
              },
            }}
            exit={{
              x: -500,
              
              
              transition: {
                duration: 5,
                type: "spring",
                friction: 400,
                damping: 20,
              },
            }}
            className="fixed flex p-[40px] z-20 bg-gray-500 w-full mx-auto left-0 right-0 top-0 bottom-0"
          >
            <DropDown />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="flex flex-col md:flex-row mx-auto items-center px-4 mb-12 py-4 w-full justify-center md:justify-between">
        <div className="flex items-center justify-center gap-2 w-full">
          <Image
            src="/Logo.png"
            className=""
            height={150}
            width={150}
            alt="logo"
          />
          <div className="w-full">
            <ul className="md:flex items-center text-white hidden gap-10 px-2 border-[#0000005f] w-full">
              {pages.map((page, index) => (
                <>
                
                <li
                  key={index}
                  className="hover:scale-105 flex  duration-200 hover:cursor-pointer text-lg pr-2"
                >
                  {page.name}
                </li>
                
                </>
              ))}
              <div className="flex gap-2">
              <SocialIcon
            style={{ width: "20px", height: "20px" }}
            url="https://www.instagram.com/dog.lifedrawing/"
            className="hover:scale-110 duration-200"
          />
          <SocialIcon
            style={{ width: "20px", height: "20px" }}
            url="https://www.facebook.com/dogdrawing/?locale=en_GB"
            className="hover:scale-110 duration-200"
          />
              </div>
            </ul>
            
          </div>
        </div>

        
      </nav>
    </>
  );
}
