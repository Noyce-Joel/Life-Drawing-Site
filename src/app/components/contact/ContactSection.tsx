import React from "react";
import Dogs3 from "../loading/Dogs3";
import Paw from "../loading/Paw";
import Link from "next/link";
export default function ContactSection() {
  return (
    <div className="flex w-full h-full justify-center gap-24 relative p-12 ">
      
      <div className="relative lg:w-1/4">
        <div className="absolute flex lg:left-4 md:-left-44 -rotate-[10deg] -bottom-[18rem] h-[65vh] -z-0">
          <Dogs3 duration={10} delay={0.5} size="200pt" />
        </div>
       
      </div>
      <div className="flex flex-col gap-8 w-full md:w-2/3 md:p-12">
        <div className="flex gap-4 text-[10vw] justify-start left-0 lg:text-[6vw] text-[#f4b923] pb-24">
          Get in touch
          <Paw duration={10} delay={0.5} size="50pt" />
        </div>

        <p className="sm-text md-text lg-text w-4/5 pb-12">
          We would love to hear from you. Please feel free to reach out to us
          about anything from modelling, collaborating, or just to say hi.
        </p>
        <div className=" text-[40px] text-[#f4b923] justify-end items-end flex flex-col gap-12">
          <p className=" sm-text md-text lg-text text-[#f4b923]">
            {" "}
            Visit our contact page
          </p>
          <button className="border hover:bg-[#f4b923] hover:text-gray-900 text-[2.5vw] font-bold w-1/4 py-2 px-4 rounded">
          <Link href='/contact'>
          
            Contact
          
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
