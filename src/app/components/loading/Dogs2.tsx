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
      viewBox="0 0 300.000000 247.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={20}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)"
        fill="none"
        stroke="#FFFFFF"
      >
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1750 2259 c-52 -17 -100 -33 -106 -37 -102 -64 -170 -120 -198 -164
-21 -33 -28 -158 -8 -158 8 0 12 20 12 69 l0 68 56 57 c31 31 71 64 88 73 17
8 37 20 44 26 7 6 52 24 100 41 68 24 104 30 167 31 72 0 83 -3 116 -27 42
-32 77 -39 39 -7 -87 71 -153 77 -310 28z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M603 2192 c-111 -58 -160 -92 -216 -150 -69 -73 -85 -107 -93 -202
-6 -66 -10 -76 -53 -126 -25 -30 -53 -57 -63 -60 -18 -5 -26 -34 -9 -34 10 0
111 102 124 126 5 9 14 53 19 97 10 93 24 119 102 196 55 55 87 76 188 131 70
37 138 40 246 10 39 -11 80 -20 90 -20 46 0 122 -33 166 -71 55 -49 75 -44 26
5 -40 42 -106 72 -191 86 -35 5 -86 17 -113 25 -77 24 -162 19 -223 -13z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2015 2176 c-46 -20 -53 -35 -55 -121 -3 -104 -2 -105 14 -105 13 0
56 49 56 64 0 17 -22 3 -30 -19 -5 -14 -14 -25 -20 -25 -7 0 -9 25 -4 78 5 66
10 80 32 101 35 31 83 24 148 -21 43 -31 49 -39 47 -69 -2 -54 -40 -110 -111
-164 -145 -111 -199 -129 -225 -72 -27 57 -30 112 -11 185 18 70 16 102 -10
137 -20 28 -32 12 -12 -17 20 -28 20 -64 0 -119 -20 -56 -12 -143 19 -200 21
-39 23 -41 60 -35 45 8 127 47 147 71 8 9 33 30 57 47 24 16 55 48 70 71 14
23 27 43 28 45 1 1 29 -15 63 -37 123 -82 132 -85 240 -76 116 10 230 8 303
-6 103 -20 179 -25 179 -13 0 7 -25 14 -62 17 -35 3 -87 10 -116 16 -73 14
-178 16 -305 6 -102 -8 -110 -7 -137 13 -16 12 -31 22 -34 22 -2 0 -32 18 -66
41 -49 32 -60 44 -55 60 11 33 -5 58 -58 93 -62 41 -110 51 -152 32z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M720 2081 c0 -7 7 -26 16 -44 11 -20 16 -52 15 -91 -3 -103 8 -144
49 -187 25 -27 45 -39 64 -39 67 0 145 64 209 172 44 74 45 87 12 118 -32 30
-46 18 -16 -14 26 -28 21 -47 -39 -135 -84 -123 -177 -152 -235 -73 -15 21
-20 46 -22 121 -1 52 -7 109 -13 127 -12 34 -40 66 -40 45z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1156 2018 c27 -48 159 -228 165 -228 15 0 11 8 -33 70 -24 32 -61
84 -83 114 -22 31 -43 56 -48 56 -4 0 -5 -6 -1 -12z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1576 1931 c-9 -13 -4 -81 6 -81 4 0 8 5 8 10 0 6 11 10 25 10 14 0
25 5 25 10 0 6 -10 10 -23 10 -14 0 -24 6 -24 15 0 19 16 19 38 -1 25 -23 45
-8 23 17 -17 19 -68 26 -78 10z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M877 1853 c-5 -59 -2 -72 10 -60 11 12 16 117 5 117 -5 0 -12 -26
-15 -57z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M436 1853 c7 -42 14 -56 14 -30 0 10 8 17 18 17 14 0 15 2 2 10 -20
13 -8 13 25 0 24 -9 26 -8 23 12 -2 19 -10 24 -46 26 l-43 3 7 -38z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1337 1792 c-80 -80 -103 -125 -88 -165 15 -38 153 -163 195 -177 43
-14 115 -8 170 15 57 24 84 19 106 -17 31 -50 44 -106 43 -182 -1 -66 28 -176
56 -210 15 -18 41 -117 41 -153 0 -19 -7 -66 -15 -106 -8 -40 -16 -97 -19
-127 -12 -147 -16 -159 -67 -212 -26 -27 -65 -56 -86 -63 -36 -13 -38 -16 -36
-51 2 -29 0 -35 -9 -26 -7 7 -36 12 -65 12 -30 0 -68 7 -85 16 -28 15 -30 18
-23 60 4 27 2 44 -4 44 -13 0 -21 -29 -24 -89 -1 -38 -5 -50 -15 -46 -8 3 -15
5 -17 5 -7 0 -33 64 -40 97 -9 47 10 72 81 104 55 25 69 28 104 20 29 -6 40
-6 37 2 -15 45 -165 10 -219 -52 -26 -30 -29 -39 -24 -75 8 -45 39 -102 64
-115 10 -6 38 -5 69 1 36 7 61 7 82 0 22 -8 31 -8 31 0 0 6 9 8 23 3 12 -3 29
-7 37 -7 8 -1 24 -7 35 -14 27 -19 157 -18 270 2 68 11 96 21 114 39 32 32 19
46 -14 15 -31 -29 -139 -49 -267 -49 -75 -1 -91 2 -108 19 -31 31 -25 54 16
69 20 7 60 38 89 69 l53 57 7 95 c4 52 13 124 20 160 33 158 28 203 -38 340
-27 56 -32 80 -38 175 -11 194 -59 255 -165 210 -53 -22 -127 -29 -167 -16
-33 11 -117 83 -117 101 0 4 11 19 25 34 14 15 25 33 25 41 0 19 -21 30 -30
16 -4 -7 -17 -10 -32 -6 -15 4 -29 2 -32 -4 -5 -7 2 -11 18 -11 32 0 39 -12
21 -36 -13 -18 -14 -18 -39 5 -14 14 -26 34 -26 46 0 23 75 116 144 177 25 22
35 37 26 38 -9 0 -50 -35 -93 -78z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1590 1820 c0 -14 38 -32 45 -21 3 6 -3 15 -14 20 -24 14 -31 14 -31
1z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M450 1792 c0 -5 17 -14 39 -20 47 -15 51 -15 51 -2 0 6 -9 10 -19 10
-11 0 -23 5 -26 10 -7 12 -45 13 -45 2z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1410 1791 c0 -5 19 -34 42 -65 30 -40 48 -56 65 -56 13 0 23 5 23
10 0 6 -8 10 -19 10 -17 0 -91 82 -91 102 0 4 -4 8 -10 8 -5 0 -10 -4 -10 -9z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M143 1573 c4 -20 19 -50 35 -67 15 -17 41 -48 56 -70 55 -74 152 -95
249 -52 52 23 149 90 155 107 7 19 -18 8 -60 -26 -125 -102 -249 -111 -321
-25 -23 27 -27 40 -25 79 2 26 -1 46 -7 46 -5 0 -9 -5 -7 -10 1 -6 -10 -10
-26 -9 -23 1 -27 5 -27 32 0 21 -5 32 -14 32 -10 0 -12 -9 -8 -37z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M751 1581 c-6 -11 -20 -23 -32 -26 -14 -5 -18 -10 -11 -17 6 -6 16
-5 29 3 27 16 45 47 33 54 -5 3 -14 -3 -19 -14z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2037 1574 c-3 -4 18 -38 46 -78 67 -91 97 -142 97 -167 0 -10 5 -19
10 -19 29 0 -5 75 -83 184 -63 89 -62 88 -70 80z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1847 1525 c-27 -12 -44 -26 -39 -29 11 -7 111 35 112 47 0 12 -22 7
-73 -18z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2620 1526 c0 -2 13 -20 30 -41 33 -41 50 -91 50 -147 0 -41 8 -68
20 -68 9 0 4 62 -11 132 -10 43 -63 128 -81 128 -4 0 -8 -2 -8 -4z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M610 1411 c0 -6 9 -16 20 -24 26 -18 50 -109 50 -190 0 -50 6 -73 30
-117 36 -63 62 -210 60 -330 -1 -41 -2 -97 -2 -125 0 -27 3 -88 7 -135 l7 -85
-33 -38 c-19 -21 -50 -45 -69 -55 -27 -13 -37 -26 -44 -55 -13 -49 -3 -65 59
-96 l48 -24 71 18 c39 9 102 21 141 25 76 9 96 25 131 100 9 19 27 52 41 72
24 36 26 36 48 22 30 -20 135 -45 135 -32 0 13 -69 40 -85 34 -15 -5 -65 15
-65 27 0 4 6 10 13 13 8 3 14 12 14 20 0 14 31 87 87 204 34 71 74 133 101
155 25 20 100 184 89 194 -9 9 -34 -30 -45 -73 -12 -44 -54 -116 -69 -116 -11
0 -104 -155 -115 -191 -4 -13 -18 -47 -31 -76 -13 -29 -28 -63 -34 -78 -5 -14
-17 -25 -26 -25 -10 0 -14 -5 -11 -14 3 -8 -2 -25 -12 -38 -10 -13 -30 -45
-44 -73 -38 -75 -69 -105 -112 -105 -29 0 -35 4 -35 21 0 12 -5 19 -12 16 -7
-2 -12 -11 -10 -19 1 -9 -12 -19 -37 -26 -58 -18 -64 -16 -56 18 10 44 -9 37
-28 -10 -9 -24 -22 -40 -32 -40 -24 0 -95 39 -102 55 -11 30 7 65 45 84 50 26
87 68 102 116 7 22 23 56 35 75 54 87 116 229 126 288 9 60 8 64 -25 127 -42
80 -64 166 -68 268 -1 54 -6 77 -15 77 -8 0 -11 -10 -8 -27 2 -16 7 -64 10
-108 6 -89 20 -138 67 -227 30 -59 31 -63 20 -117 -6 -31 -39 -111 -74 -179
-78 -154 -83 -149 -81 78 3 210 -16 342 -59 419 -25 46 -31 68 -33 130 -3 94
-16 146 -46 177 -23 25 -39 31 -39 15z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1619 1220 c0 -3 -2 -14 -3 -25 -5 -42 -20 -71 -53 -108 -19 -22 -32
-42 -28 -45 4 -4 23 11 44 33 43 47 71 119 53 137 -7 7 -12 10 -13 8z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2200 1067 c0 -17 69 -139 92 -164 l30 -31 -53 -7 c-47 -6 -60 -3
-101 20 -25 14 -52 32 -58 40 -7 8 -17 12 -22 9 -5 -3 3 -19 18 -35 26 -28 27
-30 16 -81 -13 -58 -35 -379 -27 -386 11 -12 15 12 24 168 10 156 27 270 41
270 3 0 15 -7 26 -15 14 -11 37 -13 94 -9 41 3 81 1 88 -4 27 -18 26 -120 -2
-227 -46 -176 -69 -239 -103 -283 -37 -48 -37 -51 -22 -84 34 -75 199 -114
287 -69 74 38 100 78 83 125 -15 37 -25 32 -18 -8 6 -40 -2 -53 -58 -90 -47
-31 -59 -33 -45 -7 12 24 13 41 1 41 -5 0 -12 -14 -16 -30 -6 -29 -9 -30 -58
-30 -60 0 -127 28 -151 61 -22 32 -21 39 17 90 35 46 50 88 92 254 26 106 30
134 27 203 -2 43 -8 51 -73 109 -29 25 -56 64 -73 103 -23 52 -35 70 -47 70
-5 0 -9 -1 -9 -3z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2803 950 c-24 -22 -43 -48 -43 -57 0 -11 17 1 47 32 46 46 49 47 78
35 38 -16 93 -25 82 -14 -8 8 -70 33 -102 40 -13 3 -34 -9 -62 -36z"
        />
       <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2677 808 c-2 -18 -12 -67 -20 -108 -22 -105 -57 -294 -57 -308 0
-16 16 -15 18 1 1 22 43 239 63 327 10 47 19 94 19 103 0 30 -18 18 -23 -15z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1607 700 c-30 -78 -31 -80 -18 -80 5 0 14 15 21 33 14 36 40 98 47
110 2 4 -2 7 -9 7 -8 0 -26 -31 -41 -70z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M1787 433 c-4 -3 16 -15 45 -25 61 -21 58 -21 58 -9 0 4 -19 16 -43
25 -48 18 -51 19 -60 9z"
        />
        <motion.path
          initial={{ pathLength: 0, stroke: "white" }}
          whileInView={{
            pathLength: 1,
            transition: { duration: duration / 2, delay: delay, type: "spring" },
          }}
          viewport={{once: true}}
          d="M2383 250 c-6 -27 -7 -50 -2 -50 12 0 16 10 24 58 10 60 -10 53 -22
-8z"
        />
      </g>
    </svg>
  );
}
