import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
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
      description: "The color of this button.",
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
      description: "The size of this element.",
    },
    label: {
      control: "text",
      description: "What should this button say?",
    },
    bold: {
      control: "boolean",
      description: "Should the label be bold or not?",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Common: Story = {
  name: "Button",
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Button label",
    size: "base",
    variant: "primary",
    bold: true,
  },
};
