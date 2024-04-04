"use client";

import React from "react";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
export default function page() {
  
  return (
    <>
    <div className="absolute z-20">
    <Nav text='text-gray-900' hoveredHue='#1F2937' hue='#1F2937' />
    </div>
    <div className="relative w-full h-screen overflow-y-auto">
      <Contact  />
      </div>
    </>
  );
}
