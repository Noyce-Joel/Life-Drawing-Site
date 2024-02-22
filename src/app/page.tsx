"use client";

import Image from "next/image";
import Events from "./components/events/Events";
import Nav from "./components/nav/Nav";

export default function Home() {
  return (
    <>
      
      <Nav />
      <Events />
    </>
  );
}
