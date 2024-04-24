import React, { useEffect, useState } from "react";
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
  const [hover, setHover] = useState(false);
  const [plusThree, setPlusThree] = useState(false);
  
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (events.length < 3 && !isMobile) setPlusThree(true);
    else setPlusThree(false);
    if (events.length <= 1 && isMobile) setPlusThree(true);
  }, [setPlusThree, events]);
  const plus = plusThree
    ? "lg:justify-center justify-start px-12 md:px-24"
    : "px-12 md:px-24 justify-start";
  const colours = ["#DA7835", "#FFD04D", "#334D42", "#F7C2BC"];
  const loadedEvents = events.map((event) => {
    const randomColor = colours[Math.floor(Math.random() * colours.length)];
    return { ...event, color: randomColor };
  });
  return (
    <>
      <article className="flex flex-col  justify-center items-center h-full  text-[90px] bg-[#EDEAE6] ">
        <div
          onClick={() => {
            setIsOpen(!isOpen), setHover(false);
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className="flex w-3/4 md:w-full justify-center items-center text-[#DA7835] relative flex-col font-semibold text-[20px] md:text-[3.4vw] md:pt-12 hover:cursor-pointer hover:scale-[104%] transition-all duration-200"
        >
          {city}
        </div>
        <div className="w-full flex relative ">
          <div className="w-full border-t border-gray-300" />
        </div>
      </article>
      <div className="flex w-full ">
        <section
          className={classNames(
            isOpen
              ? "md:h-[44rem] h-[42rem] w-full"
              : hover
              ? "h-[5rem] w-[68vw]"
              : "h-[3rem] w-[38rem]  lg:w-[68vw] flex ",
            "overflow-hidden relative transition-all duration-700 ease-in-out origin-top-left border-gray-300 bg-[#EDEAE6] border-b-[1.2px] rounded-br-3xl border-r-[1.2px] "
          )}
        >
          <div
            className={`absolute top-0 w-full flex overflow-x-auto gap-14 lg:gap-24 ${plus} py-12 px-10 md:px-20`}
          >
            {loadedEvents.map((event, index) => {
              const id = event.id;
              const name = event.name.text;
              const start = event.start.local;
              const end = event.end.local;
              const description = event.description.text;
              const logo = event.logo.original.url;
              const capacity = event.capacity;
              const randomColor =
                colours[Math.floor(Math.random() * colours.length)];
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
                    tileColor={`${randomColor}`}
                  />
                </div>
              );
            })}
          </div>
          {!plusThree ? (
            <div
              className={classNames(
                isOpen ? " opacity-100 delay-100 duration-1000" : "opacity-0 ",
                `flex absolute bottom-4 gap-8  w-full justify-center items-center transition-all  `
              )}
            >
              <ArrowLeftIcon className="h-6 w-6" />
              Scroll
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
