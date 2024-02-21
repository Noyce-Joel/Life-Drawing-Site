"use client";
import React, { useEffect } from "react";
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
  return (
    <div
      key={id}
      className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-2xl w-full my-4"
    >
      <Image
        className=" object-cover object-center"
        src={logo}
        alt={name}
        width={500}
        height={500}
      />
      <div className="p-6">
        oioi
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
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
        <Buy eventId={id} />
      </div>
    </div>
  );
}
