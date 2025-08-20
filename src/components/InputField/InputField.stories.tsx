import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
  },
};

export const Invalid: Story = {
  args: {
    label: "Password",
    type: "password",
    invalid: true,
    errorMessage: "Password required",
  },
};
