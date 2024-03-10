import {
  cubicBezier,
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Loading({ inView }: { inView: boolean }) {
  const controls = useAnimation();

  const scroll = inView ? 1 : 0;
  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        transition: {
          type: "easeInOut",
          duration: 4.5
        },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="1000"
        strokeWidth="12px"
        viewBox="0 0 300.000000 219.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.10, written by Peter Selinger 2001-2011
        </metadata>
        <g
          transform="translate(0.000000,219.000000) scale(0.100000,-0.100000)"
          fill="#FFFFFF"
          stroke="black"
        >
          <motion.path
          
            d="M1256 2010 c-296 -37 -516 -145 -616 -300 -18 -28 -44 -85 -58 -128
-22 -67 -26 -94 -26 -212 -1 -99 4 -152 17 -200 23 -84 74 -193 119 -251 25
-32 33 -51 27 -60 -14 -22 -11 -62 7 -87 28 -41 72 -56 158 -55 l78 1 20 -34
c23 -40 46 -48 104 -39 33 5 59 1 100 -14 69 -26 95 -26 127 -1 20 16 40 20
97 20 77 0 104 9 135 46 22 26 124 51 261 63 104 9 134 41 109 116 -12 33 -11
41 6 69 24 40 24 63 -2 105 -22 37 -12 36 -150 9 -36 -7 -73 -21 -83 -30 -23
-24 -88 -42 -120 -34 -17 4 -38 25 -60 59 -39 61 -61 82 -99 96 -19 7 -27 18
-27 35 0 68 -113 64 -171 -8 -9 -11 -54 -38 -100 -60 -75 -37 -87 -46 -110
-90 -33 -60 -47 -69 -122 -72 -43 -2 -68 -9 -97 -28 l-39 -26 -44 73 c-120
194 -147 434 -72 633 49 131 106 188 260 265 187 93 428 131 698 109 313 -24
537 -110 636 -244 94 -125 115 -206 115 -431 0 -160 -2 -175 -28 -250 -15 -44
-41 -101 -58 -128 -90 -140 -268 -230 -492 -246 -64 -4 -91 -10 -94 -20 -4
-12 13 -13 104 -8 314 18 507 160 580 427 26 93 26 368 1 460 -57 209 -178
333 -404 411 -147 51 -507 82 -687 59z m82 -847 c2 -12 -4 -35 -12 -52 -9 -17
-16 -56 -16 -88 -1 -32 -7 -69 -15 -83 -22 -39 -18 -72 16 -123 l31 -47 -19
-46 c-28 -71 -46 -79 -127 -53 -48 14 -80 18 -107 14 -37 -6 -43 -4 -84 34
-43 40 -47 41 -114 41 -81 0 -115 11 -131 40 -28 51 38 110 121 110 63 0 107
26 146 88 29 45 45 58 100 83 36 16 86 47 111 70 52 45 95 51 100 12z m77 -53
c17 -11 44 -42 59 -70 41 -76 103 -98 180 -66 31 13 38 12 84 -10 51 -24 89
-63 73 -74 -4 -3 -18 -24 -30 -47 -25 -51 -56 -68 -136 -78 -79 -10 -106 -21
-132 -53 -19 -24 -30 -27 -97 -32 -42 -3 -76 -4 -76 -3 0 2 9 17 20 35 29 48
25 78 -16 127 -39 45 -39 42 2 111 10 17 12 37 8 60 -9 45 -8 59 5 93 13 32
15 33 56 7z m477 -95 c8 -19 8 -28 -2 -40 -15 -18 -25 -11 -34 26 -10 44 17
55 36 14z m-75 -10 c9 -24 -4 -30 -34 -16 -22 10 -24 14 -12 22 21 13 39 11
46 -6z m67 -131 c17 -45 -6 -78 -61 -86 -38 -5 -38 -6 -17 35 32 63 65 85 78
51z"
          />
          <motion.path
            d="M1404 1057 c-3 -8 4 -35 16 -61 11 -26 20 -49 20 -51 0 -1 -20 -8
-45 -15 -28 -8 -45 -18 -45 -28 0 -11 7 -13 30 -8 53 10 130 48 130 63 0 10
-7 14 -20 10 -16 -4 -24 5 -44 49 -26 56 -33 63 -42 41z"
          />
          <motion.path
            d="M1654 909 c-8 -14 11 -33 25 -25 11 7 4 36 -9 36 -5 0 -12 -5 -16
-11z"
          />
          <motion.path
            d="M1724 909 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
-11z"
          />
          <motion.path
          fill='white'
          stroke='black'
         
            d="M1496 1873 c-4 -4 -36 -6 -72 -5 -69 4 -157 -17 -212 -48 -32 -19
-32 -19 -79 5 -31 17 -61 25 -92 24 -58 -1 -70 -6 -116 -47 -24 -22 -43 -32
-56 -29 -34 9 -22 -34 37 -133 30 -52 69 -127 86 -167 32 -79 56 -103 101
-103 34 0 94 30 124 62 56 59 70 191 30 271 l-24 46 46 20 c53 22 101 36 101
28 0 -4 -7 -32 -15 -64 -18 -66 -13 -115 16 -161 22 -38 74 -72 107 -72 61 0
122 53 148 128 11 33 15 36 55 39 l44 3 1 -46 c3 -106 92 -146 173 -78 l31 26
0 -49 0 -48 -132 -26 c-233 -46 -315 -92 -325 -181 -7 -59 24 -127 75 -166 31
-23 45 -27 106 -27 165 0 313 131 333 295 5 46 7 49 42 55 58 11 128 44 112
54 -9 6 -10 11 -2 15 6 4 11 19 10 34 0 15 -3 21 -6 14 -4 -10 -8 -10 -19 -1
-11 9 -14 8 -14 -3 0 -16 -28 -34 -77 -47 l-33 -10 -1 92 c-2 133 -13 236 -23
214 -8 -17 -9 -17 -23 3 -25 36 -126 19 -178 -30 -14 -13 -38 -20 -79 -22
l-60 -3 -17 45 c-27 74 -93 123 -123 93z m-38 -53 c6 0 12 -9 12 -20 0 -27
-55 -28 -69 -1 -13 23 -3 34 24 27 11 -3 26 -6 33 -6z m82 -31 c7 -11 9 -23 7
-26 -7 -6 -47 16 -47 26 0 26 26 27 40 0z m-450 -19 c11 -7 9 -11 -13 -19 -35
-14 -107 -14 -107 -1 0 25 88 41 120 20z m99 -16 c9 -9 -5 -12 -31 -7 -16 3
-28 10 -28 15 0 9 49 3 59 -8z m333 -59 c27 -11 48 -22 48 -25 -1 -22 -51 -86
-73 -94 -24 -9 -31 -6 -55 17 -28 29 -35 78 -19 139 l7 27 23 -23 c12 -12 43
-31 69 -41z m-566 34 c13 -15 16 -24 8 -36 -17 -26 -28 -25 -45 4 -28 49 0 73
37 32z m649 -5 c23 -36 5 -51 -24 -20 -13 14 -20 29 -16 35 10 17 21 13 40
-15z m320 -31 c-28 -50 -87 -113 -105 -113 -12 0 -30 42 -30 71 0 14 12 25 38
35 20 8 55 23 77 34 22 10 42 19 43 19 2 1 -8 -20 -23 -46z m-739 -18 c18 -44
18 -116 0 -159 -14 -34 -63 -76 -88 -76 -7 0 -38 51 -68 114 l-55 114 56 5
c31 3 69 12 85 21 43 23 53 20 70 -19z m774 -60 c0 -15 -6 -25 -14 -25 -22 0
-30 19 -16 35 18 22 30 18 30 -10z m23 -153 c3 -4 -4 -18 -14 -31 -15 -18 -23
-21 -31 -13 -9 9 -7 17 7 32 19 21 31 25 38 12z m-63 -78 c0 -72 -80 -179
-165 -219 -50 -23 -125 -31 -154 -15 -29 15 -61 68 -61 101 0 54 62 85 245
124 134 29 135 29 135 9z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "black" }}
            animate={controls}
            d="M727 668 c-8 -13 -18 -37 -22 -55 -9 -43 -22 -51 -85 -55 -78 -4 -80
-28 -3 -28 l60 0 -5 -55 c-5 -61 7 -85 43 -85 12 0 30 9 40 20 23 26 35 26 28
0 -7 -25 13 -50 40 -50 12 0 34 12 49 27 l28 27 -11 -31 c-6 -18 -26 -44 -45
-58 -40 -31 -64 -73 -64 -114 0 -44 10 -61 35 -61 33 0 52 28 71 107 16 68 19
72 55 86 30 12 45 13 67 5 33 -13 85 -3 79 15 -2 7 -18 11 -36 9 -36 -2 -39 7
-11 33 27 25 28 85 1 85 -31 0 -64 -33 -65 -68 -1 -22 -8 -34 -25 -42 -13 -6
-26 -9 -28 -6 -12 11 29 116 52 134 31 25 32 42 2 42 -36 0 -65 -27 -97 -89
-26 -52 -54 -80 -67 -67 -3 2 2 29 11 59 9 30 16 60 16 66 0 25 -29 8 -59 -34
-59 -82 -91 -79 -77 6 5 29 17 51 42 74 31 30 35 38 32 77 -4 50 -28 63 -51
26z m120 -432 c-14 -56 -37 -74 -37 -29 0 29 40 106 46 88 2 -5 -2 -32 -9 -59z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "black" }}
            animate={controls}
            d="M2188 675 c-3 -4 -4 -30 -1 -59 4 -34 1 -56 -6 -60 -6 -4 -11 -1 -11
8 0 18 -30 36 -59 36 -29 0 -58 -43 -66 -97 l-7 -48 -21 45 c-25 52 -50 60
-86 30 -22 -19 -23 -26 -18 -83 9 -101 -20 -112 -38 -14 -7 35 -35 54 -35 23
0 -8 -8 -16 -17 -18 -15 -3 -18 -14 -18 -58 0 -42 -4 -55 -15 -55 -9 0 -17 12
-20 30 -7 41 -35 40 -36 -1 -1 -18 -4 -40 -8 -49 -10 -27 -33 -1 -41 46 -8 47
-29 47 -33 1 -4 -36 -9 -39 -28 -14 -13 16 -15 16 -28 0 -7 -10 -25 -18 -40
-18 -21 0 -27 4 -24 18 2 12 14 18 41 20 24 2 37 8 37 18 0 22 -22 26 -71 13
-53 -14 -88 -15 -111 -5 -12 6 -18 4 -18 -5 0 -35 -22 -89 -36 -89 -23 0 -26
22 -9 69 23 67 20 127 -10 156 -13 14 -30 25 -38 25 -27 0 -47 -35 -47 -82 0
-38 -4 -49 -25 -62 -27 -18 -49 -83 -39 -112 19 -53 66 -70 98 -35 13 15 26
18 52 14 20 -3 40 -1 49 7 13 10 15 9 15 -9 0 -12 6 -21 15 -21 11 0 15 12 15
50 0 47 2 50 25 50 15 0 25 -6 25 -15 0 -8 12 -22 26 -32 21 -13 32 -14 54 -6
18 7 32 7 38 1 6 -6 17 -6 30 1 15 8 23 6 37 -9 22 -24 53 -26 62 -4 4 10 13
13 32 9 42 -9 65 23 58 80 -7 50 8 62 18 16 11 -53 56 -68 79 -26 6 11 15 23
20 27 6 4 6 24 -1 52 -8 35 -7 50 3 63 16 23 25 13 45 -45 20 -60 36 -64 56
-13 11 29 20 38 27 31 5 -5 21 -10 34 -10 19 0 23 -4 17 -17 -13 -34 -17 -118
-6 -146 13 -33 50 -52 86 -43 19 5 32 20 46 52 25 55 20 82 -26 159 -28 46
-32 60 -25 81 14 36 12 97 -3 118 -7 9 -15 14 -19 11z m-48 -129 c0 -35 -10
-56 -26 -56 -16 0 -18 33 -4 61 15 26 30 24 30 -5z m-800 -66 c10 -20 5 -102
-8 -124 -9 -16 -30 55 -31 102 -1 47 20 58 39 22z m880 -50 c26 -51 26 -104 0
-130 -33 -33 -70 -4 -70 54 0 37 30 127 41 121 5 -4 18 -24 29 -45z m-925 -87
c14 -33 14 -38 0 -60 -9 -13 -24 -23 -33 -21 -24 4 -29 80 -7 102 22 22 23 21
40 -21z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "black" }}
            animate={controls}
            d="M834 636 c3 -14 2 -28 -4 -31 -12 -7 -13 -45 -2 -45 14 0 42 35 42
52 0 28 -12 48 -27 48 -11 0 -13 -7 -9 -24z"
          />
          <motion.path
            initial={{ pathLength: 0, fill: "none", stroke: "black" }}
            animate={controls}
            d="M1819 573 c-1 -5 0 -16 1 -26 1 -10 -4 -25 -11 -33 -9 -11 -9 -18 -1
-26 24 -24 60 38 42 73 -11 19 -29 26 -31 12z"
          />
        </g>
      </svg>
    </>
  );
}
