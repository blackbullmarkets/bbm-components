import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "./LinkButton";
import { text } from "stream/consumers";

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
        "inactive",
      ],
      description: "The color of this link button.",
    },
    href: {
      control: "text",
      description: "Where is this button taking you?",
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
      description: "The size of this element.",
    },
    label: {
      control: "text",
      description: "What should this link button say?",
    },
    bold: {
      control: "boolean",
      description: "Should the label be bold or not?",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Common: Story = {
  name: "Link Button",
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Go to link",
    href: "http://blackbull.com",
    size: "base",
    variant: "primary",
    bold: true,
  },
};
