import type { Meta, StoryObj } from "@storybook/react";
import DoubleLineLinkButton from "./DoubleLineLinkButton";

const meta: Meta<typeof DoubleLineLinkButton> = {
  component: DoubleLineLinkButton,
  argTypes: {
    href: {
      control: "text",
      description: "Where is this button taking you?",
    },
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

type Story = StoryObj<typeof DoubleLineLinkButton>;

export const Common: Story = {
  name: "Link Button",
  parameters: {
    layout: "centered",
  },
  args: {
    href: "http://blackbull.com",
    firstLine: "Next Lesson",
    secondLine: "How Do You Trade Forex?",
    icon: "play_circle",
    variant: "success",
  },
};
