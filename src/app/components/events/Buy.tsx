"use client";
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
        modalTriggerElementId: `button_id_${eventId}`,
        onOrderComplete: () => {
          window.location.reload();
        },
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [eventId]);
  return (
    <button
      id={`button_id_${eventId}`}
      className="border hover:bg-[#edeae6] text-2xl  hover:text-[#DA7835] font-bold py-2 px-4 rounded"
    >
      Book
    </button>
  );
};
