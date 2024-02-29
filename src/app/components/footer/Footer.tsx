import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Loading from "../loading/Loading";
import { useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, {amount: "all",  margin: '220px 90% 220px 90%',});
  return (
    <>
      
      <div className="w-full overflow-hidden">
        <div className="flex flex-col justify-center border-t border-gray-900 relative md:pb-20  items-center md:pt-24 mt-32">
          <p className="text-justify text-white flex w-4/5 md:w-1/2 sm-text md-text lg-text py-12">
            Let&#39;s sketch, share, and wag our way to a gallery of
            heartwarming masterpieces!
          </p>
        </div>
        
      </div>
      <div ref={ref} className=" w-full h-[500px] relative rounded-[20px] overflow-hidden justify-center pb-24 lg:flex hidden ">
        
        <Loading inView={inView}/>
        
      </div>
      <footer className="relative flex  md:px-24 py-7 px-12 text-white justify-between bg-gray-900 h-[400px] mt-auto overflow-y-hidden ">
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
