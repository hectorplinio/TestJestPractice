// Calculate the area of ​​a square 5 x 5 and the result will be 25
// Calculate the area of ​​a square 4 x 4 and the result will be 16
// Calculate the area of ​​a rectangle 2 x 4 and the result will be 8
// Calculate the area of ​​a triangle with height 12 and base 20 and the result will be 120

const CalculatorArea = require("../../calculator/calculatorArea");

describe("Areas calculator", () => {
  const calculatorArea = new CalculatorArea();
  // Calculate the area of ​​a square 5 x 5 and the result will be 25
  it("Calculate the area of a square 5 x 5 and the result will be 25", () => {
    const result = calculatorArea.calculatorAreaSquare(5);
    expect(result).toBe(25);
  });

  it("Calculate the area of a square 4 x 4 and the result will be 16", () => {
    const result = calculatorArea.calculatorAreaSquare(4);
    expect(result).toBe(16);
  });
  it("Calculate the area of a rectangle 2 x 4 and the result will be 8", () => {
    const result = calculatorArea.calculatorAreaRectangle(2, 4);
    expect(result).toBe(8);
  });
  it("Calculate the area of a triangle with height 12 and base 20 and the result will be 120", () => {
    const result = calculatorArea.calculatorAreaTriangle(12, 20);
    expect(result).toBe(120);
  });
  test("Only pass 1 parameter", () => {
    const form = calculatorArea.calculatorAreaTriangle(2);
    expect(form).toBeNull();
  });
  test("Only pass 1 parameter", () => {
    const form = calculatorArea.calculatorAreaRectangle(2);
    expect(form).toBeNull();
  });
  test("Only pass 1 parameter", () => {
    const form = calculatorArea.calculatorAreaSquare();
    expect(form).toBeNull();
  });
});
