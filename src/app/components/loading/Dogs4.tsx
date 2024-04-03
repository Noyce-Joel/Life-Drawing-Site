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
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 300.000000 36.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={7}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,36.000000) scale(0.100000,-0.100000)"
        fill='none'
        stroke="#FFFFFF"
      >
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M400 300 c-58 -10 -124 -62 -138 -108 -17 -55 -16 -102 2 -102 8 0
18 5 22 11 14 23 23 -8 13 -45 -7 -24 -7 -42 -1 -48 6 -6 11 10 15 42 3 28 13
60 22 72 19 28 19 38 0 38 -9 0 -15 -10 -15 -26 0 -16 -4 -23 -11 -18 -6 3 -9
24 -7 45 5 54 -9 49 -18 -6 -3 -25 -10 -48 -15 -51 -12 -7 -11 18 2 72 9 36
20 51 58 77 38 26 55 32 98 31 34 0 58 -6 71 -17 10 -9 24 -17 31 -17 17 0 41
-63 41 -110 0 -67 -31 -45 -45 33 -4 20 -11 37 -16 37 -11 0 -3 -39 17 -88 16
-40 51 -44 60 -8 3 14 3 30 -1 35 -8 14 1 14 45 1 19 -6 70 -11 113 -12 42 -1
77 -4 77 -7 0 -2 -7 -13 -16 -22 -15 -17 -15 -21 0 -54 11 -21 26 -37 42 -41
42 -11 124 -10 124 1 0 6 14 16 30 22 17 6 30 16 30 21 0 6 -20 0 -46 -14 -54
-29 -55 -29 -48 -6 5 16 5 16 -9 -1 -17 -21 -66 -22 -93 -3 -15 12 -17 17 -6
27 18 19 15 28 -7 24 -19 -3 -19 -2 1 32 12 19 27 37 33 40 7 2 11 13 8 23 -3
12 3 23 16 32 12 7 21 18 21 24 0 7 17 22 37 34 59 35 133 16 164 -41 7 -14 5
-16 -14 -13 l-22 5 23 -12 c39 -21 26 -58 -32 -91 -27 -16 -50 -28 -51 -26 -9
11 -10 109 -1 118 7 7 4 10 -8 10 -17 0 -18 -6 -13 -65 4 -36 9 -70 12 -75 8
-13 94 35 122 69 22 25 23 25 23 4 0 -12 4 -24 9 -28 5 -3 12 -18 16 -34 3
-15 22 -43 43 -62 20 -19 28 -24 18 -12 -17 21 -17 22 13 37 73 38 114 143 72
185 -11 11 -28 21 -36 21 -17 0 -20 -25 -5 -35 20 -12 9 -48 -24 -81 -52 -52
-69 -46 -106 35 -37 80 -59 104 -113 121 -33 10 -42 9 -80 -10 -57 -30 -72
-45 -96 -96 -21 -43 -22 -44 -71 -44 -86 0 -200 21 -200 37 0 29 -31 73 -63
86 -67 29 -83 33 -117 27z m908 -108 c4 -48 -19 -87 -69 -123 -24 -17 -33 -18
-44 -9 -22 19 -18 28 18 44 48 20 80 63 75 104 -3 20 0 31 6 29 6 -2 12 -22
14 -45z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M1943 298 c-6 -7 -13 -40 -17 -73 -3 -33 -10 -80 -14 -105 l-8 -45
-6 45 c-5 32 -15 51 -34 66 -31 25 -107 38 -135 23 -11 -5 -48 -11 -84 -12
-36 -2 -70 -8 -77 -15 -14 -14 18 -141 38 -149 7 -2 10 -12 7 -20 -4 -11 -2
-14 5 -9 7 4 12 16 12 26 0 10 5 22 10 25 6 3 10 -5 10 -19 0 -14 5 -28 10
-31 13 -8 13 6 0 39 -8 21 -5 31 18 58 15 18 31 36 37 40 5 4 7 10 3 13 -3 3
-27 -19 -54 -49 -26 -31 -50 -56 -53 -56 -11 0 -42 113 -34 121 4 4 41 9 80
11 40 2 73 7 73 12 0 13 99 -1 125 -18 25 -17 40 -64 30 -96 -3 -11 -2 -20 3
-20 5 0 15 -14 22 -30 7 -17 17 -30 22 -30 5 0 4 10 -3 21 -10 20 -10 41 10
209 l6 55 6 -66 c7 -73 32 -134 63 -154 30 -20 134 -34 262 -36 106 -1 113 0
165 30 34 19 76 33 111 37 53 6 61 4 93 -21 20 -15 39 -25 41 -22 3 3 -12 18
-32 33 -53 41 -116 38 -210 -8 l-69 -35 -135 2 c-151 3 -213 17 -242 55 -21
29 -42 141 -34 183 6 28 -5 36 -21 15z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M904 166 c-3 -8 0 -23 6 -33 11 -17 11 -17 6 0 -5 15 -2 17 14 12 22
-7 26 5 8 23 -16 16 -27 15 -34 -2z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M435 138 c17 -18 31 -35 33 -37 1 -3 1 11 -1 30 -4 29 -8 34 -33 37
l-29 4 30 -34z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M511 99 c0 -9 -7 -22 -15 -28 -15 -13 -27 -71 -14 -71 4 0 8 10 8 22
0 12 7 29 16 39 9 10 14 26 11 36 -4 14 -5 15 -6 2z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M1825 69 c1 -9 -11 -26 -27 -39 -16 -12 -26 -25 -23 -28 3 -3 19 7
35 23 33 31 54 27 25 -5 -10 -11 -14 -20 -9 -20 13 0 36 39 29 50 -3 4 1 11 7
14 7 4 3 4 -9 2 -12 -2 -24 1 -26 8 -2 6 -3 4 -2 -5z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }} d="M1767 74 c-13 -13 -7 -21 13 -20 11 0 20 6 21 11 0 12 -24 18 -34 9z" />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M1369 61 c-37 -8 -114 -50 -105 -58 2 -3 24 7 49 21 24 14 57 26 74
26 37 0 100 -25 106 -42 2 -7 8 -10 12 -6 11 10 -16 34 -60 52 -20 9 -38 15
-39 15 0 -1 -17 -4 -37 -8z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M2525 59 c-21 -5 -43 -15 -47 -22 -11 -17 -10 -37 2 -37 6 0 10 9 10
19 0 15 10 20 50 26 28 4 47 11 44 16 -6 10 -5 10 -59 -2z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }} d="M348 48 c-8 -21 2 -38 22 -38 20 0 44 33 33 44 -11 11 -51 6 -55 -6z" />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { delay: delay, type: "tween", duration: duration },
          }}
          viewport={{ once: true }}
          d="M2680 40 c-12 -8 -11 -10 8 -10 13 0 22 -6 22 -15 0 -8 4 -15 10 -15
11 0 -3 43 -16 47 -5 1 -16 -2 -24 -7z"
        />
      </g>
    </svg>
  );
}
