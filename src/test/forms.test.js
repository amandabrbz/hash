import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Box from "../components/Box/Box";

describe("calculating", () => {
  it("should insert input values", () => {
    render(<Box />);

    const amount = screen.getByLabelText(/informe o valor da venda\*/i);
    const installments = screen.getByLabelText(/em quantas parcelas\*/i);
    const mdr = screen.getByLabelText(/informe o percentual de mdr\*/i);

    fireEvent.change(amount, { target: { value: "R$150.00" } });
    expect(amount.value).toBe("R$150.00");

    fireEvent.change(installments, { target: { value: 3 } });
    expect(installments.value).toBe("3");

    fireEvent.change(mdr, { target: { value: 4 } });
    expect(mdr.value).toBe("4");

    fireEvent.blur(mdr);
  });
});
