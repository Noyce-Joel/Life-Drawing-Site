import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Loading from "../loading/Loading";
import { useInView } from "framer-motion";

export default function Footer() {
  return (
    <div className="flex relative flex-col -z-40">
      <footer className="relative flex  md:px-24 py-7 px-12justify-between bg-gray-700 h-[410px] mt-auto overflow-y-hidden ">
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
    </div>
  );
}
