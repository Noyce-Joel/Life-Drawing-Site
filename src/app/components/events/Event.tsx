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
      className={`bg-white rounded-[100px] w-[90vw] md:w-auto origin-top md:hover:rounded-[20px]  md:hover:-translate-y-[40px] transition-all duration-700 ease-in-out overflow-hidden hover:cursor-pointer`}
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
      <div className="relative p-12 ">
        oioi
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
          {name}
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-bold">Start:</span> {start}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">End:</span> {end}
        </p>
        
       
        <div className="mt-2 flex  justify-between w-full">
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-bold">Capacity:</span> {capacity}
        </p>
          <Buy eventId={id} />
        </div>
      </div>
    </div>
  );
}
