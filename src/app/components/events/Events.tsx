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
  const handleEventClick = (id: number) => {
    setModalEventId(id);
  };

  console.log(events);
  return (
    <>
      <article className="flex flex-col pt-48 justify-end items-end h-auto font-extrabold text-[90px] ">
      <div className="flex w-1/2 md:w-4/5 relative flex-col font-bold text-[50px] md:text-[90px] mb-6 text-white">
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
          className="w-full -z-40 origin-right -mt-5 border-b border-[1.9px]"
        ></motion.div>
      </div>
       
          <div className="flex justify-center relative w-4/5 items-center md:justify-start md:items-start pt-6 md:pt-16">
            <p className="text-justify text-white flex  w-4/5 text-[27px] md:text-[55px]">
              Ready to embark on a journey of artistic discovery, BOOK HERE and
              join Dog Life Drawing, where every stroke of your pencil is a
              celebration of the beautiful bond between humans and their furry
              friends. 
            </p>
          </div>
        
      </article>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto flex relative gap-12 lg:gap-24 justify-between md:items-end py-24 px-12">
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
      <div>
          <div className="flex w-full justify-center relative md:pb-24  items-center pt-6 md:pt-16">
            <p className="text-justify text-white flex  w-4/5 md:w-1/2 text-[40px] md:text-[55px] pr-4">
               Let&#39;s sketch, share, and wag our way to a gallery of
              heartwarming masterpieces!
            </p>
          </div>
        </div>
    </>
  );
}
