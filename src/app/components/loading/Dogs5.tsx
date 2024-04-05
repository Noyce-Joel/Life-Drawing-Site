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
      viewBox="0 0 300.000000 114.000000"
      preserveAspectRatio="xMidYMid meet"
      strokeWidth={12}
    >
      <metadata>
        Created by potrace 1.10, written by Peter Selinger 2001-2011
      </metadata>
      <g
        transform="translate(0.000000,114.000000) scale(0.100000,-0.100000)"
        fill="none  "
        stroke="#FFFFFF"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1810 1110 c-8 -5 -28 -10 -45 -11 -16 0 -44 -6 -61 -12 -34 -13
   -124 -87 -106 -87 7 0 29 15 50 34 27 25 54 38 97 47 112 23 152 23 190 0 45
   -26 46 -9 1 18 -35 22 -100 28 -126 11z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M2031 1043 c106 -101 149 -146 149 -160 0 -19 -58 -123 -69 -123 -13
   0 -50 94 -57 145 -4 28 -12 61 -19 75 -15 29 -55 68 -55 53 0 -6 7 -16 16 -23
   8 -8 20 -23 26 -34 15 -26 31 -127 30 -183 -1 -24 3 -43 8 -43 5 0 7 6 4 14
   -10 25 13 26 24 1 7 -14 16 -25 21 -25 18 0 81 109 81 139 0 22 -14 43 -57 85
   -32 31 -72 70 -89 86 -16 17 -35 30 -42 30 -6 0 7 -17 29 -37z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1509 957 c-19 -12 -43 -39 -53 -58 -17 -32 -18 -40 -6 -68 7 -18 33
   -53 58 -77 l45 -45 -23 -24 c-13 -14 -19 -25 -13 -25 19 0 73 70 94 122 16 40
   19 65 15 100 -5 35 -3 50 9 62 14 13 14 16 2 16 -20 0 -27 -22 -27 -84 0 -57
   -15 -112 -35 -134 -11 -12 -17 -11 -38 2 -36 24 -77 88 -77 120 0 30 59 96 85
   96 8 0 17 5 20 10 11 18 -21 11 -56 -13z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1934 916 c-3 -8 -1 -23 5 -33 10 -17 10 -17 11 0 0 9 5 17 10 17 6
   0 10 -7 10 -15 0 -13 3 -14 15 -3 12 11 11 15 -7 31 -25 21 -37 22 -44 3z"
        />

        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1680 875 c-7 -9 -11 -17 -9 -18 2 -1 13 -9 23 -17 17 -14 18 -13 12
   8 -10 29 2 29 13 0 8 -20 10 -21 16 -5 16 40 -27 65 -55 32z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1750 852 c0 -13 -5 -32 -11 -44 -6 -11 -8 -22 -6 -25 3 -3 13 9 22
   26 11 23 13 36 6 49 -9 15 -10 14 -11 -6z"
        />

        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1868 718 c6 -23 -7 -23 -23 -1 -7 9 -17 13 -23 9 -13 -8 -16 -27 -4
   -24 4 1 17 -3 30 -10 19 -11 25 -10 38 3 8 8 19 15 24 15 4 0 10 6 13 14 4 11
   -2 14 -27 13 -26 -2 -32 -6 -28 -19z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M2028 690 c-1 -28 0 -50 5 -50 8 0 8 5 11 62 2 57 -12 46 -16 -12z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration / 2,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1620 708 c0 -9 7 -21 15 -28 8 -7 15 -21 15 -31 0 -11 4 -19 9 -19
   13 0 1 41 -21 69 -12 16 -18 19 -18 9z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1027 659 c-21 -11 -59 -35 -85 -53 -26 -18 -75 -52 -109 -75 -35
   -24 -79 -61 -99 -84 l-36 -42 4 -91 3 -92 -30 -10 c-61 -22 -192 -44 -253 -43
   -68 0 -111 21 -133 64 -12 22 -12 22 9 4 13 -12 49 -23 95 -29 70 -10 78 -9
   123 12 50 24 174 140 174 163 0 6 -23 -13 -50 -44 -27 -31 -72 -71 -100 -89
   -47 -30 -54 -32 -128 -29 -67 4 -82 8 -116 34 l-39 29 8 -24 c32 -102 113
   -127 290 -92 55 11 113 25 128 31 22 8 33 8 50 -4 31 -20 255 -45 407 -45 69
   0 141 -4 160 -10 21 -5 100 -6 195 -2 139 6 164 5 195 -10 67 -33 234 -61 313
   -53 66 6 75 4 91 -14 17 -19 30 -21 135 -20 126 1 151 10 151 56 0 27 0 27
   110 9 179 -30 185 -30 221 2 43 39 35 67 -33 119 -88 66 -112 75 -235 84 -66
   5 -125 15 -142 24 -17 8 -36 15 -43 15 -7 0 -36 11 -65 25 -48 22 -53 28 -64
   70 -8 32 -27 64 -62 101 -27 30 -52 52 -55 50 -3 -3 16 -28 41 -55 28 -29 50
   -66 58 -92 18 -63 31 -74 128 -109 66 -25 111 -34 196 -39 121 -9 147 -18 229
   -83 68 -54 73 -64 45 -94 -28 -30 -63 -28 -67 4 -2 12 -8 22 -13 22 -12 0 -11
   -7 1 -31 17 -30 -26 -25 -46 6 -20 31 -34 32 -34 4 0 -19 -4 -20 -32 -15 -18
   3 -58 9 -88 12 -38 5 -72 18 -110 43 -75 49 -90 57 -130 78 -19 9 -48 26 -63
   36 -16 11 -51 22 -79 26 l-50 6 -2 45 c-2 45 -36 134 -44 112 -2 -6 3 -23 11
   -39 15 -27 20 -59 18 -97 -1 -16 -7 -18 -36 -13 -20 3 -33 2 -30 -2 2 -5 42
   -14 87 -21 85 -13 161 -48 313 -145 59 -38 65 -51 38 -83 -15 -17 -26 -20 -69
   -15 l-52 5 3 37 c2 31 2 32 -4 6 -5 -24 -13 -31 -41 -37 -40 -8 -75 -2 -108
   20 -20 13 -31 13 -72 3 -49 -13 -78 -10 -190 15 -156 36 -170 44 -170 94 0 46
   -37 134 -69 164 -16 16 -27 35 -24 42 3 8 0 14 -6 14 -20 0 -11 -36 15 -61 34
   -31 59 -90 68 -156 l7 -53 -91 0 c-78 0 -91 3 -96 18 -26 79 -62 102 -163 102
   -71 0 -73 1 -67 23 4 12 14 62 23 112 15 86 13 119 -11 175 -5 13 7 15 76 15
   85 0 178 20 178 37 0 6 -8 7 -17 3 -48 -20 -95 -28 -167 -29 -78 -1 -79 -1
   -116 37 -33 32 -43 37 -81 36 -24 -1 -61 -10 -82 -20z m154 -25 c51 -49 62
   -87 55 -183 -7 -100 -22 -160 -41 -167 -7 -3 -33 -2 -57 3 -41 8 -43 11 -48
   48 l-5 40 -8 -34 c-5 -24 -3 -39 5 -46 17 -15 103 -33 198 -40 41 -3 85 -8 98
   -11 24 -5 62 -58 61 -84 0 -8 -2 -10 -5 -5 -2 6 -25 8 -52 6 l-47 -5 40 -7 40
   -6 -37 -2 c-20 0 -49 4 -65 10 -15 6 -100 13 -188 15 -88 2 -181 6 -207 9 -44
   6 -47 9 -42 31 8 32 -4 31 -16 -1 -9 -23 -13 -25 -47 -19 -67 12 -90 32 -97
   82 -12 92 -8 122 25 164 25 31 212 173 262 199 7 3 26 13 42 22 43 23 100 15
   136 -19z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1874 658 c4 -13 -6 -24 -36 -39 -37 -19 -46 -20 -76 -9 -33 11 -53
   8 -38 -7 8 -9 65 -9 176 0 60 5 78 11 93 28 19 24 22 39 7 39 -5 0 -10 -6 -10
   -14 0 -43 -87 -45 -109 -3 -6 12 -9 14 -7 5z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1955 570 c-43 -34 -70 -38 -97 -13 -20 18 -25 4 -6 -15 23 -23 81
   -14 116 19 45 40 35 47 -13 9z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{
            pathLength: 1,
            transition: {
              duration: duration,
              delay: delay,
            },
          }}
          viewport={{ once: true }}
          d="M1730 557 c26 -27 121 -52 106 -29 -4 7 -22 12 -41 12 -19 0 -37 4
   -40 10 -3 5 -16 15 -28 21 -20 10 -20 9 3 -14z"
        />
      </g>
    </svg>
  );
}
