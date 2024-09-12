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
      max: "5.9375em" /* 95px */,
    },
    extend: {
      colors: {
        primary: {
          default: "#0064FF",
        },
        secondary: { default: "#003992" },
        support: { default: "#002764" },
        success: { default: "#44df3d" },
        info: { default: "#0064ff" },
        warning: { default: "#ffd600" },
        danger: { default: "#ff3e24" },
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
