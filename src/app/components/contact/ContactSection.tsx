import React from "react";
import Dogs3 from "../loading/Dogs3";
import Paw from "../loading/Paw";
import Link from "next/link";
import Line from "../line/Line";
export default function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center  relative md:px-52 md:py-24 py-12 px-12">
      <div className=" lg:w-2/4">
       
        <div className="flex flex-col gap-4 text-[10vw] whitespace-nowrap justify-start left-0 w-full md:text-[5vw] text-[#f4b923] ">
         
            {" "}
            Get in touch
            <Paw duration={10} delay={0.5} size="50pt" />
          
         
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full  md:p-12 h-full justify-center md:justify-end">
        <p className="sm-text md-text lg-text w-full pb-12 ">
          We would love to hear from you. Please feel free to reach out to us
          about anything from modelling, collaborating, or just to say hi.
        </p>
        <div className=" text-[40px] text-[#f4b923] justify-end items-end flex flex-col gap-12">
          <p className=" sm-text md-text lg-text text-[#f4b923]">
            {" "}
            Visit our contact page
          </p>
          <button className="border hover:bg-[#f4b923] hover:text-gray-900 text-[2vw] font-bold w-1/4 py-2 px-4 rounded">
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
      <div className="absolute flex lg:left-4 md:-left-24 -left-8 -rotate-[10deg] -bottom-[18rem] h-[65vh] -z-0">
          <Dogs3 duration={10} delay={0.5} size="200pt" />
        </div>
    </div>
  );
}
