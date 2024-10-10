import type { Meta, StoryObj } from "@storybook/react";
import StarLevel from "./StarLevel";

const meta: Meta<typeof StarLevel> = {
  component: StarLevel,
  argTypes: {
    level: {
      control: "number",
      description:
        "A number between 1 and 3 to show if the course is for beginners, intermediates or advanced.",
    },
    variant: {
      control: "inline-radio",
      description: "What variant do you want to display?",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StarLevel>;

export const Common: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    level: 2,
    variant: "vertical",
  },
};
