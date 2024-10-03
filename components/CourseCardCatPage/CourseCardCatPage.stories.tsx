import type { Meta, StoryObj } from "@storybook/react";
import CourseCardCatPage from "./CourseCardCatPage";

const meta: Meta<typeof CourseCardCatPage> = {
  component: CourseCardCatPage,
  title: "Cards/Course Card Category Page",
  argTypes: {
    level: {
      control: "number",
    },
    categoryDescription: {
      control: "text",
    },
    categoryTitle: {
      control: "text",
    },
    featuredImage: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CourseCardCatPage>;

export const Common: Story = {
  name: "Common",
  parameters: {
    layout: "centered",
  },
  args: {
    level: 1,
    categoryDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categoryTitle: "Beginner Forex Tutorials",
    featuredImage: "/images/course_thumbnail.png",
  },
};
