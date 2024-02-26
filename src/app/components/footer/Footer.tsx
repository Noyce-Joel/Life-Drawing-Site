import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";


export default function Footer() {
  return (
    <footer className="relative flex px-24 py-7 text-white justify-between bg-gray-900 h-[400px] w-full">
     
      <div className="h-full w-full flex flex-col gap-7 ">
        <b className="md:text-[40px]">Connect</b>
        <b> <div className="flex z-40 gap-2">
              <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.instagram.com/dog.lifedrawing/"
            className="hover:scale-110 duration-200"
          />
          <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.facebook.com/dogdrawing/?locale=en_GB"
            className="hover:scale-110 duration-200"
          />
              </div></b>
      </div>
      <div className="flex flex-col h-full w-full justify-center">
        <b className="md:text-[40px]">Subscribe</b>
        <input className="h-12 focus:border-b-yellow-500 pb-2 outline-none w-3/4 border-b bg-transparent text-[40px]"/>
      </div>
      <b className="absolute bottom-5 text-[27px]">All rights reserved Woof Co</b>
    </footer>
  );
}
