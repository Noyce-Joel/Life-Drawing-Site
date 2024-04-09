"use client";

import React from "react";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
export default function page() {
  
  return (
    <>
    <div className="absolute z-20">
    <Nav
        color="text-[#000000]"
        hoverColor="text-[#000000]"
        socials="#000000"
        socialsHover="#000000"
      />
    </div>
    <div className="relative w-full h-screen overflow-y-auto">
      <Contact  />
      </div>
    </>
  );
}
