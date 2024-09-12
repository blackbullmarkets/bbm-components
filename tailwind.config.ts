import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#0064FF",
        "secondary-blue": "#003992",
        "support-blue": "#002764",
        "success": "#44df3d",
        "info": "0064ff",
        "warning": "#ffd600",
        "danger": "ff3e24",
      },
    },
  },
  plugins: [],
};
export default config;
