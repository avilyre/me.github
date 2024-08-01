import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32C0C6",
        "primary-light": "#D4EDEE",
        "primary-dark": "#329599",
        "gray-dark": "#4E4E4E",
        "border-line": "#E3E6E9",
        placeholder: "#8C8C8C",
        neutral: "#616161",
        light: "#F7F7F7",
        matte: "#F3F3F5",
        success: "#5CB85C",
        warning: "#FFB22B",
        danger: "#FC4B6C",
      },
    },
  },
  plugins: [],
};
export default config;
