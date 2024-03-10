import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '900px', // Change this to your desired width
      'lg': '1000px',
      'xl': '1440px',
      '2xl': '1536px',
    },
    extend: {},
  },
};
export default config;
