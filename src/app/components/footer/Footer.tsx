import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Loading from "../loading/Loading";

export default function Footer() {
  return (
    <>
      <div>
        <div className="flex flex-col w-full justify-center relative md:pb-40  items-center pt-6 md:pt-24">
        <div className="flex pb-24">
            <Loading />
          </div>
          <p className="text-justify text-white flex  w-4/5 md:w-1/2 text-[32px] md:text-[40px] pr-4">
            Let&#39;s sketch, share, and wag our way to a gallery of
            heartwarming masterpieces!
          </p>
          
        </div>
      </div>
      <footer className="relative flex px-24 py-7 text-white justify-between bg-gray-900 h-[400px] w-full">
        <div className="h-full w-full flex flex-col gap-7 ">
          <b className="md:text-[40px]">Connect</b>
          <b>
            {" "}
            <div className="flex z-40 gap-2">
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
            </div>
          </b>
        </div>
        <div className="flex flex-col h-full w-full justify-start">
          <b className="md:text-[40px]">Subscribe</b>
          <input className="h-12 focus:border-b-yellow-500 pb-2 outline-none w-3/4 border-b bg-transparent text-[40px]" />
        </div>
        <b className="absolute bottom-10 text-[27px]">
          All rights reserved Woof Co
        </b>
      </footer>
    </>
  );
}
