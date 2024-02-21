'use client'
import { useEffect } from "react";

export const Buy = ({ eventId }: { eventId: number }) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId: eventId,
          modal: true,
          modalTriggerElementId: "button_id",
          onOrderComplete: () => {
            console.log("Order complete!");
          },
        });
      };
  
      return () => {
        document.body.removeChild(script);
      };
    }, [eventId]);
    return (
      <button
        id="button_id"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Buy Tickets
      </button>
    );
  };