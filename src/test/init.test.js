import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("first rendering", () => {
  test("should render box", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /simule sua antecipação/i,
      })
    );
  });
});
