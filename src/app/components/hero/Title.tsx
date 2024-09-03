import React, { Suspense, useEffect, useState } from "react";

import Image from "next/image";
import Line from "../line/Line";
import { motion } from "framer-motion";
import Paw from "../loading/Paw";
import Link from "next/link";
export default function Title({
  title,
  tileColor,
  slogan,
  image,
  image2,
}: {
  title: string[];
  tileColor: string;
  slogan: string;
  image: string;
  image2: string;
}) {
  const [mobile, setMobile] = useState(false);
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  useEffect(() => {
    const isMobile = global.window.innerWidth < 768;
    if (isMobile) {
      setMobile(true);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex  h-auto absolute top-4 left-0 right-0 justify-center md:justify-start mx-auto">
        <Link href="/">
          <Image src="/Logo.png" alt="logo" height={150} width={150} />
        </Link>
      </div>
      <header className="flex mt-14 px-4 md:px-0 w-full justify-center md:w-auto md:justify-start">
        <div className="flex md:w-1/2 h-full flex-col justify-center items-center  text-center  gap-8  ">
        <h1 className="text-[12vmin] md:text-[5.4vw] flex text-center  mx-auto md:mx-28 lg:mx-52 flex-col pt-12 text-[#DA7835]">
            {title[0]} {title[1]} {title[2]}
          </h1>

          <div className="flex md:w-full w-1/4 mx-auto md:mx-0 -z-40">
            <Line duration={2} color="gray" title={false} />
          </div>
          <h2 className="flex flex-col whitespace-nowrap text-left mx-auto md:mx-28 lg:mx-52 justify-center gap-4 text-[4.4vw] md:text-[2.4vw] italic ">
            <span className="lg:h-[2.4vw] md:h-[1.8vw] h-[2vw]">
              Where Art Meets
            </span>
            <span className="flex gap-4 lg:h-[2.4vw] md:h-[1.8vw] h-[2vw]">
              Canine Charm{" "}
            </span>
          </h2>
        </div>
        <div className="w-full lg:pr-56 md:flex hidden">
          <motion.div className="relative lg:w-full h-fit">
            <div className="w-full h-full  flex">
              <div className="flex w-full md:h-[25rem] lg:h-[35rem] gap-2">
                <Image
                  src={image}
                  alt="dog illustration"
                  height={750}
                  width={750}
                  priority={true}
                  className="rounded-[20px] md:flex hidden w-full h-full mt-5 md:mt-0 object-cover transition-all duration-300 "
                  style={{
                    opacity: loaded1 ? "100%" : "0%",
                  }}
                  onLoad={() => setLoaded1(true)}
                />

                <Image
                  src={image2}
                  alt="dog illustration"
                  height={750}
                  width={750}
                  priority={true}
                  className="md:flex hidden rounded-[20px] w-full  object-cover transition-all duration-300"
                  style={{
                    opacity: loaded2 ? "100%" : "0%",
                  }}
                  onLoad={() => setLoaded2(true)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </Suspense>
  );
}
