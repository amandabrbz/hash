import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import formatIntoCurrency from "../helpers/tools";

describe("testing tools methods", () => {
  describe("testing formartString function", () => {
    it("should format string into a currency format", () => {
      const formatValue = formatIntoCurrency(1000);

      expect(formatValue).toBe("R$ 10,00");
    });

    it("should format string into a currency format decimal", () => {
      const formatDecimal = formatIntoCurrency(90);
      const formatCent = formatIntoCurrency(9);

      expect(formatDecimal).toBe("R$ 0,90");
      expect(formatCent).toBe("R$ 0,09");

    });
  });
});
