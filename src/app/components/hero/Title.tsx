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

  const tileDistance = mobile ? 0 : 0;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex  h-auto absolute top-4 left-0 right-0 justify-center md:justify-start mx-auto">
        <Image src="/Logo.png" alt="logo" height={150} width={150} />
      </div>
      <div className="flex mt-14 gap-4 px-4 md:px-0 ">
        <div className="flex w-1/2 h-full flex-col  text-center  gap-8  ">
          <div className="text-[8vmin] md:text-[5.4vw] flex text-left items-start mx-auto md:mx-28 lg:mx-52 flex-col pt-12 text-[#DA7835]">
            <div className="whitespace-nowrap h-[12vw] md:h-[7vw]">
              <span>{title[0]}</span>
              <span> {title[1]}</span>
            </div>
            <span className=""> {title[2]}</span>
          </div>

          <div className="flex -z-40">
            <Line duration={2} color="gray" title={false} />
          </div>
          <p className="flex flex-col whitespace-nowrap text-left mx-auto md:mx-28 lg:mx-52 justify-center gap-4 text-[4.4vw] md:text-[2.4vw] italic ">
            <span className="lg:h-[2.4vw] md:h-[1.8vw] h-[2vw]">
              Where Art Meets
            </span>
            <span className="flex gap-4 lg:h-[2.4vw] md:h-[1.8vw] h-[2vw]">
              Canine Charm{" "}
            </span>
          </p>
        </div>
        <div className="w-full md:pr-4 ">
          <motion.div className="relative h-fit">
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
              className="lg:w-1/2 h-full  flex"
            >
            <div className="flex w-full md:h-[25rem] lg:h-[35rem] gap-2">
                <Image
                  src={image}
                  alt="dog illustration"
                  height={750}
                  width={750}
                  priority={true}
                  className="rounded-[20px] w-full lg:hover:w-full transition-all duration-700 ease-in-out  lg:w-1/2  object-cover "
                />
                {/* <Image
                  src="/HERO.jpg"
                  alt="dog illustration"
                  height={750}
                  width={750}
                  priority={true}
                  className="rounded-[20px] object-cover -z-20"
                /> */}
              
              
                
                <Image
                  src="/HERO.jpg"
                  alt="dog illustration"
                  height={750}
                  width={750}
                  priority={true}
                  className="lg:flex hidden rounded-[20px] hover:w-full transition-all duration-700 ease-in-out  w-1/2  object-cover "
                />
                
                  <Image
                    src="/Dog-Model2Low.jpeg"
                    alt="dog illustration"
                    height={550}
                    width={550}
                    priority={true}
                    className="lg:flex hidden rounded-[20px] hover:w-full transition-all duration-700 ease-in-out w-1/2 object-cover z-10"
                  />
                </div>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Suspense>
  );
}
