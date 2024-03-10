import { StateContext, StateContextType } from '@/app/context/State';
import React, { useContext, useState } from 'react'
import Line from '../line/Line';
import Event from './Event';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function EventsList({city}: {city: string}) {
    const { events } = useContext<StateContextType>(StateContext);
  const [modalEventId, setModalEventId] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const handleEventClick = (id: number) => {
    setModalEventId(id);
  };
  return (
   <>
   <article className="flex flex-col pt-12 justify-center items-center h-auto font-extrabold text-[90px] ">
   <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-3/4 md:w-3/5 relative flex-col font-semibold text-[30px] md:text-[50px] text-white md:pt-12 hover:cursor-pointer hover:scale-[104%] hover:text-gray-900 transition-all duration-200"
        >
         {city}
        </div>
        <div className="w-full flex relative ">
          <Line title={false} />
        </div>
      </article>

      <section
        className={classNames(
          isOpen
            ? "h-[41rem] w-full"
            : "h-[2rem] md:w-[20rem] lg:w-[60rem] flex ",
          "overflow-hidden relative transition-all duration-1000 ease-in-out origin-top-left border-gray-900 border-b-[1.2px] rounded-br-3xl border-r-[1.2px] "
        )}
      >
        <div className="absolute top-0 w-full flex overflow-x-auto gap-12 lg:gap-24 justify-between md:items-end py-24 px-10">
          {events.map((event, index) => {
            const id = event.id;
            const name = event.name.text;
            const start = event.start.local;
            const end = event.end.local;
            const description = event.description.text;
            const logo = event.logo.original.url;
            const capacity = event.capacity;
            let hello;
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
        <div className={classNames(
          isOpen
            ? ' opacity-100' : 'opacity-0', `flex md:hidden absolute bottom-4 gap-12 mx-auto w-full justify-center items-center transition-all delay-100 duration-700`)}>
         
           <ArrowLeftIcon className='h-6 w-6' />
           <ArrowRightIcon className='h-6 w-6' />
        </div>
      </section>
   </>
  )
}
