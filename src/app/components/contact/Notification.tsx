import {
  CheckCircleIcon,
  XMarkIcon,
  HandRaisedIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

import { SetStateAction, useState } from "react";

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
          initial={{ y: 400 }}
          animate={{ y: 0 }}
          className="fixed top-10 w-fit z-50 rounded-md bg-green-50 p-4"
        >
          <div className="flex gap-3 z-50">
            <div className="flex justify-evenly">
              <div className="flex-shrink-0">
                {success ? (
                  <CheckCircleIcon
                    className="h-5 w-5 text-green-400"
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
                  <p className="text-sm font-medium text-green-800 ">
                    {alertMessage}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none  focus:ring-offset-2 focus:ring-offset-green-50"
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
