import React from "react";
import Line from "../line/Line";
import Loading from "../loading/Loading";
import Paw from "../loading/Paw";
import TitleText from "../TitleText";

export default function Title() {
  const title = ["DOG", "LIFE", "DRAWING"];
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className=" w-full h-full -mb-32 -mt-32 md:-mt-24 md:-mb-16 flex ">
          <div className="w-full flex relative ">
            <Loading inView={true} />
            <div className="text-[5vw] md:flex hidden items-center w-1/2 text-[#f4b923]">
              <TitleText
                title={["WHERE ART MEETS", "CANINE CHARM"]}
                col="flex-col"
              />
            </div>
            <div className="absolute md:flex hidden -rotate-[15deg] right-[9rem] bottom-48 ">
              <Paw duration={0.2} delay={1.2} size="120pt" />
            </div>
          </div>
        </div>
        <Line duration={2.7} color="white" title={true} />
      </div>
    </>
  );
}
