import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  argTypes: {
    heading: {
      control: "text",
      description: "The main text to show.",
    },
    subheading: {
      control: "text",
      description: "A little line to show below the main heading.",
    },
    hasButtonLink: {
      control: "boolean",
      description: "Does this hero section show a button?",
    },
    buttonLinkLabel: {
      control: "text",
      description: "The label for the LinkButton, if present.",
    },
    buttonLinkHref: {
      control: "text",
      description: "The link for the LinkButton.",
    },
    bgImage: {
      control: "text",
      description: "The route for the background image.",
    },
    featuredImage: {
      control: "text",
      description: "An image to feature.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Common: Story = {
  args: {
    heading: "Trade with lightning fast execution speed",
    subheading:
      "Ranked #1 forex broker in execution speed by CompareForexBrokers.com",
    hasButtonLink: true,
    buttonLinkLabel: "Join now",
    buttonLinkHref: "http://blackbull.com",
    bgImage: "/images/crypto_bg_blured.png",
    featuredImage: "/images/forex_hero_image.png",
    featuredImageAlt: "Trade FOREX with lightning fast execution speed.",
    featuredImageHeight: 485,
    featuredImageWidth: 570,
  },
};
