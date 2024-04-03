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
      viewBox="0 0 278.000000 267.000000"
 preserveAspectRatio="xMidYMid meet"
 strokeWidth={17}
 >

<g transform="translate(0.000000,267.000000) scale(0.100000,-0.100000)"
fill="none" stroke="#FFFFFF">
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M720 2371 c0 -25 6 -27 13 -6 4 8 2 17 -3 20 -6 4 -10 -3 -10 -14z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M681 2362 c-14 -26 -31 -129 -31 -187 0 -28 -7 -77 -15 -108 -8 -32
-14 -81 -14 -110 l2 -52 8 65 c4 36 13 81 19 100 6 19 15 88 19 153 6 91 12
122 26 137 10 11 13 20 7 20 -6 0 -16 -8 -21 -18z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M712 2320 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M725 2130 c4 -90 38 -182 90 -246 29 -36 48 -47 102 -64 36 -11 75
-20 87 -19 11 1 -1 7 -29 14 -79 19 -119 40 -150 76 -48 57 -85 149 -95 235
l-9 79 4 -75z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M2100 1940 c-14 -4 -38 -8 -53 -9 -38 -1 -174 -62 -240 -106 -28 -19
-48 -35 -44 -35 5 0 27 13 50 29 65 44 175 91 242 101 33 6 75 13 93 16 31 6
99 -7 128 -24 46 -28 99 -67 135 -102 23 -22 48 -40 55 -40 17 0 24 -24 24
-83 0 -29 6 -63 13 -77 8 -14 30 -56 50 -93 21 -38 37 -77 37 -87 0 -10 5 -22
10 -25 14 -9 12 -42 -2 -48 -7 -2 -21 2 -30 11 -26 22 -48 8 -48 -31 0 -40
-21 -62 -52 -54 -63 15 -178 72 -216 108 -26 23 -48 36 -55 32 -8 -5 -6 -9 6
-11 11 -2 36 -20 58 -40 21 -21 57 -53 79 -72 22 -19 40 -38 40 -42 0 -4 -11
-19 -26 -35 -21 -23 -28 -25 -44 -15 -11 7 -29 12 -40 12 -11 0 -20 4 -20 10
0 5 -20 21 -44 35 -24 14 -54 39 -67 56 -13 17 -36 37 -51 45 -15 8 -28 21
-28 29 0 8 -4 15 -9 15 -5 0 -14 14 -20 30 -14 41 -25 38 -17 -4 5 -28 3 -37
-12 -45 -23 -12 -115 -125 -168 -206 -21 -33 -43 -62 -48 -64 -6 -2 -21 -15
-34 -28 -13 -13 -51 -37 -85 -54 -71 -36 -72 -37 -65 -45 3 -3 29 6 57 20 28
14 55 26 60 26 5 0 7 -17 5 -37 -2 -21 -6 -77 -10 -125 -4 -69 -11 -95 -29
-122 -20 -30 -22 -37 -9 -54 7 -11 24 -22 37 -26 27 -6 76 -74 70 -93 -7 -21
-30 -15 -59 14 l-27 28 16 -27 c9 -15 14 -34 11 -42 -6 -16 -54 -23 -54 -8 0
5 -7 17 -15 28 -14 18 -15 17 -6 -8 7 -20 6 -29 -4 -38 -21 -17 -54 -2 -61 28
-4 15 -14 41 -24 57 -9 17 -25 59 -34 94 -23 82 -15 136 31 224 19 38 32 71
29 74 -8 8 -6 10 -49 -70 -20 -37 -37 -81 -37 -98 0 -16 -9 -55 -20 -86 -24
-68 -24 -69 -6 -54 11 9 15 -1 24 -56 7 -42 22 -85 42 -115 36 -58 36 -58 10
-58 -13 0 -29 13 -42 35 -11 20 -23 34 -26 31 -3 -3 1 -12 7 -20 7 -8 11 -27
9 -43 -4 -36 -40 -44 -61 -13 l-15 22 -4 -23 c-7 -55 -71 -25 -83 39 -4 20
-16 48 -28 62 -29 35 -63 169 -78 310 -19 169 -18 214 5 239 11 12 14 21 9 21
-15 0 -33 -24 -42 -57 -6 -20 -14 -27 -27 -25 -10 1 -54 6 -96 11 -59 6 -89
16 -130 41 -84 51 -97 66 -92 109 4 33 3 32 -16 -17 -31 -75 -79 -117 -208
-178 -62 -30 -116 -54 -121 -54 -10 0 -77 -53 -125 -97 -35 -32 -65 -97 -66
-137 0 -17 9 -39 20 -51 11 -12 35 -47 54 -78 27 -44 31 -58 21 -67 -13 -10
-40 11 -78 61 -17 23 -17 23 -1 -13 22 -47 13 -68 -26 -68 -27 0 -33 6 -50 42
l-18 43 5 -38 c6 -38 5 -39 -23 -35 -25 3 -30 8 -35 40 -3 20 -20 52 -37 72
-59 68 -59 86 3 361 3 11 28 34 57 50 29 17 62 46 73 64 11 18 45 62 76 97 64
72 105 136 114 180 3 16 17 54 30 84 13 30 31 76 40 103 9 26 31 62 49 80 l32
32 -6 105 -6 105 -2 -106 c-2 -100 -3 -107 -28 -130 -27 -25 -64 -89 -64 -111
0 -7 -14 -40 -30 -73 -17 -33 -30 -69 -30 -80 0 -34 -66 -136 -126 -194 -30
-29 -53 -55 -50 -58 13 -14 -27 -62 -74 -87 -28 -15 -55 -38 -60 -49 -4 -12
-20 -75 -35 -139 -32 -138 -29 -177 20 -233 19 -23 36 -55 39 -77 8 -49 32
-61 124 -63 75 -2 126 14 136 42 7 18 -12 56 -59 117 -44 58 -46 101 -7 162
15 24 30 44 34 44 5 0 25 16 47 35 35 31 96 65 119 65 5 0 5 -17 -1 -39 -10
-36 -8 -44 23 -95 23 -37 37 -52 42 -43 6 9 8 9 8 0 0 -21 -48 -65 -67 -61
-10 2 -26 21 -36 42 -20 42 -33 44 -18 3 8 -20 7 -27 -6 -31 -16 -7 -43 10
-43 26 0 5 -7 16 -15 24 -8 9 -15 24 -15 34 0 10 -4 21 -9 24 -12 8 2 -52 22
-91 20 -37 32 -42 112 -44 71 -2 95 6 95 32 0 34 -29 91 -49 96 -33 8 -41 45
-23 97 16 43 22 49 92 83 45 22 94 57 122 86 l48 48 37 -30 c54 -43 125 -71
191 -77 114 -9 115 -10 129 -100 6 -43 12 -104 12 -134 1 -31 8 -80 16 -110 9
-30 20 -70 24 -87 5 -18 21 -46 35 -64 15 -17 26 -43 26 -60 0 -46 31 -69 94
-69 59 0 161 34 170 56 3 8 -7 29 -23 47 -31 34 -51 93 -50 142 l1 30 9 -30
c6 -16 16 -43 23 -60 7 -16 18 -43 25 -58 15 -37 33 -42 109 -29 51 8 72 18
96 41 l31 31 -19 35 c-11 20 -34 45 -53 56 -37 23 -38 28 -19 90 8 24 17 98
19 164 l6 120 36 33 c20 19 56 64 81 100 55 83 134 181 155 195 18 11 48 -8
114 -72 47 -46 124 -101 140 -101 8 0 24 -6 35 -12 16 -10 24 -10 38 0 32 23
43 25 68 12 20 -11 27 -11 44 5 11 10 20 26 20 37 0 10 7 18 15 18 8 0 32 16
52 35 20 19 43 35 50 35 6 0 18 9 26 21 17 23 7 51 -74 212 -30 59 -39 89 -39
128 0 44 -4 54 -32 80 -66 61 -185 146 -214 153 -46 12 -127 16 -154 6z m463
-595 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z m-140 -60
c41 -29 44 -36 21 -60 -20 -19 -38 -15 -42 11 -2 10 -16 31 -30 47 -24 25 -24
27 -6 27 11 0 36 -11 57 -25z m-1793 -486 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10
16 0 6 5 7 10 4 6 -3 10 -11 10 -16z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M2087 1823 c-4 -3 -32 -10 -63 -14 -112 -15 -127 -82 -39 -179 17
-20 49 -64 70 -98 37 -61 62 -78 101 -70 14 2 24 25 41 88 28 110 40 206 24
196 -6 -4 -11 -21 -11 -38 0 -18 -7 -57 -15 -87 -8 -31 -19 -75 -25 -98 -9
-36 -15 -43 -35 -43 -19 0 -33 13 -61 58 -20 31 -53 77 -73 102 -40 48 -61 82
-61 99 0 24 41 51 76 51 19 0 44 5 55 11 11 5 42 10 69 11 28 0 47 4 44 9 -6
10 -87 12 -97 2z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M1080 1791 c125 -20 147 -22 115 -11 -16 5 -61 12 -100 15 -68 4 -68
4 -15 -4z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration + 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M1550 1784 c19 -2 58 -9 86 -15 33 -8 57 -8 68 -2 14 8 11 10 -16 10
-18 1 -64 3 -103 6 -38 2 -54 3 -35 1z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M1305 1770 l-80 -6 75 -1 c41 0 104 3 140 7 l65 7 -60 0 c-33 -1 -96
-4 -140 -7z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M2316 1624 c-19 -19 -21 -37 -3 -31 6 2 23 -4 36 -14 33 -26 36 -24
37 21 1 37 0 40 -27 40 -15 0 -35 -7 -43 -16z m48 -19 c-7 -17 -20 -20 -28 -6
-7 10 3 21 20 21 8 0 11 -6 8 -15z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M2551 1421 c-7 -5 -12 -14 -10 -20 2 -6 10 -2 17 9 14 22 13 23 -7
11z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M1600 1157 c0 -19 -5 -48 -11 -66 -14 -40 -3 -54 12 -15 17 45 23
101 10 108 -7 5 -11 -4 -11 -27z"/>
 <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}} d="M1370 678 c0 -11 42 -10 60 2 10 6 3 8 -23 7 -20 -1 -37 -5 -37 -9z"/>
</g>
</svg>
  );
} 