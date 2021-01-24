import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Form from "../components/Form/Form";

describe("testing form component", () => {
  describe("testing input changes", () => {
    it("should insert input values", () => {
      render(<Form />);

      const amount = screen.getByLabelText(/informe o valor da venda\*/i);
      const installments = screen.getByLabelText(/em quantas parcelas\*/i);
      const mdr = screen.getByLabelText(/informe o percentual de mdr\*/i);

      fireEvent.change(amount, { target: { value: "R$150,00" } });
      expect(amount.value).toBe("R$150,00");

      fireEvent.change(installments, { target: { value: 3 } });
      expect(installments.value).toBe("3");

      fireEvent.change(mdr, { target: { value: 4 } });
      expect(mdr.value).toBe("4");
    });
  });

  describe("testing checkboxes", () => {
    it("should test if the checkboxes are unchecked", () => {
      render(<Form />);

      const checkbox1 = screen.getByTestId("input-checkbox-1");
      const checkbox15 = screen.getByTestId("input-checkbox-15");

      expect(checkbox1).not.toBeChecked();
      expect(checkbox15).not.toBeChecked();
    });

    it("should test if the checkboxes can be checked and unchecked", () => {
      render(<Form />);

      const checkbox = screen.getByTestId("input-checkbox-1");

      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(true);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toEqual(false);
    });
  });

  describe("testing validations and if the errors messages appears", () => {
    it("should test the amount input inserting nothing", () => {
      render(<Form />);

      const amount = screen.getByLabelText(/informe o valor da venda\*/i);

      fireEvent.change(amount, { target: { value: 0 } });
      fireEvent.focusOut(amount);
      expect(screen.getByText(/não pode ser zero reais/i)).toBeInTheDocument();
    });

    it("should test the amount input inserting more the 1 million", () => {
      render(<Form />);

      const amount = screen.getByLabelText(/informe o valor da venda\*/i);

      fireEvent.change(amount, { target: { value: 1000000.01 } });
      fireEvent.focusOut(amount);
      expect(
        screen.getByText(/valor máximo de um milhão/i)
      ).toBeInTheDocument();
    });

    it("should test the installments input inserting negative number", () => {
      render(<Form />);

      const installments = screen.getByLabelText(/em quantas parcelas\*/i);

      fireEvent.change(installments, { target: { value: -50 } });
      fireEvent.focusOut(installments);
      expect(
        screen.getByText(/valor mínimo de 1 parcela/i)
      ).toBeInTheDocument();
    });

    it("should test the installments input inserting more the 12 quotes", () => {
      render(<Form />);

      const installments = screen.getByLabelText(/em quantas parcelas\*/i);

      fireEvent.change(installments, { target: { value: 20 } });
      fireEvent.focusOut(installments);
      expect(
        screen.getByText(/valor máximo de 12 parcelas/i)
      ).toBeInTheDocument();
    });
  });

  describe("testing to see if input allows letters to be inputted", () => {
    it("should not allow letters", () => {
      render(<Form />);

      const amount = screen.getByLabelText(/informe o valor da venda\*/i);
      const installments = screen.getByLabelText(/em quantas parcelas\*/i);
      const mdr = screen.getByLabelText(/informe o percentual de mdr\*/i);

      expect(amount.value).toBe("");
      fireEvent.change(amount, { target: { value: "hash" } });
      expect(amount.value).toBe("");

      expect(installments.value).toBe("");
      fireEvent.change(installments, { target: { value: "hash" } });
      expect(installments.value).toBe("");

      expect(mdr.value).toBe("");
      fireEvent.change(mdr, { target: { value: "hash" } });
      expect(mdr.value).toBe("");
    });
  });
});
