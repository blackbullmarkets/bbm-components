import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";
import Image from "next/image";

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Common: Story = {
  args: {},
};
