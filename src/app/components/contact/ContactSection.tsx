import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {copy} from "../../../../public/copy/copy";
export interface TileProps {
  color: string;
  start: number;
  finish: number;
  hovered: boolean;
  isMobile: boolean;
  z: number;
}

export function Tile({
  hovered,
  isMobile,
  start,
  finish,
  color,
  z,
}: TileProps) {
  return (
    <motion.div
      animate={{
        x: hovered || isMobile ? finish : start,
        y: hovered || isMobile ? -finish : -start,

        transition: {
          type: "spring",
          duration: 1,

          damping: 16,
          stiffness: 80,
          friction: 80,
          mass: 1.4,
        },
      }}
      style={{ backgroundColor: color, zIndex: z }}
      className="  flex w-full rounded-[20px] h-full absolute -z-30 top-0 left-0 "
    />
  );
}
export default function ContactSection() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, [setIsMobile]);

  return (
    <div className="w-full flex relative justify-center  pb-52 md:px-32  ">
      <div className="flex w-4/5 md:w-[54vw] lg:w-1/2 flex-col lg:m-8 p-12 text-[#EDEAE6] items-start rounded-[20px] relative ">
        <div className="bg-[#334D42]  flex w-full rounded-[20px] h-full absolute -z-20 top-0 left-0 " />

        <Tile
          color="#FFD04D"
          start={15}
          finish={25}
          hovered={hovered}
          isMobile={isMobile}
          z={-40}
        />
        <Tile
          color="#F7C2BC"
          start={30}
          finish={50}
          hovered={hovered}
          isMobile={isMobile}
          z={-50}
        />
        <Tile
          color="#DA7835"
          start={45}
          finish={75}
          hovered={hovered}
          isMobile={isMobile}
          z={-60}
        />

        <motion.div className="w-full h-full gap-12 flex flex-col">
          <div className="flex text-[6vw] mx-auto md:text-[3vw]">
            GET IN TOUCH
          </div>

          <p className="sm-text md-text lg-text w-full  ">
            {copy.contact_section}
          </p>

          <button
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className="border hover:bg-[#EDEAE6] hover:text-[#DA7835] transition-all duration-500 text-[2.4vw] py-2 px-4 rounded"
          >
            <Link href="/contact">Contact</Link>
          </button>
        </motion.div>
      </div>
      <div className="absolute  bottom-0  left-0 md:left-20  -z-0 w-[24vw] md:w-[14vw] flex">
        <Image src="/1.png" alt="dog illustration" height={380} width={380} />
      </div>
    </div>
  );
}
