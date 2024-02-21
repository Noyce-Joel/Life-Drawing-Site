import { useContext, useEffect } from "react";
import { StateContext, StateContextType } from "../../context/State";
import Event from "./Event";
declare global {
  interface Window {
    EBWidgets: any;
  }
}

export default function Events() {
  const { events } = useContext<StateContextType>(StateContext);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-100">
      {events.map((event) => {
        const id = event.id;
        const name = event.name.text;
        const start = event.start.local;
        const end = event.end.local;
        const description = event.description.text;
        const logo = event.logo.original.url;
        const capacity = event.capacity;
        return (
          <>
            <Event
              id={id}
              name={name}
              start={start}
              end={end}
              description={description}
              capacity={capacity}
              logo={logo}
            />
          </>
        );
      })}
    </div>
  );
}
