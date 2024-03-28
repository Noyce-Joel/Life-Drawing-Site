import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Loading({ inView, delay, size }: { inView: boolean, delay: number, size: string }) {
  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref)
  const scroll = inView ? 1 : 0;
  useEffect(() => {
    if (isInView) {
      controls.start({
        pathLength: 1,
        transition: {
          type: "easeInOut",
          duration: 4.5,
          delay: delay
        },
      });
    }
  }, [controls, isInView, delay]);

  return (
    <>
      <svg
      ref={ref}
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 292.000000 272.000000"
        preserveAspectRatio="xMidYMid meet"
        strokeWidth={70}
      >
        <g
          transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)"

          stroke="#FFFFFF"
        >
          <motion.path
            initial={{ pathLength: 0, fill: 'none', stroke: "white" }}
            whileInView={{ pathLength: 1, transition: {duration: 4, delay: delay} }}
            d="M1008 2556 c-181 -139 -235 -498 -114 -753 66 -139 173 -217 296
-216 111 0 171 46 226 169 60 137 70 288 29 450 -63 248 -164 363 -332 380
-55 6 -60 4 -105 -30z m158 -27 c62 -29 148 -126 173 -195 42 -112 51 -318 20
-462 -29 -138 -160 -205 -272 -139 -104 62 -187 263 -187 455 0 135 41 242
122 318 54 51 80 55 144 23z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "white" }}
            whileInView={{ pathLength: 1, transition: {duration: 4, delay: delay} }}
            d="M1822 2513 c-95 -59 -147 -107 -200 -188 -62 -94 -112 -240 -119
-345 -12 -179 68 -341 197 -399 53 -24 145 -28 193 -8 56 24 140 126 195 239
65 132 82 196 89 338 9 210 -31 319 -136 373 -81 40 -140 38 -219 -10z m190
-32 c34 -22 53 -44 74 -88 25 -51 29 -69 28 -143 -1 -92 -25 -198 -77 -333
-39 -103 -82 -165 -139 -200 -165 -102 -304 26 -301 278 1 107 37 241 86 324
55 93 185 191 252 191 17 0 52 -13 77 -29z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "white" }}
            whileInView={{ pathLength: 1, transition: {duration: 4, delay: delay} }}
            d="M500 1890 c-85 -45 -149 -134 -174 -240 -20 -83 -20 -132 0 -228 23
-113 73 -211 147 -286 81 -81 139 -110 238 -114 88 -5 137 14 184 70 53 63 77
134 83 243 4 89 1 109 -22 178 -77 230 -178 349 -325 383 -73 18 -89 17 -131
-6z m141 -47 c72 -36 150 -117 190 -198 62 -127 75 -363 24 -441 -22 -34 -89
-64 -146 -64 -95 0 -200 82 -269 211 -44 83 -60 143 -60 230 0 120 36 197 123
260 49 36 69 36 138 2z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "white" }}
            whileInView={{ pathLength: 1, transition: {duration: 4, delay: delay} }}
            d="M2252 1721 c-92 -37 -132 -67 -182 -142 -94 -137 -145 -290 -138
-411 l3 -63 -95 96 c-108 109 -185 154 -315 185 -75 18 -76 18 -163 -5 -99
-26 -125 -40 -237 -126 -257 -199 -474 -551 -475 -771 0 -59 25 -134 59 -174
52 -63 178 -110 295 -110 71 0 191 22 360 65 159 41 166 40 306 -15 52 -21
113 -41 135 -44 81 -13 203 40 306 132 65 58 88 125 72 215 -11 65 -45 159
-97 267 -51 105 -51 102 3 75 94 -48 202 -43 273 12 95 75 206 261 234 394 31
144 7 315 -54 382 -30 34 -94 60 -157 63 -48 3 -75 -3 -133 -25z m190 -34 c67
-40 108 -115 108 -197 0 -81 -71 -288 -131 -381 -61 -94 -168 -143 -257 -119
-93 24 -135 95 -134 225 2 149 75 353 150 415 45 37 146 79 192 79 19 1 52 -9
72 -22z m-898 -347 c207 -78 406 -321 510 -624 60 -173 56 -269 -14 -329 -108
-92 -184 -98 -341 -27 -52 23 -121 47 -154 53 -69 12 -118 3 -320 -60 -108
-33 -132 -37 -235 -37 -101 -1 -120 2 -157 22 -52 27 -73 57 -85 120 -34 179
183 582 414 769 84 68 124 91 200 113 83 24 116 24 182 0z"
          />
        </g>
      </svg>
    </>
  );
}
