import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function Loading() {
  const { scrollYProgress } = useScroll();

  const scroll = useTransform(scrollYProgress, [0, 420], [0, 1200]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 0.7}}  className="absolute bg-gray-500/40 -z-30 overflow-hidden -bottom-[90vh] -right-20 rounded-full lg:h-[750px] lg:w-[750px]">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        
        viewBox="0 0 1792.000000 1780.000000"
        preserveAspectRatio="xMidYMid meet"


        
      >
        <g transform="translate(0.000000,1780.000000) scale(0.100000,-0.100000)">
          <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
            style={{ pathLength: scroll }}
            fill="none"
        
       
      stroke="#FFFFFF"
      
      strokeOpacity="1"
      strokeWidth="110"
            d="M12564 11442 c-73 -53 -123 -135 -131 -216 -18 -182 220 -392 534
-472 114 -29 195 -30 284 -6 129 36 229 115 282 221 28 58 32 75 32 151 0 100
-21 154 -88 220 -75 75 -217 129 -340 130 -40 0 -54 -5 -76 -28 -24 -24 -28
-37 -34 -110 -7 -87 -1 -164 15 -195 15 -30 54 -39 94 -22 43 18 55 49 47 125
-6 59 -5 60 19 60 70 0 171 -60 194 -116 42 -100 -12 -205 -136 -263 -79 -37
-211 -36 -325 3 -187 64 -335 182 -335 268 0 39 33 101 68 130 46 36 56 62 37
98 -29 55 -83 64 -141 22z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M6755 11142 c-33 -27 -127 -97 -210 -157 -238 -172 -351 -268 -447
-383 -62 -74 -138 -180 -138 -193 0 -12 289 -176 295 -167 1 2 22 32 47 68 89
126 193 219 473 422 254 184 272 207 215 271 -16 19 -30 38 -30 42 0 4 -20 31
-45 59 -25 28 -52 59 -60 69 -22 25 -34 22 -100 -31z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M11493 11130 c-158 -33 -335 -161 -442 -319 -56 -82 -81 -154 -81
-235 0 -52 -3 -65 -17 -69 -10 -3 -103 -30 -208 -62 -638 -190 -1177 -279
-1760 -292 -537 -11 -1014 42 -1524 172 -126 32 -144 32 -170 -1 -26 -33 -27
-74 -3 -103 42 -53 633 -171 1062 -213 208 -20 872 -17 1070 5 522 59 1007
163 1544 331 l79 25 41 -35 c75 -65 194 -112 328 -129 46 -6 46 -7 43 -38 -2
-18 -9 -75 -15 -127 -7 -52 -27 -171 -46 -265 -19 -93 -38 -185 -41 -203 -13
-75 -361 -340 -669 -510 -479 -266 -958 -434 -1927 -678 -599 -150 -619 -153
-1112 -164 -214 -4 -398 -11 -408 -15 -45 -18 -52 -102 -11 -134 25 -20 39
-21 243 -21 402 1 633 20 884 74 225 49 888 216 1107 280 461 133 848 280
1191 452 836 418 1285 984 1219 1537 -10 82 -9 103 5 149 28 93 31 211 6 307
-24 97 -57 158 -116 216 -62 60 -172 86 -272 65z m116 -136 c12 -15 21 -37 21
-49 0 -38 -37 -75 -75 -75 -38 0 -75 37 -75 75 0 38 37 75 75 75 24 0 39 -7
54 -26z m-150 -180 c29 -36 26 -65 -9 -121 -16 -26 -30 -53 -30 -60 0 -23 -47
-63 -73 -63 -39 0 -77 36 -77 73 0 40 43 133 78 170 35 37 83 37 111 1z m250
-609 c-12 -93 -56 -234 -101 -317 -17 -32 -32 -57 -34 -55 -2 1 3 39 11 82 8
44 19 134 26 201 l12 120 46 25 c25 14 47 25 48 24 1 0 -3 -36 -8 -80z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M6070 11041 c-213 -69 -367 -220 -546 -534 l-49 -86 -37 6 c-36 5
-38 4 -38 -21 0 -33 -19 -34 -73 -3 -30 16 -41 19 -45 9 -3 -10 -7 -10 -20 0
-12 10 -16 10 -19 1 -3 -9 -17 -7 -53 7 -47 19 -48 19 -66 -1 -17 -19 -19 -19
-30 -4 -16 22 -13 37 -83 -350 -125 -687 -183 -1058 -206 -1320 -16 -181 -43
-312 -80 -385 -27 -52 -63 -88 -191 -188 -215 -168 -256 -283 -200 -552 14
-69 26 -135 26 -149 0 -13 -22 -62 -49 -110 -91 -158 -102 -259 -42 -387 37
-80 142 -189 216 -224 82 -39 179 -39 294 -1 138 46 156 44 370 -51 241 -107
452 -165 626 -175 173 -9 278 24 372 116 136 133 191 327 202 701 8 254 5 246
96 362 95 122 125 208 125 364 0 144 -26 225 -125 389 -79 131 -84 185 -29
315 80 189 88 218 88 325 1 116 -21 201 -86 330 -95 189 -220 348 -473 601
l-192 192 61 108 c127 224 217 330 318 374 73 33 79 48 67 163 -6 51 -10 103
-10 117 0 14 -5 37 -11 53 -12 32 -30 33 -108 8z m-510 -1116 c185 -48 333
-170 390 -323 103 -273 -15 -518 -293 -608 -132 -43 -345 -35 -399 13 -16 14
-18 36 -17 192 1 269 15 684 24 705 21 48 154 58 295 21z m177 -1167 c116 -43
216 -177 243 -328 34 -188 -72 -334 -266 -369 -122 -22 -247 21 -333 114 -124
137 -128 344 -10 479 98 111 240 152 366 104z m-26 -897 c29 -23 31 -81 4
-111 -15 -16 -30 -20 -89 -20 -183 -1 -294 -40 -333 -120 -28 -54 -29 -85 -4
-183 35 -135 102 -246 173 -283 15 -8 47 -14 72 -14 36 0 52 6 79 30 31 27 85
126 74 136 -2 2 -39 9 -83 14 -179 22 -224 43 -224 104 0 64 50 89 130 66 19
-5 94 -15 167 -22 157 -14 173 -22 173 -94 0 -96 -49 -228 -111 -298 -78 -90
-221 -117 -332 -63 -147 73 -271 289 -284 498 -16 245 145 374 473 378 76 1
96 -2 115 -18z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M5406 9668 c-3 -68 -8 -219 -11 -335 l-5 -213 79 0 c154 0 278 63
334 170 27 51 29 61 25 140 -5 103 -28 159 -92 228 -67 71 -200 132 -292 132
l-32 0 -6 -122z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M5600 8621 c-100 -20 -150 -86 -150 -197 0 -81 23 -129 83 -178 32
-26 48 -31 105 -34 119 -6 192 54 192 159 0 63 -25 129 -67 178 -52 62 -102
84 -163 72z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M7351 10989 c-212 -41 -421 -170 -646 -398 -49 -50 -90 -94 -90 -98
0 -8 154 -151 217 -202 l29 -23 102 99 c156 153 290 244 412 279 33 9 65 24
71 32 12 16 19 271 8 304 -6 20 -30 22 -103 7z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M12374 10556 c-35 -29 -39 -86 -8 -115 51 -49 363 -101 613 -101
l116 0 -113 -60 c-137 -73 -191 -109 -259 -175 -63 -61 -68 -91 -24 -136 l29
-29 144 0 c181 0 582 26 607 40 11 5 25 25 31 44 9 28 8 40 -4 65 -9 16 -25
32 -36 36 -17 5 -188 -3 -415 -20 -43 -4 -66 -2 -60 4 6 5 82 47 171 93 161
85 268 151 294 182 20 26 16 74 -9 99 -21 22 -25 22 -359 23 -301 0 -349 2
-452 22 -63 11 -137 28 -165 36 -65 20 -69 20 -101 -8z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M10873 9878 c-29 -14 -47 -67 -34 -101 20 -53 96 -65 130 -21 28 36
27 79 -4 109 -26 26 -56 31 -92 13z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M7684 9845 c-36 -15 -58 -60 -48 -99 8 -34 84 -100 156 -137 69 -35
181 -67 264 -75 34 -4 67 -10 74 -14 26 -16 -146 -269 -238 -351 -65 -58 -179
-131 -238 -153 -67 -26 -94 -52 -94 -93 0 -36 36 -83 64 -83 30 0 132 43 211
89 55 32 113 79 185 151 117 115 194 223 270 378 47 94 120 289 120 318 0 27
-47 64 -80 64 -50 0 -67 -16 -90 -86 -12 -36 -29 -68 -37 -71 -9 -3 -67 1
-130 10 -132 19 -216 52 -285 114 -54 49 -67 54 -104 38z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M11147 9853 c-9 -2 -24 -18 -33 -34 -43 -85 56 -160 123 -93 21 21
24 32 19 62 -9 57 -48 81 -109 65z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M12789 9681 c-34 -35 -37 -68 -8 -105 20 -26 21 -26 167 -26 81 0
237 -7 347 -15 234 -17 339 -19 365 -5 42 22 44 97 5 130 -21 18 -456 49 -693
49 l-154 1 -29 -29z"
          />
          <motion.path 
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M10959 9580 c-9 -5 -22 -23 -29 -40 -33 -81 64 -147 125 -85 65 64
-17 171 -96 125z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M12874 9430 c-49 -20 -71 -92 -36 -122 9 -9 51 -30 92 -48 217 -94
367 -187 454 -280 31 -34 56 -65 56 -71 0 -17 -233 11 -385 47 -175 40 -170
40 -199 11 -15 -15 -26 -37 -26 -53 0 -68 86 -179 233 -299 47 -38 84 -71 82
-73 -8 -8 -403 73 -500 103 -96 29 -138 15 -151 -51 -9 -46 24 -79 104 -104
37 -11 211 -50 387 -85 176 -36 335 -69 353 -74 41 -12 75 -1 98 34 42 64 -33
168 -256 354 l-65 54 45 -6 c127 -18 279 -29 354 -26 73 4 88 7 110 28 35 33
33 69 -8 155 -83 171 -275 327 -565 456 -124 56 -148 63 -177 50z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M11980 8257 c-16 -8 -28 -26 -34 -49 -8 -33 -3 -47 67 -182 76 -146
357 -622 404 -683 29 -40 76 -44 117 -12 43 34 35 67 -49 204 l-75 122 65 136
c35 75 76 154 89 176 l25 39 168 -54 c92 -30 174 -54 181 -54 23 0 72 57 72
84 0 53 -33 70 -257 140 -117 36 -258 77 -313 91 -199 50 -406 69 -460 42z
m338 -178 c62 -12 111 -24 110 -28 -52 -105 -114 -221 -118 -221 -3 0 -14 17
-26 38 -11 20 -44 79 -72 130 -29 50 -52 94 -52 97 0 10 46 5 158 -16z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M11380 7825 c-69 -20 -153 -61 -180 -90 -31 -33 -28 -66 24 -219 98
-288 226 -519 373 -674 48 -51 95 -57 131 -19 37 40 29 81 -29 145 -62 71
-145 190 -136 198 18 18 455 -62 610 -111 87 -27 116 -23 136 22 37 81 -11
116 -237 173 -67 17 -374 70 -404 70 -4 0 7 30 24 66 43 91 49 185 18 268 -55
144 -184 211 -330 171z m129 -159 c40 -21 65 -83 59 -146 -4 -37 -15 -65 -42
-105 -51 -73 -62 -75 -87 -17 -29 66 -90 244 -86 248 9 9 84 33 105 33 13 1
35 -5 51 -13z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M10735 7583 c-31 -8 -65 -44 -65 -70 0 -13 13 -97 29 -186 35 -191
66 -442 81 -652 12 -158 21 -187 65 -207 51 -23 218 56 310 148 107 107 165
248 165 404 0 197 -91 365 -254 472 -89 58 -266 106 -331 91z m203 -204 c73
-36 140 -106 178 -187 23 -47 29 -74 32 -157 5 -114 -12 -179 -68 -260 -27
-39 -112 -114 -131 -115 -3 0 -11 66 -18 146 -11 131 -59 488 -77 572 -8 41 4
42 84 1z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M7011 7561 c-39 -39 -123 -452 -141 -689 -13 -175 -4 -276 26 -311
22 -25 25 -26 176 -31 84 -3 235 -3 336 0 206 6 212 8 212 81 0 29 -6 42 -26
58 -26 20 -39 21 -297 21 l-270 0 6 148 c7 162 30 313 83 528 19 78 34 147 34
153 0 7 -11 23 -25 36 -30 31 -86 34 -114 6z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M7936 7472 c-9 -10 -26 -59 -37 -108 -25 -109 -35 -406 -22 -708 l9
-198 27 -24 c31 -27 54 -30 91 -13 41 19 45 50 34 260 -14 267 -5 550 20 659
21 91 18 121 -17 139 -31 17 -86 13 -105 -7z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M8890 7453 c-35 -9 -130 -16 -265 -20 -231 -6 -270 -14 -281 -58 -4
-14 -4 -92 0 -173 21 -500 20 -563 -10 -704 -8 -37 41 -88 85 -88 62 0 86 59
98 232 l6 86 66 12 c36 6 104 16 151 21 46 5 95 16 107 24 44 29 42 102 -2
131 -24 16 -35 16 -161 0 -74 -10 -141 -19 -148 -22 -15 -6 -21 44 -32 247
l-7 126 174 5 c207 7 308 26 339 65 24 30 25 54 5 92 -12 24 -45 44 -65 40 -3
-1 -30 -8 -60 -16z"
          />
          <motion.path
          fill="none"
        
       
          stroke="#FFFFFF"
          
          strokeOpacity="1"
          strokeWidth="110"
            style={{ pathLength: scroll }}
            d="M9575 7460 c-142 -6 -180 -11 -229 -30 -77 -29 -129 -78 -166 -154
-45 -94 -61 -168 -67 -316 -5 -156 27 -551 48 -576 28 -34 46 -35 222 -15 94
11 229 25 300 31 70 6 134 13 143 17 8 3 22 19 30 35 20 38 10 84 -23 105 -23
16 -40 15 -257 -6 -127 -12 -241 -25 -253 -28 -19 -4 -22 0 -28 49 -3 29 -7
80 -8 113 l-2 60 75 12 c41 6 130 12 197 12 120 1 122 1 143 28 27 35 21 79
-16 111 -23 20 -35 22 -139 22 -63 0 -148 -5 -190 -11 -42 -6 -78 -9 -82 -6
-10 11 17 196 38 251 23 63 70 110 126 125 21 6 100 11 176 11 163 0 199 10
216 63 8 24 9 42 1 61 -9 25 -47 48 -73 44 -7 -1 -88 -4 -182 -8z"
          />
        </g>
      </svg>
    </motion.div>
  );
}
