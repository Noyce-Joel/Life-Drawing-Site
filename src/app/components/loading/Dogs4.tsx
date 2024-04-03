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
      viewBox="0 0 300.000000 49.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={8}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,49.000000) scale(0.2,0.2)"
        fill="none"
        stroke="#FFFFFF"
      >
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M200 311 c-52 -10 -129 -67 -146 -107 -8 -19 -17 -54 -21 -79 -5 -37
   -3 -46 12 -51 20 -8 38 16 42 56 1 14 5 35 8 48 3 12 1 22 -4 22 -5 0 -12 -19
   -16 -42 -9 -61 -15 -79 -24 -73 -8 4 2 86 14 117 4 10 30 35 58 55 48 35 57
   38 115 37 44 -1 66 -5 75 -17 6 -8 20 -17 31 -19 30 -5 57 -66 54 -123 -2 -27
   -7 -49 -13 -49 -5 1 -19 27 -30 58 -25 71 -39 74 -18 4 18 -62 29 -78 54 -78
   21 0 35 39 25 66 -5 14 -1 15 21 10 66 -15 181 -27 216 -23 l38 5 -20 -30
   c-18 -29 -18 -33 -2 -64 19 -39 35 -45 21 -8 -6 15 -6 23 -1 19 15 -9 24 16
   11 28 -10 9 -11 9 -6 0 4 -8 1 -13 -8 -13 -9 0 -16 3 -16 8 0 14 51 82 61 82
   6 0 8 9 4 20 -4 14 1 27 19 44 14 13 26 27 26 32 0 15 83 54 116 54 35 0 89
   -33 112 -68 15 -23 14 -23 -11 -17 -17 5 -27 3 -27 -4 0 -6 8 -11 19 -11 53 0
   42 -59 -18 -89 -22 -12 -42 -25 -46 -31 -3 -5 -13 -10 -21 -10 -13 0 -15 13
   -12 75 2 47 -1 74 -7 72 -12 -5 -8 -148 5 -160 12 -14 120 53 141 87 10 17 19
   24 19 16 0 -23 43 -123 62 -144 18 -20 14 -22 87 41 67 58 90 132 55 181 -17
   25 -64 30 -64 7 0 -8 5 -15 10 -15 18 0 11 -57 -11 -84 -20 -26 -68 -56 -88
   -56 -6 0 -30 42 -54 93 -39 81 -49 95 -86 115 -55 28 -72 28 -138 -4 -57 -28
   -80 -54 -107 -118 l-16 -39 -108 6 c-128 8 -182 21 -182 45 0 25 -38 82 -54
   82 -8 0 -21 6 -28 13 -7 8 -25 17 -40 20 -14 4 -32 9 -40 11 -7 2 -29 1 -48
   -3z m1038 -73 c19 -19 14 -89 -8 -125 -11 -18 -38 -46 -61 -63 -39 -28 -43
   -29 -55 -12 -20 25 -17 30 19 45 40 17 97 80 97 108 0 11 -5 29 -10 40 -12 21
   -1 26 18 7z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1972 303 c-5 -10 -12 -47 -16 -83 -4 -36 -11 -90 -15 -120 l-7 -55
   -8 40 c-11 62 -23 84 -57 104 -40 25 -104 34 -131 20 -12 -6 -59 -14 -105 -17
   -103 -6 -110 -14 -82 -97 10 -32 19 -64 19 -70 0 -7 11 -15 25 -17 14 -3 25
   -1 25 4 0 13 83 118 92 118 5 0 8 4 8 10 0 20 -30 -4 -74 -61 -25 -32 -49 -59
   -54 -59 -8 0 -34 92 -36 130 -1 25 0 25 83 27 52 1 87 6 91 14 6 8 25 9 66 4
   75 -9 114 -44 114 -102 0 -38 19 -93 31 -93 4 0 9 35 13 78 18 216 36 289 36
   145 0 -92 26 -156 76 -185 42 -24 172 -39 310 -34 111 3 124 6 175 34 60 34
   143 54 180 45 13 -3 41 -20 62 -36 29 -22 35 -32 25 -38 -8 -6 -1 -9 21 -9
   l34 0 -39 35 c-89 78 -165 83 -283 18 -62 -33 -70 -35 -180 -38 -158 -4 -286
   18 -322 56 -34 37 -51 97 -48 177 3 67 -10 91 -29 55z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M782 162 c-10 -7 -9 -15 4 -38 12 -23 15 -24 11 -6 -3 12 -1 22 5 22
   5 0 6 5 2 12 -4 7 -3 8 5 4 6 -4 9 -12 6 -17 -4 -5 1 -9 10 -9 13 0 14 4 5 20
   -11 21 -27 25 -48 12z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M220 157 c0 -2 16 -21 35 -43 19 -21 35 -34 35 -27 0 6 -5 15 -10 18
   -6 3 -7 17 -4 31 6 22 3 24 -25 24 -17 0 -31 -1 -31 -3z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M117 143 c-4 -3 -7 -15 -7 -25 0 -10 -4 -18 -9 -18 -5 0 -8 -10 -8
   -22 1 -13 -2 -35 -6 -50 -4 -16 -3 -28 2 -28 5 0 12 19 16 43 4 23 13 49 20
   57 20 24 26 50 11 50 -7 0 -16 -3 -19 -7z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M326 65 c-4 -14 -11 -25 -16 -25 -6 0 -10 -10 -9 -22 0 -15 3 -18 6
   -8 4 8 12 21 20 28 7 7 13 22 13 33 0 26 -7 24 -14 -6z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1771 46 c-9 -11 -7 -15 11 -19 25 -7 44 5 34 22 -10 15 -31 14 -45
   -3z"
        />
        <path
          d="M915 40 c-3 -6 -21 -17 -38 -24 -26 -12 -28 -15 -11 -15 24 -1 73 33
   63 44 -4 3 -10 1 -14 -5z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1841 29 c-35 -29 -20 -33 19 -4 19 14 27 25 19 25 -8 -1 -25 -10
   -38 -21z"
        />
         <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M152 28 c-15 -15 -15 -28 -1 -28 5 0 8 4 5 9 -3 5 3 11 14 14 21 5
   37 -8 20 -16 -6 -3 -5 -4 2 -3 7 1 14 10 16 19 4 20 -37 24 -56 5z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1265 19 c-34 -22 -23 -25 26 -6 41 15 62 15 112 -2 50 -17 60 -7 12
   13 -50 21 -113 19 -150 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2655 35 c-5 -2 -22 -6 -37 -9 -16 -4 -28 -10 -28 -15 0 -5 24 -4 53
   3 29 7 58 11 65 8 7 -2 12 1 12 7 0 10 -42 14 -65 6z"
        />
      </g>
    </svg>
  );
}
