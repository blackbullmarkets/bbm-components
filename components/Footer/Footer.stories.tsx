import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Common: Story = {
  args: {},
};
