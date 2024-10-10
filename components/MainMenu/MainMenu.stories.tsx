import type { Meta, StoryObj } from "@storybook/react";
import MainMenu from "./MainMenu";

const meta: Meta<typeof MainMenu> = {
  component: MainMenu,
  argTypes: {
    homepageUrl: {
      control: "text",
      description: "Where to take the user once they click the logo.",
    },
    logo: {
      control: "object",
      description: "The logo. It can be a React component...",
    },
    menuItems: {
      control: "object",
      description: "The menu array.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Common: Story = {
  args: {
    homepageUrl: "http://blackbull.com",
    logo: "omg!",
    menuItems: [],
  },
};
