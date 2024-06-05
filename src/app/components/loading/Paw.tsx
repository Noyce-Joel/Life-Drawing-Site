import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Loading({
  delay,
  size,
  duration,
}: {
  delay: number;
  size: string;
  duration: number;
}) {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 292.000000 272.000000"
        preserveAspectRatio="xMidYMid meet"
        strokeWidth={54}
      >
        <g
          transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="#000000"
        >
          <motion.path
            initial={{ pathLength: 0, stroke: "black" }}
            whileInView={{
              pathLength: 1,
              transition: {
                duration: duration,
                delay: delay,
                type: "spring",
                stiffness: 15,
              },
            }}
            d="M1008 2556 c-181 -139 -235 -498 -114 -753 66 -139 173 -217 296
-216 111 0 171 46 226 169 60 137 70 288 29 450 -63 248 -164 363 -332 380
-55 6 -60 4 -105 -30z m158z"
          />
          <motion.path
            initial={{ pathLength: 0, stroke: "black" }}
            whileInView={{
              pathLength: 1,
              transition: {
                duration: duration,
                delay: delay + 0.2,
                type: "spring",
                stiffness: 15,
              },
            }}
            d="M1822 2513 c-95 -59 -147 -107 -200 -188 -62 -94 -112 -240 -119
-345 -12 -179 68 -341 197 -399 53 -24 145 -28 193 -8 56 24 140 126 195 239
65 132 82 196 89 338 9 210 -31 319 -136 373 -81 40 -140 38 -219 -10z m190
-32 c34 -22 53z"
          />
          <motion.path
            initial={{ pathLength: 0, stroke: "black" }}
            whileInView={{
              pathLength: 1,
              transition: {
                duration: duration,
                delay: delay + 0.4,
                type: "spring",
                stiffness: 15,
              },
            }}
            d="M500 1890 c-85 -45 -149 -134 -174 -240 -20 -83 -20 -132 0 -228 23
-113 73 -211 147 -286 81 -81 139 -110 238 -114 88 -5 137 14 184 70 53 63 77
134 83 243 4 89 1 109 -22 178 -77 230 -178 349 -325 383 -73 18 -89 17 -131
-6z m141 -47 c72 -36 150 -117 190z"
          />
          <motion.path
            initial={{ pathLength: 0, stroke: "black" }}
            whileInView={{
              pathLength: 1,
              transition: {
                duration: duration,
                delay: delay + 0.6,
                type: "spring",
                stiffness: 17,
              },
            }}
            d="M2252 1721 c-92 -37 -132 -67 -182 -142 -94 -137 -145 -290 -138
-411 l3 -63 -95 96 c-108 109 -185 154 -315 185 -75 18 -76 18 -163 -5 -99
-26 -125 -40 -237 -126 -257 -199 -474 -551 -475 -771 0 -59 25 -134 59 -174
52 -63 178 -110 295 -110 71 0 191 22 360 65 159 41 166 40 306 -15 52 -21
113 -41 135 -44 81 -13 203 40 306 132 65 58 88 125 72 215 -11 65 -45 159
-97 267 -51 105 -51 102 3 75 94 -48 202 -43 273 12 95 75 206 261 234 394 31
144 7 315 -54 382 -30 34 -94 60 -157 63 -48 3 -75 -3 -133 -25z m190 -34 c67
-40 108 -115 108z"
          />
        </g>
      </svg>
    </>
  );
}
