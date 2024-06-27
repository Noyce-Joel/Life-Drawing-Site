"use client";
import { sendMail } from "../../services/mail";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Notification from "./Notification";

function MyForm() {
  const [sent, setSent] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
    attachment: undefined,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const container = {
    whileInView: {
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const anim = {
    initial: { y: 200, rotate: 25 },
    animate: { y: 0, rotate: 0, transition: { duration: 0.7 } },
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendMail({
        to: "doglifedrawing@gmail.com",
        email: formData.email,
        name: formData.email,
        subject: formData.subject,
        body: formData.body,
        attachment: formData.attachment,
      });
      setEmailStatus("successful");
      setFormData({
        name: "",
        email: "",
        subject: "",
        body: "",
        attachment: undefined,
      });
    } catch (error) {
      setEmailStatus("unsuccessful");
    }
    setSent(true);
  };

  return (
    <div className="flex relative ">
      {sent ? <Notification status={emailStatus} /> : null}
      <div className="md:flex hidden relative  w-2/5 items-center justify-center">
        <div className="flex gap-12 flex-col text-[20px] md:text-[1.92vw]">
          <div className="flex flex-col gap-4">
            <p>For collaborations please include: </p>
            <ul>
              <li> - Preferred date/time</li>
              <li> - Number of people </li>
              <li> - City and venue</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p>For modelling your dog should be: </p>
            <ul>
              <li> - Happy around people and dogs</li>
              <li> - Relaxed in busy environment</li>
              <li> - Happy to chill in a pub setting</li>
            </ul>
          </div>
        </div>
      </div>
      <section className=" pt-12 pb-8 md:pb-12 w-full px-4 md:w-3/5 mx-auto flex">
        <form
          onSubmit={(e) => handleSend(e)}
          className="w-full h-full md:h-full flex flex-col border overflow-hidden overflow-y-scroll text-white md:text-[1.4vw] bg-[#334D42] border-gray-500 md:p-5 p-4 lg:p-12 rounded-[20px] relative items-start  "
        >
          {" "}
          <div className="mb-4 w-full h-full group relative ">
            <div className="h-fit overflow-hidden">
              <motion.label
                initial={{ y: 280, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                htmlFor="form-name"
                className="block flexfont-bold  "
              >
                Name
              </motion.label>
            </div>
            <input
              type="text"
              id="form-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2  
              focus:outline-none bg-transparent "
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.4,
                  delay: 0.3,
                  type: "tween",

                  ease: "anticipate",
                },
                
              }}
              viewport={{once: true}}
              className="w-full  -z-40 origin-right border-b border-[0.8px]"
            ></motion.div>
          </div>
          <div className="mb-4 w-full h-full relative ">
            <div className="h-fit overflow-hidden">
              <motion.label
                initial={{ y: 280, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                htmlFor="form-email"
                className="block  font-bold "
              >
                Email
              </motion.label>
            </div>
            <input
              type="email"
              id="form-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2   focus:outline-none  bg-transparent"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.4,
                  delay: 0.5,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              viewport={{once: true}}
              className="w-full  -z-40 origin-right  border-b border-[0.8px]"
            ></motion.div>
          </div>
          <div className="mb-4 mt-4 h-full w-full relative ">
            <div className="h-fit overflow-hidden">
              <motion.label
                initial={{ y: 280, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                htmlFor="form-email"
                className="block font-bold "
              >
                Subject
              </motion.label>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className=" pt-4 pb-2 flex md:flex-row flex-col gap-4"
            >
              <label className="flex gap-2">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.currentTarget.value })
                  }
                  type="checkbox"
                  name="subject"
                  value="Collaborations"
                  checked={formData.subject === "Collaborations"}
                />
                Collaborations
              </label>
              <label className="flex gap-2">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.currentTarget.value })
                  }
                  type="checkbox"
                  name="subject"
                  value="Modelling"
                  checked={formData.subject === "Modelling"}
                />
                Modelling
              </label>
              <label className="flex gap-2">
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.currentTarget.value })
                  }
                  type="checkbox"
                  name="subject"
                  value="General enquiry"
                  checked={formData.subject === "General enquiry"}
                />
                Other
              </label>
            </motion.div>
          </div>
          <div className=" w-full h-full pb-0 md:pb-12">
            <div className="h-fit overflow-hidden">
              <motion.label
                initial={{ y: 280, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                htmlFor="form-message"
                className="block font-bold "
              >
                Message
              </motion.label>
            </div>
            <textarea
              id="form-body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              className="w-full h-full px-3 focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1,
                  delay: 0.9,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              viewport={{once: true}}
              className="w-full -z-40 origin-right border-t  border-[0.8px]"
            ></motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            type="submit"
            className=" border mt-12 md:mt-4 border-black hover:bg-[#FA6B60]  font-bold  px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </motion.button>
        </form>
      </section>
    </div>
  );
}

export default MyForm;
