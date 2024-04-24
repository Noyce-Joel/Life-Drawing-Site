import React from "react";
import Paw from "../loading/Paw";
import Link from "next/link";
import Image from "next/image";
export default function ContactSection() {
  return (
    <div className="w-full flex relative justify-end">
    <div className="flex w-1/2 flex-col m-8 gap-8 p-12 items-start rounded-[20px] bg-[#334D42] text-white relative border border-gray-500 ">
    
      <div className="flex  text-[10vw] md:text-[5vw]">GET IN TOUCH</div>

      <p className="sm-text md-text lg-text w-full  pb-12 ">
        We would love to hear from you. Please feel free to reach out to us
        about anything from modelling, collaborating, or just to say hi.
      </p>
      <div className=" text-[40px]">
        <p className=" sm-text md-text lg-text "> Visit our contact page</p>
      </div>
      <button className="border hover:bg-[#EDEAE6] hover:text-[#DA7835] text-[3vw] py-2 px-4 rounded">
        <Link href="/contact">Contact</Link>
      </button>

     
    </div>
    <div className="absolute  bottom-0  left-40  -z-0 w-[20vw] flex">
        <Image src="/1.png" alt="dog illustration" height={380} width={380} />
      </div>
    </div>
  );
}
