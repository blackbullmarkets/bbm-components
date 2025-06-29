"use client";

import type { Meta, StoryObj } from "@storybook/react";
import QuizBlock from "./QuizBlock";
import LinkButton from "@/components/LinkButton/LinkButton";

const meta: Meta<typeof QuizBlock> = {
  component: QuizBlock,
  argTypes: {
    quizQuestion: {
      control: "text",
    },
    options: {
      control: "object",
    },
    nextButton: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof QuizBlock>;

const args = {
  quizQuestion: "What's the deal with PIPS?",
  nextButton: (
    <LinkButton
      href="http://blackbull.com"
      variant="success"
      size="lg"
      label="Next Lesson"
      bold
    />
  ),
  options: [
    {
      answer: "0 - An answer, which is not the right one.",
      isRightAnswer: false,
      selected: false,
      variant: "unselected",
    },
    {
      answer: "1 - The right answer.",
      isRightAnswer: true,
      selected: false,
      variant: "unselected",
    },
    {
      answer: "2 - Another possible answer, not the right one.",
      isRightAnswer: false,
      selected: false,
      variant: "unselected",
    },
    {
      answer: "3 - The last option, but not the correct.",
      isRightAnswer: false,
      selected: false,
      variant: "unselected",
    },
  ],
};

export const Common: Story = {
  args,
};
