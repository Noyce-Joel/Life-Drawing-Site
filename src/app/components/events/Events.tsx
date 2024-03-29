"use client";

import { useContext} from "react";
import { StateContext, StateContextType } from "../../context/State";
import Line from "../line/Line";
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
  const eventsByCity = groupBy(events, (event) => event.venue.address.city);
  return (
    <>
      <div
        className={classNames(
          comp ? "flex" : "hidden",
          `flex w-full pl-12 lg:pl-72 relative flex-col pt-12 md:pt-24 font-bold text-[45px] md:text-[75px`
        )}
      >
        Events
        <Line color="white" title={false} />
      </div>
      <div className="text-left pt-7 md:pt-24 relative z-10 items-center justify-center flex flex-col gap-7 tracking-wider text-pretty font-bold ">
        <div className="flex items-start justify-start w-4/5 md:w-3/5 ">
          <h2 className="sm-text md-text pt-6 lg-text text-left ">
            {copy.events_cities}
          </h2>
        </div>
      </div>

      {Object.entries(eventsByCity).map(([city, cityEvents]: any) => (
        <div key={city}>
          
          <EventsList events={cityEvents} city={city}/>
        </div>
      ))}

      <div className="flex flex-col justify-center relative -mb-40 items-center md:pt-24">
        <p className=" flex-col font-bold session-text-show-two w-4/5 md:w-3/5 sm-text md-text lg-text pt-12  ">
          {copy.events_join}
        </p>
        <Image
          src="/sketch.png"
          height={190}
          width={190}
          alt="hero-image"
          className="rounded-[10px] invert md:flex hidden pt-12 "
        />
      </div>
    </>
  );
}
