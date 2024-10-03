import type { Meta, StoryObj } from "@storybook/react";
import CourseCard from "./CourseCard";

const meta: Meta<typeof CourseCard> = {
  component: CourseCard,
  title: "Cards/Course Card",
  argTypes: {
    level: {
      control: "number",
      description:
        "A number between 1 and 3 to show if the course is for beginners, intermediates or advanced.",
    },
    courseTitle: {
      control: "text",
      description: "The title of this course.",
    },
    featuredImage: {
      control: "text",
      description: "The image to show in this card.",
    },
    excerpt: {
      control: "text",
      description: "A preview of the content in this course.",
    },
    lessonNumber: {
      control: "number",
      description: "The number of this course among the lesson.",
    },
    lessonTotal: {
      control: "number",
      description: "The total number of courses in this lesson.",
    },
    lessonDuration: {
      control: "number",
      description: "The time it takes to finnish this lesson.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CourseCard>;

const storyArgs = {
  level: 2,
  courseTitle: "Candlestick Patters",
  courseLink: "https://blackbull.com",
  featuredImage: "/images/course_thumbnail.png",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  lessonNumber: 1,
  lessonTotal: 5,
  lessonDuration: 4,
};

export const Common: Story = {
  name: "Common",
  parameters: {
    layout: "centered",
  },
  args: storyArgs,
};
