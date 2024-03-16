"use client";

import { sendMail } from "../../services/mail";
import {  motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";


function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
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

  const handleSend = async () => {

    await sendMail({
      to: "noyce.joel@gmail.com",
      email: formData.email,
      name: formData.email,
      subject: formData.subject,
      body: formData.body
    });
  };
  

  return (
    <motion.div className="flex gap-12 flex-col lg:flex-row w-screen h-full lg:h-screen justify-center items-center bg-gray-900">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", mass: 2, friction: 80, damping: 20 }}
        className="pt-36 md:pt-24 px-12 lg:w-1/2 lg:pb-0 md:pb-44 pb-24 relative w-full h-full flex  overflow-hidden origin-top-left bg-[#8b6441] lg:justify-start justify-center lg:rounded-br-[250px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col "
        >
          {/* <Image src="/belly.jpg" alt="Contact" width={500} height={500} className="w-full absolute"/> */}
          <div className="flex  flex-col md:justify-start md:items-start justify-center items-center pb-12">
            <h1 className="text-white  flex-nowrap whitespace-nowrap md:text-[50px] text-[40px]">
              Get in touch
            </h1>
          </div>

          <div className=" contact-text sm-contact-text md-contact-text lg-contact-text gap-4  flex items-start flex-col w-full ">
            For collaborations please include:
            <ul className="text-white ">
              <li>Preferred date/time,</li>
              <li>Number of people</li>
              <li>City and venue</li>
            </ul>
          </div>

          <div className="contact-text sm-contact-text md-contact-text lg-contact-text gap-4 pt-4 flex items-start flex-col ">
            Our dogs are:
            <ul className="text-white w-full">
              <li>Happy around people and dogs</li>
              <li>Relaxed in busy environments</li>
              <li>Happy to chill in a pub setting</li>
            </ul>
          </div>
          <div className="absolute bottom-10 lg:left-0 right-0 md:flex hidden">
            <Image
              src="/Logo.png"
              className="invert"
              height={205}
              width={205}
              alt="logo"

            />
          </div>
        </motion.div>
      </motion.section>
      
      <section className="lg:w-1/2 w-full h-full relative bg-gray-900 lg:pt-0 p-12 lg:py-0 lg:rounded-tl-[250px]">
        <form 
        onSubmit={() => handleSend()}
        className="w-full h-full flex flex-col justify-center items-start pb-12 md:pr-12 ">
          
          <div className="mb-4 w-full relative">
            <div className="h-9 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7 }}
                htmlFor="form-name"
                className="block text-white font-bold mb-2 text-[22px] md:text-[22px] "
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
              className="w-full px-3 py-2  text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent "
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.4,
                  delay: 0.1,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              className="w-full -z-40 origin-right border-b border-[1.2px]"
            ></motion.div>
          </div>
          <div className="mb-4 w-full relative ">
            <div className="h-9 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                htmlFor="form-email"
                className="block text-white font-bold mb-2 text-[22px] md:text-[22px]"
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
              className="w-full px-3 py-2  text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
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
              className="w-full -z-40 origin-right  border-b border-[1.2px]"
            ></motion.div>
          </div>
          <div className="mb-4 w-full relative ">
            <div className="h-9 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                htmlFor="form-email"
                className="block text-white font-bold mb-2 text-[22px] md:text-[22px]"
              >
                Subject
              </motion.label>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1}} className="text-white pt-10 pb-7 flex md:flex-row flex-col gap-4">
            <label className="flex gap-2">
            <input onChange={(e) => setFormData({...formData, subject: e.currentTarget.value})} type="checkbox" name='subject' value='Collaborations' />
              Collaborations
              
            </label>
            <label className="flex gap-2">
            <input onChange={(e) => setFormData({...formData, subject: e.currentTarget.value})} type="checkbox" name='subject' value='Modelling' />
              Modelling
              
            </label>
            <label className="flex gap-2">
            <input onChange={(e) => setFormData({...formData, subject: e.currentTarget.value})} type="checkbox" name='subject' value='General enquiry' />
              Other
             
            </label>
            </motion.div>
          </div>

          <div className="mb-4 w-full">
            <div className="h-9 overflow-hidden">
              <motion.label
                initial={{ y: 200, rotate: 25 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                htmlFor="form-message"
                className="block text-white font-bold mb-2 text-[22px] md:text-[22px]"
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
              className="w-full px-3 py-2 text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
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
              className="w-full -z-40 origin-right border-b border-[1.2px]"
            ></motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            type="submit"
            className=" bg-gray-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </motion.button>
        </form>
        <div className="flex absolute justify-end items-end w-full bottom-5 right-5 lg:p-6 pt-12 z-40 gap-4">
          <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.instagram.com/dog.lifedrawing/"
            className="hover:scale-110 duration-200"
          />
          <SocialIcon
            style={{ width: "50px", height: "50px" }}
            url="https://www.facebook.com/dogdrawing/?locale=en_GB"
            className="hover:scale-110 duration-200"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default MyForm;
