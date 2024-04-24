"use client";
import React from "react";
import { Buy } from "./Buy";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Event({
  id,
  name,
  start,
  end,
  description,
  capacity,
  logo,
  tileColor,
}: {
  id: number;
  name: string;
  start: string;
  end: string;
  description: string;
  capacity: number;
  logo: string;
  tileColor: string;
}) {
  const startDate = new Date(start);
const endDate = new Date(end);

// Format the date and times
const eventDate = startDate.toLocaleDateString();
const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="flex group relative w-[27rem] h-full">
       <div style={{backgroundColor: `${tileColor}`}} className="flex w-[20rem] md:w-[27rem] h-full absolute md:group-hover:rounded-[60px] hover:group-scale-[102%] transition-all duration-700 ease-in-out -bottom-10 -left-10  -z-50 rounded-[20px]" />
    <motion.div
      key={id}
      className={`  border-[2px] bg-[#EDEAE6] border-gray-500 rounded-[10px]   w-[20rem] md:w-[27rem] origin-top md:hover:rounded-[60px] hover:scale-[102%] transition-all duration-700 ease-in-out overflow-hidden hover:cursor-pointer`}
    >
      
      <div className="h-[250px] overflow-hidden">
        <Image
          className="object-cover object-top h-full w-full "
          src={logo}
          alt={name}
          width={400}
          height={400}
        />
      </div>
      <div className="relative p-12 pt-6 ">
        <h2 className="md:text-[25px]  border-b border-gray-500 pb-2 font-extrabold">{name}</h2>
        <p className=" mt-2">{eventDate}</p>
        <p className=" mt-2">
           {startTime} - {endTime}
        </p>
       
        <div className="mt-2 flex  justify-between w-full">
          <p className=" mt-4">
            <span className="">Capacity:</span> {capacity}
          </p>
          <Buy eventId={id} />
        </div>
      </div>
    </motion.div>
    </div>
  );
}
