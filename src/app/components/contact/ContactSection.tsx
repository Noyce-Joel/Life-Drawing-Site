import React from "react";
import Dogs3 from "../loading/Dogs3";
import Paw from "../loading/Paw";
import Link from "next/link";
import Line from "../line/Line";
import Image from "next/image";
export default function ContactSection() {
  return (
    <div className="flex flex-col w-full h-full justify-center  relative  md:py-24 py-12 md:px-12 px-12 lg:px-52 bg-[#DA7835] text-white ">
      <div className=" lg:w-2/4">
        <div className="flex flex-col md:flex-row gap-4 text-[10vw] whitespace-nowrap justify-center items-center md:justify-start left-0 w-full md:text-[5vw]  pb-8 md:pb-0">
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
        <div className=" text-[40px]  justify-end items-end flex flex-col gap-12">
          <p className=" sm-text md-text lg-text "> Visit our contact page</p>
        </div>
        <button className="border hover:bg-[#EDEAE6] hover:text-[#DA7835] text-[3vw] font-bold w-1/4 py-2 px-4 rounded">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
      <div className="absolute  bottom-0 md:bottom-12 lg:left-32 left-0  -z-0 w-2/3 md:w-auto flex">
        <Image
          src="/1.png"
          alt="dog illustration"
          height={500}
          width={500}
         className=""
        />
      </div>
    </div>
  );
}
