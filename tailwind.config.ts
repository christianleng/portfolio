import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eaebe9",
        secondary: "#ebebeb",
        accent: "#e8ebe7",
        light: "#ececec",
        dark: "#333333",
        highlight: "#ff4500",
        greenShadow1: "#d6e8d6",
        greenShadow2: "#cce1cc",
        greenShadow3: "#b3d1b3",
        greenShadow4: "#99c199",
        grayShadow1: "#e0e0e0",
        grayShadow2: "#d6d6d6",
        grayShadow3: "#bfbfbf",
        grayShadow4: "#a6a6a6",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
