"use client";

import { useContext } from "react";
import { StateContext, StateContextType } from "../../context/State";
import EventsList from "./EventsList";
import { copy } from "../../../../public/copy/copy";
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
  const eventsByCity = groupBy(events, (event) => {
    if (event.venue.address.city.toLowerCase() === "burley") {
      return "Leeds";
    }
    if (event.venue.address.city.toLowerCase() === "heworth") {
      return "York";
    }
    return event.venue.address.city;
  });

  return (
    <>
      {/* <div
        className={classNames(
          comp ? "flex" : "hidden",
          `flex w-2/3 justify-end items-end mt-24  border-b border-gray-500 text-[40px] md:text-[5vw] bg-[#EDEAE6] text-[#DA7835]`
        )}
      >
        Events
        <div className="-mr-10">
        
      </div>
      </div> */}

      <div className="text-left mt-14 relative z-10 items-center justify-center flex flex-col tracking-wider text-pretty  bg-[#EDEAE6]  ">
        <Image
          src="/1.png"
          alt="dog illustration"
          height={280}
          width={280}
          className="h-auto w-[12vw]"
        />

        <div className="flex flex-col items-center pt-12 justify-start w-4/5 md:w-3/5 gap-12">
          {comp && (
            <>
              <p className={`md:w-4/5 sm-text md-text lg-text`}>
                {copy.events_join}
              </p>
              <p className="flex lg-white-text md-white-text  sm-white-text text-[#DA7835]">
                {copy.sessions_white_text}
              </p>
            </>
          )}
          <p className="md:w-4/5 lg-text md-text sm-text">
            {copy.sessions_our_dogs}
          </p>
          <p className=" md:w-4/5 sm-text md-text lg-text text-left pb-24">
            {copy.events_cities}
          </p>
        </div>
      </div>

      {Object.entries(eventsByCity).map(([city, cityEvents]: any) => (
        <div key={city}>
          <EventsList events={cityEvents} city={city} />
        </div>
      ))}
    </>
  );
}
