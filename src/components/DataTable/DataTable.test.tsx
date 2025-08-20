import { render, screen } from "@testing-library/react";
import { DataTable } from "./DataTable";

const columns = [{ key: "name", label: "Name" }];
const data = [{ name: "Alice" }, { name: "Bob" }];

describe("DataTable", () => {
  it("renders table headers", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("renders data rows", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});
