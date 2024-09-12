import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: {
      default: "#0064FF",
    },
    secondary: { default: "#003992" },
    support: { default: "#002764" },
    success: { default: "#44df3d" },
    info: { default: "0064ff" },
    warning: { default: "#ffd600" },
    danger: { default: "#ff3e24" },
  },
  fontSizes: {
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
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
