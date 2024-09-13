import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "support",
        "success",
        "info",
        "warning",
        "danger",
        "light",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  name: "Primary Link Button",
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Go to link",
    href: "http://blackbull.com",
    size: "base",
    variant: "primary",
  },
};
