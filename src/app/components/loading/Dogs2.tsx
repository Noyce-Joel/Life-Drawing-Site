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
      viewBox="0 0 220.000000 197.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={17}
    >
      <g
        transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)"
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
          d="M564 1840 c-28 -4 -61 -13 -75 -20 -43 -22 -204 -132 -217 -149 -21
-26 -59 -162 -66 -237 -6 -57 -4 -73 8 -83 22 -18 56 -4 70 30 l12 29 24 -25
c20 -22 22 -30 16 -81 -3 -31 -11 -64 -16 -74 -8 -16 -6 -84 5 -120 3 -8 24
-25 48 -38 40 -21 47 -22 117 -11 81 12 83 13 152 8 36 -3 54 2 77 19 l30 22
10 -38 c18 -64 21 -93 24 -197 4 -116 26 -174 76 -196 31 -14 33 -20 47 -104
11 -72 36 -150 54 -170 21 -24 32 -77 24 -111 -4 -14 -22 -32 -48 -45 -22 -12
-61 -44 -85 -71 l-45 -49 30 -24 c16 -13 36 -25 44 -25 8 0 26 -7 38 -14 40
-22 121 -3 156 36 16 18 43 40 60 48 22 11 35 27 44 58 8 23 19 42 25 42 20 0
108 98 117 130 5 17 7 89 6 160 l-3 130 31 2 c17 1 110 2 206 3 l175 0 0 -85
0 -85 -90 -6 c-50 -3 -98 -9 -107 -13 -25 -11 -22 -35 5 -46 31 -13 153 -40
183 -40 36 0 50 -42 30 -95 -8 -22 -18 -60 -21 -84 -4 -24 -14 -59 -21 -78
-15 -34 -12 -53 8 -53 5 0 18 -10 28 -23 24 -30 107 -51 167 -42 33 5 48 3 54
-7 7 -10 9 -9 9 3 0 10 11 20 25 23 36 9 52 48 37 90 -18 48 -15 67 19 140
l31 67 26 -40 c28 -44 82 -77 82 -51 0 6 -6 10 -13 10 -18 0 -64 49 -76 83 -7
19 -7 51 1 105 8 57 8 84 0 98 -9 15 -10 12 -5 -18 3 -24 0 -48 -11 -69 -9
-17 -16 -51 -16 -73 0 -25 -14 -73 -35 -121 -39 -90 -41 -100 -20 -121 41 -41
-6 -115 -54 -85 -9 6 -20 2 -33 -11 -20 -20 -72 -22 -74 -3 0 6 -4 17 -8 26
-8 19 -42 14 -50 -7 -8 -21 -24 -17 -41 10 -15 23 -15 27 1 53 l18 28 -23 -23
c-25 -25 -46 -29 -38 -8 14 37 60 98 80 107 20 9 22 18 24 92 1 45 2 120 1
167 -2 224 -1 256 9 275 11 19 12 18 18 -7 4 -15 13 -32 21 -39 18 -14 18 -9
0 27 -9 18 -16 69 -18 134 l-3 105 40 55 c34 47 40 52 43 32 2 -12 8 -22 13
-22 6 0 8 12 5 28 -22 110 -19 121 27 122 21 0 111 59 103 67 -2 3 -20 -6 -38
-19 -18 -14 -52 -30 -74 -36 -23 -7 -47 -19 -54 -27 -7 -8 -26 -15 -42 -15
-28 0 -30 2 -24 28 l7 27 -17 -25 c-30 -42 -47 -51 -84 -45 -19 3 -48 6 -65 8
-16 2 -39 8 -50 14 -11 6 -26 8 -33 6 -6 -3 -16 6 -21 19 -6 15 -10 17 -10 7
-1 -28 30 -43 114 -55 17 -2 45 -7 63 -10 19 -4 43 -2 55 4 12 6 43 12 69 14
42 3 48 1 53 -20 4 -18 -4 -38 -35 -78 -53 -71 -61 -93 -53 -164 6 -58 5 -59
-21 -66 -20 -5 -35 -22 -58 -68 -17 -33 -32 -63 -35 -66 -6 -7 -390 -10 -450
-3 -47 5 -53 8 -53 29 0 29 -20 74 -33 74 -5 0 -6 -7 -1 -17 5 -10 8 -40 7
-68 -1 -27 -2 -90 -2 -138 1 -64 -4 -95 -15 -112 -15 -22 -17 -50 -16 -185 1
-76 -9 -99 -49 -119 -21 -11 -45 -31 -54 -45 -28 -42 -134 -58 -120 -18 5 14
3 14 -8 -1 -30 -37 -71 10 -49 55 11 22 10 22 -4 4 -9 -11 -16 -23 -16 -28 0
-4 -9 -8 -20 -8 -32 0 -24 13 42 74 40 37 69 56 83 54 18 -3 20 2 20 67 0 55
-4 76 -21 100 -25 36 -50 117 -60 198 -3 32 -15 75 -25 95 -18 34 -19 35 -12
7 6 -29 6 -30 -18 -14 -39 26 -52 66 -64 209 -7 74 -18 148 -24 164 -8 21 -9
38 -2 55 5 14 11 53 14 85 3 51 2 57 -10 41 -7 -11 -13 -39 -13 -63 0 -38 -5
-49 -37 -80 -36 -34 -38 -34 -102 -28 -35 3 -67 9 -70 14 -8 11 -22 9 -50 -7
-55 -30 -79 -31 -121 -4 -50 33 -57 64 -40 176 15 96 24 125 51 153 26 28 43
84 24 84 -7 0 -23 -8 -35 -18 -19 -16 -21 -22 -11 -40 9 -17 9 -26 -1 -42 -17
-26 -22 -25 -47 6 -25 31 -26 60 -7 134 13 51 14 71 0 58 -3 -3 -14 -54 -24
-113 -11 -58 -22 -111 -25 -116 -9 -13 -42 -11 -48 4 -8 22 20 180 43 240 22
54 28 61 119 121 125 83 124 82 206 90 54 5 80 3 109 -9 21 -9 45 -14 52 -11
8 3 32 -10 54 -30 21 -19 45 -34 52 -33 68 14 136 -143 138 -313 0 -26 -7 -45
-22 -60 l-21 -21 -23 26 c-24 28 -59 113 -79 192 -8 32 -13 41 -14 25 -1 -33
31 -146 57 -195 11 -22 30 -46 41 -52 17 -11 24 -9 48 11 25 22 28 30 28 90 0
64 0 66 25 66 15 0 49 -7 76 -15 27 -8 69 -17 94 -19 25 -3 90 -10 145 -17 55
-6 133 -8 173 -5 81 8 90 -1 50 -46 -43 -47 -50 -67 -38 -103 6 -18 19 -40 29
-49 17 -16 19 -16 25 0 5 12 2 15 -9 10 -12 -4 -20 4 -30 29 -15 34 -11 65 6
65 5 0 14 10 19 23 25 55 69 113 96 127 22 11 25 15 12 18 -14 3 -16 10 -11
35 3 18 10 34 15 35 4 2 8 12 8 21 0 11 19 29 48 45 26 15 36 24 23 21 l-23
-7 22 30 c12 16 45 42 74 57 28 14 67 35 86 46 56 31 152 26 224 -10 31 -17
56 -24 53 -18 -2 7 -17 17 -34 22 -16 6 -38 16 -47 24 -11 9 -44 15 -96 15
-64 1 -83 -3 -107 -20 -15 -11 -49 -30 -75 -43 -48 -23 -118 -86 -118 -107 0
-7 -6 -14 -14 -17 -18 -7 -42 -57 -51 -104 -11 -65 -37 -76 -184 -77 -69 0
-164 5 -211 12 -101 15 -229 41 -249 51 -8 4 -20 30 -26 57 -14 58 -59 140
-85 154 -10 6 -29 10 -42 10 -14 0 -37 13 -53 30 -19 20 -39 30 -59 30 -17 1
-42 7 -56 15 -27 16 -48 16 -126 5z m-154 -379 c0 -6 -4 -13 -10 -16 -5 -3
-10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m1430 -647 c0 -3 -7 -31 -16 -62
-13 -45 -15 -75 -9 -152 9 -105 9 -136 0 -260 -6 -66 -12 -90 -28 -107 -29
-32 -37 -29 -30 15 9 57 21 84 35 76 8 -5 9 -2 3 12 -25 60 -34 93 -35 124 0
19 -5 53 -10 74 -5 25 -5 46 1 58 6 12 6 24 0 36 -7 13 -6 27 5 46 7 16 12 32
9 37 -9 14 44 109 60 109 8 0 15 -3 15 -6z m-531 -140 c9 -9 2 -283 -7 -301
-15 -28 -88 -103 -99 -103 -11 0 -23 68 -23 128 0 20 8 44 18 55 14 15 17 38
17 116 0 53 4 102 9 109 6 10 19 12 45 7 20 -4 38 -9 40 -11z m431 -224 c0
-35 -4 -35 -94 -19 -139 26 -135 49 7 49 l87 0 0 -30z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M607 1663 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1990 1626 c-8 -22 4 -271 15 -303 7 -20 39 -15 79 12 21 14 56 35
79 47 23 11 36 23 29 25 -11 4 -35 -8 -126 -66 -46 -29 -52 -14 -60 140 -6
130 -5 145 10 156 17 12 17 13 1 13 -10 0 -22 -11 -27 -24z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M592 1600 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1810 1535 c-6 -7 -10 -17 -9 -21 4 -21 -2 -26 -16 -14 -13 11 -14
10 -9 -4 9 -24 38 -16 42 12 5 34 31 26 49 -15 9 -21 18 -33 20 -26 7 19 -24
70 -46 76 -11 3 -25 -1 -31 -8z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M609 1508 c9 -9 37 -39 62 -65 25 -26 49 -55 52 -63 4 -10 6 -8 6 6
1 12 -6 27 -14 34 -17 14 -20 46 -5 55 18 11 11 33 -12 41 -13 4 -41 8 -64 9
-38 1 -40 0 -25 -17z m78 -14 c3 -8 2 -19 -3 -24 -12 -11 -48 16 -39 29 9 16
35 13 42 -5z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M827 1327 c-9 -26 -12 -47 -7 -47 11 0 33 66 28 82 -3 7 -12 -9 -21
-35z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1610 1317 c0 -19 -15 -23 -25 -7 -9 15 -25 12 -25 -6 0 -8 4 -13 9
-9 5 3 16 -1 24 -10 13 -13 16 -11 21 11 4 15 5 29 1 32 -3 3 -5 -2 -5 -11z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M497 1260 c-51 -9 -60 -20 -52 -64 6 -27 13 -38 32 -42 28 -7 73 10
73 28 0 9 -3 9 -12 0 -18 -18 -38 -15 -39 6 0 13 -3 11 -10 -6 -5 -13 -13 -20
-19 -17 -6 4 -8 10 -5 15 3 5 0 18 -7 29 -17 27 -6 35 55 41 29 3 45 8 37 11
-8 3 -32 2 -53 -1z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M560 1231 c0 -6 -10 -16 -22 -21 -23 -9 -23 -9 -2 -9 20 -1 41 26 29
37 -3 3 -5 0 -5 -7z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2088 983 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1960 674 c0 -20 41 -64 73 -80 l32 -15 -25 20 c-14 11 -28 21 -32
21 -3 0 -15 15 -27 33 -11 17 -21 27 -21 21z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1847 119 c4 -16 8 -17 14 -7 13 19 11 28 -5 28 -9 0 -12 -7 -9 -21z"
        />
      </g>
    </svg>
  );
}
