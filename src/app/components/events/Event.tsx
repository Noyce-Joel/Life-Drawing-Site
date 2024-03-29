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
  return (
    <motion.div
      key={id}
      className={` bg-gray-700 rounded-[10px] w-[80vw] md:w-96 origin-top md:hover:rounded-[60px] hover:scale-[107%] transition-all duration-700 ease-in-out overflow-hidden hover:cursor-pointer`}
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
      <div className="relative p-12 pt-6">
        <h2 className="text-xl font-semibold border-b pb-2">{name}</h2>
        <p className="text-sm mt-2">
          <span className="font-bold">Start:</span> {start}
        </p>
        <p className="text-sm ">
          <span className="font-bold">End:</span> {end}
        </p>

        <div className="mt-2 flex  justify-between w-full">
          <p className="text-sm mt-4">
            <span className="font-bold">Capacity:</span> {capacity}
          </p>
          <Buy eventId={id} />
        </div>
      </div>
    </motion.div>
  );
}
