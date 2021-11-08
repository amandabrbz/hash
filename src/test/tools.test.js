import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import formatCurrencyValue from "../helpers/formatCurrencyValue";

describe("testing tools methods", () => {
  describe("testing formatCurrencyValue function", () => {
    it("should format string into a currency format", () => {
      const formatValue = formatCurrencyValue(1000);

      expect(formatValue).toBe("R$ 10,00");
    });

    it("should format string into a currency format decimal", () => {
      const formatDecimal = formatCurrencyValue(90);
      const formatCent = formatCurrencyValue(9);

      expect(formatDecimal).toBe("R$ 0,90");
      expect(formatCent).toBe("R$ 0,09");

    });

    it("should format string into a currency format more than a thousand", () => {
      const thousand = formatCurrencyValue(900000);

      expect(thousand).toBe("R$ 9.000,00");
    });
  });
});
