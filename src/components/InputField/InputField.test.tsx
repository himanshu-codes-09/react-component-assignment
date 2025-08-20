import { render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders with label", () => {
    render(<InputField label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("shows error message when invalid", () => {
    render(<InputField label="Password" invalid errorMessage="Required" />);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
