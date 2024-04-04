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
      viewBox="0 0 300.000000 400.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={15}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
        fill="none"
        stroke="#FFFFFF"
      >
        
        
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{ once: true }}
          d="M1358 2300 c-56 -35 -115 -110 -124 -157 -17 -93 25 -191 91 -213 23
-8 35 -17 31 -25 -3 -8 -8 -52 -12 -99 l-7 -86 -76 7 c-51 4 -95 15 -136 33
-33 15 -76 34 -95 43 -178 77 -299 138 -347 173 -35 26 -57 31 -51 12 5 -16
67 -59 126 -88 24 -12 40 -25 37 -28 -4 -4 -32 -16 -62 -27 -31 -11 -58 -26
-61 -32 -6 -21 19 -15 89 20 37 19 72 30 80 26 144 -68 189 -89 212 -94 15 -4
30 -11 33 -16 3 -5 14 -9 25 -9 11 0 22 -6 25 -14 4 -10 34 -16 102 -21 l97
-7 -3 -106 c-3 -59 -8 -109 -13 -110 -5 -2 -7 -7 -4 -12 9 -14 -101 -186 -144
-224 -11 -11 -21 -25 -21 -32 0 -30 19 -19 56 33 21 30 49 68 62 83 12 16 29
44 37 64 13 30 19 35 33 27 16 -9 62 -129 97 -253 10 -37 21 -58 30 -58 8 0
15 3 15 8 0 21 -92 273 -113 307 -13 23 -20 244 -8 264 6 10 31 10 122 2 145
-14 169 -14 169 1 0 6 22 55 49 107 26 53 58 127 71 166 14 42 33 77 48 90 95
77 183 175 158 175 -3 0 -38 -34 -78 -75 -41 -41 -79 -75 -85 -75 -14 0 -4 40
34 148 18 53 23 76 15 84 -8 8 -12 7 -15 -3 -3 -8 -17 -51 -32 -97 -16 -47
-25 -95 -23 -112 3 -17 1 -33 -4 -36 -8 -5 -27 32 -69 134 -8 17 -20 32 -26
32 -16 0 -16 -6 1 -38 8 -15 28 -57 46 -94 l32 -66 -21 -59 c-12 -32 -45 -107
-74 -166 -45 -93 -55 -107 -73 -103 -11 3 -71 9 -133 12 l-113 7 6 51 c3 28 6
70 6 92 0 41 0 42 43 48 23 4 57 15 75 26 39 24 72 94 72 152 0 60 -51 158
-104 202 -24 20 -46 36 -48 36 -2 0 -24 -14 -50 -30z m78 -22 c38 -29 48 -43
78 -105 32 -63 33 -103 5 -161 -41 -84 -143 -103 -215 -40 -87 76 -64 217 48
298 22 17 44 30 48 30 4 0 20 -10 36 -22z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{ once: true }}
          d="M1353 2194 c-51 -22 -58 -84 -9 -84 30 0 54 20 61 51 9 37 -12 50
-52 33z m33 -19 c8 -20 -13 -45 -37 -45 -26 0 -24 21 2 27 12 3 18 11 15 19
-3 8 -1 14 5 14 5 0 12 -7 15 -15z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{ once: true }}
          d="M1440 2171 c-18 -17 -30 -40 -30 -55 0 -22 5 -26 28 -26 15 0 33 5
40 12 17 17 15 47 -3 54 -14 6 -13 8 1 19 12 8 14 14 5 19 -6 4 -24 -5 -41
-23z m28 -44 c2 -12 -3 -17 -17 -17 -12 0 -21 6 -21 13 0 31 32 34 38 4z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{ once: true }}
          d="M1337 2057 c-2 -7 1 -28 7 -47 8 -26 17 -36 36 -38 38 -4 90 32 90
63 0 14 -4 25 -10 25 -5 0 -10 -9 -10 -20 0 -27 -56 -56 -76 -39 -8 6 -14 22
-14 35 0 26 -15 40 -23 21z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration, delay: delay, type: "spring" },
          }}
          viewport={{ once: true }}
          d="M770 2195 c-18 -22 -7 -92 31 -198 21 -59 35 -84 40 -75 5 8 -6 55
-27 114 -37 109 -42 142 -19 150 8 4 15 10 15 15 0 14 -26 10 -40 -6z"
        />
        
      </g>
    </svg>
  );
}
