import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

describe("first rendering", () => {
  it("should render box", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /simule sua antecipação/i,
      })
    ).toBeInTheDocument();
  });
});
