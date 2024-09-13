import { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    variant: {
      description: "What kind of text are you trying to display.",
      control: "select",
      options: [
        "headline",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subheading-lg",
        "subheading-md",
        "subheading-sm",
        "body-lg",
        "body",
        "caption",
      ],
    },
    children: {
      description:
        "The content between the tags. It can be a simple string of text or another component.",
      control: "text",
    },
    color: {
      control: "select",
      options: [
        "text-black",
        "text-primary-default",
        "text-secondary-default",
        "text-support-default",
        "text-success-default",
        "text-info-default",
        "text-warning-default",
        "text-danger-default",
        "text-light-default",
        "text-white",
      ],
      description: "The color of this text element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Base: Story = {
  name: "Base text",
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "body",
    children: "Trade with lightning fast execution speed",
    color: "black",
  },
};
