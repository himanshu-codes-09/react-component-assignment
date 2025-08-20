import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    columns: [{ key: "name", label: "Name" }],
    data: [{ name: "Alice" }, { name: "Bob" }],
  },
};
