import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const DropDown = () => {
  return (
    <div className="flex md:hidden flex-col gap-4">
      <li className="text-lg md:text-xl">About</li>
      <li className="text-lg md:text-xl">Contact</li>
    </div>
  );  
  
}

const pages = [
  { name: "Events", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];


export default function Nav() {

  return (
    <>
    <DropDown />
    <nav className="flex flex-col md:flex-row mx-auto items-center mb-56 w-full justify-center md:justify-between">
      <div className="flex items-center justify-center">
        <Image
          src="/DOGLIFEDRAW1.png"
          className=""
          height={200}
          width={200}
          alt="logo"
        />
        <div>
          <ul className="md:flex hidden gap-14">
            {pages.map((page, index) => (
              <li key={index} className="hover:scale-110 transition-all duration-500 hover:text-red-900 ease-in-out hover:cursor-pointer ">{page.name}</li>
            )
            )}
          </ul>
        </div>
      </div>

      <div className="flex gap-4 px-12">
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          url="https://www.instagram.com/dog.lifedrawing/"
        />
        <SocialIcon
          style={{ width: "30px", height: "30px" }}
          url="https://www.facebook.com/dogdrawing/?locale=en_GB"
        />
      </div>
    </nav>
    </>
  );
}
