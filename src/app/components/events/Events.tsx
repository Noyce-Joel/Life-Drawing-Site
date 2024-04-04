"use client";

import { useContext } from "react";
import { StateContext, StateContextType } from "../../context/State";
import Line from "../line/Line";
import EventsList from "./EventsList";
import { copy } from "../../../../public/copy/copy";
import Dog4 from "../loading/Dogs4";
import Dogs5 from "../loading/Dogs5";
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
          `flex w-full pl-12 lg:pl-72 relative flex-col pt-12 md:pt-24 font-bold text-[8vw] md:text-[59px] text-[#f4b923]`
        )}
      >
        <div className="absolute md:flex hidden justify-center left-0 right-0 mx-auto w-2/12 bg-[#092a0f] -top-[11.5rem]">
          <Dogs5 duration={10} delay={0.5} size="290pt" />
        </div>
        Events
        <Line duration={1} color="white" title={false} />
      </div>

      <div className="text-left pt-12 relative z-10 items-center justify-center flex flex-col tracking-wider text-pretty font-bold ">
        <div className="flex flex-col items-start justify-start w-4/5 md:w-3/5 ">
          <p className=" flex-col font-bold session-text-show-two  sm-text md-text lg-text ">
            {copy.events_join}
          </p>
          <h2 className="sm-text md-text pl-12 lg:pt-20 pt-12 lg-text text-left text-[#f4b923]">
            {copy.events_cities}
          </h2>
        </div>
      </div>

      {Object.entries(eventsByCity).map(([city, cityEvents]: any) => (
        <div key={city}>
          <EventsList events={cityEvents} city={city} />
        </div>
      ))}
      <div className="flex flex-col justify-center relative  items-center pt-12 md:pt-24">
        <p className="text-center flex w-4/5 md:w-1/2 sm-text md-text lg-text text-[#f4b923] py-12">
          Let&#39;s sketch, share, and wag our way to a gallery of heartwarming
          masterpieces!
        </p>
      </div>
      <div className="flex flex-col justify-center relative -mb-40 items-center pt-24 md:pt-40">
        <div className=" flex relative justify-end -right-96 md:-right-44 w-full items-center  h-full -z-20 bottom-9  ">
          <div className="absolute -z-0">
            <Dog4 duration={5.5} delay={0.5} size="700pt" />
          </div>
        </div>
      </div>
    </>
  );
}
