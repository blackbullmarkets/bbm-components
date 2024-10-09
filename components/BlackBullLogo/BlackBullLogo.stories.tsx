import type { Meta, StoryObj } from "@storybook/react";
import BlackBullLogo from "./BlackBullLogo";

const meta: Meta<typeof BlackBullLogo> = {
  component: BlackBullLogo,
  argTypes: {
    variant: {
      control: "select",
      options: ["academy"],
      description: "The variant of this BlackBull logo.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BlackBullLogo>;

export const Common: Story = {
  name: "BlackBullLogo",
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "academy",
  },
};
