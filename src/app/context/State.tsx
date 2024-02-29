"use client";

import React, { createContext, useEffect, useState } from "react";
import getAllEvents from "../services/fetch";

export const StateContext = createContext<{
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}>({
  events: [],
  setEvents: () => null,
});

export interface Event {
  id: number;
  name: {
    text: string;
  };
  start: {
    local: string;
  };
  end: {
    local: string;
  };
  description: {
    text: string;
  };
  location: string;
  logo: {
    original: {
      url: string;
    };
  };
  capacity: number;
  url: string;
}

export interface StateContextType {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data.events);
        console.log(events)
      })
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <StateContext.Provider value={{ events, setEvents }}>
      {children}
    </StateContext.Provider>
  );
};
