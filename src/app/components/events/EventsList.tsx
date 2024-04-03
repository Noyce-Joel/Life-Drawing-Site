import React, { useState } from "react";
import Event from "./Event";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function EventsList({
  events,
  city,
}: {
  events: any[];
  city: string;
}) {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="flex flex-col pt-12 justify-center items-center h-auto font-extrabold text-[90px] ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-3/4 md:w-3/5 hover:text-[#e9c46a] relative flex-col font-semibold text-[5vmin] md:pt-12 hover:cursor-pointer hover:scale-[104%] transition-all duration-200"
        >
          {city}
        </div>
        <div className="w-full flex relative ">
          <div className="w-full border-t border-white" />
        </div>
      </article>

      <section
        className={classNames(
          isOpen
            ? "h-[41rem] w-full"
            : "h-[2rem] w-[10rem] lg:w-[60rem] flex ",
          "overflow-hidden relative transition-all duration-1000 ease-in-out origin-top-left border-gray-500 border-b-[1.2px] rounded-br-3xl border-r-[1.2px] "
        )}
      >
        <div className="absolute top-0 w-full flex overflow-x-auto gap-12 lg:gap-24 md:items-end py-24 px-10">
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
        <div
          className={classNames(
            isOpen ? " opacity-100" : "opacity-0",
            `flex md:hidden absolute bottom-4 gap-12 mx-auto w-full justify-center items-center transition-all delay-100 duration-1000`
          )}
        >
          <ArrowLeftIcon className="h-6 w-6" />
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </section>
    </>
  );
}
