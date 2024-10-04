"use client";

import React, { useContext, useEffect } from "react";
import { StateContext, StateContextType } from "../../context/State";
import EventsList from "./EventsList";
import { copy } from "../../../../public/copy/copy";
import Image from "next/image";

declare global {
  interface Window {
    EBWidgets: any;
  }
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function groupBy(list: any[], keyGetter: (item: any) => string) {
  return list.reduce((result, item) => {
    const key = keyGetter(item);
    const collection = result[key];
    if (!collection) {
      result[key] = [item];
    } else {
      collection.push(item);
    }
    return result;
  }, {} as any);
}

export default function Events({ comp }: { comp: boolean }) {
  const { events } = useContext<StateContextType>(StateContext);
  const eventsByCity = groupBy(events, (event) => {
    if (event.venue.address.city.toLowerCase() === "burley") {
      return "Leeds";
    }
    if (event.venue.address.city.toLowerCase() === "heworth") {
      return "York";
    }
    return event.venue.address.city;
  });

  useEffect(() => {
    console.log('events', events);
  }, []);

  return (
    <>
      <div className="text-left mt-14 relative z-0 items-center justify-center flex flex-col tracking-wider text-pretty bg-[#EDEAE6]">
        <Image
          src="/1.png"
          alt="dog illustration"
          height={280}
          width={280}
          className="h-auto w-[24vw] md:w-[12vw]"
        />
        <div className="flex flex-col items-center pt-12 text-[20px] md:text-[1.92vw] justify-start w-4/5 md:w-3/5 gap-12">
          {comp && (
            <>
              <p className="md:w-4/5">{copy.events_join}</p>
              <p className="md:w-4/5 pb-24">{copy.events_cities}</p>
            </>
          )}
        </div>
      </div>

      {Object.entries(eventsByCity).map(([city, cityEvents]: any) => (
        <div key={city}>
          <EventsList events={cityEvents} city={city} />
          {cityEvents.map((event: any) => (
            <script
              key={event.id}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Event",
                  "name": event.name,
                  "description": event.description,
                  "startDate": new Date(event.start),
                  "endDate": new Date(event.end),
                  "eventAttendanceMode": event.online_event
                    ? "https://schema.org/OnlineEventAttendanceMode"
                    : "https://schema.org/OfflineEventAttendanceMode",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "location": event.online_event
                    ? {
                        "@type": "VirtualLocation",
                        "url": event.url,
                      }
                    : {
                        "@type": "Place",
                        "name": event.venue?.address?.address_1 || "Venue",
                        "address": {
                          "@type": "PostalAddress",
                          "streetAddress": event.venue?.address?.address_1 || "",
                          "addressLocality": event.venue?.address?.city || "",
                          "postalCode": event.venue?.address?.postal_code || "",
                          "addressCountry": event.venue?.address?.country || "",
                        },
                      },
                  "offers": {
                    "@type": "Offer",
                    "url": event.url,
                    "price": event.price || "11",
                    "priceCurrency": "GBP",
                    "availability": event.capacity > 0
                      ? "https://schema.org/InStock"
                      : "https://schema.org/SoldOut",
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": event.organizer_id || "Organizer",
                    "url": event.url,
                  },
                  "image": event.logo,
                }),
              }}
            />
          ))}
        </div>
      ))}

      <div className="text-left md:mt-14 mt-8 relative z-0 items-center justify-center flex flex-col tracking-wider text-pretty bg-[#EDEAE6]">
        <div className="flex flex-col items-center pt-12 justify-start w-4/5 md:w-3/5 gap-12">
          <p className="flex md:text-[2.6vw] text-[22.5px] text-[#DA7835]">
            {copy.sessions_white_text}
          </p>
          <p className="md:w-4/5 md:text-[1.92vw] text-[20px]">
            {copy.sessions_our_dogs}
          </p>
        </div>
      </div>
    </>
  );
}
