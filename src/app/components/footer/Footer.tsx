import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Loading from "../loading/Loading";

export default function Footer() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="flex flex-col justify-center border-t border-gray-900 relative md:pb-20  items-center md:pt-24 mt-32">
          <p className="text-justify text-white flex w-4/5 md:w-1/2 sm-text md-text lg-text">
            Let&#39;s sketch, share, and wag our way to a gallery of
            heartwarming masterpieces!
          </p>
          <div className="hidden">
            <Loading />
          </div>
        </div>
      </div>
      <footer className="relative flex  md:px-24 py-7 text-white justify-between bg-gray-900 h-[400px] mt-auto overflow-y-hidden ">
        <div className=" flex flex-col gap-7 ">
          <b className="md:text-[27px]">Connect</b>
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

        <b className="absolute bottom-10 text-[20px]">
          All rights reserved Woof Co
        </b>
      </footer>
    </>
  );
}
