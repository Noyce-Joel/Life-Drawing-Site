"use client";

import { useContext, useEffect, useState } from "react";
import { StateContext, StateContextType } from "../../context/State";
import { Dialog } from "@headlessui/react";

import Map from "./Map";
import Event from "./Event";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";

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
  const { events } = useContext<StateContextType>(StateContext);
  const [modalEventId, setModalEventId] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleEventClick = (id: number) => {
    setModalEventId(id);
  };

  console.log(events);
  return (
    <>
      <article className="flex flex-col pt-24 md:pt-32 justify-end items-end h-auto font-extrabold text-[90px] ">
        <div className="flex w-3/4 md:w-4/5 relative flex-col font-bold text-[30px] md:text-[70px]  text-white">
          EVENTS
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1.4,

                type: "tween",

                ease: "anticipate",
              },
            }}
            className=" -z-40 origin-right md:-mt-5 border-b border-[1.2px]"
          ></motion.div>
        </div>

        
        <div
          
          className="flex w-3/4 md:w-3/5 relative flex-col font-semibold text-[30px] md:text-[50px] text-white md:pt-12 "
        >
          <div onClick={() => setIsOpen(!isOpen)} className=" hover:cursor-pointer hover:scale-[104%] pb-2 hover:text-gray-900 transition-all duration-200 ">
          SHEFFIELD
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1.4,

                type: "tween",

                ease: "anticipate",
              },
            }}
            className="-z-40  origin-right md:-mt-5 border-b border-[1.2px]"
          ></motion.div>
        </div>
      </article>

      {/* <section
        className={classNames(
          isOpen ? "h-[41rem] w-full" : "h-[2rem] md:w-[40rem] lg:w-[60rem]  flex ",
          "overflow-hidden relative transition-all duration-1000 ease-in-out origin-top-left border-gray-900 border-b-[1.2px] rounded-br-3xl border-r-[1.2px] "
        )}
      >
        <div className="absolute top-0 w-full flex overflow-x-auto gap-12 lg:gap-24 justify-between md:items-end p-24">
          {events.map((event, index) => {
            const id = event.id;
            const name = event.name.text;
            const start = event.start.local;
            const end = event.end.local;
            const description = event.description.text;
            const logo = event.logo.original.url;
            const capacity = event.capacity;
            return (
              <div key={index} className="z-10 ">
                <Event
                  eventClick={handleEventClick}
                  id={id}
                  name={name}
                  start={start}
                  end={end}
                  description={description}
                  capacity={capacity}
                  logo={logo}
                />
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
}
