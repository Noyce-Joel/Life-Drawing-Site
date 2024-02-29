"use client";

import { useContext, useEffect, useState } from "react";
import { StateContext, StateContextType } from "../../context/State";
import { Dialog } from "@headlessui/react";
import Event from "./Event";
import Line from "../line/Line";
import EventsList from "./EventsList";

declare global {
  interface Window {
    EBWidgets: any;
  }
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={`fixed z-10 inset-0  overflow-y-auto `}
    >
      <div
        className={`flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 duration-1000 transition-all ${
          isOpen ? "backdrop-blur-[40px] " : "backdrop-blur-[0px]"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 transparent opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white flex w-[full] h-[full]">
            <div className="flex w-[700px] h-[700px]"></div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default function Events() {
  

  
  return (
    <>
    <div className="flex w-full pl-12 lg:pl-72 relative flex-col pt-24 font-bold text-[30px] md:text-[75px]  text-white">
          EVENTS
          <Line title={false} />
        </div>
      
        <EventsList city='SHEFFIELD' />
        <EventsList city='NOTTINGHAM' />

        
    </>
  );
}
