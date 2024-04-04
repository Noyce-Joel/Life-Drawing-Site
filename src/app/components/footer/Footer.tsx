import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverTwo, setHoverTwo] = useState<boolean>(false);
  return (
    <div className="flex relative flex-col -z-0">
      <footer className="relative flex  md:px-24 py-7 bg-[#0d2110] px-12 justify-between border-t h-[410px] overflow-y-hidden ">
        <div className=" flex flex-col gap-7 absolute ">
          <b className="md:text-[27px]  text-[#f4b923]">Connect</b>
          <b>
            {" "}
            <div className="flex z-0 gap-2">
              <SocialIcon
                style={{ width: "50px", height: "50px" }}
                url="https://www.instagram.com/dog.lifedrawing/"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={hover ? "#f4b923" : "white"}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              />
              <SocialIcon
                style={{ width: "50px", height: "50px" }}
                url="https://www.facebook.com/dogdrawing/?locale=en_GB"
                className="hover:scale-110 duration-200"
                bgColor="transparent"
                fgColor={hoverTwo ? "#f4b923" : "white"}
                onMouseOver={() => setHoverTwo(true)}
                onMouseOut={() => setHoverTwo(false)}
              />
            </div>
          </b>
        </div>

        <div className="flex md:flex-row flex-col justify-between bottom-10 w-full text-[20px]">
          <div className="flex flex-col justify-end pt-32 text-[2.5vh]">
            <b>Bloc Studios</b>
            <span>Hicks Street,</span>
            <span>Neepsend,</span>
            <span>Sheffield</span>
            <span>S3 8BL</span>
          </div>
          
          <div className="flex items-end  text-[#f4b923]">
           Site by Joel Noyce © 2024
          </div>
        </div>
      </footer>
    </div>
  );
}
