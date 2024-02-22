"use client";
import React, { useEffect, useState } from "react";
import { Buy } from "./Buy";
import Image from "next/image";

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
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      
      className="bg-white w-full shadow-lg rounded-[100px] hover:rounded-[20px] hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden mx-auto my-4 hover:cursor-pointer"
    >
      <Image
        className=" object-cover object-center"
        src={logo}
        alt={name}
        width={500}
        height={500}
      />
      <div className="relative p-6  backdrop-filter ">
        oioi
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-bold">Start:</span> {start}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">End:</span> {end}
        </p>

        <p className="text-gray-700 mt-4">{description}</p>
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-bold">Capacity:</span> {capacity}
        </p>
        <div  className='mt-2 flex px-12 justify-end w-full'>
        <Buy eventId={id} />
        </div>
      </div>
    </div>
  );
}
