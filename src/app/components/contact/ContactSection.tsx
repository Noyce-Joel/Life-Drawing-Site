import React from "react";
import Dogs3 from "../loading/Dogs3";
import Paw from "../loading/Paw";
import Link from "next/link";
import Line from "../line/Line";
export default function ContactSection() {
  return (
    <div className="flex flex-col w-full h-full justify-center  relative  md:py-24 py-12 md:px-12 px-12 lg:px-52">
      <div className=" lg:w-2/4">
       
        <div className="flex flex-col md:flex-row gap-4 text-[10vw] whitespace-nowrap justify-center items-center md:justify-start left-0 w-full md:text-[5vw] text-[#f4b923] pb-8 md:pb-0">
         
            {" "}
            Get in touch
            <div className=" flex justify-center">
            <Paw duration={10} delay={0.5} size="50pt" />
            </div>
         
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full h-full md:justify-end justify-start items-end">
        <p className="sm-text md-text lg-text w-full pb-8 md:pb-12 md:w-2/3 ">
          We would love to hear from you. Please feel free to reach out to us
          about anything from modelling, collaborating, or just to say hi.
        </p>
        <div className=" text-[40px] text-[#f4b923] justify-end items-end flex flex-col gap-12">
          <p className=" sm-text md-text lg-text text-[#f4b923]">
            {" "}
            Visit our contact page
          </p>
          
        </div>
        <button className="border hover:bg-[#f4b923] hover:text-gray-900 text-[3vw] font-bold w-1/4 py-2 px-4 rounded">
            <Link href="/contact">Contact</Link>
          </button>
      </div>
      <div className="absolute  bottom-0 md:bottom-12 lg:left-40 left-0 -rotate-[10deg] -z-0 w-44 md:w-auto flex">
          <Dogs3 duration={10} delay={0.5} size="200pt" />
        </div>
    </div>
  );
}
