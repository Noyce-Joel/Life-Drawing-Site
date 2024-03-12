"use client";

import { useContext, useEffect, useState } from "react";
import { StateContext, StateContextType } from "../../context/State";
import { Dialog } from "@headlessui/react";
import Event from "./Event";
import Line from "../line/Line";
import EventsList from "./EventsList";
import { copy } from "../../../../public/copy/copy";

declare global {
  interface Window {
    EBWidgets: any;
  }
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Events({comp}: {comp: boolean}) {
  return (
    <>
      <div className={classNames(comp ? 'flex' : 'hidden', `flex w-full pl-12 lg:pl-72 relative flex-col pt-12 md:pt-24 font-bold text-[45px] md:text-[75px]  text-white`)}>
       Events
        <Line color='white' title={false} />
        
      </div>
      <div className="text-left pt-7 md:pt-24 relative z-10 items-center justify-center flex flex-col gap-7 tracking-wider text-pretty font-bold ">
        <div className="flex items-center justify-end w-4/5 ">
       
          <h2 className="sm-text md-text lg-text text-black text-left ">
         {copy.events_cities}
          </h2>
        </div>
      </div>
      
      
      <EventsList city="SHEFFIELD" />
      <EventsList city="NOTTINGHAM" />
      <div className="flex flex-col justify-center relative md:pb-20  items-center md:pt-24">
        <p className=" flex-col font-bold session-text-show-two w-4/5 md:w-3/5 sm-text md-text lg-text pt-12  ">
        {copy.events_join}
        </p>
      </div>
    </>
  );
}
