import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f9fafb",
          100: "#f4f5f7",
          200: "#e5e7eb",
          300: "#d2d6dc",
          400: "#9fa6b2",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#252f3f",
          900: "#161e2e",
        },
        black: {
          light: "#333333",
          DEFAULT: "#000000",
          dark: "#0d0d0d",
        },
        primary: "#fff",
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
      fontFamily: {
        sans: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        nav: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
