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
    <div className="h-screen w-screen relative snap-proximity">
  
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-center flex relative gap-24 justify-between md:items-end py-24 w-screen px-12">
      
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
