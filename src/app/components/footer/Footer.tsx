import React from "react";
import { SocialIcon } from "react-social-icons";
import Paw from "../loading/Paw";
export default function Footer() {
  return (
    <footer className="relative flex w-full  py-7 bg-[#EDEAE6]  justify-between  border-t border-[#DA7835] h-[410px] mt-auto ">
      <div className=" flex flex-col gap-7 absolute px-8  ">
        <b className="md:text-[27px] text-[#DA7835] ">Connect</b>{" "}
        <div className="flex z-0 gap-2">
          <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.instagram.com/dog.lifedrawing/"
            className="hover:scale-110 duration-200"
            bgColor="transparent"
            fgColor={"#000000"}
          />
          <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.facebook.com/dogdrawing/?locale=en_GB"
            className="hover:scale-110 duration-200"
            bgColor="transparent"
            fgColor={"#000000"}
          />
        </div>
      </div>

      <div className="flex absolute text-center bottom-4 px-8 md:bottom-10  ">
        All rights reserved Liah Edwardes © 2024
      </div>
      <div className="lg:flex hidden absolute items-center bottom-5 right-24">
     
      <Paw size='50pt' duration={2} delay={0.2}/>
      <div className="pt-2">
      - site by Joel Noyce
      </div>
      </div>
    </footer>
  );
}
