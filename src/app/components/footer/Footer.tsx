import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";


export default function Footer() {
  return (
    <div className="flex relative flex-col -z-0">
      <footer className="relative flex  md:px-24 py-7 px-12justify-between bg-[#f4b923] text-gray-900 border-t h-[410px] mt-auto overflow-y-hidden ">
        <div className=" flex flex-col gap-7 ">
          <b className="md:text-[27px]">Connect</b>
          <b>
            {" "}
            <div className="flex z-0 gap-2">
            <SocialIcon
                style={{ width: "40px", height: "40px" }}
                url="https://www.instagram.com/dog.lifedrawing/"
                className="hover:scale-125 duration-200"
                bgColor="transparent"
                fgColor={"1F2937"}
              />
              <SocialIcon
                style={{ width: "40px", height: "40px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-125 duration-200"
                bgColor="transparent"
                fgColor={"1F2937"}
                
              />
            </div>
          </b>
        </div>

        <b className="absolute bottom-10 text-[20px]">
          All rights reserved Woof Co
        </b>
      </footer>
    </div>
  );
}
