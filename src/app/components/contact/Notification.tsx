import {
  CheckCircleIcon,
  XMarkIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import { useState } from "react";

export default function Notification({ status }: { status: string }) {
  const [open, setOpen] = useState<boolean>(true);
  let alertMessage;
  let success;
  switch (status) {
    case "successful":
      alertMessage = "Thanks for your message! We'll get back to you soon.";
      success = true;
      break;
    case "unsuccessful":
      alertMessage = " Sorry, something went wrong. Please try again or contact us directly at...";
      break;
  }
  return (
    <>
      {open ? (
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0, transition: { duration: 0.2 } }}
          className="fixed bottom-10 right-0 left-0 mx-auto bg-[#334D42]  w-fit z-50 rounded-md  p-4"
        >
          <div className="flex gap-3 z-50">
            <div className="flex justify-evenly items-center">
              <div className="flex-shrink-0">
                {success ? (
                  <CheckCircleIcon
                    className="h-10 w-10 text-green-400"
                    aria-hidden="true"
                  />
                ) : (
                  <HandRaisedIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="ml-3">
                {status ? (
                  <p className="text-sm font-medium text-white ">
                    {alertMessage}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="ml-auto pl-3 flex items-center">
              <div className="">
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="inline-flex rounded-full  p-1.5 text-green-500 hover:bg-green-100 focus:outline-none  focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
