import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Results from "../components/Results/Results";

describe("testing box component", () => {
  describe("should show the welcome message only", () => {
    it("should show title", () => {
      render(<Results />);

      expect(screen.getByText(/você receberá:/i)).toBeInTheDocument();
      expect(screen.queryByText(/digite os campos obrigatórios/i)).toBeNull();
      expect(screen.queryByText(/amanhã:/i)).toBeNull();
    });
  });
});
