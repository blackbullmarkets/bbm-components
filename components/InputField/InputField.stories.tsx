import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  argTypes: {
    fieldID: {
      control: "text",
      description: "A string of text to identify this field.",
    },
    label: {
      control: "text",
      description: "What to show in the input field as a placeholder.",
    },
    validatingText: {
      control: "text",
      description:
        "If this text needs to process a validation, add a text to show under the field while validating is in motion.",
    },
    errorText: {
      control: "text",
      description: "A text to show once an error is returned.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Common: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    fieldID: "email",
    label: "Email",
    validatingText: "We're validating your data...",
    isValidating: true,
    errorText: "Something went wrong. Try again...",
    isError: true,
    placeholder: "name@example.com",
  },
};
