import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Bone({ duration, delay, size }: {duration: number; delay: number; size: string }) {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 777.000000 457.000000"
        preserveAspectRatio="xMidYMid meet"
        strokeWidth={150}
      >
        <g
          transform="translate(0.000000,457.000000) scale(0.100000,-0.100000)"
          fill='none'
          stroke="yellow"
        >
          <motion.path
            initial={{ pathLength: 0, stroke: "white" }}
            whileInView={{
              pathLength: 1,
              transition: { duration: duration, delay: delay, type: 'spring', stiffness: 16.5 },
            }}
            d="M945 4009 c-348 -25 -663 -257 -797 -586 -48 -120 -69 -222 -69 -347
-1 -166 40 -261 216 -502 56 -77 110 -154 119 -172 35 -67 24 -90 -130 -297
-162 -218 -206 -319 -206 -476 1 -120 14 -197 58 -318 57 -162 158 -305 288
-409 101 -81 179 -123 311 -168 105 -36 117 -38 265 -42 132 -3 168 -1 243 17
188 45 343 136 483 285 96 101 160 200 219 338 57 135 106 163 345 197 738
105 1787 131 2650 66 339 -26 713 -79 769 -110 65 -36 107 -92 151 -202 46
-119 134 -245 233 -339 92 -87 156 -128 274 -179 143 -62 188 -70 393 -69 182
0 187 1 280 33 234 79 415 222 533 419 114 188 166 461 121 636 -21 83 -82
205 -152 301 -169 233 -172 237 -172 269 0 35 34 94 109 191 189 244 243 361
243 526 -1 215 -71 415 -207 586 -114 145 -257 243 -450 310 l-110 38 -185 0
c-201 0 -231 -5 -375 -67 -218 -94 -423 -301 -521 -526 -19 -42 -34 -82 -34
-88 0 -7 -17 -30 -39 -52 -67 -69 -142 -87 -541 -132 -954 -106 -2302 -89
-3040 39 -176 31 -216 61 -284 217 -81 184 -163 298 -282 395 -208 169 -429
237 -709 218z m330 -179 c151 -48 269z"
          />
        </g>
      </svg>
    </>
  );
}
