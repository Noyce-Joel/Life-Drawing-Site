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
    <div className="h-screen relative top-[350px] ">
      <div className="p-24 absolute transition-all duration-500 ease-in-out flex justify-center m-24 ">
        <Modal />
      </div>
      <div className="px-[70px]">
        <div className="relative flex flex-col justify-start items-start font-bold text-[60px] w-full  text-white">
          Events
          <motion.div initial={{scale:0}} whileInView={{scale: 1, transition: {type: "spring", mass: 1, damping: 40}}} transition={{duration: 1.4, }} className="w-full origin-left absolute left-0 bottom-0 border-b"></motion.div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto flex relative gap-24 justify-between md:items-end py-24 w-screen px-12">
        {events.map((event, index) => {
          const id = event.id;
          const name = event.name.text;
          const start = event.start.local;
          const end = event.end.local;
          const description = event.description.text;
          const logo = event.logo.original.url;
          const capacity = event.capacity;
          return (
            <>
              <div key={id + index} className="z-10 ">
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
            </>
          );
        })}
      </div>
    </div>
  );
}
