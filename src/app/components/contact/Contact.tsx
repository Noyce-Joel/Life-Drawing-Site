"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send data to backend
    console.log(formData);
  };

  return (
    <AnimatePresence mode="sync">
    <motion.div 
    
    className="flex gap-12 flex-col lg:flex-row w-screen h-full lg:h-screen justify-center items-center bg-gray-900">
      <motion.section initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1}}
   
    transition={{  type: "spring", mass: 5, friction: 90, damping: 20}}className="pt-6 px-12 lg:w-1/2 w-full h-full flex flex-col overflow-hidden origin-top-left justify-start items-center bg-[#8b6441] lg:rounded-br-[250px]">
        <div className="w-full flex flex-col ">
          {/* <Image src="/belly.jpg" alt="Contact" width={500} height={500} className="w-full "/> */}
          {/* <div>
            <h1 className="text-white md:text-[75px] text-[45px]">
              Get in touch
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: 1,
                transition: {
                  duration: 1.4,
                  delay: 0.4,
                  type: "tween",

                  ease: "anticipate",
                },
              }}
              className="w-full -z-40 origin-right md:-mt-5 border-b border-[1.9px]"
            ></motion.div>
          </div> */}

          {/* <div className="md:text-[27px] md:pt-12 flex justify-end items-center flex-col text-justify">
            If you’re getting in contact to collaborate on a workshop, please
            include:
            <ul className="text-white tex-justify w-3/4 md:pt-6 ">
              <li>Preferred date/time,</li>
              <li>Number of people</li>
              <li>City and venue</li>
            </ul>
          </div>
         
          <div className="md:text-[27px] flex justify-end items-center flex-col text-justify md:pt-12">
            If you’re wanting your dog to model with us, they should be:
            <ul className="text-white tex-justify w-3/4 md:pt-6 ">
              <li>Happy around people and dogs</li>
              <li>Relaxed in busy environments</li>
              <li>Happy to chill in a pub setting</li>
            </ul>
          </div> */}
          
        </div>
      </motion.section>
      <section className="lg:w-1/2 w-full h-full relative bg-gray-900 lg:pt-0 p-12 lg:py-0 lg:rounded-l-[250px]">
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center items-start pb-12 lg:pl-12">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-white font-bold mb-2 text-[27px] md:text-[27px]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-b text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent "
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-white font-bold mb-2 text-[27px] md:text-[27px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-b text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="message"
              className="block text-white font-bold mb-2 text-[27px] md:text-[27px]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-12 border-b text-white md:text-[27px] focus:outline-none focus:border-yellow-500 focus:text-yellow-500 bg-transparent"
            />
          </div>
          <button
            type="submit"
            className=" bg-gray-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        <div className="flex absolute justify-end items-end w-full bottom-0 right-0 lg:p-6 pt-12 z-40 gap-2">
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
    </AnimatePresence>
  );
}

export default MyForm;
