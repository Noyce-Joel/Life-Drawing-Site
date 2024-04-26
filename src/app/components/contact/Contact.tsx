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
        to: "noyce.joel@gmail.com",
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
    <div className="flex relative  w-full   h-full placeholder:  ">
      {sent ? <Notification status={emailStatus} /> : null}
      <div className="lg:flex hidden relative  w-2/5 h-full items-center justify-center">
        <div className="flex absolute gap-12 top-[16rem] flex-col sm-text- md-text lg-text">
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
      <section className=" absolute top-[16rem] right-0 p-4 w-full md:pt-0 lg:w-3/5 md:px-24 mx-auto  flex">
        <form
          onSubmit={(e) => handleSend(e)}
          className="w-full h-full flex flex-col border text-white text-[1.4vw] border-gray-500 p-12 rounded-[20px] relative items-start pb-12 md:pr-12 "
        >
          {" "}
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{
              x: 20,
              y: -20,

              transition: {
                type: "spring",
                duration: 1,
                delay: 0.8,
                damping: 22,
                stiffness: 80,
                friction: 40,
                mass: 1.6,
              },
            }}
            viewport={{}}
            className="bg-[#DA7835]  flex w-full rounded-[20px] h-full absolute -z-30 top-0 left-0 "
          />
          <motion.div
            initial={{ x: 500, y: 400 }}
            animate={{
              x: 40,
              y: -40,

              transition: {
                type: "spring",
                duration: 1,
                delay: 0.45,
                damping: 18,
                stiffness: 80,
                friction: 40,
                mass: 1.6,
              },
            }}
            className=" bg-[#334D42] flex w-full rounded-[20px] h-full absolute -z-40 top-0 left-0 "
          />
          <motion.div
            initial={{ x: 1000, y: 0 }}
            animate={{
              x: 60,
              y: -60,

              transition: {
                type: "spring",
                duration: 1,
                delay: 0.3,
                damping: 22,
                stiffness: 80,
                friction: 40,
                mass: 1.6,
              },
            }}
            className="bg-[#FFD04D]  flex w-full rounded-[20px] h-full absolute -z-50 top-0 left-0 "
          />
          <motion.div
            initial={{ x: 700, y: -1000 }}
            animate={{
              x: 80,
              y: -80,

              transition: {
                type: "spring",
                duration: 1,
                delay: 0.15,
                damping: 22,
                stiffness: 80,
                friction: 40,
                mass: 1.6,
              },
            }}
            className="bg-[#F7C2BC]  flex w-full rounded-[20px] h-full absolute -z-[60] top-0 left-0 "
          />
          <div className="mb-4 w-full group relative ">
            <div className="h-8 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
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
                  delay: 1.5,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              className="w-full  -z-40 origin-right border-b border-[1.2px]"
            ></motion.div>
          </div>
          <div className="mb-4 w-full relative ">
            <div className="h-8 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 1.6 }}
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
                  delay: 1.7,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              className="w-full  -z-40 origin-right  border-b border-[1.2px]"
            ></motion.div>
          </div>
          <div className="mb-4 mt-4 w-full relative ">
            <div className="h-8 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 1.8 }}
                htmlFor="form-email"
                className="block font-bold "
              >
                Subject
              </motion.label>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
              className=" pt-4 pb-7 flex md:flex-row flex-col gap-4"
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
          <div className="mb-4 w-full">
            <div className="h-8 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 2 }}
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
              className="w-full px-3 py-2 focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.7,
                  delay: 1.9,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              className="w-full -z-40 origin-right border-b  border-[1.2px]"
            ></motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            type="submit"
            className=" border border-black hover:bg-[#FA6B60]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </motion.button>
        </form>
      </section>
    </div>
  );
}

export default MyForm;
