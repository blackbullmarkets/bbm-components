import type { Meta, StoryObj } from "@storybook/react";
import DoubleLineButton from "./DoubleLineButton";

const meta: Meta<typeof DoubleLineButton> = {
  component: DoubleLineButton,
  argTypes: {
    firstLine: {
      control: "text",
      description: "The first line of text in the button.",
    },
    secondLine: {
      control: "text",
      description: "The second line of text.",
    },
    icon: {
      control: "text",
      description: "An icon to show",
    },
    variant: {
      control: "text",
      description: "The style of the icon.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DoubleLineButton>;

export const Common: Story = {
  name: "Double Line Button",
  parameters: {
    layout: "centered",
  },
  args: {
    firstLine: "Next Lesson",
    secondLine: "How Do You Trade Forex?",
    icon: "play_circle",
    variant: "success",
    onClickFn: () => alert("Hello!"),
  },
};
