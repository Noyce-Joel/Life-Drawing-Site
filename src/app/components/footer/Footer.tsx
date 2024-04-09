import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
 
  return (
    <div className="flex relative flex-col">
      <footer className="relative flex  md:px-24 py-7 bg-[#EDEAE6] px-12 justify-between  border-t border-[#DA7835] h-[410px] mt-auto overflow-y-hidden ">
        <div className=" flex flex-col gap-7 absolute ">
          <b className="md:text-[27px] ">Connect</b>
          <b>
            {" "}
            <div className="flex z-0 gap-2">
              <SocialIcon
                style={{ width: "50px", height: "50px" }}
                url="https://www.instagram.com/dog.lifedrawing/"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={'#000000'}
                
              />
              <SocialIcon
                style={{ width: "50px", height: "50px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={'#000000'}
               
              />
            </div>
          </b>
        </div>

        <div className="flex md:flex-row flex-col justify-between absolute bottom-10 w-full ">
          <div className="flex items-end  ">
            All rights reserved Leah Edwardes © 2024
          </div>
        </div>
      </footer>
    </div>
  );
}
