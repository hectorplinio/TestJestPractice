// Depending on what form it has to do one function or another

const { checkForm } = require("../../calculator/integrationCalculator");

describe("Calculator Area", () => {
  test("Check name of Square and do function", () => {
    const form = checkForm("Square", 5);
    expect(form).toBe(25);
  });
  test("Check name of Rectangle and do function", () => {
    const form = checkForm("Rectangle", 4, 8);
    expect(form).toBe(32);
  });
  test("Check name of Triangle and do function", () => {
    const form = checkForm("Triangle", 12, 20);
    expect(form).toBe(120);
  });
  test("Check name of empy", () => {
    const form = checkForm("");
    expect(form).toBe("Form is empty");
  });
  test("Check name of null", () => {
    const form = checkForm("Hello");
    expect(form).toBeNull();
  });
});
