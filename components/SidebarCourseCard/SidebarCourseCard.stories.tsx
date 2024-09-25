import type { Meta, StoryObj } from "@storybook/react";
import SidebarCourseCard from "./SidebarCourseCard";

const meta: Meta<typeof SidebarCourseCard> = {
  component: SidebarCourseCard,
  title: "Cards/Sidebar Course Card",
  argTypes: {
    title: {
      control: "text",
      description: "The name of the lesson.",
    },
    duration: {
      control: "number",
      description: "How much time the lesson takes, in minutes.",
    },
    inProgress: {
      control: "boolean",
      description: "Is the lesson in progress?",
    },
    isFinished: {
      control: "boolean",
      description: "Is the lesson already completed?",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarCourseCard>;

export const Common: Story = {
  name: "Basic Sidebar Course Card",
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Beginner Forex Tutorial: What is Forex?",
    duration: 5,
    inProgress: false,
    isFinished: false,
    isPending: true,
  },
};
