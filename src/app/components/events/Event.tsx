"use client";
import React, { useEffect, useState } from "react";
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
}: {
  id: number;
  name: string;
  start: string;
  end: string;
  description: string;
  capacity: number;
  logo: string;
}) {
  const startDate = new Date(start);
const endDate = new Date(end);

// Format the date and times
const eventDate = startDate.toLocaleDateString();
const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <motion.div
      key={id}
      className={` border-[2px] rounded-[10px] w-[80vw] bg-[#092a0f] md:w-96 origin-top md:hover:rounded-[60px] hover:scale-[102%] transition-all duration-700 ease-in-out overflow-hidden hover:cursor-pointer`}
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
        <h2 className="text-xl border-b pb-2 font-extrabold">{name}</h2>
        <p className="text-lg mt-2">{eventDate}</p>
        <p className="text-lg mt-2">
           {startTime} - {endTime}
        </p>
       
        <div className="mt-2 flex  justify-between w-full">
          <p className="text-sm mt-4">
            <span className="">Capacity:</span> {capacity}
          </p>
          <Buy eventId={id} />
        </div>
      </div>
    </motion.div>
  );
}
