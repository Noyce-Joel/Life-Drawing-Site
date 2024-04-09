"use client";

import { useContext } from "react";
import { StateContext, StateContextType } from "../../context/State";
import Line from "../line/Line";
import EventsList from "./EventsList";
import { copy } from "../../../../public/copy/copy";
import Dogs5 from "../loading/Dogs5";
import Ball from "../loading/Ball";
import Paw from "../loading/Paw";
import Image from "next/image";
declare global {
  interface Window {
    EBWidgets: any;
  }
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function groupBy(list: any[], keyGetter: (item: any) => string) {
  return list.reduce((result, item) => {
    const key = keyGetter(item);
    const collection = result[key];
    if (!collection) {
      result[key] = [item];
    } else {
      collection.push(item);
    }
    return result;
  }, {} as any);
}
export default function Events({ comp }: { comp: boolean }) {
  const { events } = useContext<StateContextType>(StateContext);
  const eventsByCity = groupBy(events, (event) => event.venue.address.city);
  return (
    <>
      <div
        className={classNames(
          comp ? "flex" : "hidden",
          `flex w-full pl-12 lg:pl-72 relative flex-col pt-12 md:pt-12 font-bold text-[8vw] md:text-[59px] bg-[#EDEAE6] text-[#DA7835]`
        )}
      >
        Events
        <Line duration={1} color="#000000" title={false} />
      </div>

      <div className="text-left pt-12 relative z-10 items-center justify-center flex flex-col tracking-wider text-pretty font-bold bg-[#EDEAE6]  ">
        <Image
          src="/4.png"
          alt="dog illustration"
          height={300}
          width={300}
          className="absolute right-10 md:flex hidden -bottom-24 w-72 pt-12 "
        />
        <div className="flex flex-col items-start justify-start w-4/5 md:w-3/5 ">
          <p className=" flex-col font-bold session-text-show-two  sm-text md-text lg-text ">
            {copy.events_join}
          </p>

          <h2 className="sm-text md-text pl-12 lg:pt-20 pt-12 lg-text text-left ">
            {copy.events_cities}
          </h2>
        </div>
      </div>

      {Object.entries(eventsByCity).map(([city, cityEvents]: any) => (
        <div key={city}>
          <EventsList events={cityEvents} city={city} />
        </div>
      ))}
      <div className="flex flex-col relative gap-12 items-center pt-12 md:pt-32 bg-[#EDEAE6]  ">
       
        <p className="text-center flex w-4/5 md:w-1/2 sm-text md-text lg-text text-[#DA7835] ">
          Let&#39;s sketch, share, and wag our way to a gallery of heartwarming
          masterpieces!
        </p>
      </div>
    </>
  );
}
