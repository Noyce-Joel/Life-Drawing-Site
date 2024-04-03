import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";
import Paw from "../loading/Paw";
import TitleText from "../TitleText";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];
  const hover = (duration: number, rotation: number[]) => ({
    rotate: rotation,
    scale: [0.7, 1.1, 0.5, 1.1, 0.7],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  });
  return (
    <>
      <div className="justify-center items-center  relative object-cover flex flex-col w-full h-full top-0 left-0 -z-50">
        <div className="flex w-full h-full justify-end items-end">
          <div className=" w-full relative h-full -mb-32 -mt-32 md:-mt-24 md:-mb-16 flex justify-center items-center">
            <div className="w-full flex relative ">
              <Loading inView={true} />
              <div
                className="text-[5vw] md:flex hidden items-center w-1/2 text-[#f4b923] mix-blend-mode: screen;"
              >
                <TitleText
                  title={["WHERE ART MEETS", "CANINE CHARM"]}
                  col="flex-col"
                />
              </div>
              <div className="absolute md:flex hidden -rotate-[15deg] right-[10rem] bottom-48 ">
                <Paw duration={0.2} delay={1.2} size="140pt" />
              </div>
            </div>
          </div>
        </div>
        <Line duration={2.7} color="white" title={true} />
      </div>
    </>
  );
}
