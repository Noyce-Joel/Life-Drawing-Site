import { useContext, useEffect } from "react";
import { StateContext, StateContextType } from "../../context/State";
import Map from "./Map";
import Event from "./Event";
declare global {
  interface Window {
    EBWidgets: any;
  }
}

export default function Events() {
  const { events } = useContext<StateContextType>(StateContext);
  console.log(events);
  return (
    <div className="h-screen w-screen flex relative">
    <div className="absolute z-0 right-0 left-0 mx-auto">
    <Map />
    </div>
    <div className="flex grid-cols-2 justify-between h-screen w-screen items-center px-12">
      
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
          <div key={id + index} className="flex z-10 mb-20"> 
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
          </>
        );
      })}
    </div>
    </div>
  );
}
