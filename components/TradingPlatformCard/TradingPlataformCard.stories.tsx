import type { Meta, StoryObj } from "@storybook/react";
import TradingPlatformCard from "./TradingPlatformCard";

const meta: Meta<typeof TradingPlatformCard> = {
  component: TradingPlatformCard,
  argTypes: {
    title: {
      control: "text",
      description: "The name of the trading platform to show.",
    },
    content: {
      control: "text",
      description: "The text content for the card, if needed.",
    },
    link_to: {
      control: "text",
      description: "The link to be used in the button.",
    },
    excerpt: {
      control: "text",
      description: "A text content for the body of this card.",
    },
    icon: {
      control: "inline-radio",
      description: "The name for the platform icon to use.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TradingPlatformCard>;

export const Common: Story = {
  name: "Common",
  args: {
    title: "TradingView",
    content:
      "Trade directly in TradingView, whe world's leading charting and social platform.",
    link_to: "https://blackbull.com",
    excerpt:
      "Trade directly in TradingView, whe world's leading charting and social platform.",
    icon: "tv",
  },
};
