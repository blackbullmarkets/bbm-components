import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@newhighsco/storybook-addon-svgr"
  ],
  docs: {
    defaultName: "Documentation",
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};
export default config;
