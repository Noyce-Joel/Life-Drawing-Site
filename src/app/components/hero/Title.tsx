import React, { Suspense, useEffect, useState } from "react";

import Image from "next/image";
import Line from "../line/Line";
import { motion } from "framer-motion";
import Paw from "../loading/Paw";
export default function Title({
  title,
  tileColor,
  slogan,
  image,
}: {
  title: string[];
  tileColor: string;
  slogan: string;
  image: string;
}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const isMobile = global.window.innerWidth < 768;
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  const tileDistance = mobile ? 8 : 8;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex  h-auto absolute top-4 left-0 right-0 justify-center md:justify-start mx-auto">
        <Image src="/Logo.png" alt="logo" height={150} width={150} />
      </div>
      <div className="flex mt-20">
        <div className="flex w-full md:w-3/5 h-full flex-col  text-center  gap-10 ">
          <div className="text-[10vw] md:text-[5.4vw] flex text-left items-start mx-auto md:mx-36 lg:mx-72 flex-col pt-12 text-[#DA7835]">
            <div className="whitespace-nowrap">
              <span>{title[0]}</span>
              <span> {title[1]}</span>
            </div>
            <span> {title[2]}</span>
          </div>

          <div className="flex   -z-40">
            <Line duration={2} color="gray" title={false} />
          </div>
          <p className="flex flex-col whitespace-nowrap text-left mx-auto md:mx-36 lg:mx-72 justify-center gap-4 text-[5vw] md:text-[2.4vw] italic ">
            <span>Where Art Meets</span>
            <span className="flex gap-4">Canine Charm  <Paw size="20pt" duration={2} delay={0.2} /></span>
           
          </p>
          
        </div>
        <div className="flex w-1/2 md:w-1/3 lg:w-1/4">
          <motion.div className="  relative ">
            <motion.div
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.5 },
              }}
              whileInView={{
                x: -tileDistance,
                y: -tileDistance,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 1,
                  damping: 18,
                  stiffness: 80,
                  friction: 40,
                  mass: 1.2,
                },
              }}
              style={{ backgroundColor: `${tileColor}` }}
              className="flex w-full h-full absolute  top-0 left-0 -z-10 rounded-[20px]"
            />
            <motion.div
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.5 },
              }}
              whileInView={{
                x: tileDistance,
                y: tileDistance,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 1,
                  damping: 18,
                  stiffness: 80,
                  friction: 40,
                  mass: 1.2,
                },
              }}
              className="w-full h-full flex"
            >
              <Image
                src={image}
                alt="dog illustration"
                height={750}
                width={750}
                priority={true}
                className="rounded-[20px] object-cover "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}
