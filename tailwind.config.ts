import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xm: "0.75em" /* 12px */,
      sm: "0.875em" /* 14px */,
      base: "1em" /* 16px */,
      md: "1.125em" /* 18px */,
      lg: "1.5em" /* 24px */,
      xl: "2em" /* 32px */,
      xxl: "3em" /* 48px */,
      xxxl: "4em" /* 64px */,
      max: "6em" /* 96px */,
    },
    extend: {
      colors: {
        primary: {
          default: "#0064FF",
          dark: "#0C2AE8",
        },
        secondary: { default: "#003992", 75: "rgba(0, 57, 146, 0.75)" },
        support: { default: "#002764", 75: "rgba(0, 39, 100, 0.75)" },
        success: { default: "#44df3d", dark: "#13C640" },
        info: { default: "#0064ff", 75: "rgba(0, 100, 255, 0.75)" },
        warning: { default: "#ffd600", 75: "rgba(255, 214, 0, 0.75)" },
        danger: { default: "#ff3e24", 75: "rgba(255, 62, 36, 0.75)" },
        light: { default: "rgba(0, 100, 255, 0.25)" },
        black: {
          default: "#000",
          75: "rgba(0, 0, 0, 0.75)",
          50: "rgba(0, 0, 0, 0.50)",
          25: "rgba(0, 0, 0, 0.25)",
        },
        labelgray: "#808191",
      },
      boxShadow: {
        xm: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px rgba(16, 24, 40, 0.10)",
        base: "0px 4px 8px rgba(16, 24, 40, 0.10)",
        lg: "0px 20px 24px rgba(16, 24, 40, 0.10)",
        xl: "0px 24px 48px rgba(16, 24, 40, 0.25)",
      },
      dropShadow: {
        xm: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        base: "0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        lg: "0px 20px 24px -4px rgba(16, 24, 40, 0.10)",
        xl: "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
      },
      borderRadius: {
        none: "0",
        xm: "4px",
        sm: "12px",
        base: "16px",
        lg: "24px",
        xl: "70px",
      },
    },
  },
  plugins: [],
};
export default config;
