import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Ball({duration, delay, size}: {delay: number, size: string, duration: number}) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="147"
      height="147"
      viewBox="0 0 900.000000 920.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={180}
    >
      <g
        transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
        fill="none"
        stroke="#FFFFFF"
      >
        <motion.path
        initial={{pathLength: 0 }}
        whileInView={{pathLength: 1, transition: { duration: duration, delay: delay, type: 'spring', stiffness: 10}}}
          d="M7335 9181 c-16 -5 -65 -23 -108 -41 -71 -30 -94 -47 -250 -194 -253
-238 -1349 -1328 -3893 -3871 l-2272 -2270 -310 -940 c-511 -1547 -510 -1542
-492 -1586 15 -35 62 -76 96 -85 15 -4 58 3 102 16 134 39 781 250 1607 524
l800 266 2820 2822 c1552 1553 2929 2933 3061 3068 489 500 504 525 504 830 0
173 -9 219 -65 330 -62 122 -101 166 -622 681 -353 349 -438 414 -582 445 -70
15 -342 18 -396 5z m290 -255 c28 -7 68 -22 90 -33 75 -39 728 -677 909 -889
106 -124 121 -158 121 -284 0 -100 -2 -108 -33 -166 -48 -88 -157 -209 -509
-564 l-312 -315 -701 701 -702 701 234 234 c480 483 599 586 708 620 40 12
141 10 195 -5z m-604 -1793 c312 -312 585 -589 608 -615 l43 -47 -100 -108
c-55 -59 -175 -182 -266 -273 l-166 -165 -701 701 -701 701 134 134 c74 74
196 194 271 267 l138 133 87 -80 c48 -44 342 -335 653 -648z m-2266 -3593z m-3090 -1690 c402 -403 636 -643
630 -649 -6 -5 -302 -106 -660 -225 l-650 -216 -202 202 c-112 112 -203 210
-203 218 0 23 431 1310 438 1310 4 0 295 -288 647 -640z"
        />
      </g>
    </svg>
  );
}
