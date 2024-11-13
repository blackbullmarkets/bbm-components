import type { Meta, StoryObj } from "@storybook/react";
import ContentBlock from "./ContentBlock";

const meta: Meta<typeof ContentBlock> = {
  component: ContentBlock,
  argTypes: {
    featuredImage: {
      control: "text",
      description: "An image to display within the block.",
    },
    featuredImageWidth: {
      control: "number",
      description:
        "The image width, in pixels. This is required by the <Image /> component.",
    },
    featuredImageHeight: {
      control: "number",
      description:
        "Now, the image height, in pixels. This is required by the <Image /> component.",
    },
    featuredImageAlt: {
      control: "text",
      description:
        "An alt text for the image. This is required by the <Image /> component.",
    },
    heading: {
      control: "text",
      description: "A big text to display in this block.",
    },
    content: {
      control: "text",
      description: "The regular text. The body of the block.",
    },
    hasBlockShadow: {
      control: "boolean",
      description: "Does this block need a shadow?",
    },
    hasBorder: {
      control: "boolean",
      description: "Does this block need a border?",
    },
    imagePosition: {
      control: "text",
      description: "Wether to show the image at the left or right.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentBlock>;

export const Common: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    featuredImage: "/images/youtube_thumbnail.png",
    featuredImageWidth: 640,
    featuredImageHeight: 358,
    featuredImageAlt: "How to start trading CFDs?",
    heading: "Welcome to BlackBull Academy",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    hasBlockShadow: true,
    hasBorder: true,
    imagePosition: "left",
  },
};
