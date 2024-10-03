import type { Meta, StoryObj } from "@storybook/react";
import CourseCardBlock from "./CourseCardBlock";

const meta: Meta<typeof CourseCardBlock> = {
  component: CourseCardBlock,
  title: "Block/Course Card Block",
};

export default meta;

type Story = StoryObj<typeof CourseCardBlock>;

const args = {
  blockTitle: "Learn to trade Forex",
  lessonList: [
    {
      level: 1,
      courseTitle: "Learn Forex",
      courseLink: "https://blackbull.com",
      featuredImage: "string",
      excerpt: "string",
      lessonNumber: 2,
      lessonTotal: 10,
      lessonDuration: 5,
    },
    {
      level: 2,
      courseTitle: "Learn Forex",
      courseLink: "https://blackbull.com",
      featuredImage: "string",
      excerpt: "string",
      lessonNumber: 2,
      lessonTotal: 10,
      lessonDuration: 5,
    },
    {
      level: 3,
      courseTitle: "Learn Forex",
      courseLink: "https://blackbull.com",
      featuredImage: "string",
      excerpt: "string",
      lessonNumber: 2,
      lessonTotal: 10,
      lessonDuration: 5,
    },
  ],
};

export const Common: Story = {
  name: "Common",
  parameters: {
    layout: "centered",
  },
  args,
};
